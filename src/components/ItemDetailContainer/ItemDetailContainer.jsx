import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const { detalleId } = useParams()
    
    useEffect(() => {
        fetch("../json/productos.json")
        .then ((res => res.json()))
        .then(res => setData(res.find(detail => detail.id === parseInt(detalleId))))
    },);

    return (
        <div>
            <div className='container d-flex justify-content-center'>
                <ItemDetail data= {data}/>
            </div>
        </div> 
    );
}

export default ItemDetailContainer;
