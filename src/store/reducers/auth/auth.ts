import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store.ts';

interface State {
  accessToken: string | null;
  isAuth: boolean;
}

const initialState: State = {
  accessToken: localStorage.getItem('six-cities-token') ?? null,
  isAuth: Boolean(localStorage.getItem('six-cities-token')),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string | null>) {
      state.accessToken = action.payload;
    },
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    }
  }
});

const {actions, reducer} = authSlice;

export const selectAccessToken = (state: RootState): string | null => state.auth.accessToken;
export const selectIsAuth = (state: RootState): boolean => state.auth.isAuth;

export const { setAccessToken, setIsAuth } = actions;
export default reducer;
