import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({info}) => {
    

    return (
        <div className="card text-white bg-primary mb-3 col d-flex justify-content-center" style={{maxWidth: '15rem', margin: "5px", padding: "2rem"}}>
            <div className="card-header">{info.name}</div>
            <div className="card-body">
                <p className="card-title">${info.price}</p>
            </div>
            <img src={info.img} alt="" />
            <Link to={`/detalle/${info.id}`}><p className='text-warning'>Click aqui para mas informacion</p></Link>
        </div>
    );
}

export default Item;
