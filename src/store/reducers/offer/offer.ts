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

const {actions, reducer} = offerSlice;

export const selectOffers = (state: RootState): OfferMock[] => state.offer.offers;
export const selectCityOffers = createSelector(
  selectCity,
  selectOffers,
  (city, offers) => offers.filter((offer) => offer.city.name === city),
);

export const { updateOffers, toggleOfferFavorite, changeOfferSort } = actions;
export default reducer;
