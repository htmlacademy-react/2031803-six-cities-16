import {configureStore} from '@reduxjs/toolkit';
import offerReducer from './reducers/offer/offer.ts';
import cityReducer from './reducers/city/city.ts';
import authReducer from './reducers/auth/auth.ts';
import {apiSlice} from './reducers/api/api.ts';

export const store = configureStore({
  reducer: {
    offer: offerReducer,
    city: cityReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
