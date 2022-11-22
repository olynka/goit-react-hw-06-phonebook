import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './contactsSlice'
import { contactsReducer } from './contactsSlice'
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import filterReducer from 'redux/filterSlice';


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
           filter: filterReducer,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store);