import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import './Coin.css'

const Coin = ({ image, name, symbol, price, priceChange }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={ image } />
          <h1>{ name }</h1>
          <p className="coin-symbol">{ symbol }</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">R$ { price.toFixed(2).replace('.',',') }</p>
          {priceChange < 0 ? (
              <p className="coin-percent red"> 
                <ArrowDropDownIcon style={{fill:'#f00606'}} />
                { priceChange.toFixed(2).replace('.',',') }%
              </p>
          ) : (
            <p className="coin-percent green">
              <ArrowDropUpIcon style={{fill:'#11d811'}} />
              { priceChange.toFixed(2).replace('.',',') }%
            </p> 
          )}
        </div>
      </div>
    </div>
  )
}

export default Coin
