import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import { selectContacts, selectIsLoading } from '../redux/contacts/selectors';

import DocumentTitle from '../components/DocumentTitle';
import ContactList from '../components/ContsctList/ContactList';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactForm from '../components/ContactForm/ContactForm';
import SectionLoader from '../components/SectionLoader/SectionLoader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { Grid } from '@mui/material';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your contacts</DocumentTitle>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} sm={4}>
          <ContactForm />
          <SearchBox />
        </Grid>
        <Grid item xs={12} md={8} sm={8}>
          {Array.isArray(contacts) &&
            (contacts.length > 0 ? (
              <ContactList />
            ) : (
              <ErrorMessage message={'Contact list is empty'} />
            ))}
          {isLoading && <SectionLoader />}
        </Grid>
      </Grid>
    </>
  );
};

export default Contacts;
