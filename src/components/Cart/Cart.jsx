import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart';


const Cart = () => {
    
    const {cart, totalPrice} = useCartContext();

    if (cart.length === 0){
        return (
            <>
                <p className='text-center'>No hay items en el carrito</p>
                <Link to="/">Ver productos</Link>
            </>
        );
    }
    return (
        <>
        {
            cart.map (product => <ItemCart key={product.id} product={product}></ItemCart>)
        }
        <p>Precio total : {totalPrice()}</p>
        
        </>
    );


}

export default Cart;

