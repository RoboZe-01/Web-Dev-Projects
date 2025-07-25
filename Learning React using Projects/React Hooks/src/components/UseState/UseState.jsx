import React, { useEffect, useState } from 'react';
import styles from "./UseState.module.css";
import HookExample from '../HookExample';

const UseState = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");
  
    useEffect(() => {
      console.log("Count changed:", count);
    }, [count]);

    return (
        <>
            <section className={styles.container}>
                <button onClick={() => setCount(count + 1)}>
                    Click me 
                </button>
                <p>You clicked <span>{count}</span> times!!</p>

                <div>
                    <input 
                        type="text" 
                        placeholder="Type something" 
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <h4>You typed: <strong>{inputValue}</strong></h4>
                </div>

                <HookExample />
            </section>
        </>
    );
}

export default UseState;