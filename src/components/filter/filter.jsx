import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import { Forms, Label, Input } from './filterStyled';
import { changeFilter} from 'redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import Notification from 'components/Notification/Notification';
 import {getContacts } from 'redux/contactsSlice';

const filterInputId = nanoid(4);

export default function Filter({ value, onChange }) {
  const dispatch = useDispatch();
   const contacts = useSelector(getContacts);
      const onChangeFilter = (e) => {
    dispatch(changeFilter(e.currentTarget.value));
  }
  if (contacts.length === 0) {
   return <Notification />
  }
    

    return (
        <Forms>
            <Label htmlFor={filterInputId}>Find contact by name
                <Input 
                    type="text"
                    name="findByName"
                    id={filterInputId}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    value={value}
                    onChange={onChangeFilter}
                />
            </Label>
        </Forms>
    );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};