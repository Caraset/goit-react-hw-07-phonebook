import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://618eb91150e24d0017ce1407.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'phonebook/fetchContacts',
  async () => {
    const { data } = await axios.get('/contacts');

    return data;
  },
);

export const submitContact = createAsyncThunk(
  'phonebook/submitContact',
  async contact => {
    const { data } = await axios.post('/contacts', contact);
    return data;
  },
);

export const deleteContact = createAsyncThunk(
  'phonebook/deleteContact',
  async contactId => {
    const { data } = await axios.delete(`/contacts/${contactId}`, contactId);
    return data.id;
  },
);
