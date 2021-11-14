import { useDispatch, useSelector } from 'react-redux';

import './Filter.css';
import * as actions from 'redux/actions';
import { getFilter } from 'redux/selectors';

export default function Filter() {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const setFilter = e => dispatch(actions.changeFilter(e.target.value));

  return (
    <div className="filter">
      <span className="filter__text">Find contacts by name</span>
      <input
        className="filter__input"
        type="text"
        name="filter"
        onChange={setFilter}
        value={filterValue}
      />
    </div>
  );
}
