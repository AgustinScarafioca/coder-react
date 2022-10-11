import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart';
import Swal from 'sweetalert2';


const Cart = () => {

    const {cart, totalPrice, clearCart} = useCartContext(); 


    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()

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

// Funcion de carrito
const handleSubmit = ()=> {
        if (name !== '' && email !== '' && !isNaN(phone) && address !== '') {
            Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Su compra está siendo procesada',
            showConfirmButton: false,
            timer: 3000
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
                Items: ${order.quantity}
                Total: $${order.total}
                ¡Muchas gracias por confiar en nosotros!`
                ))
                ,
                clearCart()
                )
        } else {
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Por favor complete sus datos correctamente',
                showConfirmButton: false,
                timer: 3000
            })
    }
}

if (cart.length === 0) {
    return(
        <div className='text-center m-5 p-5'>
            <h4 className=''>¡Atencion!</h4>
            <p className='lead'>No hay elementos en el carrito</p>
            <Link className='btn btn-dark text-white rounded-pill m-5' to='../'>Ir al inicio</Link>
        </div>
    )
}

    return (
        <>
            <div>
                {
                cart.map(product => <ItemCart key={product.id} product={product} />) 
                }
                <div className='text-center m-5 p-2'>
                    <h3 className='p-3 blockquote'>
                    Total: $ {totalPrice()}
                    </h3>
                </div>
            </div>
            <h4 className='p-5'>Para finalizar la compra por favor complete sus datos</h4>
            <form className='form-group' onSubmit={handleSubmit}>
                <label className='col-form-label col-form-label-lg mt-4 m-3'>
                    Nombre
                </label>
                <input
                    className='form-control form-control-lg m-3'
                    type="text" 
                    name='name'
                    placeholder='Nombre'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label className='col-form-label col-form-label-lg mt-4 m-3'>
                    Email
                </label>
                <input 
                    className='form-control form-control-lg m-3'
                    type="text" 
                    name='email'
                    placeholder='Email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label className='col-form-label col-form-label-lg mt-4 m-3'>
                    Numero de telefono
                </label>
                <input
                    className='form-control form-control-lg m-3'
                    type="text" 
                    name='number'
                    placeholder='Numero de telefono'
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <label className='col-form-label col-form-label-lg mt-4 m-3'>
                    Direccion
                </label>
                <input
                    className='form-control form-control-lg m-3'
                    type="text" 
                    name='direction'
                    placeholder='Direccion'
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <button 
                className='btn btn-success text-center m-3'
                type='submit'
                onClick={handleSubmit}
                >
                    Finalizar compra
                </button>
                <button className='btn btn-danger text-center m-3' onClick={clearCart}>
                    Cancelar compra
                </button>
            </form>  
        </>
    );
}


export default Cart;

