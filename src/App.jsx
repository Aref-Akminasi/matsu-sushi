import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import classes from './App.module.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className={classes.header}>Hello world</h1>
    </>
  );
}

export default App;
