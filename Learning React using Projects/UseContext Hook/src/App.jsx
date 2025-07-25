import React, { createContext, useState } from 'react'

import ChildA from './Components/ChildA';

// Step 1 : Create Context

const UserContext = createContext();

// Step 2 : Wrap all the childs inside a provider 
// Step 3 : Pass the value 


function App  ()  {
  const [user, setUser]=useState({name:"Prem"});
  return (
   <>

   <UserContext.Provider value={user}>
       <ChildA />
   </UserContext.Provider>
   
   
   
   </>

  )
}

export default App
export {UserContext}
