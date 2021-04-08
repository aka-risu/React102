import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacs/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacs/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacs/fetchContactsError');

export const addContactRequest = createAction('contacs/addContactRequest');
export const addContactSuccess = createAction('contacs/addContactSuccess');
export const addContactError = createAction('contacs/addContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('contacs/changeFilter');
