import React, { useState } from 'react';
import { Button, Menu } from 'antd';
import { AppstoreOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined, SettingOutlined, ContainerOutlined, BarcodeOutlined } from '@ant-design/icons';
import './Sidebar.css';

const items = [
  {
    key: 'sub1',
    label: 'Подбор товара',
    icon: <SearchOutlined />,
    children: [
      { key: '1', label: 'По коду', icon: <BarcodeOutlined /> },
      { key: '2', label: 'По названию', icon: <ContainerOutlined /> },
    ],
  },
  { key: 'sub2', label: 'История', icon: <AppstoreOutlined /> },
  { key: 'sub3', label: 'Избранное', icon: <SettingOutlined /> },
];

function Sidebar({ MenuSelect }) {
  const [collapse, setCollapse] = useState(false);


  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  

  const handleMenuSelect = ({ key, domEvent }) => {
    const selectedText = domEvent.target.innerText;  
    MenuSelect(key, selectedText);  
  };

  return (
    <div className={`left-sidebar ${collapse ? 'see' : 'notsee'}`}>
      <Button 
        type='primary'
        onClick={toggleCollapse}
        style={{ marginBottom: 16 }}
      >
        {collapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>

      <Menu
        mode="inline"
        onSelect={handleMenuSelect}
        defaultOpenKeys={['sub1']}
        items={items}
        inlineCollapsed={collapse}  
      />
    </div>
  );
}

export default Sidebar;
