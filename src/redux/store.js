import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';
import errorsReducer from './errors/errors-reducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    errors: errorsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
