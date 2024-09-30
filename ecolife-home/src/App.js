import React, { useState } from 'react';
import Header from './Header';
import './App.css';

function App() {
  const [isListVisible, setIsListVisible] = useState(false);

  const handleSearchClick = () => {
    setIsListVisible(true); // покащывать кнопку
  };

  return (
    <div className="app">
      <Header />

      <div className="search-section">
        <label htmlFor="searchInput">Введите код:</label>
        <input type="text" id="searchInput" placeholder="Текстовое поле для поиска" />
        <button className="search-button" onClick={handleSearchClick}>ПОИСК</button>
      </div>

      <div className="horizontal-line"></div>

      <div className="content">
        <div className="left-sidebar"></div>

        <div className="main-content">
          {isListVisible && (
            <ul className="search-results">
              <li><strong>Код:</strong> —</li>
              <li><strong>Артикул:</strong> —</li>
              <li><strong>Наименование:</strong> —</li>
              <li><strong>Полное наименование:</strong> —</li>
              <li><strong>Розничная цена:</strong> —</li>
              <li><strong>Количество на складах:</strong> —</li>
            </ul>
          )}
        </div>

        <div className="right-sidebar"></div>
      </div>
    </div>
  );
}

export default App;
