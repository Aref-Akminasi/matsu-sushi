import styles from './MenuCard.module.css';

const MenuCard = () => {
  return (
    <div className={styles['menu-card']}>
      <div className={styles['card-img']}>
        <img src="https://cdn.sanity.io/images/3z8b2row/production/ec0ed0519b54f4ce54c4bf35cd729bb811459e75-501x501.png" />
      </div>
      <div className={styles['card-content']}>
        <div className={styles['card-info']}>
          <h3>Salmon</h3>
          <p>Delicious salmon with rice</p>
          <span>€2,45</span>
        </div>
        <form action="#" className={styles['card-controls']}>
          <select name="amount">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <button type="submit">+</button>
        </form>
      </div>
    </div>
  );
};

export default MenuCard;
