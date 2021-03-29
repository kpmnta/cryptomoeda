import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import Coin from './Components/Coin';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=BRL&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data)
    }).catch(error => console.log(error))
  }, []);

  const handleChange = event => {
    setSearch(event.target.value)
  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Procurar uma CryptoMoeda</h1>         
        <form>
          <input 
            className="coin-input"
            type="text"
            placeholder="procurar"
            onChange={handleChange}
          />
        </form>
      </div>
      <Header />
      {filteredCoins.map(coin => {
        return (
          <Coin 
            key={ coin.id }
            name={ coin.name }
            image={ coin.image }
            symbol={ coin.symbol }
            price={ coin.current_price }
            priceChange={ coin.price_change_percentage_24h }
          />
        )
      })}
    </div>
  );
}

export default App;
