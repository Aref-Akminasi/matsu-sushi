import styles from './Basket.module.css';
import { createPortal } from 'react-dom';
import { useContext } from 'react';
import CartContext from '../../../cart-context/CartContext';
import Close from './Close';
import BasketItem from './BasketItem';

const Basket = () => {
  const { setBasketIsDisplayed, basketContents } = useContext(CartContext);

  const basketDisplayHandler = () => {
    setBasketIsDisplayed(false);
  };

  return createPortal(
    <>
      <div className={styles.backdrop} onClick={basketDisplayHandler}></div>
      <div className={styles.basket}>
        <nav>
          <h2>Basket</h2>
          <Close onClick={basketDisplayHandler} />
        </nav>
        <div className={styles['basket-items']}>
          {basketContents.length > 0 ? (
            basketContents.map((item) => (
              <BasketItem key={item.id} data={item} />
            ))
          ) : (
            <h3>Basket is empty</h3>
          )}
        </div>
        <div className={styles['basket-controls']}>
          <span>Total: €0</span>
          <button onClick={basketDisplayHandler}>Checkout</button>
        </div>
      </div>
    </>,
    document.getElementById('overlay')
  );
};

export default Basket;
