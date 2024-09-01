import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import {AppRoute} from './components/app/types.ts';
import Layout from './pages/layout/layout.tsx';
import MainPage from './pages/main/main.tsx';
import FavoritesPage from './pages/favorites/favorites.tsx';
import OfferPage from './pages/offer/offer.tsx';
import Error404 from './pages/error404/error404.tsx';
import LoginPage from './pages/login/login.tsx';
import {Provider} from 'react-redux';
import {store} from './store/store.ts';
import {apiSlice} from './store/reducers/api/api.ts';
import {setIsAuth} from './store/reducers/auth/auth.ts';

const router =
  createBrowserRouter(
    createRoutesFromElements(
      <Route element={<App/>} loader={async (): Promise<null> => {
        try {
          await store.dispatch(apiSlice.endpoints.getAuthStatus.initiate()).unwrap();
          store.dispatch(setIsAuth(true));

        } catch {
          store.dispatch(setIsAuth(false));
        }
        return null;
      }}
      >
        <Route path={AppRoute.Index} element={<Layout isMainPage/>}>
          <Route index element={<MainPage/>}></Route>
        </Route>
        <Route path={AppRoute.Index} element={<Layout/>}>
          <Route path={AppRoute.Favorites} element={<FavoritesPage/>}>
          </Route>
          <Route path={AppRoute.Offers} element={<OfferPage/>}></Route>
          <Route path={AppRoute.Unknown} element={<Error404/>}></Route>
        </Route>
        <Route path={AppRoute.Index} element={<Layout isLoginPage/>}>
          <Route path={AppRoute.Login} element={<LoginPage/>}>
          </Route>
        </Route>
      </Route>
    )
  );

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>
);
