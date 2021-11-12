import { useDispatch, useSelector } from 'react-redux';

import s from './Filter.module.css';
import * as actions from '../../redux/actions';
import { getFilter } from '../../redux/selectors';

export default function Filter() {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const setFilter = e => dispatch(actions.changeFilter(e.target.value));

  return (
    <div className={s.filter}>
      <p className={s.filter__title}>Find contacts by name</p>
      <input
        className={s.filter__input}
        type="text"
        name="filter"
        onChange={setFilter}
        value={filterValue}
      />
    </div>
  );
}
