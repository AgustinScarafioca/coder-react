import React, {useState, useEffect} from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';




const ItemListContainer = ({saludo} ) => {

    const [data, setData] = useState([]);
    const { categoriaId } = useParams()

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if (categoriaId) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
            .then((res) => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
        } else{
            getDocs(queryCollection)
            .then((res) => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
        }
    }, [categoriaId]);



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

