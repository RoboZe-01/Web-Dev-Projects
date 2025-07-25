import React, { useEffect, useState } from 'react'

const App = () => {
 
  const [counter , setCounter]= useState(0);
  const [data , setData]= useState(0);

  useEffect(() =>{
    // callOnce();\
    CounterFunction()
  },[counter])

  function CounterFunction (){
    console.log(`Counter ${counter}`)
  }  
 function callOnce(){
    console.log("callOnce function called");
  }
  

  return (
  <>
  <h1>UseEffect Hooks</h1>
  <button onClick={
    ()=> {
      setCounter(counter+1)
    }
  }>Counter {counter}</button>
  <button onClick={
    ()=> {
      setData(data+1)
    }
  }>data {data}</button>
  
  </>
  )
}

export default App