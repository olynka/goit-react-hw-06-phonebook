import { UL } from "./ConstListStyled";
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Button, List, P } from "./ConstListStyled";

export default function ContactList({contacts}) {
  const dispatch = useDispatch();
  
    return (
        <UL>
            {contacts.map(({ id, name, number }) => (
                <List key={id}>
                    <P>{name} : {number}
                    </P>
                    <Button type="button" onClick={() => dispatch(deleteContact({id}))}>Delete</Button>
                </List>
            ))}
        </UL>
    );
}

  // const elements = contacts.map(({ name, number, id }) => {
  //   return (
  //     <List key={id}>
  //     <P>{name} : {number}</P>
  //       <Button onClick={() => dispatch(deleteContact({id}))}>Delete</Button>
  //     </List>
  //   );
  // });
//   // return <UL>{elements}</UL>;
// }