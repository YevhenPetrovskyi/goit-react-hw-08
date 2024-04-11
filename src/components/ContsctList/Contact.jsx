import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contacts/operation';
import normalizePhoneNumber from '../../helpers/normalizePhoneNumber';

import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';

import styles from './Contact.module.css';

function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={styles.contact}>
      <ul>
        <li>
          <IoPersonSharp />
          <span>{name}</span>
        </li>
        <li>
          <FaPhoneAlt />
          <span>{normalizePhoneNumber(number)}</span>
        </li>
      </ul>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
