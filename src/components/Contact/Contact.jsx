import css from './Contact.module.css';
import { HiUser } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';

const Contact = ({ id, name, number, onDelete }) => {
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
      <button className={css.btn} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
