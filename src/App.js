import React from 'react';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Inicio from './components/Inicio';
import Delivery from './components/Delivery';
import Footer from './components/Footer';

function App() {
  return (
    <>    
      <NavBar/>
      <Inicio/>
      <Menu />
      <Delivery />
      <Footer/>
    </>
  );
}

export default App;
