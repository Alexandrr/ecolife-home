import React from 'react';
import './Header.css'; 
import logo3 from './photos/logo3.jpg';  // Большой логотип
import logo2 from './photos/logo2.jpg';  // Маленький логотип

function Header({onLanguageChange}) {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo3} alt="Ecolife" />
      </div>

      <div className="right-section">
        <div className="profile-icon">
          <img src={logo2} alt="Small logo" />
        </div>
        <div className="language-switcher">
          <button onClick={onLanguageChange('ru')}>RU</button>
          <button onClick={onLanguageChange('az')}>AZ</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
