import { contactsApi } from './phonebook';

export const getContacts = contactsApi.endpoints.getAllContacts.select();
export const getFilter = state => state.filter;

export const getFilteredContacts = (state, contacts) => {
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(normalizedFilter),
  );
};
