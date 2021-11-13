import { createReducer } from '@reduxjs/toolkit';

// ===== Для варианта со слайсом для практики =====
// import { createReducer, createSlice } from '@reduxjs/toolkit';

import { changeFilter } from './actions';
import { combineReducers } from '@reduxjs/toolkit';
import { fetchContacts, submitContact, deleteContact } from 'redux/operations';

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [submitContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [submitContact.pending]: () => true,
  [submitContact.fulfilled]: () => false,
  [submitContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});

// ===== Вариант со слайсом для практики =====

// const phonebookSlice = createSlice({
//   name: 'phonebook',
//   initialState: { contacts: [], loading: false, filter: '' },
//   extraReducers: {
//     [fetchContacts.fulfilled]: (state, { payload }) => {
//       state.loading = false;
//       state.contacts = payload;
//     },

//     [submitContact.fulfilled]: (state, { payload }) => {
//       state.contacts = [...state.contacts, payload];
//       state.loading = false;
//     },

//     [deleteContact.fulfilled]: (state, { payload }) =>
//       state.filter(contact => contact.id !== payload),

//     [fetchContacts.pending]: state => {
//       state.loading = true;
//     },
//     [submitContact.pending]: state => {
//       state.loading = true;
//     },
//     [deleteContact.pending]: state => {
//       state.loading = true;
//     },

//     [fetchContacts.rejected]: state => {
//       state.loading = false;
//     },
//     [submitContact.rejected]: state => {
//       state.loading = false;
//     },
//     [deleteContact.rejected]: state => {
//       state.loading = false;
//     },
//   },
// });

// export default phonebookSlice.reducer;
