import React, {useContext} from 'react';
import {AppContext} from '../app/app.tsx';
import { OfferMock } from '../../mocks/types.ts';
import {v4 as uuidv4} from 'uuid';
import OfferHost from './offer-host.tsx';
import OfferReviewsList from './offer-reviews-list.tsx';
import Map from '../map/map.tsx';
import CardList from '../card-list/card-list.tsx';
import {CardType} from '../card/types.ts';

interface OfferInfoProps {
  offerID: string;
}

const OfferInfo = ({ offerID }: OfferInfoProps): React.JSX.Element => {
  const { offers, handleFavorite } = useContext(AppContext);
  const currentOffer = offers?.find((offer: OfferMock) => offer.id === offerID) as OfferMock;
  const { isPremium, isFavorite, images, price, title, type, rating,
    bedrooms, maxAdults, host, description, goods } = currentOffer;
  const offersNearby = offers.filter((offer) => offer.city.name === currentOffer.city.name && offer.id !== currentOffer.id).slice(0, 3);
  return (
    <>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {images.slice(0, 6).map((image) => (
              <div className="offer__image-wrapper" key={uuidv4()}>
                <img className="offer__image" src={image} alt="Photo studio"/>
              </div>))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {
              isPremium ?
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
                :
                null
            }
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {title}
              </h1>
              <button className={`offer__bookmark-button button ${isFavorite ? 'offer__bookmark-button--active' : ''}`}
                type="button" onClick={() => handleFavorite(offerID)}
              >
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">{isFavorite ? 'In' : 'To'} bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: `${rating / 5 * 100}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {bedrooms} Bedroom{bedrooms > 1 ? 's' : ''}
              </li>
              <li className="offer__feature offer__feature--adults">
              Max {maxAdults} adult{maxAdults > 1 ? 's' : ''}
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {
                  goods.map((good) => (
                    <li key={uuidv4()} className="offer__inside-item">
                      {good}
                    </li>))
                }
              </ul>
            </div>
            <div className="offer__host">
              <OfferHost host={host}/>
              <div className="offer__description">
                <p className="offer__text">
                  {description}
                </p>
              </div>
            </div>
            <OfferReviewsList offerID={offerID}/>
          </div>
        </div>
        <Map cityOffers={offersNearby} className={'offer'}></Map>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <CardList offers={offersNearby} cardType={CardType.Offer}/>
        </section>
      </div>
    </>
  );
};

export default OfferInfo;
