import { useSelector } from 'react-redux';

import s from './Contacts.module.css';
import { getFilteredContacts } from 'redux/selectors';

import {
  useGetAllContactsQuery,
  useDeleteContactMutation,
} from 'redux/phonebook';

export default function Contacts() {
  const { data: contacts = [], isFetching } = useGetAllContactsQuery();

  const filteredContacts = useSelector(state =>
    getFilteredContacts(state, contacts),
  );

  const [deleteContact] = useDeleteContactMutation();

  return (
    <>
      {isFetching ? (
        <h1>Loading...</h1>
      ) : (
        <div className={s.contacts}>
          {contacts.length === 0 ? (
            <p className={s.contacts__nothingText}>No contacts added</p>
          ) : (
            <ul className={s.contacts__list}>
              {filteredContacts.length === 0 ? (
                <p className={s.contacts__nothingText}>Nothing found</p>
              ) : (
                filteredContacts.map(contact => (
                  <li className={s.contacts__item} key={contact.id}>
                    <p className={s.contacts__text}>
                      {contact.name}: {contact.number}
                    </p>
                    <button
                      className={s.contacts__btn}
                      type="button"
                      onClick={() => deleteContact(contact.id)}
                    >
                      Delete
                    </button>
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
      )}
    </>
  );
}
