import {HousingType, Offer} from './types.ts';

const offers: Offer[] = [
  {
    id: '1',
    images: Array(10).fill(`https://loremflickr.com/248/152?random=${Math.random() * 100}`) as string[],
    isPremium: true,
    price: Math.floor((Math.random() * 500)),
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    title: 'Beautiful & luxurious apartment at great location',
    description: 'Lorem ipsum',
    type: HousingType.Apartment,
    isFavorite: true,
    rating: 4.2,
    bedrooms: 3,
    maxAdults: 6,
    goods: ['Wifi', 'Heating', 'Kitchen', 'Cable', 'TV'],
    host:
      {
        avatarUrl: `https://loremflickr.com/248/152?random=${ Math.random() * 100}`,
        name: 'Jessica Brown',
        isPro: true
      },
  },
  {
    id: '2',
    images: Array(6).fill(`https://loremflickr.com/248/152?random=${Math.random() * 100}`) as string[],
    isPremium: false,
    price: Math.floor((Math.random() * 500)),
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    title: 'Hotel at great location',
    description: 'Lorem ipsum Lorem ipsum',
    type: HousingType.Hotel,
    isFavorite: true,
    rating: 4.5,
    bedrooms: 2,
    maxAdults: 4,
    goods: ['Wifi', 'Heating', 'Kitchen', 'Cable', 'TV'],
    host:
      {
        avatarUrl: `https://loremflickr.com/248/152?random=${ Math.random() * 100}`,
        name: 'Matthew Davis',
        isPro: false
      },
  },
  {
    id: '3',
    images: Array(8).fill(`https://loremflickr.com/248/152?random=${Math.random() * 100}`) as string[],
    isPremium: false,
    price: Math.floor((Math.random() * 500)),
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    title: 'Room at great location',
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    type: HousingType.Room,
    isFavorite: false,
    rating: 3.5,
    bedrooms: 1,
    maxAdults: 2,
    goods: ['Wifi', 'Heating'],
    host:
      {
        avatarUrl: `https://loremflickr.com/248/152?random=${ Math.random() * 100}`,
        name: 'Daniel Green',
        isPro: true
      },
  },
  {
    id: '4',
    images: Array(4).fill(`https://loremflickr.com/248/152?random=${Math.random() * 100}`) as string[],
    isPremium: true,
    price: Math.floor((Math.random() * 500)),
    city: {
      name: 'Cologne',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    title: 'Beautiful & luxurious house at great location',
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    type: HousingType.House,
    isFavorite: true,
    rating: 4.8,
    bedrooms: 4,
    maxAdults: 8,
    goods: ['Wifi', 'Heating', 'Kitchen', 'Cable', 'TV'],
    host:
      {
        avatarUrl: `https://loremflickr.com/248/152?random=${ Math.random() * 100}`,
        name: 'Amanda Black',
        isPro: false
      },
  },
];
export default offers;