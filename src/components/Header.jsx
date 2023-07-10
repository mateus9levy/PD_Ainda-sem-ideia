import React from 'react';
import '../styles/header-style.css';


const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <h1 className="header-title">PaperCraft</h1>
      </div>
      <button className="header-filter" onClick={console.log("hello")}/>
    </div>
  );
};

export default Header;