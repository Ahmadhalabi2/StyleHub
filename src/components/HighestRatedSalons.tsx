import photo1 from '../assets/images/photo1.jpg';
import photo2 from '../assets/images/photo1.jpg';
import heartIcon from '../assets/icons/Group.svg';
import styles from './HighestRatedSalons.module.css';

interface Salon {
  id: number;
  name: string;
  rating: number;
  image: string;
}

const salons: Salon[] = [
  { id: 1, name: 'Timeless Cuts', rating: 3.5, image: photo1 },
  { id: 2, name: 'Timeless Cuts', rating: 3.5, image: photo2 },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className={styles.ratingRow}>
      <span className={styles.star}>★</span>
      <span className={styles.ratingNum}>{rating}</span>
    </div>
  );
};

const HighestRatedSalons = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>Highest Rated Salons</h2>
        <button className={styles.seeAll}>See All &rsaquo;</button>
      </div>
      <div className={styles.list}>
        {salons.map((salon) => (
          <div key={salon.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={salon.image} alt={salon.name} className={styles.salonImage} />
              <button className={styles.heartBtn} aria-label="Add to favorites">
                <img src={heartIcon} alt="favorite" className={styles.heartIcon} />
              </button>
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.cardInfo}>
                <p className={styles.salonName}>{salon.name}</p>
                <StarRating rating={salon.rating} />
              </div>
              <button className={styles.arrowBtn} aria-label="View salon">
                <span className={styles.arrowIcon}>›</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighestRatedSalons;
