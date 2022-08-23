import React from 'react'


const CartForm= ({contBuscar}) => {
    return (
        <>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder={contBuscar}/>
            <button className="btn btn-success" type="submit">Buscar</button>
        </form>
        <div>
            
        </div>
        </>
    )
}

export default CartForm;