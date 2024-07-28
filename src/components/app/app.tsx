import React, {useState} from 'react';
import {
  Outlet,
} from 'react-router-dom';
import {AuthStatus} from './types.ts';
import {Offer} from '../../mocks/types.ts';
import offersMocks from '../../mocks/offers.ts';
import { Context } from './types.ts';

export const AppContext = React.createContext<Context>({ authStatus: AuthStatus.NoAuth, offers: [] });

const App = (): React.JSX.Element => {
  const [authStatus] = useState<AuthStatus>(AuthStatus.Auth);
  const [offers] = useState<Offer[]>(offersMocks);
  return (
    <AppContext.Provider value={{ authStatus, offers }}>
      <Outlet/>
    </AppContext.Provider>
  );
};

export default App;
