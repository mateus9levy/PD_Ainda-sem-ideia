import React, { useState } from 'react';
import '../../styles/outputCard-style.css';
import { Link } from 'react-router-dom';

const OutputCard = () => {
    const [price, setPrice] = useState('');

    const handlePrice = (e) => {
        setPrice(e.target.value);

    }
    return (
        <div className="result-container">
            <h1 className="result-target-value">Digite seu valor:</h1>
            <input
                className="result-input"
                placeholder="R$ 1000"
                value={price}
                onChange={handlePrice}
            />

            <button
                className={price ? 'result-button-active' : 'result-button-disable'}
            onClick={()=>{

            }}
            >
                <h1 className="result-button-title">Calcular melhor compra</h1>
            </button>
        </div>
    );
};

export default OutputCard;
