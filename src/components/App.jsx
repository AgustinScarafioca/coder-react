import './App.css';
import React from 'react';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <ItemListContainer saludo = "Bienvenidos a mi pagina"/>
    </>
  );
}

export default App;

