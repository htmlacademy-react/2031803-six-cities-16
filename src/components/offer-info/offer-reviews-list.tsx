import React from 'react';
import OfferForm from './offer-form.tsx';
import OfferReview from './offer-review.tsx';
import {Review} from '../../types.ts';
import {useGetOfferReviewsQuery} from '../../store/reducers/api/api.ts';
import {MAX_VISIBLE_REVIEWS_PER_PAGE} from '../../const.ts';
import {useAppSelector} from '../../hooks/hooks.ts';
import {selectIsAuth} from '../../store/reducers/auth/auth.ts';

interface OfferReviewsListProps {
  offerID: string;
}

const OfferReviewsList = ({ offerID }: OfferReviewsListProps): React.JSX.Element => {
  const userAuth = useAppSelector(selectIsAuth);
  const { data: reviews } = useGetOfferReviewsQuery(offerID);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews?.length ?? 0}</span></h2>
      {reviews &&
        <ul className="reviews__list">
          {reviews
            .toSorted((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
            .slice(0, MAX_VISIBLE_REVIEWS_PER_PAGE)
            .map((review: Review) => <OfferReview review={review} key={review.id}/>)}
        </ul>}
      {userAuth && <OfferForm offerId={offerID}/>}
    </section>
  );
};

export default OfferReviewsList;
