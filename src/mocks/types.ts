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

export interface Offer {
  id: string;
  title: string;
  type: HousingType;
  price: number;
  city: {
    name: string;
    location: Location;
  };
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}

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
