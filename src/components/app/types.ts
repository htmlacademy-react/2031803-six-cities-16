import {Offer} from '../../mocks/types.ts';

export enum AppRoute {
  Index = '/',
  Favorites = '/favorites',
  Offers = '/offer/:id',
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
}
