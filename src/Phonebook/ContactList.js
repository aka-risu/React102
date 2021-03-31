import Contact from './Contact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ContactList = ({ filteredContacts }) => (
  <ul>
    {filteredContacts.map(contact => (
      <Contact contact={contact} key={contact.id} />
    ))}
  </ul>
);
ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = state => {
  console.log(state.contacts.contacts);
  return {
    filteredContacts: state.contacts.contacts.filter(item =>
      item.name.toLowerCase().includes(state.contacts.filter.toLowerCase()),
    ),
  };
};

export default connect(mapStateToProps)(ContactList);
