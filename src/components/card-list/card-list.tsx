import React, {useState} from 'react';
import {Offer} from '../../mocks/types.ts';
import Card from '../card/card.tsx';

interface CardListProps {
  offers: Offer[];
}

const CardList = ({ offers }: CardListProps): React.JSX.Element => {
  const [, setActiveCardID] = useState<string | null>(null);
  const handleActiveCardChoice = (id?: string): void => {
    setActiveCardID(id ?? null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers?.map((offer) => (
          <Card offer={offer} handleActiveCardChoice={handleActiveCardChoice} key={offer.id}/>
        ))
      }
    </div>
  );
};

export default CardList;
