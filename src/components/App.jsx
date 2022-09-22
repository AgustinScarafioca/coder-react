import './App.css';
import React from 'react';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from './Cart/Cart';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';
import CartProvider from '../context/CartContext'



function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}></Route>
              <Route path='/productos' element={<ItemListContainer/>}></Route>
              <Route path='/categoria/:categoriaId' element={<ItemDetailContainer/>}></Route>
              <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path='/aboutUs' element={<AboutUs/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
            </Routes>
        </CartProvider>
      </BrowserRouter> 
    </>
  );
}

export default App;