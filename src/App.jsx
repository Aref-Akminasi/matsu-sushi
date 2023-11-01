import classes from './App.module.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import CartContext from '../cart-context/CartContext';
import { useEffect, useState, useReducer } from 'react';
import MenuSection from './components/menu-section/MenuSection';
import { client } from '../sanity-client/sanity';
import AboutUs from './components/about-us/AboutUs';
import Basket from './components/basket/Basket';

const updateBasket = (basketContents, action) => {
  if (action.type === 'add') {
    //if the item has been already added, the amount key of that item will be increased, and return the array after this manipulation.
    if (hasBeenAdded(basketContents, action.id)) {
      const itemIdx = () => {
        for (let i = 0; i < basketContents.length; i++) {
          if (basketContents[i].id === action.id) {
            return i;
          }
        }
      };
      const idx = itemIdx();
      basketContents[idx] = {
        id: action.id,
        amount: basketContents[idx].amount + action.amount,
        basePrice: action.price,
      };
      return [...basketContents];
      //in case the item has not been added, a new item will be created with the id and the chosen amount
    } else {
      return [
        ...basketContents,
        { id: action.id, amount: action.amount, basePrice: action.price },
      ];
    }
  }
};

const hasBeenAdded = (basketContents, id) => {
  for (let i = 0; i < basketContents.length; i++) {
    if (basketContents[i].id === id) {
      return true;
    }
  }
  return false;
};

function App() {
  const [basketContents, dispatch] = useReducer(updateBasket, []);
  const [categories, setCategories] = useState(null);
  const [basketIsDisplayed, setBasketIsDisplayed] = useState(false);

  console.log(basketContents);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "categories"]{categories[]->{
            title, products[]->{_id, name, description, price, 
            "imgUrl": image.asset->url}
          }}`
        );
        setCategories(data[0]?.categories);
      } catch (err) {
        console.error('Could not fetch data:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        basketContents,
        categories,
        dispatch,
        setBasketIsDisplayed,
      }}
    >
      {basketIsDisplayed && <Basket />}
      <Nav />
      <Header />
      <div id="categories">
        {categories &&
          categories.map((category) => (
            <MenuSection key={category.title} data={category} />
          ))}
      </div>
      <AboutUs />
      <Footer />
    </CartContext.Provider>
  );
}

export default App;
