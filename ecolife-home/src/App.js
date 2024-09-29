import React from 'react';
import Header from './Header'; 
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="search-section">
        <label htmlFor="searchInput">Введите код:</label>
        <input type="text" id="searchInput" placeholder="Текстовое поле для поиска" />
      </div>

      <div className="horizontal-line"></div>

      <div className="content">
        <div className="left-sidebar"></div>

        <div className="main-content"></div>

        <div className="right-sidebar"></div>
      </div>
    </div>
  );
}

export default App;
