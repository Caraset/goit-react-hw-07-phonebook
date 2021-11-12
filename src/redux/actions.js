import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const submitContact = createAction('phonebook/submit', contact => {
  return {
    payload: {
      ...contact,
      id: uuidv4(),
    },
  };
});
export const deleteContact = createAction('phonebook/delete');
export const changeFilter = createAction('phonebook/input_change');
