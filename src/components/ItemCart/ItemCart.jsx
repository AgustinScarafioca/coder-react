import React from 'react';
import { useCartContext } from '../../context/CartContext';

const ItemCart = ({ product }) => {
    const {removeProduct} = useCartContext();
    return (
        <div className='container d-flex'>
            <img className='img-thumbnail w-25 h-25' src= {product.img} alt={product.title} />
            <div>
                <p className='m-0 p-3'>Titulo: {product.title}</p>
                <p className='m-0 p-3'>Cantidad: {product.quantity}</p>
                <p className='m-0 p-3'>Precio: $ {product.price}</p>
                <p className='m-0 p-3'>Subtotal: ${product.quantity * product.price}</p>
                <button className='btn btn-danger text-center m-0 p-3' onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    );
}

export default ItemCart;
