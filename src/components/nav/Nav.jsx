import Logo from '../Logo';
import Cart from '../cart/Cart';
import Container from '../container/container';
import classes from './Nav.module.css';

const Nav = () => {
  return (
    <nav>
      <Container className={classes.adjustments}>
        <Logo />
        <ul>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <Cart />
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Nav;
