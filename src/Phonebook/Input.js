import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
const Input = ({
  errorName,
  errorNumber,
  errorContactExists,
  errorNumberExists,
  name,
  handleInput,
  clearErrors,
  value,
}) => (
  <>
    {errorContactExists ? (
      <TextField
        error
        id="errorExist"
        label="Error"
        helperText="Name exists"
        value={value}
        onChange={handleInput}
        onBlur={clearErrors}
      ></TextField>
    ) : errorNumberExists ? (
      <TextField
        error
        id="errorExist"
        label="Error"
        helperText="Number exists"
        value={value}
        onChange={handleInput}
        onBlur={clearErrors}
      ></TextField>
    ) : errorName ? (
      <TextField
        error
        id="error"
        label="Error"
        helperText="Enter valid name"
        value={value}
        onChange={handleInput}
        onBlur={clearErrors}
      ></TextField>
    ) : errorNumber ? (
      <TextField
        error
        id="error"
        label="Error"
        helperText="Enter valid number"
        value={value}
        onChange={handleInput}
        onBlur={clearErrors}
      ></TextField>
    ) : (
      <TextField
        id={name}
        label={name}
        value={value}
        onChange={event => handleInput(event)}
        // type={type}
      ></TextField>
    )}
  </>
);
Input.propTypes = {
  errorName: PropTypes.bool,
  errorNumber: PropTypes.bool,
  errorContactExists: PropTypes.bool,
  errorNumberExists: PropTypes.bool,
  name: PropTypes.string,
  handleInput: PropTypes.func,
  clearErrors: PropTypes.func,
  value: PropTypes.string,
};
export default Input;
