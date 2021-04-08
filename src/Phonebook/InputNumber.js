import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  errorNumberExists,
  errorNumber,
} from '../redux/errors/error-selectors';

const InputNumber = ({
  errorNumber,
  errorNumberExists,
  value,
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
    errorNumberExists: errorNumberExists(state),
    errorNumber: errorNumber(state),
  };
};

export default connect(mapStateToProps)(InputNumber);
