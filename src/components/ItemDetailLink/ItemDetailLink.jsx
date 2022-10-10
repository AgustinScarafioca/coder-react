import React from 'react';
import { Link } from 'react-router-dom';


const ItemDetailLink = () => {
    return (
        <div>
            <Link to="/cart"><button className='btn btn-success'>Ir al carrito</button></Link>
            <br />
            <Link to='../'>Continuar comprando</Link>
        </div>
    );
}

export default ItemDetailLink;
