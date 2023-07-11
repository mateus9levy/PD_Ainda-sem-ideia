import React, { useState } from 'react';
import '../../styles/outputCard-style.css';
import { knapsack } from '../../utils/scripts/knapsack';
import data from '../../utils/data/products';
import { useOutputCardData } from '../../contexts/OutputCardContext';

const OutputCard = () => {
    const {setOutputCardData} = useOutputCardData()
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
                if(price){
                    const output = knapsack(price,data);
                    setOutputCardData({loaded:true, result: output})
                }
              
            }}
            >
                <h1 className="result-button-title">Calcular melhor compra</h1>
            </button>
        </div>
    );
};

export default OutputCard;
