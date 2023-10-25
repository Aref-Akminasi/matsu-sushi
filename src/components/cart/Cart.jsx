import CartIcon from './CartIcon';
import styles from './Cart.module.css';
import { useState } from 'react';
import { useContext } from 'react';
import CartContext from '../../../cart-context/CartContext';

const Cart = () => {
  const value = useContext(CartContext);
  return (
    <div className={styles.cart}>
      <CartIcon />
      <span>{value}</span>
    </div>
  );
};

export default Cart;
