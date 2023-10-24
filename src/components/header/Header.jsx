import Logo from '../Logo';
import Cart from '../cart/Cart';
import Container from '../container/container';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <Container className={classes.clr}>
        <Logo />
        <nav>
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
        </nav>
      </Container>
    </header>
  );
};

export default Header;
