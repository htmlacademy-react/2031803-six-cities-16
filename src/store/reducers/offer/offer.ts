import {OfferMain} from '../../../types.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store.ts';
import {SortOption} from '../../../components/sorting-list/types.ts';

interface State {
  offers: OfferMain[];
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
    changeOfferSort(state, action: PayloadAction<SortOption>) {
      state.sort = action.payload;
    }
  }});

export const sortOffers = (offers: OfferMain[], sortOption: SortOption): OfferMain[] => {
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

export const selectOfferSort = (state: RootState): SortOption => state.offer.sort;
export const { changeOfferSort } = actions;
export default reducer;
