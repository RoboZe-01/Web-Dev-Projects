import React, { useState } from 'react'
import styles from "./UseState.module.css"

const UseState = () => {
    const [Count  , SetCount]= useState(0);
    const[inputValue , SetInputvalue]=useState("")
  return (
    <>
        <section className={styles.container}>
            <button onClick={()=> SetCount(Count+1)
                
            }>Click me </button>
            <p>You clicked <span>{Count}</span> times !!</p>

            <div>
              <input type="text" placeholder="Type something" 
              value={inputValue} onChange={(e)=> SetInputvalue(e.target.value)}/>
              <h4>You typed : <strong>{inputValue}</strong> </h4>
            </div>
        </section>

    </>
  )
}

export default UseState