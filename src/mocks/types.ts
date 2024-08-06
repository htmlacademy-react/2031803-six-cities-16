export enum HousingType {
  Apartment = 'Apartment',
  Room = 'Room',
  House = 'House',
  Hotel = 'Hotel'
}

export interface Host {
  avatarUrl: string;
  name: string;
  isPro: boolean;
}

export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export interface CityDetailed {
  name: City;
  location: Location;
}

export interface OfferMain {
  id: string;
  title: string;
  type: HousingType;
  price: number;
  city: CityDetailed;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

type OfferDetails = Omit<OfferMain, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
};

export type OfferMock = OfferMain & OfferDetails;

export interface User {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface Review {
  id: number;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

export interface Reviews {
  [offerId: string]: Review[];
}
