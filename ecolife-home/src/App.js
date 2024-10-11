import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Content from './Content';
import { Breadcrumb } from 'antd';
import './App.css';

function App() {
  const [breadcrumbItems, setBreadcrumbItems] = useState(['Home', 'List', 'App']);
  const [showInput, setShowInput] = useState(false);

  const handleCodeSelect = (selected, path) => {
    setShowInput(selected);
    setBreadcrumbItems(path);  // Обновляем хлебные крошки в зависимости от выбора
  };

  return (
    <div className="app">
      <Header />
      
      <div className="breadcrumbs">
        <Breadcrumb>
          {breadcrumbItems.map((item, index) => (
            <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>

      <div className="content">
        <Sidebar CodeSelect={(selected) => handleCodeSelect(selected, ['Home', 'Подбор товара', 'По коду'])} />
        <Content showInput={showInput} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
