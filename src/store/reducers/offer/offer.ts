import {OfferMock} from '../../../mocks/types.ts';
import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store.ts';
import {selectCity} from '../city/city.ts';
import {SortOption} from '../../../components/sorting-list/types.ts';

interface State {
  offers: OfferMock[];
  sort: SortOption;
}

const initialState: State = {
  offers: [],
  sort: SortOption.Popular
};

const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    updateOffers(state, action: PayloadAction<OfferMock[]>) {
      state.offers = action.payload;
    },
    toggleOfferFavorite(state, action: PayloadAction<string>) {
      const offerID = action.payload;
      const index = state.offers.findIndex((offer) => offer.id === offerID);
      if (index !== -1) {
        state.offers[index].isFavorite = !state.offers[index].isFavorite;
      }
    },
    changeOfferSort(state, action: PayloadAction<SortOption>) {
      state.sort = action.payload;
    }
  }});

const sortOffers = (offers: OfferMock[], sortOption: SortOption): OfferMock[] => {
  switch (sortOption) {
    case SortOption.PriceAsc:
      return [...offers].sort((a, b) => a.price - b.price);
    case SortOption.PriceDesc:
      return [...offers].sort((a, b) => b.price - a.price);
    case SortOption.TopRated:
      return [...offers].sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

const {actions, reducer} = offerSlice;

export const selectOffers = (state: RootState): OfferMock[] => state.offer.offers;
export const selectOfferSort = (state: RootState): SortOption => state.offer.sort;
export const selectCityOffers = createSelector(
  selectCity,
  selectOffers,
  selectOfferSort,
  (city, offers, sort) => sortOffers(offers.filter((offer) => offer.city.name === city), sort),
);

export const { updateOffers, toggleOfferFavorite, changeOfferSort } = actions;
export default reducer;
