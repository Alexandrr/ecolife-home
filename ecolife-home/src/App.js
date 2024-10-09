import React, { useState } from 'react';
import Header from './Header';
import { Menu } from 'antd';
import Footer from './Footer';  
import { MailOutlined } from '@ant-design/icons';
import './App.css';

const { SubMenu } = Menu;

function App() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (e) => {
    setActiveMenu(e.key);  // Определяем, какая опция была выбрана
  };

  return (
    <div className="app">
      <Header />

      <div className="content">
      <div className="left-sidebar">
          <Menu
            mode="inline"
            style={{ width: 256 }}
            onClick={handleMenuClick}
          >
            <SubMenu key="sub1" title="Меню">
              <Menu.Item key="5">История</Menu.Item>
              <Menu.Item key="6">Избранное</Menu.Item>
              <SubMenu key="sub2" title="Подбор товара">
                <Menu.Item key="7">По коду</Menu.Item>
                <Menu.Item key="8">По названию</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </div>

        <div className="main-content">
          {activeMenu === '2' && (
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
        <Footer/>
      </div>
    </div>
  );
}

export default App;
