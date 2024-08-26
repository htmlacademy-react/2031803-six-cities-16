import {OfferMain} from '../../types.ts';

export enum CardType {
  Main = 'cities',
  Favorite = 'favorites',
  Offer = 'near-places'
}

export interface CardProps {
  offer: OfferMain;
  cardType: CardType;
  handleActiveCardChoice?: (id?: string) => void;
}
