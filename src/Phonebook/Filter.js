import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
const Filter = ({ filter, setFilter }) => {
  function handleFilter(event) {
    setFilter(event.target.value);
  }
  return (
    <TextField
      id="outlined-search"
      label="Find contacts"
      type="search"
      variant="outlined"
      placeholder="Name"
      value={filter}
      onChange={handleFilter}
    />
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};
export default Filter;
