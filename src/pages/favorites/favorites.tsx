import React from 'react';
import FavoritesList from '../../components/favorites-list/favorites-list.tsx';
import {useGetFavoritesQuery} from '../../store/reducers/api/api.ts';

const FavoritesPage = (): React.JSX.Element => {
  const { data: favoriteOffers } = useGetFavoritesQuery();
  return (
    <main className={`page__main page__main--favorites${!favoriteOffers ? ' page__main--favorites-empty' : ''}`}>
      <div className="page__favorites-container container">
        {
          favoriteOffers ?
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList offers={favoriteOffers}/>
            </section>
            :
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future
              trips.
                </p>
              </div>
            </section>
        }
      </div>
    </main>
  );
};

export default FavoritesPage;
