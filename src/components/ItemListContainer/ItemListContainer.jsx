import React, {useState, useEffect} from 'react';

import ItemList from '../ItemList/ItemList';



const ItemListContainer = ({saludo} ) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("../json/productos.json")
        .then ((res => res.json()))
        .then(res => setData(res));
    }, []);



    return (
        <div className='text-center p-5'>
            <h1> {saludo}</h1>
            <div className='d-flex justify-content-between'>
                <ItemList data={data}></ItemList>
            </div>
        </div>

    );
}

export default ItemListContainer;

