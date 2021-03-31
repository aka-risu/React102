import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../redux/actions';
const InputName = ({
  errorName,
  errorContactExists,
  value,
  handleInput,
  // clearErrors,
  // setName,
}) => {
  return (
    <>
      {errorContactExists ? (
        <TextField
          error
          id="errorExist"
          label="Error"
          helperText="Name exists"
          value={value}
          onChange={handleInput}
          // onBlur={clearErrors}
        ></TextField>
      ) : (
        // ) : errorName ? (
        //   <TextField
        //     error
        //     id="error"
        //     label="Error"
        //     helperText="Enter valid name"
        //     value={name}
        //     onChange={handleInput}
        //     // onBlur={clearErrors}
        //   ></TextField>
        <TextField
          id="name-input"
          label="Name"
          value={value}
          onChange={handleInput}
        ></TextField>
      )}
    </>
  );
};
InputName.propTypes = {
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
  console.log(state.errors.errors);
  return {
    // contacts: state.contacts,
    // filteredContacts: state.filteredContacts,
    // filter: state.filter,
    errorContactExists: state.errors.errorContactExists,
    // errorNumberExists: state.errorNumberExists,
    // errorName: state.contactFormInput.errorName,
    // errorNumber: state.contactFormInput.errorNumber,
    // name: state.contactForm.name,
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
    // setName: value => dispatch(actions.setName(value)),
    // clearErrors: () => {
    //   dispatch(
    //     actions.setErrorName(false),
    //     actions.setErrorContactExists(false),
    //     actions.setErrorNumber(false),
    //     actions.setErrorNumberExists(false),
    //   );
    // },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InputName);
