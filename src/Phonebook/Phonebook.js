import React, { useState } from 'react';
import './phonebook.scss';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Card from '@material-ui/core/Card';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const Phonebook = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const [errorContactExists, setErrorContactExists] = useState(false);
  const [errorNumberExists, setErrorNumberExists] = useState(false);

  function addContact(contact) {
    console.log('hey2');
    if (contacts.find(item => item.name === contact.name)) {
      setErrorContactExists(true);
      console.log('Coooontact exists');
      return;
    }
    if (contacts.find(item => item.number === contact.number)) {
      setErrorNumberExists(true);
      console.log('Nuuuuumber exists');
      console.log(errorContactExists);
      console.log(errorNumberExists);
      return;
    }
    setContacts(prevState => {
      return [...prevState, contact];
    });
  }
  function deleteContact(id) {
    const newContacts = contacts.filter(contact => contact.id !== id);

    setContacts(newContacts);
  }
  function filterContacts() {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }
  // console.log(contacts);
  console.log(errorContactExists);
  console.log(errorNumberExists);
  return (
    <Container maxWidth="sm" align="center">
      <Card className="phonebook" align="center">
        <h2>Phonebook</h2>
        <Box width="50%">
          <ContactForm
            addContact={addContact}
            errorContactExists={errorContactExists}
            setErrorContactExists={setErrorContactExists}
            errorNumberExists={errorNumberExists}
            setErrorNumberExists={setErrorNumberExists}
          />
        </Box>
        <h2>Contacts</h2>
        <Filter setFilter={setFilter} filter={filter} />
        <Box width="50%">
          <ContactList list={filterContacts()} deleteContact={deleteContact} />
        </Box>
      </Card>
    </Container>
  );
};
export default Phonebook;
