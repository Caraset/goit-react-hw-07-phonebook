import { createAction } from '@reduxjs/toolkit';

export const deleteContactRequest = createAction('phonebook/deleteRequest');
export const deleteContactSuccess = createAction('phonebook/deleteSuccess');
export const deleteContactError = createAction('phonebook/deleteError');

export const changeFilter = createAction('phonebook/input_change');
