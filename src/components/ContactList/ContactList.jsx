import { UL } from "./ConstListStyled";
import { useDispatch,useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Button, List, P } from "./ConstListStyled";
import { getFilter } from 'redux/filterSlice';
import { getContacts } from 'redux/contactsSlice';

export default function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);


    const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  }
  const contact = getVisibleContacts();


  
  const elements = contact.map(({ name, number, id }) => {
    return (
      <List key={id}>
      <P>{name} : {number}</P>
        <Button onClick={() => dispatch(deleteContact({id}))}>Delete</Button>
      </List>
    );
  });
  return <UL>{elements}</UL>;
}