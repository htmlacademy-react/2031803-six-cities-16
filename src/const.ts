import {City} from './mocks/types.ts';
import {SortOption} from './components/sorting-list/types.ts';
import pin from '../public/img/pin.svg';
import activePin from '../public/img/pin-active.svg';

export const CITIES: City[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
export const MAX_IMAGES_ON_OFFER_PAGE = 6;
export const MAX_SHOWN_OFFERS_NEARBY = 3;
export const URL_MARKER_DEFAULT = pin;
export const URL_MARKER_CURRENT = activePin;
export const SORT_OPTIONS: SortOption[] = [SortOption.Popular, SortOption.PriceAsc, SortOption.PriceDesc, SortOption.TopRated];
