import sushiTable from '../../assets/sushi-table.jpg';
import Container from '../container/container';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header>
      <Container className={classes.adjustments}>
        <h1>Matsu Sushi</h1>
        <h2>松寿司</h2>
        <h2>Traditional Japanese Sushi Restaurant</h2>
        <h3>
          Taste the authentic flavours of Japan at Matsu Sushi. We offer a wide
          variety of sushi options, each made with care and tradition. Perfect
          for those new to sushi or seasoned enthusiasts. Dive into a world of
          delicious taste and discover something new with every bite.
        </h3>
      </Container>
    </header>
  );
};

export default Header;
