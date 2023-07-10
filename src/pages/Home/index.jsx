import React from 'react';
import '../../styles/home-style.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import officeLogo from '../../assets/logo-designer-services.png'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <img className="home-image" src={officeLogo} alt="LogoShop" />

        <section className="home-instructions">
          <p className="home-description">
          Procurando por sugestões sobre o que adquirir com o valor
          disponível para suas compras? Não se preocupe! Estamos aqui para auxiliar.
          Tudo o que você precisa fazer é nos informar o montante
          que pretende gastar e nós cuidaremos do restante!
          </p>

          <Link className="home-button" to="/products">
            <h1 className="home-button-title">Ver produtos</h1>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;