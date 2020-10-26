import { configureStore } from '@reduxjs/toolkit';
import contactsReducers from './contacts/contactsReducers';
import authReducer from './auth/authReducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    auth: authReducer,
  },
});

export default store;
