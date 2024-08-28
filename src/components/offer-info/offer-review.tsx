import React from 'react';
import {Review} from '../../types.ts';

interface OfferReviewProps {
  review: Review;
}

const OfferReview = ({ review }: OfferReviewProps): React.JSX.Element => {
  const { date, comment, user, rating} = review;
  const formattedDate = new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} style={{width: '54px', height: '54px'}}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating / 5 * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{formattedDate}</time>
      </div>
    </li>
  );
};

export default OfferReview;
