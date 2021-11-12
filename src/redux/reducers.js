import { createReducer } from '@reduxjs/toolkit';
import {
  submitContactRequest,
  submitContactSuccess,
  submitContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  changeFilter,
} from './actions';
import { combineReducers } from '@reduxjs/toolkit';

const contacts = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [submitContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [submitContactRequest]: () => true,
  [submitContactSuccess]: () => false,
  [submitContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});
