import {Offer} from '../../mocks/types.ts';

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
  offers: Offer[];
  handleFavorite: (offerID: string) => void;
}
