import {City} from '../../../types.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store.ts';

interface State {
  city: City;
}

const initialState: State = {
  city: 'Paris',
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    changeCity(state, action: PayloadAction<City>) {
      state.city = action.payload;
    }
  }
});

const {actions, reducer} = citySlice;

export const selectCity = (state: RootState): City => state.city.city;

export const { changeCity } = actions;
export default reducer;
