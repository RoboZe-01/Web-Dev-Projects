
import React from 'react';

const Navigation = () => {
    return (
    
    
    <nav className='container' >
        <div className="logo">
          <img src="./public/images/brand_logo.png" alt="logo" />
        </div>
        <ul role="menubar">
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