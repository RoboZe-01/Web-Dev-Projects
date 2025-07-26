import React from 'react'
import Home from './Home'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    {/** We use link tag in react instead of anchor  */}

   
       <nav>
      <ul>
        <li>
          <NavLink to='/' className={({isActive})=> isActive ? "active-link": "" }>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about' className={({isActive})=> isActive ? "active-link": "" }>About</NavLink>
        </li>
        <li>
          <NavLink to='/dashboard'  className={({isActive})=> isActive ? "active-link": "" } >Dashboard</NavLink>
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
