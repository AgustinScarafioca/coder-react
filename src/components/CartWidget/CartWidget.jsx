import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart';


const CartWidget = () => {

    const {totalProduct} = useCartContext()

    return (
        <div>
            <Link to="/cart" element= {Cart}><img className="cartLogo" src="/img/Cart.svg" alt="" srcset="" /></Link>
            <span> {totalProduct() || ""}</span>
        </div>
    );
}

export default CartWidget;
