import React, {useContext, useState} from 'react';
import OfferForm from './offer-form.tsx';
import OfferReview from './offer-review.tsx';
import {Review, Reviews} from '../../mocks/types.ts';
import {reviewsMocks} from '../../mocks/index.ts';
import {AppContext} from '../app/app.tsx';
import {AuthStatus} from '../app/types.ts';

interface OfferReviewsListProps {
  offerID: keyof Reviews;
}

const OfferReviewsList = ({ offerID }: OfferReviewsListProps): React.JSX.Element => {
  const [reviews] = useState(reviewsMocks[offerID]);
  const { authStatus} = useContext(AppContext);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review: Review) => <OfferReview review={review} key={review.id}/>)}
      </ul>
      {authStatus === AuthStatus.Auth && <OfferForm/>}
    </section>
  );
};

export default OfferReviewsList;
