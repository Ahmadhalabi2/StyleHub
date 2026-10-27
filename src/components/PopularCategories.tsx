import haircutIcon from '../assets/icons/Frame.svg';
import makeupIcon from '../assets/icons/Frame (1).svg';
import shavingIcon from '../assets/icons/Frame (2).svg';
import coloringIcon from '../assets/icons/Frame (3).svg';
import stylingIcon from '../assets/icons/Frame (7).svg';
import styles from './PopularCategories.module.css';

interface Category {
  id: number;
  label: string;
  icon: string;
}

const categories: Category[] = [
  { id: 1, label: 'Haircut', icon: haircutIcon },
  { id: 2, label: 'Make Up', icon: makeupIcon },
  { id: 3, label: 'Shaving', icon: shavingIcon },
  { id: 4, label: 'Coloring', icon: coloringIcon },
  { id: 5, label: 'Styling', icon: stylingIcon },
];

const PopularCategories = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>Popular Categories</h2>
        <button className={styles.seeAll}>See All &rsaquo;</button>
      </div>
      <div className={styles.list}>
        {categories.map((cat) => (
          <button key={cat.id} className={styles.categoryItem} aria-label={cat.label}>
            <div className={styles.iconWrapper}>
              <img src={cat.icon} alt={cat.label} className={styles.icon} />
            </div>
            <span className={styles.label}>{cat.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
