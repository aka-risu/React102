import { createAction } from '@reduxjs/toolkit';

const setErrorContactExists = createAction('errors/setErrorContactExists');
const setErrorNumberExists = createAction('errors/setErrorNumberExists');
const setErrorNumber = createAction('errors/setErrorNumber');
const setErrorContact = createAction('errors/setErrorContact');

export default {
  setErrorContactExists,
  setErrorNumberExists,
  setErrorNumber,
  setErrorContact,
};
