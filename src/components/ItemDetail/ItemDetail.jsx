import React from 'react';

const ItemDetail = ({data}) => {
    return (
        <div>
            <div className="card text-white bg-primary mb-3 col d-flex justify-content-center" style={{maxWidth: '15rem', margin: "5px", padding: "2rem"}}>
                <div className="card-header text-center">{data.name}</div>
                    <div className="card-body">
                        <p className="card-title text-center">${data.price}</p>
                        <p className="card-text text-center">{data.stock}</p>
                    </div>
                <img src={data.img} alt=""/>
                <div>
                    <p className='text-center'>
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
