import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../redux/contacts/contacts-actions';
const Filter = ({ filter, setFilter, filterContacts }) => {
  // function handleFilter(event) {
  //   setFilter(event.target.value);
  //   // filterContacts();
  // }
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
    filter: state.contacts.filter,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setFilter: filter => dispatch(actions.changeFilter(filter)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
