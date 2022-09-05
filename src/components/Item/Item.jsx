import React from 'react';

const Item = ({info}) => {
    return (
        <div className="card text-white bg-primary mb-3 row" style={{maxWidth: '15rem', margin: "5px", padding: "2rem"}}>
            <div className="card-header">{info.name}</div>
                <div className="card-body">
                    <p className="card-title">${info.price}</p>
                    <p className="card-text">{info.stock}</p>
                </div>
            <img src={info.img} alt="" />
        </div>
    );
}

export default Item;
