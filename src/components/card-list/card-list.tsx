import React from 'react';
import {OfferMain} from '../../types.ts';
import Card from '../card/card.tsx';
import {CardType} from '../card/types.ts';

interface CardListProps {
  offers: OfferMain[];
  cardType?: CardType;
  handleActiveCardChoice?: (id?: string) => void;
}

const CardList = ({ offers, cardType = CardType.Main, handleActiveCardChoice }: CardListProps): React.JSX.Element => (
  <div className={`${cardType === CardType.Offer ? 'near-places__list' : 'cities__places-list tabs__content'} places__list`}>
    {
      offers?.map((offer) => (
        <Card cardType={cardType} offer={offer} handleActiveCardChoice={handleActiveCardChoice} key={offer.id}/>
      ))
    }
  </div>
);

export default CardList;
