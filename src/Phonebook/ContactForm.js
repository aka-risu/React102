import React, { useState } from 'react';

import InputName from './InputName';
import InputNumber from './InputNumber';
import Button from '@material-ui/core/Button';
import './phonebook.scss';
import Box from '@material-ui/core/Box';
import './phonebook.scss';
import { connect } from 'react-redux';
// import actions from '../redux/contacts/contacts-actions';
import contactOperations from '../redux/contacts/contacts-operations';

import errorsActions from '../redux/errors/errors-actions';
import { clearErrors } from '../redux/errors/error-operations';
import { getContacts } from '../redux/contacts/contacts-selectors';

const ContactForm = ({
  contacts,
  setContact,
  clearErrors,
  setErrorContact,
  setErrorNumber,
}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  function handleInput(event) {
    setName(event.target.value);
    clearErrors();
  }

  function handleNumberInput(event) {
    const regexp = /^[0-9\b]+$/;
    if (regexp.test(event.target.value) || event.target.value === '') {
      setNumber(event.target.value);
    }
    clearErrors();
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!(name || number)) {
      !name && setErrorContact();
      !number && setErrorNumber();
      return;
    }
    setContact(name, number, contacts);
    setName('');
    setNumber('');
  }

  return (
    <form className="input-form" onSubmit={handleFormSubmit} autoComplete="off">
      <Box p={2}>
        <Box height={60}>
          <InputName
            className="input"
            name="Name"
            handleInput={handleInput}
            type="string"
            margin="normal"
            value={name}
          />
        </Box>
        <Box height={60}>
          <InputNumber
            className="input"
            name="Number"
            handleInput={handleNumberInput}
            type="number"
            margin="normal"
            value={number}
          />
        </Box>
      </Box>

      <Box p={2}>
        <Button type="submit" variant="contained" color="primary">
          Add contact
        </Button>
      </Box>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    contacts: getContacts(state),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setContact: (name, number, contacts) => {
      if (
        contacts.find(el => el.name === name) ||
        contacts.find(el => el.number === number)
      ) {
        if (contacts.find(el => el.name === name)) {
          dispatch(errorsActions.setErrorContactExists(true));
        }
        if (contacts.find(el => el.number === number)) {
          dispatch(errorsActions.setErrorNumberExists(true));
        }
        return;
      }
      dispatch(contactOperations.addContact(name, number));

      return;
    },

    clearErrors: () => dispatch(clearErrors()),
    setErrorContact: () => dispatch(errorsActions.setErrorContact(true)),
    setErrorNumber: () => dispatch(errorsActions.setErrorNumber(true)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
