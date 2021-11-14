import { useSelector } from 'react-redux';
import { useDeleteContactMutation } from 'redux/phonebook';
import { getFilteredContacts } from 'redux/selectors';

import './ContactsList.css';
import DeleteBtn from './DeleteBtn';

export default function ContactsList({ contacts }) {
  const filteredContacts = useSelector(state =>
    getFilteredContacts(state, contacts),
  );

  const [deleteContact] = useDeleteContactMutation();

  return (
    <ul className="contacts__list">
      {filteredContacts.length === 0 ? (
        <p className="contacts__nothingText">Nothing found</p>
      ) : (
        filteredContacts.map(contact => (
          <li className="contacts__item" key={contact.id}>
            <span className="contacts__name">{contact.name}</span>
            <span className="dots"></span>
            <span className="contacts__number">{contact.number}</span>
            <DeleteBtn deleteContact={() => deleteContact(contact.id)} />
          </li>
        ))
      )}
    </ul>
  );
}
