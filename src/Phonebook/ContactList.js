import Contact from './Contact';
import PropTypes from 'prop-types';
const ContactList = ({ list, deleteContact }) => (
  <ul>
    {list.map(contact => (
      <Contact
        contact={contact}
        key={contact.id}
        deleteContact={deleteContact}
      />
    ))}
  </ul>
);
ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
  deleteContact: PropTypes.func,
};
export default ContactList;
