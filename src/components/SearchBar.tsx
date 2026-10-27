import searchSvg from '../assets/icons/Frame (8).svg';
import filterSvg from '../assets/icons/Frame (9).svg';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputContainer}>
        <img src={searchSvg} alt="search" className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search Salon, Specialist"
          className={styles.input}
          aria-label="Search Salon or Specialist"
        />
      </div>
      <button className={styles.filterBtn} aria-label="Filter">
        <img src={filterSvg} alt="filter" className={styles.filterIcon} />
      </button>
    </div>
  );
};

export default SearchBar;
