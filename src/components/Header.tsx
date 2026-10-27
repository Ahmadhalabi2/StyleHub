import logoSvg from '../assets/icons/Logo Container.svg';
import bellSvg from '../assets/icons/style=doutone.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logoSvg} alt="StyleHub" className={styles.logo} />
      <button className={styles.bellBtn} aria-label="Notifications">
        <img src={bellSvg} alt="Notifications" className={styles.bellIcon} />
      </button>
    </header>
  );
};

export default Header;
