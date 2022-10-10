import React, {useState} from 'react';
import { useCartContext } from '../../context/CartContext';
import ItemCounter from '../ItemCount/ItemCount';
import ItemDetailLink from '../ItemDetailLink/ItemDetailLink';

const ItemDetail = ({data}) => {

    const [goCart, setGoCart] = useState(false);
    const {addProduct} = useCartContext();

    function onAdd(quantity){
        setGoCart(true);
        addProduct(data, quantity)
    }

    return (
        <div className='m-5 text-center'>
            <div className="card mb-3">
                <h3 className="card-header">{data.name}</h3>
                <img src={data.img} alt="" className='w-25 h-25'/>
                <div className="card-body">
                    <p className="card-text">{data.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Stock: {data.stock}</li>
                    <li className="list-group-item">Precio: ${data.price}</li>
                    {
                        goCart ? <ItemDetailLink/> : <ItemCounter initial={0} stock= {10} onAdd={onAdd}/>
                    }

                </ul>
            </div>
        </div>
    );
}

export default ItemDetail;
