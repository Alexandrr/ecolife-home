import React from 'react';
import { Menu } from 'antd';
import './Sidebar.css';

const { SubMenu } = Menu;

function Sidebar({ handleMenuClick }) {
  return (
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
  );
}

export default Sidebar;
