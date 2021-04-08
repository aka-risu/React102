import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  errorContactExists,
  errorContact,
} from '../redux/errors/error-selectors';

const InputName = ({
  errorContact,
  errorContactExists,
  value,
  handleInput,
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
        ></TextField>
      ) : errorContact ? (
        <TextField
          error
          id="error"
          label="Error"
          helperText="Enter valid name"
          value={value}
          onChange={handleInput}
        ></TextField>
      ) : (
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
  return {
    errorContactExists: errorContactExists(state),
    errorContact: errorContact(state),
  };
};

export default connect(mapStateToProps)(InputName);
