import React, { useState } from 'react';
import Header from './Header';
import { Menu } from 'antd';  
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
            <SubMenu key="sub1"  title="Меню">
              <Menu.ItemGroup key="g1">
                <Menu.Item key="1">Подбор товара</Menu.Item>
                <Menu.Item key="2">По коду</Menu.Item>
                <Menu.Item key="3">Избранное</Menu.Item>
                <Menu.Item key="4">История</Menu.Item>
              </Menu.ItemGroup>
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

        <div className="right-sidebar"></div>
      </div>
    </div>
  );
}

export default App;
