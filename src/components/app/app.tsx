import React, {useState} from 'react';
import {
  Outlet,
} from 'react-router-dom';
import {AuthStatus} from './types.ts';
import {OfferMock} from '../../mocks/types.ts';
import offersMocks from '../../mocks/offers.ts';
import { Context } from './types.ts';

export const AppContext = React.createContext<Context>({ authStatus: AuthStatus.NoAuth, offers: [], handleFavorite: () => undefined } as Context);

const App = (): React.JSX.Element => {
  const [authStatus] = useState<AuthStatus>(AuthStatus.Auth);
  const [offers, setOffers] = useState<OfferMock[]>(offersMocks);

  const handleFavorite = (offerID: string): void => {
    const index = offers.findIndex((offer) => offer.id === offerID);
    if (index !== -1) {
      const updatedOffers = [...offers];
      updatedOffers[index].isFavorite = !updatedOffers[index].isFavorite;
      setOffers(updatedOffers);
    }
  };
  return (
    <AppContext.Provider value={{ authStatus, offers, handleFavorite }}>
      <Outlet/>
    </AppContext.Provider>
  );
};

export default App;
