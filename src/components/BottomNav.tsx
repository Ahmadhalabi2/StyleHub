import homeIcon from '../assets/icons/Frame (4).svg';
import bookingIcon from '../assets/icons/Frame (5).svg';
import favoriteIcon from '../assets/icons/Group.svg';
import profileIcon from '../assets/icons/Frame (6).svg';
import styles from './BottomNav.module.css';

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: homeIcon },
  { id: 'booking', label: 'Booking', icon: bookingIcon },
  { id: 'favorite', label: 'Favorite', icon: favoriteIcon },
  { id: 'profile', label: 'Profile', icon: profileIcon },
];

interface BottomNavProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}

const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`${styles.navItem} ${activeTab === item.id ? styles.active : ''}`}
          onClick={() => onTabChange(item.id)}
          aria-label={item.label}
          aria-current={activeTab === item.id ? 'page' : undefined}
        >
          <img
            src={item.icon}
            alt={item.label}
            className={styles.navIcon}
          />
          <span className={styles.navLabel}>{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
