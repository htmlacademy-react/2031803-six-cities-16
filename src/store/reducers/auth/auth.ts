import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store.ts';

interface State {
  accessToken: string | null;
}

const initialState: State = {
  accessToken: localStorage.getItem('six-cities-token') ?? null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string | null>) {
      state.accessToken = action.payload;
    }
  }
});

const {actions, reducer} = authSlice;

export const selectAccessToken = (state: RootState): string | null => state.auth.accessToken;

export const { setAccessToken } = actions;
export default reducer;
