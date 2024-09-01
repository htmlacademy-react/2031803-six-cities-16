import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  HTTPMethod,
  LoginFormData,
  OfferDetailed,
  OfferMain,
  Review,
  ReviewPostRequest,
  UserAuthResponse
} from '../../../types.ts';
import {RootState} from '../../store.ts';
import {selectAccessToken} from '../auth/auth.ts';

interface makeOfferFavoriteArgs {
  id: string;
  favoriteStatus: number;
}

interface makeReviewArgs {
  id: string;
  body: ReviewPostRequest;
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
  tagTypes: ['Offers', 'Comments'],
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
      query: (id: string) => `/comments/${id}`,
      providesTags: ['Comments']
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
        method: HTTPMethod.Post,
      })
    }),
    makeOfferFavorite: builder.mutation<void, makeOfferFavoriteArgs>({
      query: ({ id, favoriteStatus }: makeOfferFavoriteArgs)=> ({
        url: `favorite/${id}/${favoriteStatus}`,
        method: HTTPMethod.Post,
      }),
      invalidatesTags: ['Offers']
    }),
    makeAuth: builder.mutation<UserAuthResponse, LoginFormData>({
      query: (body)=> ({
        url: 'login',
        method: HTTPMethod.Post,
        body
      })
    }),
    makeLogout: builder.mutation<void, void>({
      query: ()=> ({
        url: 'logout',
        method: HTTPMethod.Delete,
      })
    }),
    makeReview: builder.mutation<string, makeReviewArgs>(
      {
        query: ({ id, body}) => ({
          url: `/comments/${id}`,
          method: HTTPMethod.Post,
          body
        }),
        invalidatesTags: ['Comments']
      }
    )})
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
  useMakeOfferFavoriteMutation,
  useMakeReviewMutation
} = apiSlice;
