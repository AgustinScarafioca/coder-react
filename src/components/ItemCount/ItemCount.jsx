import React, {useState} from 'react';

const Counter = ({stock, onAdd}) => {
    const [count, setCount] = useState(0);

    function add (){
        if(count < stock){
            setCount(count + 1)
        }
    }

    function substract(){
        if(count > 0){
            setCount(count - 1)
        }
    }

    function reset(){
        setCount(0)
    }
    
    return (
        <div className='container text-center'>
            <div>
                <p>Stock: {stock}</p>
                <p>Cantidad: {count}</p>
            </div>
            <div>
                <button className='btn btn-danger' onClick={substract}>-</button>
                <button className='btn' onClick={reset}>Reset</button>
                <button className='btn btn-success' onClick={add}>+</button>
            </div>
            <button className='btn btn-success' onClick={() => onAdd(count)}> Finalizar compra</button>
        </div>
    );
}

export default Counter;
