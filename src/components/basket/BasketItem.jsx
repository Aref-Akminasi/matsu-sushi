import styles from './BasketItem.module.css';
import Delete from './Delete';

const BasketItem = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.card}>
      <div className={styles['card-img']}>
        <img src={data.imgUrl} />
      </div>
      <div className={styles['card-info']}>
        <h3>{data.name}</h3>
        <p>{data.description}</p>
      </div>
      <div className={styles['controls-wrapper']}>
        <div className={styles['card-controls']}>
          <button>-</button>
          <span>{data.amount}</span>
          <button>+</button>
        </div>
        <Delete />
        <span>
          {data.amount}x €{data.basePrice}
        </span>
        <span className={styles['sub-total']}>
          €{(data.amount * data.basePrice).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default BasketItem;
