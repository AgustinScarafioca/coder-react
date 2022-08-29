import React from 'react';
import ItemCounter from '../ItemCount/ItemCount';

const ItemListContainer = ({saludo} ) => {

    function onAdd(count){
        alert(`Usted ha finalizado con ${count} productos`)
    }

    return (
        <div className='text-center p-5'>
            <h1> {saludo}</h1>
            <div className='container m-5'>
                <ItemCounter stock= {10} onAdd={onAdd}></ItemCounter>
            </div>
        </div>

    );
}

export default ItemListContainer;

