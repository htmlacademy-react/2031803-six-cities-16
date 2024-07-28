import React from 'react';
import MainPage from '../../pages/main.tsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
  RouterProvider,
} from 'react-router-dom';
import LoginPage from '../../pages/login.tsx';
import FavoritesPage from '../../pages/favorites.tsx';
import OfferPage from '../../pages/offer.tsx';
import Layout from '../../pages/layout.tsx';
import Error404 from '../../pages/error404.tsx';
import offersMocks from '../../mocks/offers.ts';

const isAuth = true;

const router =
  createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout isMainPage isAuth/>}>
          <Route index element={<MainPage offers={offersMocks}/>}></Route>
        </Route>
        <Route path="/" element={<Layout isAuth/>}>
          <Route path="favorites" element={<FavoritesPage offers={offersMocks}/>} loader={() => !isAuth && redirect('/login')}></Route>
          <Route path="offer/:id" element={<OfferPage/>}></Route>
          <Route path="*" element={<Error404/>}></Route>
        </Route>
        <Route path="/" element={<Layout isLoginPage isAuth/>}>
          <Route path="/login" element={<LoginPage/>} loader={() => isAuth && redirect('/')}></Route>
        </Route>
      </>
    )
  );

const App = (): React.JSX.Element => (
  <RouterProvider router={router} />
);

export default App;
