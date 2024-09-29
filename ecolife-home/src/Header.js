import React from 'react';
import './Header.css'; 
import logo3 from './photos/logo3.jpg'; 
import logo2 from './photos/logo2.jpg'; 
function Header() {
  return (
    <header className="header">

      <div className="logo">
        <img src={logo3} alt="Ecolife" />
      </div>

      <div className="right-section">
        <div className="language-switcher">
          <button>RU</button>
          <button>AZ</button>
        </div>
        <div className="profile-icon">
          <img src={logo2} alt="Profile" />
        </div>
      </div>
    </header>
  );
}

export default Header;
