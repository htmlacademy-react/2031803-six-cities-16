import reviewsMocks, { Review } from './reviews.ts';
import hostsMocks, { Host } from './hosts.ts';

enum HousingType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel'
}

export interface Offer {
  id: number;
  photos: string[];
  isPremium: boolean;
  price: number;
  title: string;
  description: string;
  type: HousingType;
  isFavorite: boolean;
  rating: number;
  bedroomsQuantity: number;
  maxGuests: number;
  utilities: string[];
  hostID: number;
  host: Host;
  reviewsIDs: number[];
  reviews: Review[];
}

const offers: Offer[] = [
  {
    id: 1,
    photos: Array(10).fill(`https://loremflickr.com/248/152?random=${Math.random() * 100}`),
    isPremium: true,
    price: Math.floor((Math.random() * 500)),
    title: 'Beautiful & luxurious apartment at great location',
    description: 'Lorem ipsum',
    type: HousingType.Apartment,
    isFavorite: false,
    rating: 4.2,
    bedroomsQuantity: 3,
    maxGuests: 6,
    utilities: ['Wifi', 'Heating', 'Kitchen', 'Cable', 'TV'],
    hostID: 1,
    reviewsIDs: [1, 2],
  },
  {
    id: 2,
    photos: Array(6).fill(`https://loremflickr.com/248/152?random=${Math.random() * 100}`),
    isPremium: false,
    price: Math.floor((Math.random() * 500)),
    title: 'Hotel at great location',
    description: 'Lorem ipsum Lorem ipsum',
    type: HousingType.Hotel,
    isFavorite: false,
    rating: 4.5,
    bedroomsQuantity: 2,
    maxGuests: 4,
    utilities: ['Wifi', 'Heating', 'Kitchen', 'Cable', 'TV'],
    hostID: 2,
    reviewsIDs: [3, 4, 5],
  },
  {
    id: 3,
    photos: Array(8).fill(`https://loremflickr.com/248/152?random=${Math.random() * 100}`),
    isPremium: false,
    price: Math.floor((Math.random() * 500)),
    title: 'Room at great location',
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    type: HousingType.Room,
    isFavorite: false,
    rating: 3.5,
    bedroomsQuantity: 1,
    maxGuests: 2,
    utilities: ['Wifi', 'Heating'],
    hostID: 3,
    reviewsIDs: [6, 7, 8, 9],
  },
  {
    id: 4,
    photos: Array(4).fill(`https://loremflickr.com/248/152?random=${Math.random() * 100}`),
    isPremium: true,
    price: Math.floor((Math.random() * 500)),
    title: 'Beautiful & luxurious house at great location',
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    type: HousingType.House,
    isFavorite: false,
    rating: 4.8,
    bedroomsQuantity: 4,
    maxGuests: 8,
    utilities: ['Wifi', 'Heating', 'Kitchen', 'Cable', 'TV'],
    hostID: 4,
    reviewsIDs: [10, 11],
  },
]
  .map((offer) => ({
    ...offer,
    host: hostsMocks.find((host) => host.id === offer.hostID),
    reviews: offer.reviewsIDs.map((reviewID) => reviewsMocks.find((review) => review.id === reviewID))})) as Offer[];

export default offers;
