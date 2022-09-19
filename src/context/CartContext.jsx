import React, {useState, useContext} from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))

    const addProduct = (item, quantity) => {
        if(isInCart(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : addProduct
            }));
        } else {
            setCart ([...cart, {...item, quantity}])
        }
    }
    
    const totalPrice = () => {
        return cart.reduce((pre, act) => pre + act.quantity * act.price, 0)
    }

    const totalProduct = () => cart.reduce((acc,prod) => acc + prod.quantity, 0)


    console.log("carrito", cart)


    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProduct,
            cart
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
