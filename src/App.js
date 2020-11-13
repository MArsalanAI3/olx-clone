import React from 'react';
import Banner from './components/Banner/Banner.js';
import Adds from './components/Adds/Adds'
import Footer from './components/Footer/Footer';
import Appadds from './components/Appadds/Appadds.jsx'
import './App.css';
import Featured from './components/Featured/Featured.js';
import Products from './components/Products/Products'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
    <NavBar />
      <Banner />
      <Adds />
      <Featured />
      <Products />
      <Appadds />
      <Footer />
  </>
  );
}

export default App;
