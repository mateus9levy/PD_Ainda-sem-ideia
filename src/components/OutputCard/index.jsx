import React from 'react';
import '../../styles/outputCard-style.css';
import { Link } from 'react-router-dom';

const OutputCard = ({ total, value, onChange, onClick }) => {
  return (
    <div className="result-container">
      <h1 className="result-target-value">Digite seu valor:</h1>
      <input
        className="result-input"
        placeholder="R$ 1000"
        value={value}
        onChange={onChange}
      />

      <Link
        className={value ? 'result-button-active' : 'result-button-disable'}
        onClick={onClick}
        to={value ? '/products/result' : null}
      >
        <h1 className="result-button-title">Calcular melhor compra</h1>
      </Link>
    </div>
  );
};

export default OutputCard;
