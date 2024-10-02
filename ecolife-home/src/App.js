import React, { useState } from 'react';
import Header from './Header';
import './App.css';

function App() {
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  const handleMenuClick = (type) => {
    if (type === 'code') {
      setIsCodeVisible(true);
    } else {
      setIsCodeVisible(false);
    }
  };

  return (
    <div className="app">
      <Header />

      <div className="content">
        <div className="left-sidebar">
          <h3>Меню</h3>
          <button className="menu-button" onClick={() => handleMenuClick('product')}>Подбор товара</button>
          <button className="menu-button" onClick={() => handleMenuClick('code')}>По коду</button>
        </div>

        <div className="main-content">
          {isCodeVisible && (
            <div className="search-section">
              <label htmlFor="searchInput">Введите код:</label>
              <input type="text" id="searchInput" placeholder="Текстовое поле для поиска" />
              <button className="search-button">ПОИСК</button>
            </div>
          )}
        </div>

        <div className="right-sidebar"></div> 
      </div>
    </div>
  );
}

export default App;
