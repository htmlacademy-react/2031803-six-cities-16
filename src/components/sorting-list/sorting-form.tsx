import React, {MouseEvent, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {SortOption} from './types.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks.ts';
import {changeOfferSort, selectOfferSort} from '../../store/reducers/offer/offer.ts';
import {SORT_OPTIONS} from '../../const.ts';

const SortingForm = (): React.JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const activeSort = useAppSelector(selectOfferSort);

  const toggleSortListVisibility = (): void => setIsOpened(!isOpened);

  const handleSortOptionClick = (evt: MouseEvent<HTMLLIElement>): void => {
    const chosenItem = evt.target as HTMLLIElement;
    toggleSortListVisibility();
    dispatch(changeOfferSort(chosenItem.innerText as SortOption));
  };
  return (
    <form className="places__sorting" action="#" method="get" onClick={toggleSortListVisibility}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>
        {SORT_OPTIONS.map((option) => (
          <li key={uuidv4()}
            onClick={handleSortOptionClick}
            className={`places__option${option === activeSort ? ' places__option--active' : ''}`}
            tabIndex={0}
          >
            {option}
          </li>))}
      </ul>
    </form>
  );

};

export default SortingForm;
