import React from 'react';
import {OfferMain} from '../../types.ts';
import {v4 as uuidv4} from 'uuid';
import Card from '../card/card.tsx';
import {CardType} from '../card/types.ts';
import {Link} from "react-router-dom";

interface FavoritesListProps {
  offers: OfferMain[];
}

const FavoritesList = ({ offers }: FavoritesListProps): React.JSX.Element => {
  const cities = Array.from(new Set(offers.map((offer: OfferMain) => offer.city?.name)));
  return (
    <ul className="favorites__list">
      {
        cities.map((city) => (
          <li key={uuidv4()} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to="#">
                  <span>{city}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {
                offers.filter((offer) => offer.isFavorite && offer.city?.name === city)
                  .map((cityOffer) => <Card offer={cityOffer} cardType={CardType.Favorite} key={uuidv4()}/>)
              }
            </div>
          </li>
        ))
      }
    </ul>
  );
};

export default FavoritesList;
