import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
const Contact = ({ contact: { id, name, number }, deleteContact }) => (
  <li>
    <Box display="flex" alignItems="center" justifyContent="center">
      <Box flexGrow={1}>
        {name}: <span>{number}</span>
      </Box>
      <Box>
        <IconButton aria-label="delete" onClick={() => deleteContact(id)}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
    {/* <button onClick={() => deleteContact(id)}>Delete</button> */}
  </li>
);
Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
  deleteContact: PropTypes.func,
};
const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => dispatch(actions.deleteContact(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
