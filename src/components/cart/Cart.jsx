import CartIcon from './CartIcon';
import styles from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../../cart-context/CartContext';

const Cart = () => {
  const { amount } = useContext(CartContext);
  const { setBasketIsDisplayed } = useContext(CartContext);

  const basketDisplayHandler = () => {
    setBasketIsDisplayed(true);
  };

  return (
    <div className={styles.cart} onClick={basketDisplayHandler}>
      <CartIcon />
      <span>{amount}</span>
    </div>
  );
};

export default Cart;
