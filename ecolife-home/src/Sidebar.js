import React, { useState } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
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

function Sidebar({ handleMenuClick }) {
  const [showInput, setShowInput] = useState(false);

  const handleMenuSelect = ({ key }) => {
    if (key === '1') {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  };

  return (
    <div className='Sidebar'>
      <Menu
        mode="inline"
        style={{ width: 256 }}
        onClick={handleMenuClick}
        onSelect={handleMenuSelect}
        defaultOpenKeys={['sub1']}
        items={items}
      />

      {showInput && (
        <div className="search-section">
          <label htmlFor="searchInput">Введите код:</label>
          <input
            type="text"
            id="searchInput"
            placeholder="Введите код товара"
            style={{ marginTop: '10px', width: '100%' }}
          />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
