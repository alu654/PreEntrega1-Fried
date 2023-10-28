import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ItemListContainer greeting="Bienvenido al Mundo de React!" />
    </BrowserRouter>
  );
}

export default App;
