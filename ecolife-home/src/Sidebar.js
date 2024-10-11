import React, { useState } from 'react';
import { Button, Menu } from 'antd';
import { AppstoreOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SettingOutlined } from '@ant-design/icons';
import './Sidebar.css';

const items = [
  {
    key: 'sub1',
    label: 'Подбор товара',
    children: [
      {
        key: '1',
        label: 'По коду',
      },
      {
        key: '2',
        label: 'По названию',
      },
    ],
  },
  {
    key: 'sub2',
    label: 'История',
    icon: <AppstoreOutlined />,
  },
  {
    key: 'sub3',
    label: 'Избранное',
    icon: <SettingOutlined />,
  },
];

function Sidebar({CodeSelect}) {
  const [collapse, setCollapse] = useState(false);

  const toggleCollapse = () => {
    setCollapse(!collapse)
  };

  const handleMenuSelect = ({key}) => {
    if(key === '1') {
      CodeSelect(true) ; 
    } else {
      CodeSelect(false)
    }
  } ;

  return (

    <div className='Sidebar'>
      <Button 
      type = 'primary'
      onClick={toggleCollapse}
      style={{marginBottom : 16}} >

      {collapse ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>} {/**/}
      </Button>

      <Menu
       mode="inline"
       style={{ width: 256 }}
       onSelect={handleMenuSelect}
       defaultOpenKeys={['sub1']}
       items={items}
       inlineCollapsed={collapse} // Меню сворачивается и разворачивается
      />
    </div>
  );
}

export default Sidebar;
