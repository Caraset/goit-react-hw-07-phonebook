import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './actions';

export const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
