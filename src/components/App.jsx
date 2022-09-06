import './App.css';
import React from 'react';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer saludo = "Bienvenidos a mi pagina"/>
      <ItemDetailContainer></ItemDetailContainer>
    </>
  );
}

export default App;

