import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../redux/actions';
const InputNumber = ({
  errorNumber,
  errorNumberExists,
  value,
  clearErrors,
  // setNumber,
  handleInput,
}) => {
  return (
    <>
      {errorNumberExists ? (
        <TextField
          error
          id="errorExist"
          label="Error"
          helperText="Number exists"
          value={value}
          onChange={handleInput}
          // onBlur={clearErrors}
        ></TextField>
      ) : errorNumber ? (
        <TextField
          error
          id="error"
          label="Error"
          helperText="Enter valid number"
          value={value}
          onChange={handleInput}
          // onBlur={clearErrors}
        ></TextField>
      ) : (
        <TextField
          id="number-input"
          label="Number"
          value={value}
          onChange={handleInput}
        ></TextField>
      )}
    </>
  );
};
InputNumber.propTypes = {
  errorName: PropTypes.bool,
  errorNumber: PropTypes.bool,
  errorContactExists: PropTypes.bool,
  errorNumberExists: PropTypes.bool,
  name: PropTypes.string,
  handleInput: PropTypes.func,
  clearErrors: PropTypes.func,
  value: PropTypes.string,
};
const mapStateToProps = state => {
  return {
    // contacts: state.contacts,
    // filteredContacts: state.filteredContacts,
    // filter: state.filter,
    // errorContactExists: state.errorContactExists,
    // errorNumberExists: state.errorNumberExists,
    // errorName: state.contactFormInput.errorName,
    // errorNumber: state.contactFormInput.errorNumber,
    // number: state.contactForm.number,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // setContacts: contact => dispatch(actions.addContact(contact)),
    // deleteContact: id => dispatch(actions.deleteContact(id)),
    // filterContacts: () => dispatch(actions.filterContacts()),
    // setFilter: filter => dispatch(actions.setFilter(filter)),
    // setErrorContactExists: value =>
    //   dispatch(actions.setErrorContactExists(value)),
    // setErrorNumberExists: value =>
    //   dispatch(actions.setErrorNumberExists(value)),
    // setNumber: value => dispatch(actions.setNumber(value)),
    // clearErrors: () =>
    //   dispatch(
    //     actions.setErrorName(false),
    //     actions.setErrorContactExists(false),
    //     actions.setErrorNumber(false),
    //     actions.setErrorNumberExists(false),
    //   ),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InputNumber);
