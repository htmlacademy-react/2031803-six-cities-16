import React, {MouseEvent} from 'react';
import {v4 as uuidv4} from 'uuid';
import {SortOption} from './types.ts';
import {useAppDispatch} from '../../hooks/hooks.ts';
import {changeOfferSort} from '../../store/reducers/offer/offer.ts';

const activeSort: SortOption = SortOption.Popular;

const SORT_OPTIONS: SortOption[] = [SortOption.Popular, SortOption.PriceAsc, SortOption.PriceDesc, SortOption.TopRated, SortOption.PriceDesc];

const SortingList = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const handleSortOptionClick = (evt: MouseEvent<HTMLLIElement>): void => {
    const chosenItem = evt.target as HTMLLIElement;
    dispatch(changeOfferSort(chosenItem.innerText as SortOption));
  };
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {SORT_OPTIONS.map((option) => (
        <li key={uuidv4()}
          onClick={handleSortOptionClick}
          className={`places__option${option === activeSort ? ' places__option--active' : ''}`}
          tabIndex={0}
        >
          {option}
        </li>))}
    </ul>
  );

};

export default SortingList;
