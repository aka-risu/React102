import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const contactsState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const contacts = createReducer(contactsState, {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});
//  switch (type) {
// case 'contacts/addContact':
//   if (
//     state.contacts.find(item => item.name === state.contactForm.name) ||
//     state.contacts.find(item => item.number === state.contactForm.number)
//   ) {
//     if (
//       state.contacts.find(item => item.number === state.contactForm.number)
//     ) {
//       state.errorNumberExists = true;
//     }
//     if (state.contacts.find(item => item.name === state.contactForm.name)) {
//       state.errorContactExists = true;
//     }
//     return {
//       ...state,
//     };
//   } else if (
//     state.contactForm.name === '' ||
//     state.contactForm.number === ''
//   ) {
//     if (state.contactForm.name === '') {
//       state.contactFormInput.errorName = true;
//     }
//     if (state.contactForm.number === '') {
//       state.contactFormInput.errorNumber = true;
//     }
//     return {
//       ...state,
//     };
//   } else {
//     return {
//       ...state,
//       contacts: [
//         ...state.contacts,
//         {
//           name: state.contactForm.name,
//           id: uuidv4(),
//           number: state.contactForm.number,
//         },
//       ],
//       contactForm: {
//         ...state.contactForm,
//         name: '',
//         number: '',
//       },
//     };
//   }

export default combineReducers({
  contacts,
  filter,
});
