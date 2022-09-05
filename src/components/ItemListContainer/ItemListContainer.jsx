import React, {useState, useEffect} from 'react';
import ItemCounter from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';


const products = [
    {name : "Darth Vader", id: 1, price: 2300, stock: 5, img: "vader-img.jpg"},
    {name: "Han Solo", id: 2, price: 2800, stock: 4, img: "solo-img.jpg"},
    {name: "StormTrooper", id: 3,price: 1800, stock: 10, img: "stormtrooper-img.jpg"},
    {name: "Kylo Ren", id: 4,price: 2500, stock: 3, img: "kylo-img.jpg"},
    {name: "The Mandalorian", id: 5, price:2500, stock:7, img: "mandalorian-img.jpg"},
    {name:"Yoda", price:2500, id: 6, stock:1, img: "yoda-img.jpg"},
];


const ItemListContainer = ({saludo} ) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(()=>{
                resolve(products)
            },3000);
        });
        getData.then(res => setData(res));

    }, []);

    function onAdd(count){
        alert(`Usted ha finalizado con ${count} productos`)
    }


    return (
        <div className='text-center p-5'>
            <h1> {saludo}</h1>
            <div className='container m-5'>
                <ItemCounter stock= {10} onAdd={onAdd}></ItemCounter>
            </div>
            <div>
                <ItemList data={data}></ItemList>
            </div>
        </div>

    );
}

export default ItemListContainer;

