import classes from './App.module.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import CartContext from '../cart-context/CartContext';
import { useState } from 'react';
import MenuSection from './components/menu-section/MenuSection';

function App() {
  const [amount, setAmount] = useState(10);
  return (
    <CartContext.Provider value={amount}>
      <Nav />
      <Header />
      <MenuSection />
      <Footer />
    </CartContext.Provider>
  );
}

export default App;
