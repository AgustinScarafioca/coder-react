import React from 'react';

const Item = ({info}) => {
    return (
        <div className="card text-white bg-primary mb-3 col d-flex justify-content-center" style={{maxWidth: '15rem', margin: "5px", padding: "2rem"}}>
            <div className="card-header">{info.name}</div>
            <div className="card-body">
                <p className="card-title">${info.price}</p>
            </div>
        </div>
    );
}

export default Item;
