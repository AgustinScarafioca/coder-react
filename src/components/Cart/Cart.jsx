import React from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart';


const Cart = () => {
    
    const {cart, totalPrice} = useCartContext();

    const order = {
        buyer: {
            name: 'Agustin',
            email: 'agustin@gmail.com',
            phone: '1144556677',
            address: 'callefalsa 123'
        },
        items: cart.map(product => ({ id:product.id, title:product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const finalShop = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id))
    }

    if (cart.length === 0){
        return (
            <>
                <p className='text-center'>No hay items en el carrito</p>
                <Link to="/">Ver productos</Link>
            </>
        );
    }
    return (
        <>
        {
            cart.map (product => <ItemCart key={product.id} product={product}></ItemCart>)
        }
        <p>Precio total : {totalPrice()}</p>

        <button onClick={finalShop}>Finalizar compra</button>
        
        </>
    );


}

export default Cart;

