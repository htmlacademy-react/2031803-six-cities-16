import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store.ts';
import {LOCAL_STORAGE_TOKEN_HEADER} from '../../../const.ts';

interface State {
  accessToken: string | null;
  isAuth: boolean;
}

const initialState: State = {
  accessToken: localStorage.getItem(LOCAL_STORAGE_TOKEN_HEADER) ?? null,
  isAuth: Boolean(localStorage.getItem(LOCAL_STORAGE_TOKEN_HEADER)),
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
