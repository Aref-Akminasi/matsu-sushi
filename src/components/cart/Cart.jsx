import CartIcon from './CartIcon';
import classes from './Cart.module.css';
import { useState } from 'react';

const Cart = () => {
  const [amountOfItems, setAmountOfItems] = useState(0);
  return (
    <div className={classes.cart}>
      <CartIcon />
      <span>{amountOfItems}</span>
    </div>
  );
};

export default Cart;
