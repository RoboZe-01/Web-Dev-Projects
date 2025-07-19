import React from 'react'
import styles from "./Navigation.module.css"

const Navbar = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div>
        <img src="/images/logo.png" alt="img" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      

    </nav>
  )
}

export default Navbar
