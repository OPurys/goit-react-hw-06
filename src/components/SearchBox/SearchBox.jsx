import css from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <label className={css.label}>
        <span>Find contacts by name</span>
        <input
          className={css.input}
          value={value}
          onChange={e => onFilter(e.target.value)}
          type="text"
          name="contact"
        />
      </label>
    </div>
  );
};

export default SearchBox;
