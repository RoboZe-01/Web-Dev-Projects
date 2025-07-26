import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom';
import ''

const Navbar = () => {
  return (
    <>
    {/** We use link tag in react instead of anchor  */}

   
       <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
      </ul>
    </nav>
    





    {/** THis makes website to refresh whole and in react we don't want that , so that's why we dont use anchor tag in react  */}
    {/* <nav>
        <ul>
        <a href="/">Home</a>
        </ul>
        <ul>
            <a href="/about">About</a>
        </ul>
        <ul>
            <a href="/dashboard">Dashboard</a>
        </ul>
    </nav>
     */}
    
    </>
  );
}

export default Navbar
