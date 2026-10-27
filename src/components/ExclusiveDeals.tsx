import heroBg from '../assets/images/photo.jpg';
import styles from './ExclusiveDeals.module.css';

const ExclusiveDeals = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>Exclusive Deals</h2>
        <button className={styles.seeAll}>See All &rsaquo;</button>
      </div>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <p className={styles.bannerSubtitle}>Get Special Discounts</p>
          <p className={styles.bannerTitle}>Up to 50%</p>
          <button className={styles.bookBtn}>
            Book Now <span>↗</span>
          </button>
        </div>
        <div className={styles.bannerImage}>
          <img src={heroBg} alt="Salon interior" className={styles.heroImg} />
        </div>
      </div>
    </section>
  );
};

export default ExclusiveDeals;
