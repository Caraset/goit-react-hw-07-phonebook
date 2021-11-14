import Loader from 'react-loader-spinner';

import './Contacts.css';

import { useGetAllContactsQuery } from 'redux/phonebook';
import ContactsList from './ContactsList';

export default function Contacts() {
  const { data: contacts = [], isFetching } = useGetAllContactsQuery();

  return (
    <>
      {isFetching ? (
        <div className="loader-container">
          <Loader type="ThreeDots" color="#be26cc" height={100} width={100} />
        </div>
      ) : (
        <>
          {contacts.length === 0 ? (
            <p className="contacts__nothingText">No contacts added</p>
          ) : (
            <ContactsList contacts={contacts} />
          )}
        </>
      )}
    </>
  );
}
