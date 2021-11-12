import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import { combineReducers } from '@reduxjs/toolkit';

const contacts = createReducer([], {
  [actions.submitContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
