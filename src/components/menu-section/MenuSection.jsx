import Container from '../container/container';
import MenuCard from '../menu-card/MenuCard';
import styles from './MenuSection.module.css';

const MenuSection = () => {
  return (
    <section className={styles['section-items']}>
      <h2>Nigiri</h2>
      <Container className={styles.adjustments}>
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </Container>
    </section>
  );
};

export default MenuSection;
