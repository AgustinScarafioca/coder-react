import {React, useState, useEffect} from 'react';

const productos = [
    {name : "Darth Vader", price: 2300, stock: 5},
    {name: "Han Solo", price: 2800, stock: 4},
    {name: "StormTrooper", price: 1800, stock: 10},
    {name: "Frodo Baggings", price: 2500, stock: 3},
    {name: "The Mandalorian", price:2500, stock:7},
    {name:"Yoda", price:2500, stock:1},
];

function consultarPromesa(confirmacion) {
    return new Promise ((res, rej) => {
        if (confirmacion){
            res(productos)
        } else {
            rej("Denegado")
        }
    })
}

const ItemList = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
            consultarPromesa(true)
        .then(data =>{
            const productosJSX = data.map((producto, indice) =>
                    <div className="card text-white bg-primary mb-3 row" key={indice} style={{maxWidth: '15rem', margin: "5px", padding: "2rem"}}>
                        <div className="card-header">{producto.name}</div>
                        <div className="card-body">
                            <p className="card-title">${producto.price}</p>
                            <p className="card-text">{producto.stock}</p>
                        </div>
                    </div>
            )

        console.log(productosJSX)

        setProductos(productosJSX)
    })
    .catch(error => {
        console.error(error)
    })
    }, []);
    
    return (

        <div className='row'>
            {productos}
        </div>
    );
}

export default ItemList;

