import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState} from 'react';
import { useCartContext } from '../../context/CartContext';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';




const Checkout = () => {

    const {cart, totalPrice, clearCart} = useCartContext(); 


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const order = {
        buyer: {
        name: name,
        email: email,
        phone: phone,
        address: address 
        },
        items: cart.map(product => ({id: product.id, name: product.name, price: product.price, quantity: product.quantity})),
        date: new Date(),
        total: totalPrice(),
}


const handleSubmit = ()=> {
        if (name !== '' && email !== '' && !isNaN(phone) && address !== '') {
            Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tu compra está siendo procesada',
            showConfirmButton: false,
            timer: 2500
            })
            const db = getFirestore();
            const orderCollection = collection(db, 'orders');
            addDoc(orderCollection, order)
            .then(({ id }) => (
                Swal.fire(
                `Id de compra Nº ${ id }
                Fecha: ${order.date}
                Nombre: ${order.buyer.name}
                Email: ${order.buyer.email}
                Teléfono: ${order.buyer.phone}
                Dirección: ${order.buyer.address}
                Items: ${totalPrice()}
                Total: $${order.total}
                ¡Muchas gracias por confiar en nosotros!`
                ))
                ,
                clearCart()
                )
        } else {
            Swal.fire(
            'Atención',
            'Debe ingresar correctamente sus datos para finalizar la compra'
            )
    }
}

if (cart.length === 0) {
    return(
        <div className='text-center'>
            <p>No hay elementos en el carrito</p>
            <Link className='btn btn-dark text-white rounded-pill' to='./'>Ir al inicio</Link>
        </div>
    )
}

    return (
        <>
            <div>
                {
                cart.map(product => <ItemCart key={product.id} product={product} />) 
                }
                <div className='text-center'>
                    <p className='h3'>
                    Total: $ {totalPrice()}
                    </p>
                </div>
            </div>
            <h4>Para finalizar la compra complete sus datos</h4>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name='name'
                    placeholder='Nombre'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="text" 
                    name='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="text" 
                    name='number'
                    placeholder='Numero de telefono'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input 
                    type="text" 
                    name='direction'
                    placeholder='Direccion'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <button 
                type='submit'
                onClick={handleSubmit}
                >
                    Finalizar compra
                </button>
                <button className='btn btn-danger' onClick={clearCart}>
                    Vaciar carrito
                </button>
            </form>  
        </>
    );
}

export default Checkout;
