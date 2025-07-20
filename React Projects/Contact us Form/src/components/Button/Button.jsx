import React from 'react'
import {MdMessage} from "react-icons/md"
import styles from "./Button.modue.css"
const Button = () => {
  return (
    <div >
        <button className={styles.primary_btn} >
            <MdMessage />
            Via message
        </button>
        
        </div>
  )
}

export default Button