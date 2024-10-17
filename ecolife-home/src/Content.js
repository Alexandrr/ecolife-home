import React, { useState } from 'react';
import './Content.css';

function Content({ showInput , lang , searchCriterias}) {
    const [searchResult, setSearchResult] = useState(null);
    const [code , setCode] = useState('');

  const handleSearch = () => {
    fetch('http://localhost:5000/api/GetData/databycode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({lang , code , searchCriterias}),
    })
    .then(response => response.json())
    .then(data => {
      setSearchResult(data);
    })
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
            value={code}
            onChange={(el) => setCode(el.target.value)}
            placeholder="Введите код товара"
            style={{ marginRight: '10px' }}
          />
          <button className="search-button" onClick={handleSearch}>ПОИСК</button>
        
          {searchResult && (
          <div className='results'>
                <h3>Результаты поиска:</h3>
                <p><strong>Артикул:</strong> {searchResult.articul}</p>
                <p><strong>Код:</strong> {searchResult.code}</p>
                <p><strong>Название:</strong> {searchResult.nomenclature}</p>
                <p><strong>Цена:</strong> {searchResult.price}</p>
                <p><strong>Количество:</strong> {searchResult.quantity}</p>
          </div>
            )}
        </div>
      )}
    </div>
  );
}

export default Content;
