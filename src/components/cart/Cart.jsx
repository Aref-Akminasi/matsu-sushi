import CartIcon from './CartIcon';
import styles from './Cart.module.css';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../../cart-context/CartContext';

const Cart = () => {
  const { basketContents } = useContext(CartContext);
  const { setBasketIsDisplayed } = useContext(CartContext);
  const [active, setActive] = useState(false);

  const basketDisplayHandler = () => {
    setBasketIsDisplayed(true);
  };

  useEffect(() => {
    setActive(true);
    setTimeout(() => setActive(false), 300);
  }, [basketContents]);

  return (
    <div
      className={`${styles.cart} ${active && styles.active}`}
      onClick={basketDisplayHandler}
    >
      <CartIcon />
      <span>{basketContents.length}</span>
    </div>
  );
};

export default Cart;
