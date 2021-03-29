import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-row">
        <div className="header-identifier">
          <p>CryptoMoeda</p>
        </div>
        <div className="header-data">
          <p className="header-price">Preço Agora</p>
          <p className="header-percent">Variação</p> 
        </div>
      </div>
    </div>
  )
}

export default Header;