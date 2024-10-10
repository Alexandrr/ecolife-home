import React from 'react';
import './Content.css';

function Content({ activeMenu }) {
  return (
    <div className="main-content">
      {activeMenu === '7' && (
        <div className="search-section">
          <label htmlFor="searchInput">Введите код:</label>
          <input
            type="text"
            id="searchInput"
            placeholder="Текстовое поле для поиска"
            style={{ marginRight: '10px' }}
          />
          <button className="search-button">ПОИСК</button>
        </div>
      )}
    </div>
  );
}

export default Content;
