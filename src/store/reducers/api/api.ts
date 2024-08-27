import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {LoginFormData, OfferDetailed, OfferMain, Review, UserAuthResponse} from '../../../types.ts';
import {RootState} from '../../store.ts';
import {selectAccessToken} from '../auth/auth.ts';

interface makeOfferFavoriteArgs {
  id: string;
  isFavorite: boolean;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery(
    {
      baseUrl: 'https://16.design.htmlacademy.pro/six-cities',
      timeout: 5000,
      prepareHeaders: (headers, { getState }) => {
        const state = getState() as RootState;
        const token = selectAccessToken(state);
        if (token) {
          headers.set('X-Token', 'ZWxpbmE1MDUwNTA1MUB5YW5kZXgucnU=');
        }
        return headers;
      },
    }),
  endpoints: (builder) => ({
    getOffers: builder.query<OfferMain[], void>({
      query: () => '/offers'
    }),
    getOffersNearby: builder.query<OfferMain[], string>({
      query: (id: string) => `/offers/${id}/nearby`
    }),
    getOffer: builder.query<OfferDetailed, string>({
      query: (id: string) => `/offers/${id}`
    }),
    getOfferReviews: builder.query<Review[], string>({
      query: (id: string) => `/comments/${id}`
    }),
    getFavorites: builder.query<OfferMain[], void>({
      query: () => '/favorites'
    }),
    getAuthStatus: builder.query<UserAuthResponse, void>({
      query: () => '/login'
    }),
    changeOfferFavorite: builder.mutation<void, makeOfferFavoriteArgs>({
      query: ({ id, isFavorite }: makeOfferFavoriteArgs)=> ({
        url: `favorite/${id}${isFavorite}`,
        method: 'POST',
      })
    }),
    makeOfferFavorite: builder.mutation<void, makeOfferFavoriteArgs>({
      query: ({ id, isFavorite }: makeOfferFavoriteArgs)=> ({
        url: `favorite/${id}${isFavorite}`,
        method: 'POST',
      })
    }),
    makeAuth: builder.mutation<UserAuthResponse, LoginFormData>({
      query: (body)=> ({
        url: 'login',
        method: 'POST',
        body
      })
    }),
    makeLogout: builder.mutation<void, void>({
      query: ()=> ({
        url: 'logout',
        method: 'DELETE',
      })
    }),
  })
});

export const {
  useGetOffersQuery,
  useGetOfferReviewsQuery,
  useGetOfferQuery,
  useGetOffersNearbyQuery,
  useGetFavoritesQuery,
  useGetAuthStatusQuery,
  useMakeAuthMutation,
  useMakeLogoutMutation
} = apiSlice;
