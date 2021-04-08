import './phonebook.scss';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import { getLoading } from '../redux/contacts/contacts-selectors';
import Loader from 'react-loader-spinner';

const Phonebook = ({ isLoading }) => {
  return (
    <Container maxWidth="sm" align="center">
      {console.log(isLoading)}
      {isLoading && (
        <Loader
          className="Loader"
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
        />
      )}
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
const mapStateToProps = state => {
  return {
    isLoading: getLoading(state),
  };
};
export default connect(mapStateToProps)(Phonebook);
