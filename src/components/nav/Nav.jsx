import Logo from '../Logo';
import Cart from '../cart/Cart';
import Container from '../container/container';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Container className={styles.adjustments}>
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
