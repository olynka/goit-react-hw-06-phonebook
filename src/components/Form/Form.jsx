import React from "react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { Label, Button, Input, Form } from "./FormStyled";
import { addContact, getContacts } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
      setNumber(value);
        break;
      default:
        return;
    }
  };
  
const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
     number,
  };
  setName('');
    setNumber('');
  // onSubmit(contact);
   if (duplicateContact(contact)) {
      return alert(`"${contact}" is already in your Phonebook`);
  };
  dispatch(addContact(contact));
   
  };
   const duplicateContact = (contact) => {
  const result = contacts.find(item => item.name === contact.name);
    return result;
  }


  
  return  (
      <Form onSubmit={handleSubmit} >
        <Label htmlFor={nameInputId}>
          Name
          <Input
            type="text"
            name="name"
                 id={nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleInputChange}
            required />
        </Label>
        <Label htmlFor={numberInputId} >
          Number
          <Input
            type="tel"
            name="number"
               id={numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleInputChange}
            required />
        </Label>
        <Button type="submit">Add contact</Button >
      </Form>
    );
  
  
}
  ;