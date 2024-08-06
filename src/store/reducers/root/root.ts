import {City, OfferMock} from '../../../mocks/types.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface State {
  city: City;
  offers: OfferMock[];
}

const initialState: State = {
  city: 'Paris',
  offers: []
};

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    changeOffers(state, action: PayloadAction<OfferMock[]>) {
      state.offers = action.payload;
    },
    changeCity(state, action: PayloadAction<City>) {
      state.city = action.payload;
    }
  }
});

export const { changeOffers, changeCity } = rootSlice.actions;

export const selectCity = (state: State): City => state.city;
export const selectOffers = (state: State): OfferMock[] => state.offers;
export const selectCityOffers = (state: State): OfferMock[] => state.offers.filter((offer) => offer.city.name === state.city);

export default rootSlice.reducer;
