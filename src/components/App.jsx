import { useState, useEffect } from "react";
  import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import ContactForm from './Form/Form';
import Filter from './filter/filter';
import { Block, Totle } from './AppStyled';
import Notification from './Notification/Notification';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContacts } from 'redux/contactsSlice';
import { changeFilter, getFilter } from 'redux/filterSlice';



export const App = () => {
  const dispatch = useDispatch();
   const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const duplicateContact = (name) => {
    const normalizedName = name.toLowerCase();
    return contacts.find(item => item.name.toLowerCase() === normalizedName);
  };
  
   const addContacts = ({ name, number }) => {  
    if (duplicateContact(name)) {
      return alert(`"${name}" is already in your Phonebook`);
    };
    
    dispatch(addContact({ name, number }));
  }
  
    const onChangeFilter = (e) => {
    dispatch(changeFilter(e.currentTarget.value));
  }
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  }


 


  
  return (
  <>
      <Block>
        <Totle>Phonebook</Totle>
        <ContactForm onSubmit={addContacts} />
        {contacts.length === 0?<Notification />:<><Filter value={filter} o onChange={onChangeFilter} />
      <ContactList contacts={getVisibleContacts()} /></>}
      
</Block>
     </>
  )
};





