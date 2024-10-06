import css from './Contact.module.css';
import { HiUser } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.item}>
      <div>
        <h2 className={css.subtitle}>
          <HiUser size={20} />
          {name}
        </h2>
        <p className={css.phone}>
          <FaPhoneAlt size={15} />
          {number}
        </p>
      </div>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
