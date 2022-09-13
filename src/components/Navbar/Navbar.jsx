import React from "react";
import CartForm from "../CartForm/CartForm"; 
import {NavLink} from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Contact from "../Contact/Contact";
import AboutUs from "../AboutUs/AboutUs";


const Navbar = () => {
    return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="./">Agus' Funkos</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link lead" to="./">Tienda</NavLink>
                        {/* <NavLink className="nav-link lead" to={ItemListContainer}>Tienda</NavLink> */}
                        <NavLink className="nav-link lead" to="./aboutUs" element={<AboutUs/>}>Sobre nosotros</NavLink>
                        <NavLink className="nav-link lead" to="./contact" element={<Contact/>}>Contacto</NavLink>
                    </div>
                </div>
                <div className="cartDiv">
                    <CartForm contBuscar ="Productos"/>
                    <img className="cartLogo" src="/img/Cart.svg" alt="" srcset="" />
                </div>
            </div>
        </nav>
    </>
    );
}

export default Navbar;