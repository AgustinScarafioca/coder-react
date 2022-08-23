import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const ProdCards = () => {
    return (
        <>
            <div className='p-5'>
                <ItemListContainer prodName= "Producto 1" prodPrice="$1500" prodDescription="Esto es un producto de prueba"></ItemListContainer>
                <ItemListContainer prodName= "Producto 2" prodPrice="$1800" prodDescription="Esto es un segundo producto de prueba"></ItemListContainer>
            </div>
        </>
    );
}

export default ProdCards;
