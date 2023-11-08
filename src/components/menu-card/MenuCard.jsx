import styles from './MenuCard.module.css';
import { useContext, useState } from 'react';
import CartContext from '../../../cart-context/CartContext';
import Add from './Add';
import CartAnimation from './CartAnimation';

const MenuCard = ({ data }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [amount, setAmount] = useState(1);
  const { dispatch } = useContext(CartContext);
  const submitHanlder = (e) => {
    e.preventDefault();
    dispatch({
      type: 'add',
      id: data._id,
      amount: amount,
      price: data.price,
      imgUrl: data.imgUrl,
      name: data.name,
      description: data.description,
    });
    isAddedHandler();
  };

  const amountHandler = (e) => {
    setAmount(Number(e.target.value));
  };

  const isAddedHandler = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 500);
  };
  return (
    <div className={styles['menu-card']}>
      <div className={styles['card-img']}>
        <img src={data.imgUrl} />
      </div>
      <div className={styles['card-content']}>
        <div className={styles['card-info']}>
          <h3>{data.name}</h3>
          <p>{data.description}</p>
        </div>
        <div className={styles['card-controls']}>
          <span>€{data.price.toFixed(2)}</span>
          <form action="#" onSubmit={submitHanlder}>
            <select name="amount" defaultValue="1" onChange={amountHandler}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <button type="submit" aria-label="Add" className={styles.add}>
              {isAdded && (
                <CartAnimation className={styles['cart-animation']} />
              )}
              <Add />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
