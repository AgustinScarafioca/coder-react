import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const { detalleId } = useParams()
    
    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', detalleId)
        getDoc(queryDoc)
        .then((res) => setData({ id:res.id, ...res.data() }))
    }, [detalleId]);


    return (
        <div>
            <div className='container d-flex justify-content-center'>
                <ItemDetail data= {data}/>
            </div>
        </div> 
    );
}

export default ItemDetailContainer;
