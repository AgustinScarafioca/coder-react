import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const detalle = {name : "Darth Vader", id: 1, price: 2300, stock: 5, img: "https://http2.mlstatic.com/D_NQ_NP_665437-MLA43518617994_092020-O.jpg", description: "Este Funko Pop es de Darth Vader"}
    /*{name: "Han Solo", id: 2, price: 2800, stock: 4, img: "./solo-img.jpg", description: "Este Funko Pop es de Han Solo"},
    {name: "StormTrooper", id: 3,price: 1800, stock: 10, img: "./stormtrooper-img.jpg", description: "Este Funko Pop es de un Stormtrooper"},
    {name: "Kylo Ren", id: 4,price: 2500, stock: 3, img: "./kylo-img.jpg", description: "Este Funko Pop es de Kylo Ren"},
    {name: "The Mandalorian", id: 5, price:2500, stock:7, img: "./mandalorian-img.jpg", description: "Este Funko Pop es de Din Djarin, el mandaloriano"},
    {name:"Yoda", price:2500, id: 6, stock:1, img: "./yoda-img.jpg", description: "Este Funko Pop es de Yoda"},
    */

const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    
    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(()=>{
                resolve(detalle)
            },2000)
        })

        getData.then(res => setData(res))
    }, []);

    return (
        <div>
            <div className='container d-flex justify-content-center'>
                <ItemDetail data= {data}/>
            </div>
        </div> 
    );
}

export default ItemDetailContainer;
