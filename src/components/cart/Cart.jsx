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

  const totalItems = () => {
    let totalAmount = 0;
    basketContents.forEach((item) => {
      totalAmount += item.amount;
    });
    return totalAmount;
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
      <span>{totalItems()}</span>
    </div>
  );
};

export default Cart;
