import React from 'react';
import {Offer} from '../../mocks/types.ts';
import {v4 as uuidv4} from 'uuid';
import Card from '../card/card.tsx';

interface CardListProps {
  offers: Offer[];
}

const CardList = ({ offers }: CardListProps): React.JSX.Element => (
  <div className="cities__places-list places__list tabs__content">
    {
      offers?.map((offer) => (
        <Card offer={offer} key={uuidv4()}/>
      ))
    }
  </div>
);

export default CardList;
