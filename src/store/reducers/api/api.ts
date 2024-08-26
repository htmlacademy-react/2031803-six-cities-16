import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {OfferDetailed, OfferMain, Review} from '../../../types.ts';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery(
    { baseUrl: 'https://16.design.htmlacademy.pro/six-cities' }),
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
    })
    ,
    getFavorites: builder.query<OfferMain[], void>({
      query: () => '/favorites'
    })
  })
});

export const { useGetOffersQuery, useGetOfferReviewsQuery, useGetOfferQuery, useGetOffersNearbyQuery, useGetFavoritesQuery } = apiSlice;
