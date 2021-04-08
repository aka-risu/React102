import Contact from './Contact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactOperations from '../redux/contacts/contacts-operations';
import { useEffect } from 'react';
import {
  filteredContacts,
  getContacts,
} from '../redux/contacts/contacts-selectors';
const ContactList = ({ filteredContacts, fetchContacts }) => {
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <ul>
      {filteredContacts.map(contact => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};
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
    contacts: getContacts(state),
    filteredContacts: filteredContacts(state),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchContacts: () => {
      dispatch(contactOperations.fetchContacts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
