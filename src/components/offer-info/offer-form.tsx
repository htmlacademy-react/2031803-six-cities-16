import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const OfferForm = (): React.JSX.Element => {
  const [textInput, setTextInput] = useState('');
  const [textInputError, setTextInputError] = useState('The review text must contain from 50 to 300 characters.');
  const [rating, setRating] = useState<number | null>(null);
  const [ratingError, setRatingError] = useState('The rating must be chosen');
  const [isErrorDisplayed, setIsErrorDisplayed] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const textInputHandler = (evt: ChangeEvent<HTMLTextAreaElement>): void => {
    const input = evt.target.value;
    setTextInput(input);

    if (input.length < 50 || input.length > 300) {
      setTextInputError('The review text must contain from 50 to 300 characters.');
    } else {
      setTextInputError('');
    }
  };

  const ratingHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setRating(Number(evt.target.value));
    setRatingError('');
  };

  const submitHandler = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    setTextInput('');
    setTextInputError('The review text must contain from 50 to 300 characters.');
    setRating(null);
    setRatingError(('The rating must be chosen'));
  };

  const blurHandler = (): void => {
    setIsErrorDisplayed(true);
  };

  useEffect(() => {
    if (textInputError || ratingError) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [textInputError, ratingError]);

  const grades = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

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
                checked={rating === 5 - idx}
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
      <textarea className="reviews__textarea form__textarea" id="review" name="review" value={textInput}
        onChange={textInputHandler}
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        {isErrorDisplayed && !isFormValid ?
          <p className="reviews__help" style={{color: 'red'}}>
            {textInputError} <br/>
            {ratingError}
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
