import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filters/selectors';

import Contact from './Contact';

import css from './ContactList.module.css';

function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);
  console.log('visibleContacts: ', visibleContacts);

  return (
    <>
      {visibleContacts.length > 0 ? (
        <ul className={css.contactList}>
          {visibleContacts.map((contact) => (
            <Contact key={contact.id} {...contact} />
          ))}
        </ul>
      ) : (
        <p className={css.textInfo}>Your phonebook is empty!</p>
      )}
    </>
  );
}

export default ContactList;
