import React from 'react';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Inicio from './components/Inicio';
import Delivery from './components/Delivery';

function App() {
  return (
    <>    
   
      <NavBar />
      <Inicio/>
      <Menu />
      <Delivery />
    </>
  );
}

export default App;
