import {OfferMock} from '../../mocks/types.ts';

export enum CardType {
  Main = 'cities',
  Favorite = 'favorites',
  Offer = 'near-places'
}

export interface CardProps {
  offer: OfferMock;
  cardType: CardType;
  handleActiveCardChoice?: (id?: string) => void;
}
