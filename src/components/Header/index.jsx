import React from 'react';
import '../../styles/header-style.css';


const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <h1 className="header-title">PaperCraft</h1>
      </div>
      <a href="/products">
        <button className="header-help" >
          <h2>
           Ver Produtos
          </h2>
        </button>
      </a>
      <a href="/help">
        <button className="header-help" >
          <h2>
            Receber Ajuda
          </h2>
        </button>
      </a>

    </div>
  );
};

export default Header;