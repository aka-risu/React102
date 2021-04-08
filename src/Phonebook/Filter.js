import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../redux/contacts/contacts-actions';
import { getFilter } from '../redux/contacts/contacts-selectors';
const Filter = ({ filter, setFilter }) => {
  return (
    <TextField
      id="outlined-search"
      label="Find contacts"
      type="search"
      variant="outlined"
      placeholder="Name"
      value={filter}
      onChange={event => setFilter(event.target.value)}
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    filter: getFilter(state),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setFilter: filter => dispatch(changeFilter(filter)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
