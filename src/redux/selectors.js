import { createSelector } from 'reselect';

export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;
export const getLoading = state => state.loading;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter),
    );
  },
);
