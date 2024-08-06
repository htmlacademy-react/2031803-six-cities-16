import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import rootReducer from './reducers/root/root.ts';

export const store = configureStore({
  reducer: rootReducer
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
