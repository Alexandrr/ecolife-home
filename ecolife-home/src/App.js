import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Content from './Content';
import { Breadcrumb } from 'antd';
import './App.css';

function App() {
  const [showInput, setShowInput] = useState(false);

  const handleMenuSelect = (selected) => {
    setShowInput(selected);  // Определяем, какая опция была выбрана
  };

  return (
   <div className='app'>
    <Header/>

    <div className='content'>
    <Sidebar CodeSelect={handleMenuSelect}/>
    <Content showInput={showInput}/>
    </div>

    <Footer/>
   </div>
  );
}

export default App;
