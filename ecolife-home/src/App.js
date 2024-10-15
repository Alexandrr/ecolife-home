import React, { useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Content from './Content';
import { Breadcrumb } from 'antd';
import './App.css';

function App() {
  const [breadcrumbItems, setBreadcrumbItems] = useState(['Home']);
  const [showInput, setShowInput] = useState(false);

  
  const handleMenuSelect = (key, name) => {
    setShowInput(key === '1'); 
    setBreadcrumbItems(['Home', name]);  // Обновляем хлебные крошки как массив
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
        <Sidebar MenuSelect={handleMenuSelect} /> 
        <Content showInput={showInput} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
