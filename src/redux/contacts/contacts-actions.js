import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacs/addContact');
const changeFilter = createAction('contacs/changeFilter');
const deleteContact = createAction('contacts/deleteContact');
const setErrorContactExist = createAction('contacts/setErrorContactExist');
const setErrorNumberExist = createAction('contacts/setErrorNumberExist');
export default {
  addContact,
  changeFilter,
  deleteContact,
  setErrorNumberExist,
  setErrorContactExist,
};
