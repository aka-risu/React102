import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Input from './Input';
import Button from '@material-ui/core/Button';
import './phonebook.scss';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const ContactForm = ({
  addContact,
  errorContactExists,
  setErrorContactExists,
  errorNumberExists,
  setErrorNumberExists,
}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [errorNumber, setErrorNumber] = useState(false);
  function handleInput(event) {
    setName(event.target.value);
    setErrorName(false);
    setErrorContactExists(false);
    setErrorNumberExists(false);
    // console.log(name);
  }
  function handleNumberInput(event) {
    console.log(event.target.value);
    const regexp = /^[0-9\b]+$/;
    if (regexp.test(event.target.value)) setNumber(event.target.value);
    setErrorNumber(false);
    setErrorContactExists(false);
    setErrorNumberExists(false);
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    if (name === '') {
      setErrorName(true);
      return;
    }
    if (number === '') {
      setErrorNumber(true);
      return;
    }
    console.log(number);
    console.log(errorContactExists);
    addContact({ name, id: uuidv4(), number });
    setName('');
    setNumber('');
    // clearErrors();
  }
  function clearErrors() {
    setErrorName(false);
    setErrorContactExists(false);
    setErrorNumber(false);
    setErrorNumberExists(false);
  }

  return (
    <form className="input-form" onSubmit={handleFormSubmit} autoComplete="off">
      <Box p={1}>
        <Input
          className="input"
          errorName={errorName}
          errorContactExists={errorContactExists}
          name="Name"
          handleInput={handleInput}
          clearErrors={clearErrors}
          value={name}
          type="string"
          margin="dense"
        />
        <Input
          className="input"
          errorNumber={errorNumber}
          errorNumberExists={errorNumberExists}
          name="Number"
          handleInput={handleNumberInput}
          clearErrors={clearErrors}
          value={number}
          type="number"
          margin="dense"
        />
      </Box>
      {/* {addNameInput()} */}

      {/* <label>
          Number
          <input
            type="number"
            value={number}
            onChange={handleNumberInput}
          ></input>
        </label> */}
      <Box p={2}>
        <Button type="submit" variant="contained" color="primary">
          Add contact
        </Button>
      </Box>
    </form>
  );
};
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  errorContactExists: PropTypes.bool,
  setErrorContactExists: PropTypes.func,
  errorNumberExists: PropTypes.bool,
  setErrorNumberExists: PropTypes.func,
};

export default ContactForm;
