import React from 'react';
import OfferForm from './offer-form.tsx';
import OfferReview from './offer-review.tsx';
import {Review} from '../../types.ts';
import {useAppSelector} from '../../hooks/hooks.ts';
import {AuthStatus, selectAuthStatus} from '../../store/reducers/auth/auth.ts';
import {useGetOfferReviewsQuery} from '../../store/reducers/api/api.ts';

interface OfferReviewsListProps {
  offerID: string;
}

const OfferReviewsList = ({ offerID }: OfferReviewsListProps): React.JSX.Element => {
  const { data: reviews } = useGetOfferReviewsQuery(offerID);
  const authStatus = useAppSelector(selectAuthStatus);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews?.length ?? 0}</span></h2>
      {reviews &&
        <ul className="reviews__list">
          {reviews.map((review: Review) => <OfferReview review={review} key={review.id}/>)}
        </ul>}
      {authStatus === AuthStatus.Auth && <OfferForm/>}
    </section>
  );
};

export default OfferReviewsList;
