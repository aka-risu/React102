import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { v4 as uuidv4 } from 'uuid';
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
// const store = createStore(reducer);
// const initialState = {

//   filteredContacts: [],
//   filter: '',
//   errorContactExists: false,
//   errorNumberExists: false,
//   contactFormInput: {
//     errorName: false,
//     errorNumber: false,
//   },
//   contactForm: {
//     name: '',
//     number: '',
//   },
// };

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case 'contacts/addContact':
//       if (
//         state.contacts.find(item => item.name === state.contactForm.name) ||
//         state.contacts.find(item => item.number === state.contactForm.number)
//       ) {
//         if (
//           state.contacts.find(item => item.number === state.contactForm.number)
//         ) {
//           state.errorNumberExists = true;
//         }
//         if (state.contacts.find(item => item.name === state.contactForm.name)) {
//           state.errorContactExists = true;
//         }
//         return {
//           ...state,
//         };
//       } else if (
//         state.contactForm.name === '' ||
//         state.contactForm.number === ''
//       ) {
//         if (state.contactForm.name === '') {
//           state.contactFormInput.errorName = true;
//         }
//         if (state.contactForm.number === '') {
//           state.contactFormInput.errorNumber = true;
//         }
//         return {
//           ...state,
//         };
//       } else {
//         return {
//           ...state,
//           contacts: [
//             ...state.contacts,
//             {
//               name: state.contactForm.name,
//               id: uuidv4(),
//               number: state.contactForm.number,
//             },
//           ],
//           contactForm: {
//             ...state.contactForm,
//             name: '',
//             number: '',
//           },
//         };
//       }

//     case 'contacts/deleteContact':
//       const newContacts = state.contacts.filter(
//         contact => contact.id !== payload,
//       );
//       return {
//         ...state,
//         contacts: [...newContacts],
//       };

//     case 'contacts/setFilter':
//       return {
//         ...state,
//         filter: payload,
//       };
//     case 'contacts/setErrorContactExists':
//       return {
//         ...state,
//         errorContactExists: payload,
//       };

//     case 'contacts/setErrorNumberExists':
//       return {
//         ...state,
//         errorNumberExists: payload,
//       };
//     case 'contactForm/setName':
//       return {
//         ...state,
//         contactForm: {
//           ...state.contactForm,
//           name: payload,
//         },
//       };
//     case 'contactForm/setNumber':
//       return {
//         ...state,
//         contactForm: {
//           ...state.contactForm,
//           number: payload,
//         },
//       };
//     case 'contactFormInput/setErrorName':
//       return {
//         ...state,
//         contactFormInput: {
//           ...state.contactFormInput,
//           errorName: payload,
//         },
//       };
//     case 'contactFormInput/setErrorNumber':
//       return {
//         ...state,
//         contactFormInput: {
//           ...state.contactFormInput,
//           errorNumber: payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

export default store;
