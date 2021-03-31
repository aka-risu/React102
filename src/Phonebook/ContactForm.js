import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import InputName from './InputName';
import InputNumber from './InputNumber';
import Button from '@material-ui/core/Button';
import './phonebook.scss';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import './phonebook.scss';
import { connect } from 'react-redux';
import actions from '../redux/contacts/contacts-actions';

const ContactForm = ({
  setContact,
  clearErrors,
  setErrorContactExists,
  setErrorNumberExists,
  setErrorName,
  setErrorNumber,
}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  function handleInput(event) {
    console.log(name);
    setName(event.target.value);
    // clearErrors();
  }
  function handleNumberInput(event) {
    console.log(event);
    const regexp = /^[0-9\b]+$/;
    if (regexp.test(event.target.value) || event.target.value === '') {
      setNumber(event.target.value);
    }
    // clearErrors();
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    setContact({
      name: name,
      id: uuidv4(),
      number: number,
    });
    console.log({
      name: name,
      id: uuidv4(),
      number: number,
    });
  }

  // function clearErrors() {
  //   setErrorName(false);
  //   setErrorContactExists(false);
  //   setErrorNumber(false);
  //   setErrorNumberExists(false);
  // }

  return (
    <form className="input-form" onSubmit={handleFormSubmit} autoComplete="off">
      <Box p={2}>
        <Box height={60}>
          <InputName
            className="input"
            name="Name"
            handleInput={handleInput}
            // clearErrors={clearErrors}
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
            // clearErrors={clearErrors}
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
// ContactForm.propTypes = {
//   setContacts: PropTypes.func.isRequired,
//   errorContactExists: PropTypes.bool,
//   setErrorContactExists: PropTypes.func,
//   errorNumberExists: PropTypes.bool,
//   setErrorNumberExists: PropTypes.func,
// };

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
    // filteredContacts: state.filteredContacts,
    // filter: state.filter,
    // errorContactExists: state.errorContactExists,
    // errorNumberExists: state.errorNumberExists,
    // errorName: state.contactFormInput.errorName,
    // errorNumber: state.contactFormInput.errorNumber,
    // name: state.contactForm.name,
    // number: state.contactForm.number,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // setContacts: contact => dispatch(actions.addContact(contact)),
    setContact: value => dispatch(actions.addContact(value)),
    // deleteContact: id => dispatch(actions.deleteContact(id)),
    // filterContacts: () => dispatch(actions.filterContacts()),
    // setFilter: filter => dispatch(actions.setFilter(filter)),
    // setErrorContactExists: value =>
    //   dispatch(actions.setErrorContactExists(value)),
    // setErrorNumberExists: value =>
    //   dispatch(actions.setErrorNumberExists(value)),
    // setErrorName: value => dispatch(actions.setErrorName(value)),
    // setErrorNumber: value => dispatch(actions.setErrorNumber(value)),
    // setName: value => dispatch(actions.setName(value)),
    // setNumber: value => dispatch(actions.setNumber(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
