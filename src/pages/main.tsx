import React, {useContext, useEffect, useState} from 'react';
import CardList from '../components/card-list/card-list.tsx';
import {AppContext} from '../components/app/app.tsx';
import Map from '../components/map/map.tsx';
import {OfferMock} from '../mocks/types.ts';
import {v4 as uuidv4} from 'uuid';

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const MainPage = (): React.JSX.Element => {
  const { offers } = useContext(AppContext);
  const [activeCity, setActiveCity] = useState('Amsterdam');
  const [cityOffers, setCityOffers] = useState<OfferMock[]>(offers.filter((offer) => offer.city.name === activeCity));

  useEffect(() => {
    setCityOffers(offers.filter((offer) => offer.city.name === activeCity));
  },[offers, activeCity]);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map((city) => (
              <li className="locations__item" key={uuidv4()}>
                <a className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : ''}`}
                  onClick={() => setActiveCity(city)}
                >
                  <span>{city}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{cityOffers.length ?? 'No'} places to stay in {activeCity}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                  Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <CardList offers={cityOffers}/>
          </section>
          <div className="cities__right-section">
            {cityOffers.length > 0 ?
              <Map cityOffers={cityOffers}></Map>
              :
              null}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
