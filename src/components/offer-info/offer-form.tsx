import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {ErrorMessage, FormFieldType, OfferErrorData, OfferFormData, ReviewLength} from './types.ts';
import {useMakeReviewMutation} from '../../store/reducers/api/api.ts';

const grades = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

interface OfferFormProps {
  offerId: string;
}

const OfferForm = ({ offerId }: OfferFormProps): React.JSX.Element => {
  const [formData, setFormData] = useState<OfferFormData>({review: '', rating: null});
  const [errorData, setErrorData] = useState<OfferErrorData>({review: ErrorMessage.Review, rating: ErrorMessage.Rating});
  const [isErrorDisplayed, setIsErrorDisplayed] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [makeReview, {isError, isLoading}] = useMakeReviewMutation();

  const formInputHandler = (field: FormFieldType, evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    const input = evt.target.value;
    if (field === FormFieldType.Review) {
      setFormData({...formData, review: input});
      if (input.length < Number(ReviewLength.Min) || input.length > Number(ReviewLength.Max)) {
        setErrorData({...errorData, review: ErrorMessage.Review});
      } else {
        setErrorData({...errorData, review: ErrorMessage.NoError});
      }
    } else if (field === FormFieldType.Rating) {
      setFormData({...formData, rating: Number(evt.target.value)});
      setErrorData({...errorData, rating: ErrorMessage.NoError});
    }
  };

  useEffect(() => {
    if (errorData.review || errorData.rating) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [errorData.review, errorData.rating]);

  const submitHandler = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    makeReview({ id: offerId, body: {comment: formData.review, rating: formData.rating as number}})
      .unwrap()
      .then(() => {
        setFormData({...formData, review: '', rating: null});
        setErrorData({...errorData, review: ErrorMessage.Review, rating: ErrorMessage.Rating});
        setIsErrorDisplayed(false);
      });
  };

  const blurHandler = (): void => {
    setIsErrorDisplayed(true);
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={submitHandler} onBlur={blurHandler}>
      <fieldset disabled={isLoading} style={{ border: 'none'}}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {grades.map((grade, idx) =>
            (
              <React.Fragment key={uuidv4()}>
                <input className="form__rating-input visually-hidden" name="rating" value={5 - idx}
                  id={`${5 - idx}-stars`}
                  onChange={(evt) => formInputHandler(FormFieldType.Rating, evt)}
                  checked={formData.rating === 5 - idx}
                  type="radio"
                />
                <label htmlFor={`${5 - idx}-stars`} className="reviews__rating-label form__rating-label" title={grade}>
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </React.Fragment>
            )
          )}
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" value={formData.review}
          onChange={(evt) => formInputHandler(FormFieldType.Review, evt)}
          placeholder="Tell how was your stay, what you like and what can be improved"
        >
        </textarea>
        <div className="reviews__button-wrapper">
          {isError &&
            <p className="reviews__help" style={{color: 'red', fontSize: 'large'}}>
              {ErrorMessage.Server}
            </p>}
          {isErrorDisplayed && !isFormValid ?
            <p className="reviews__help" style={{color: 'red'}}>
              {errorData.review} <br/>
              {errorData.rating}
            </p>
            :
            !isError &&
            <p className="reviews__help">
              To submit review please make sure to set <span className="reviews__star">rating</span> and describe
              your stay with at least <b className="reviews__text-amount">50 characters</b>.
            </p>}
          <button className="reviews__submit form__submit button" type="submit"
            disabled={!isFormValid || isLoading}
          >Submit
          </button>
        </div>
      </fieldset>

    </form>
  );
};


export default OfferForm;
