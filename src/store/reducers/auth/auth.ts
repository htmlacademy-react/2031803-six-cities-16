import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store.ts';

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH'
}

interface State {
  authorizationStatus: AuthStatus;
}

const initialState: State = {
  authorizationStatus: AuthStatus.Auth,
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    changeAuthStatus(state, action: PayloadAction<AuthStatus>) {
      state.authorizationStatus = action.payload;
    }
  }
});

const {actions, reducer} = citySlice;

export const selectAuthStatus = (state: RootState): AuthStatus => state.auth.authorizationStatus;

export const { changeAuthStatus } = actions;
export default reducer;
