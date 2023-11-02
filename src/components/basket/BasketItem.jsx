import styles from './BasketItem.module.css';
import Delete from './Delete';
import { useContext } from 'react';
import CartContext from '../../../cart-context/CartContext';

const BasketItem = ({ data }) => {
  const { dispatch } = useContext(CartContext);
  const addHandler = () => {
    dispatch({
      type: 'add',
      amount: 1,
      id: data.id,
    });
  };

  const removeHandler = () => {
    dispatch({
      type: 'remove',
      amount: -1,
      id: data.id,
    });
  };

  const removeAllHandler = () => {
    dispatch({
      type: 'remove',
      amount: 0,
      id: data.id,
    });
  };
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
          <button onClick={removeHandler}>-</button>
          <span>{data.amount}</span>
          <button onClick={addHandler}>+</button>
        </div>
        <Delete onClick={removeAllHandler} />
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
