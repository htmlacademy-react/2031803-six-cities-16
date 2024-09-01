import React from 'react';
import {City} from '../../types.ts';
import {v4 as uuidv4} from 'uuid';
import {selectCity, changeCity} from '../../store/reducers/city/city.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks.ts';
import {Link} from "react-router-dom";

interface CitiesListProps {
  cities: City[];
}

const CitiesList = ({ cities }: CitiesListProps): React.JSX.Element => {
  const activeCity = useAppSelector(selectCity);
  const dispatch = useAppDispatch();

  const handleCityClick = (city: City): void => {
    dispatch(changeCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={uuidv4()}>
          <Link to="#" className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : ''}`}
            onClick={() => {
              handleCityClick(city);
            }}
          >
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CitiesList;
