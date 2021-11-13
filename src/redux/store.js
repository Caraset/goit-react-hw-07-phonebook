import { configureStore } from '@reduxjs/toolkit';
import { filter } from './reducers';
import { contactsApi } from './phonebook';

export const store = configureStore({
  reducer: {
    filter,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
