import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Content from './Content';
import './App.css';

function App() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (e) => {
    setActiveMenu(e.key);  // Определяем, какая опция была выбрана
  };

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar handleMenuClick={handleMenuClick} />
        <Content activeMenu={activeMenu} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
