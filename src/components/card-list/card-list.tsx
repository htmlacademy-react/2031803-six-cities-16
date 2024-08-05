import React, {useState} from 'react';
import {OfferMock} from '../../mocks/types.ts';
import Card from '../card/card.tsx';
import {CardType} from '../card/types.ts';

interface CardListProps {
  offers: OfferMock[];
  cardType?: CardType;
}

const CardList = ({ offers, cardType = CardType.Main }: CardListProps): React.JSX.Element => {
  const [, setActiveCardID] = useState<string | null>(null);
  const handleActiveCardChoice = (id?: string): void => {
    setActiveCardID(id ?? null);
  };

  return (
    <div className={`${cardType === CardType.Offer ? 'near-places__list' : 'cities__places-list tabs__content'} places__list`}>
      {
        offers?.map((offer) => (
          <Card cardType={cardType} offer={offer} handleActiveCardChoice={handleActiveCardChoice} key={offer.id}/>
        ))
      }
    </div>
  );
};

export default CardList;
