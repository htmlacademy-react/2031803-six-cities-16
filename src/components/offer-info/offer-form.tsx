import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

enum ErrorMessage {
  Review = 'The review text must contain from 50 to 300 characters.',
  Rating = 'The rating must be chosen',
  NoError = ''
}

interface OfferFormData {
  review: string;
  rating: null | number;
}

interface OfferErrorData {
  review: ErrorMessage.Review | ErrorMessage.NoError;
  rating: ErrorMessage.Rating | ErrorMessage.NoError;
}

const grades = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

const OfferForm = (): React.JSX.Element => {
  const [formData, setFormData] = useState<OfferFormData>({review: '', rating: null});
  const [errorData, setErrorData] = useState<OfferErrorData>({review: ErrorMessage.Review, rating: ErrorMessage.Rating});
  const [isErrorDisplayed, setIsErrorDisplayed] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const textInputHandler = (evt: ChangeEvent<HTMLTextAreaElement>): void => {
    const input = evt.target.value;
    setFormData({...formData, review: input});

    if (input.length < 50 || input.length > 300) {
      setErrorData({...errorData, review: ErrorMessage.Review});
    } else {
      setErrorData({...errorData, review: ErrorMessage.NoError});
    }
  };

  const ratingHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setFormData({...formData, rating: Number(evt.target.value)});
    setErrorData({...errorData, rating: ErrorMessage.NoError});
  };

  const submitHandler = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    setFormData({...formData, review: ''});
    setErrorData({...errorData, review: ErrorMessage.Review});
    setFormData({...formData, rating: null});
    setErrorData({...errorData, rating: ErrorMessage.Rating});
  };

  const blurHandler = (): void => {
    setIsErrorDisplayed(true);
  };

  useEffect(() => {
    if (errorData.review || errorData.rating) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [errorData.review, errorData.rating]);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={submitHandler} onBlur={blurHandler}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {grades.map((grade, idx) =>
          (
            <React.Fragment key={uuidv4()}>
              <input className="form__rating-input visually-hidden" name="rating" value={5 - idx}
                id={`${5 - idx}-stars`}
                onChange={ratingHandler}
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
        onChange={textInputHandler}
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        {isErrorDisplayed && !isFormValid ?
          <p className="reviews__help" style={{color: 'red'}}>
            {errorData.review} <br/>
            {errorData.rating}
          </p>
          :
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe
            your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>}
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};


export default OfferForm;
