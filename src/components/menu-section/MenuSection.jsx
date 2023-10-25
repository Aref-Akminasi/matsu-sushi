import Container from '../container/container';
import MenuCard from '../menu-card/MenuCard';
import styles from './MenuSection.module.css';

const MenuSection = ({ data }) => {
  return (
    <section className={styles['section-items']}>
      <h2>{data.title}</h2>

      <Container className={styles.adjustments}>
        {data.products.map((itemData) => {
          return <MenuCard key={itemData._id} data={itemData} />;
        })}
      </Container>
    </section>
  );
};

export default MenuSection;
