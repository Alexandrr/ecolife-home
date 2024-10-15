import React from 'react';
import './Content.css';

function Content({ showInput }) {

  const handleSearch = () => {
    fetch('http://localhost:5000/api/GetData/databycode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ lang: "string", code: "02265", searchCriterias: "string" }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Ошибка:', error));
  };

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
          <button className="search-button" onClick={handleSearch}>ПОИСК</button>
        </div>
      )}
    </div>
  );
}

export default Content;
