import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {LoginFormData, OfferDetailed, OfferMain, Review, UserAuthResponse} from '../../../types.ts';
import {RootState} from '../../store.ts';
import {selectAccessToken} from '../auth/auth.ts';

interface makeOfferFavoriteArgs {
  id: string;
  favoriteStatus: number;
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
          headers.set('X-Token', token);
        }
        return headers;
      },
    }),
  tagTypes: ['Offers'],
  endpoints: (builder) => ({
    getOffers: builder.query<OfferMain[], void>({
      query: () => '/offers',
      providesTags: ['Offers']
    }),
    getOffersNearby: builder.query<OfferMain[], string>({
      query: (id: string) => `/offers/${id}/nearby`,
      providesTags: ['Offers']
    }),
    getOffer: builder.query<OfferDetailed, string>({
      query: (id: string) => `/offers/${id}`,
      providesTags: ['Offers']
    }),
    getOfferReviews: builder.query<Review[], string>({
      query: (id: string) => `/comments/${id}`
    }),
    getFavorites: builder.query<OfferMain[], void>({
      query: () => '/favorite',
      providesTags: ['Offers']
    }),
    getAuthStatus: builder.query<UserAuthResponse, void>({
      query: () => '/login'
    }),
    changeOfferFavorite: builder.mutation<void, makeOfferFavoriteArgs>({
      query: ({ id, favoriteStatus }: makeOfferFavoriteArgs)=> ({
        url: `favorite/${id}${favoriteStatus}`,
        method: 'POST',
      })
    }),
    makeOfferFavorite: builder.mutation<void, makeOfferFavoriteArgs>({
      query: ({ id, favoriteStatus }: makeOfferFavoriteArgs)=> ({
        url: `favorite/${id}/${favoriteStatus}`,
        method: 'POST',
      }),
      invalidatesTags: ['Offers']
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
  useMakeLogoutMutation,
  useMakeOfferFavoriteMutation
} = apiSlice;
