import { useSelector, useDispatch } from 'react-redux';

import s from './Contacts.module.css';
import * as actions from '../../redux/actions';
import { getContacts, getFilteredContacts } from '../../redux/selectors';

export default function Contacts() {
  const contacts = useSelector(getContacts);
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const removeContact = id => dispatch(actions.deleteContact(id));

  return (
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
                  onClick={() => removeContact(contact.id)}
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
