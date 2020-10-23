import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducers';
import authReducer from './auth/authReducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
});

export default store;
