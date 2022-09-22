import React, {useState, useEffect} from 'react';
import { getFirestore, collection, getDocs} from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';




const ItemListContainer = ({saludo} ) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))

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

