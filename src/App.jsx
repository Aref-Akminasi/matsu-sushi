import classes from './App.module.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import CartContext from '../cart-context/CartContext';
import { useEffect, useState } from 'react';
import MenuSection from './components/menu-section/MenuSection';
import { client } from '../sanity-client/sanity';

function App() {
  const [amount, setAmount] = useState(10);
  const [categories, setCategories] = useState(null);
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
    <CartContext.Provider value={amount} data={categories}>
      <Nav />
      <Header />
      {categories &&
        categories.map((category) => (
          <MenuSection key={category.title} data={category} />
        ))}
      <Footer />
    </CartContext.Provider>
  );
}

export default App;
