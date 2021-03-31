export const addContact = value => ({
  type: 'contacts/addContact',
  payload: value,
});

export const deleteContact = value => ({
  type: 'contacts/deleteContact',
  payload: value,
});

export const filterContacts = value => ({
  type: 'contacts/filterContacts',
  payload: value,
});

export const setFilter = value => ({
  type: 'contacts/setFilter',
  payload: value,
});

export const setErrorContactExists = value => ({
  type: 'contacts/setErrorContactExists',
  payload: value,
});

export const setErrorNumberExists = value => ({
  type: 'contacts/setErrorNumberExists',
  payload: value,
});

export const setErrorName = value => ({
  type: 'contactFormInput/setErrorName',
  payload: value,
});

export const setErrorNumber = value => ({
  type: 'contactFormInput/setErrorNumber',
  payload: value,
});

export const setName = value => ({
  type: 'contactForm/setName',
  payload: value,
});

export const setNumber = value => ({
  type: 'contactForm/setNumber',
  payload: value,
});
