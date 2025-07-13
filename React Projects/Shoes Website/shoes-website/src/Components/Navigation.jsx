import React, { useState } from 'react';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='container'>
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      
      <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className={menuOpen ? 'active' : ''} role="menubar">
        <li role="menuitem"><a href="#">Menu</a></li>
        <li role="menuitem"><a href="#">Location</a></li>
        <li role="menuitem"><a href="#">About</a></li>
        <li role="menuitem"><a href="#">Contact</a></li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navigation;