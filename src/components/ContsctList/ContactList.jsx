import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filters/selectors';

import Contact from './Contact';
import { List } from '@mui/material';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return Array.isArray(contacts) && contacts.length > 0 ? (
    <List
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '12px',
        mt: 2,
      }}
    >
      {contacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </List>
  ) : (
    <ErrorMessage
      message={"We couldn't find any contacts matching your search criteria"}
    />
  );
}

export default ContactList;
