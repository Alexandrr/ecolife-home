import React, { useState } from 'react';
import { Divider } from 'antd';
import { Input} from 'antd';
import './Content.css';

function Content({ showInput , lang , searchCriterias}) {
    const { Search } = Input;
    const [searchResult, setSearchResult] = useState(null);
    // const [code , setCode] = useState('');
    
  const onSearch = (value, _e, info) => {
    console.log(info?.source, value);
    fetch('http://localhost:5000/api/GetData/databycode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({lang , code: value , searchCriterias}),
    })
    .then(response => response.json())
    .then(data => {
      setSearchResult(data);
    })
    .catch(error => console.error('Ошибка:', error));
  }

  return (
    <div className="main-content">
      {showInput && (
        <div className="search-section">
          <Search placeholder="Введите код товара" 
          onSearch={onSearch} 
          style={{
            width: 200,
          }}
          enterButton />
          {searchResult && (           
          <div className='results'>
                <Divider orientation="left">Результат поиска</Divider>
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
