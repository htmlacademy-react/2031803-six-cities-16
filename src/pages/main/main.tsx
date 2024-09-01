import React, {useMemo, useState} from 'react';
import CardList from '../../components/card-list/card-list.tsx';
import Map from '../../components/map/map.tsx';
import CitiesList from '../../components/cities-list/cities-list.tsx';
import {CITIES} from '../../const.ts';
import {useAppSelector} from '../../hooks/hooks.ts';
import {selectCity} from '../../store/reducers/city/city.ts';
import SortingForm from '../../components/sorting-list/sorting-form.tsx';
import {useGetOffersQuery} from '../../store/reducers/api/api.ts';
import Loader from '../../components/spinner/spinner.tsx';
import {selectOfferSort, sortOffers} from '../../store/reducers/offer/offer.ts';

const MainPage = (): React.JSX.Element => {
  const { data: offers, isLoading } = useGetOffersQuery();
  const activeCity = useAppSelector(selectCity);
  const activeSort = useAppSelector(selectOfferSort);
  const cityOffers = useMemo(() => {
    if (offers) {
      return sortOffers(offers.filter((offer) => offer.city.name === activeCity), activeSort);
    }
    return [];
  }, [offers, activeSort, activeCity]);
  const [activeCardID, setActiveCardID] = useState<string | null>(null);
  const handleActiveCardChoice = (id?: string): void => {
    setActiveCardID(id ?? null);
  };

  if (isLoading) {
    return <Loader/>;
  }

  return (
    <main className={`page__main page__main--index${cityOffers.length > 0 ? '' : ' page__main--index-empty'}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList cities={CITIES}/>
        </section>
      </div>
      <div className="cities">
        {cityOffers.length > 0 &&
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
              <Map city={cityOffers[0].city} cityOffers={cityOffers} selectedOfferId={activeCardID}></Map>
            </div>
          </div>}
        {cityOffers.length === 0 &&
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment
                in {activeCity}
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
