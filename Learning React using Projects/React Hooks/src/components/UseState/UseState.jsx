import React, { useEffect, useState } from 'react'
import styles from "./UseState.module.css"
import HookExample from '../HookExample';

const UseState = () => {
    const [Count  , SetCount]= useState(0);
    const[inputValue , SetInputvalue]=useState("")
    useEffect(() => {
      console.log("re-rendered");

      return () => {};
    },[Count]) ;

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


            <HookExample />
        </section>

    </>
  )
}

export default UseState