import './App.css';
import React from 'react';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemList from './ItemList/ItemList';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer saludo = "Bienvenidos a mi pagina"/>
      <ItemList></ItemList>
    </>
  );
}

export default App;

