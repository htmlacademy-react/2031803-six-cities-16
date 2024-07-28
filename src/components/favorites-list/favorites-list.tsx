import React from 'react';
import {Offer} from '../../mocks/types.ts';
import {v4 as uuidv4} from 'uuid';
import Card from '../card/card.tsx';

interface FavoritesListProps {
  offers: Offer[];
}

const FavoritesList = ({ offers }: FavoritesListProps): React.JSX.Element => {
  const cities = Array.from(new Set(offers.map((offer: Offer) => offer.city?.name)));
  return (
    <ul className="favorites__list">
      {
        cities.map((city) => (
          <li key={uuidv4()} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {
                offers.filter((offer) => offer.isFavorite && offer.city?.name === city)
                  .map((cityOffer) => <Card offer={cityOffer} isFavoritesPage key={uuidv4()}/>)
              }
            </div>
          </li>
        ))
      }
    </ul>
  );
};

export default FavoritesList;