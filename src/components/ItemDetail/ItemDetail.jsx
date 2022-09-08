import React from 'react';

const ItemDetail = ({data}) => {
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
                </ul>
            </div>
        </div>
    );
}

export default ItemDetail;
