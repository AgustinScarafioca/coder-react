import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';


const detalle = [{name : "Darth Vader", id: 1, price: 2300, stock: 5, img: "https://http2.mlstatic.com/D_NQ_NP_665437-MLA43518617994_092020-O.jpg", description: "Este Funko Pop es de Darth Vader"},
    {name: "Han Solo", id: 2, price: 2800, stock: 4, img: "http://d2r9epyceweg5n.cloudfront.net/stores/113/368/products/pophansolo1-6ab1840baad301a45d14934209874201-640-0.png", description: "Este Funko Pop es de Han Solo"},
    {name: "StormTrooper", id: 3,price: 1800, stock: 10, img: "https://http2.mlstatic.com/D_NQ_NP_613722-MLA44730560208_012021-O.jpg", description: "Este Funko Pop es de un Stormtrooper"},
    {name: "Kylo Ren", id: 4,price: 2500, stock: 3, img: "https://http2.mlstatic.com/D_NQ_NP_982457-MLA44765062353_012021-O.jpg", description: "Este Funko Pop es de Kylo Ren"},
    {name: "The Mandalorian", id: 5, price:2500, stock:7, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/841/670/products/mandalorian-4911-20b3f5b2a0abcdb17c16543763266859-1024-1024.jpg", description: "Este Funko Pop es de Din Djarin, el mandaloriano"},
    {name:"Yoda", price:2500, id: 6, stock:1, img: "https://http2.mlstatic.com/D_NQ_NP_847283-MLA43818006392_102020-O.jpg", description: "Este Funko Pop es de Yoda"},
];

const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const { detalleId } = useParams()
    
    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(()=>{
                resolve(detalle)
            },1000)
        });

        getData.then(res => setData(res.find(detail => detail.id === parseInt(detalleId))))
    },);

    return (
        <div>
            <div className='container d-flex justify-content-center'>
                <ItemDetail data= {data}/>
            </div>
        </div> 
    );
}

export default ItemDetailContainer;
