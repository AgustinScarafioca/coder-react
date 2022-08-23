import React from 'react';

const ItemListContainer = ({prodName, prodPrice, prodDescription} ) => {
    return (
    <div className="card text-white bg-primary mb-3" style={{maxWidth: '20rem'}}>
        <div className="card-header">{prodName}</div>
        <div className="card-body">
            <h4 className="card-title">{prodPrice}</h4>
            <p className="card-text">{prodDescription}</p>
        </div> 
    </div>
    );
}

export default ItemListContainer;
