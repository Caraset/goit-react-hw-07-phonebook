import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('phonebook/fetchRequest');
export const fetchContactsSuccess = createAction('phonebook/fetchSuccess');
export const fetchContactsError = createAction('phonebook/fetchError');

export const submitContactRequest = createAction('phonebook/submitRequest');
export const submitContactSuccess = createAction('phonebook/submitSuccess');
export const submitContactError = createAction('phonebook/submitError');

export const deleteContactRequest = createAction('phonebook/deleteRequest');
export const deleteContactSuccess = createAction('phonebook/deleteSuccess');
export const deleteContactError = createAction('phonebook/deleteError');

export const changeFilter = createAction('phonebook/input_change');
