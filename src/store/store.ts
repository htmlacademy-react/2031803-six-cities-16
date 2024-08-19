import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import offerReducer from './reducers/offer/offer.ts';
import cityReducer from './reducers/city/city.ts';
import authReducer from './reducers/auth/auth.ts';

export const store = configureStore({
  reducer: {
    offer: offerReducer,
    city: cityReducer,
    auth: authReducer
  }
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
