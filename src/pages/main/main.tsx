import React from 'react';
import CardList from '../../components/card-list/card-list.tsx';
import Map from '../../components/map/map.tsx';
import CitiesList from '../../components/cities-list/cities-list.tsx';
import {CITIES} from '../../const.ts';
import {useAppSelector} from '../../hooks/hooks.ts';
import {selectCity} from '../../store/reducers/city/city.ts';
import {selectCityOffers} from '../../store/reducers/offer/offer.ts';
import SortingList from '../../components/sorting-list/sorting-list.tsx';

const MainPage = (): React.JSX.Element => {
  const cityOffers = useAppSelector(selectCityOffers);
  const activeCity = useAppSelector(selectCity);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList cities={CITIES}/>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{cityOffers.length > 0 ? cityOffers.length : 'No'} places to stay in {activeCity}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                  Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <SortingList/>
            </form>
            <CardList offers={cityOffers}/>
          </section>
          <div className="cities__right-section">
            {cityOffers.length > 0 && <Map cityOffers={cityOffers}></Map>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
