import './App.css';
import React from 'react';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/productos' element={<ItemListContainer/>}></Route>
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}></Route>
          </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;

