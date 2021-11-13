import { useState } from 'react';
import { useSelector } from 'react-redux';

import s from './Form.module.css';
import { getContacts } from 'redux/selectors';
import { useAddContactMutation } from 'redux/phonebook';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useSelector(getContacts);

  const [addContact, { isLoading }] = useAddContactMutation();

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    name === 'name' ? setName(value) : setNumber(value);
  };

  function onFormSubmit(e) {
    e.preventDefault();

    const contact = {
      name: e.target.name.value,
      number: e.target.number.value,
    };

    if (contacts.find(el => el.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
    } else {
      addContact(contact);
    }

    reset();
  }

  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <form className={s.form} onSubmit={onFormSubmit}>
      <label className={s.form__label}>
        Name
        <input
          className={s.form__input}
          onChange={onInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
        />
        <label className={s.form__label}>
          Number
          <input
            className={s.form__input}
            onChange={onInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
          />
        </label>
      </label>
      {isLoading ? (
        <h2>loading</h2>
      ) : (
        <button className={s.form__button} type="submit">
          Add contact
        </button>
      )}
    </form>
  );
}
