import axios from 'axios';
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
} from './actions';

axios.defaults.baseURL = 'https://618eb91150e24d0017ce1407.mockapi.io';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

export const submitContact = contact => dispatch => {
  dispatch(submitContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(submitContactSuccess(data)))
    .catch(error => dispatch(submitContactError(error)));
};

export const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`, contactId)
    .then(({ data }) => dispatch(deleteContactSuccess(data.id)))
    .catch(error => dispatch(deleteContactError(error)));
};
