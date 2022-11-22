import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from "nanoid";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

export const counterSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
    },

       reducers: {
        addContact(state, action) {
            state.contacts.push({
                id: nanoid(4),
                name: action.payload.name,
                number: action.payload.number,
            });
        },
        deleteContact(state, action) { 
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id)
        },
    }
    }
);
const persistConfig = {
  key: 'contacts',
  storage,
}


export const { addContact, deleteContact } = counterSlice.actions;
export const contactsReducer = persistReducer(persistConfig, counterSlice.reducer);
export const getContacts = state => state.contacts.contacts;

