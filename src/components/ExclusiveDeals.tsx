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
            Book Now
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
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
