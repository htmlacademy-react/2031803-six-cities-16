import React from 'react';
import OfferInfo from '../components/offer-info/offer-info.tsx';
import OffersNearList from '../components/offer-info/offers-near-list.tsx';
import {useParams} from 'react-router-dom';

const OfferPage = (): React.JSX.Element => {
  const { offerID } = useParams();
  return (
    <main className="page__main page__main--offer">
      <OfferInfo offerID={offerID ?? ''}/>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <OffersNearList/>
        </section>
      </div>
    </main>
  );
};

export default OfferPage;

