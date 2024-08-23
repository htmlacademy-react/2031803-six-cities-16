import React, {useState} from 'react';
import CardList from '../../components/card-list/card-list.tsx';
import Map from '../../components/map/map.tsx';
import CitiesList from '../../components/cities-list/cities-list.tsx';
import {CITIES} from '../../const.ts';
import {useAppSelector} from '../../hooks/hooks.ts';
import {selectCity} from '../../store/reducers/city/city.ts';
import {selectCityOffers} from '../../store/reducers/offer/offer.ts';
import SortingForm from '../../components/sorting-list/sorting-form.tsx';

const MainPage = (): React.JSX.Element => {
  const cityOffers = useAppSelector(selectCityOffers);
  const activeCity = useAppSelector(selectCity);
  const [activeCardID, setActiveCardID] = useState<string | null>(null);
  const handleActiveCardChoice = (id?: string): void => {
    setActiveCardID(id ?? null);
  };

  return (
    <main className={`page__main page__main--index${cityOffers.length > 0 ? '' : ' page__main--index-empty'}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList cities={CITIES}/>
        </section>
      </div>
      <div className="cities">
        {cityOffers.length > 0 ?
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityOffers.length} places to stay
                in {activeCity}
              </b>
              <SortingForm/>
              <CardList offers={cityOffers} handleActiveCardChoice={handleActiveCardChoice}/>
            </section>
            <div className="cities__right-section">
              <Map cityOffers={cityOffers} selectedOfferId={activeCardID}></Map>
            </div>
          </div>
          :
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in {activeCity}
                </p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>}
      </div>
    </main>
  );
};

export default MainPage;
