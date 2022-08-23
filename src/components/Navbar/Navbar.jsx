import React from "react";
import CartForm from "../CartForm/CartForm"; 


const Navbar = () => {
    return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Agus' Funkos</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active lead" aria-current="page" href="#">Home</a>
                        <a className="nav-link lead" href="#">Tienda</a>
                        <a className="nav-link lead" href="#">Sobre nosotros</a>
                        <a className="nav-link lead" href="#">Contacto</a>
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