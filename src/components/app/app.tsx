import React, {useState} from 'react';
import {
  Outlet,
} from 'react-router-dom';
import {AuthStatus} from './types.ts';
import { Context } from './types.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks.ts';
import {changeOffers, selectOffers} from '../../store/reducers/root/root.ts';

export const AppContext = React.createContext<Context>({ authStatus: AuthStatus.NoAuth, handleFavorite: () => undefined } as Context);

const App = (): React.JSX.Element => {
  const [authStatus] = useState<AuthStatus>(AuthStatus.Auth);
  const offers = useAppSelector(selectOffers);
  const dispatch = useAppDispatch();

  const handleFavorite = (offerID: string): void => {
    const index = offers.findIndex((offer) => offer.id === offerID);
    if (index !== -1) {
      const updatedOffers = structuredClone(offers);
      updatedOffers[index].isFavorite = !updatedOffers[index].isFavorite;
      dispatch(changeOffers(updatedOffers));
    }
  };
  return (
    <AppContext.Provider value={{ authStatus, handleFavorite }}>
      <Outlet/>
    </AppContext.Provider>
  );
};

export default App;
