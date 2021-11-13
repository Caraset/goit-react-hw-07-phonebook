import { useSelector, useDispatch } from 'react-redux';

import s from './Contacts.module.css';
import { deleteContact, fetchContacts } from 'redux/operations';
import { getContacts, getFilteredContacts, getLoading } from 'redux/selectors';
import { useEffect } from 'react';

export default function Contacts() {
  const contacts = useSelector(getContacts);
  const filteredContacts = useSelector(getFilteredContacts);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
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
                      onClick={() => dispatch(deleteContact(contact.id))}
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
