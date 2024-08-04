import React from 'react';
import OfferInfo from '../components/offer-info/offer-info.tsx';
import {useParams} from 'react-router-dom';

const OfferPage = (): React.JSX.Element => {
  const { offerID } = useParams();
  return (
    <main className="page__main page__main--offer">
      <OfferInfo offerID={offerID ?? ''}/>
    </main>
  );
};

export default OfferPage;
