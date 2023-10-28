import styles from './BasketItem.module.css';
import Delete from './Delete';

const BasketItem = () => {
  return (
    <div className={styles.card}>
      <div className={styles['card-img']}>
        <img src="https://cdn.sanity.io/images/3z8b2row/production/ec0ed0519b54f4ce54c4bf35cd729bb811459e75-501x501.png" />
      </div>
      <div className={styles['card-info']}>
        <h3>Eggs</h3>
        <p>Delicious salmon with rice </p>
        <span>€3,00</span>
      </div>
      <div className={styles['card-controls']}>
        <button>-</button>
        <span>3</span>
        <button>+</button>
      </div>
      <Delete />
      <span className={styles['sub-total']}>€9,00</span>
    </div>
  );
};

export default BasketItem;
