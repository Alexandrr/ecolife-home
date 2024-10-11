import React from 'react';
import './Content.css';

function Content({ showInput }) {
  return (
    <div className="main-content">
      {showInput && (
        <div className="search-section">
          <label htmlFor="searchInput">Введите код:</label>
          <input
            type="text"
            id="searchInput"
            placeholder="Введите код товара"
            style={{ marginRight: '10px' }}
          />
          <button className="search-button">ПОИСК</button>
        </div>
      )}
    </div>
  );
}

export default Content;
