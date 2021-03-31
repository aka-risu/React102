import './phonebook.scss';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { connect } from 'react-redux';
const Phonebook = () => {
  // useEffect(() => {
  //   const contactsFomLocalStorage = JSON.parse(
  //     localStorage.getItem('contacts'),
  //   );
  //   if (contactsFomLocalStorage) setContact(contactsFomLocalStorage);
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Container maxWidth="sm" align="center">
      <Card className="phonebook" align="center">
        <h2>Phonebook</h2>
        <Box width="50%">
          <ContactForm />
        </Box>
        <h2>Contacts</h2>
        <Filter />
        <Box width="50%">
          <ContactList />
        </Box>
      </Card>
    </Container>
  );
};

export default Phonebook;
