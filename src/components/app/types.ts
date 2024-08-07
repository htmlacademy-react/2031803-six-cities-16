import {OfferMock} from '../../mocks/types.ts';

export enum AppRoute {
  Index = '/',
  Favorites = '/favorites',
  Offers = '/offer/:offerID',
  Login = '/login',
  Unknown = '*'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH'
}
export interface Context {
  authStatus: AuthStatus;
  offers: OfferMock[];
  handleFavorite: (offerID: string) => void;
}
