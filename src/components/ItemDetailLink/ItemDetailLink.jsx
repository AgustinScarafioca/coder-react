import React from 'react';
import { Link } from 'react-router-dom';


const ItemDetailLink = () => {
    return (
        <div>
            <Link to="/cart"><button className='btn btn-success m-3'>Ir al carrito</button></Link>
            <br />
            <Link to='../'> <p className='m-2'>Continuar comprando</p> </Link>
        </div>
    );
}

export default ItemDetailLink;
