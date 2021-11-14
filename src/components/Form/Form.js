import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Slide, toast } from 'react-toastify';

import './Form.css';
import 'react-toastify/dist/ReactToastify.css';

import { getContacts } from 'redux/selectors';
import { useAddContactMutation } from 'redux/phonebook';
import SubmitButton from './SubmitButton';

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
      toast.error(`${contact.name} is already in contacts`, {
        position: 'top-left',
        theme: 'colored',
        transition: Slide,
      });
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
    <form className="form" onSubmit={onFormSubmit}>
      <label className="form__label">
        <span className="form__label-text">Name</span>
        <input
          className="form__input"
          onChange={onInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
        />
        <label className="form__label">
          <span className="form__label-text">Number</span>
          <input
            className="form__input"
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
      <SubmitButton loading={isLoading} />
    </form>
  );
}
