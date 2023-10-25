import styles from './MenuCard.module.css';

const MenuCard = ({ data }) => {
  return (
    <div className={styles['menu-card']}>
      <div className={styles['card-img']}>
        <img src={data.imgUrl} />
      </div>
      <div className={styles['card-content']}>
        <div className={styles['card-info']}>
          <h3>{data.name}</h3>
          <p>{data.description}</p>
        </div>
        <div className={styles['card-controls']}>
          <span>€{data.price.toFixed(2)}</span>
          <form action="#">
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
    </div>
  );
};

export default MenuCard;
