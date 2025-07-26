import React from "react"
import { Routes } from "react-router"
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Navbar from "./components/Navbar";
import './App.css'

// Step 1 : Importing the router dom 


// Step 2 : Initialising the router routes 
const router = createBrowserRouter(
[

  {
    path:"/",
    element: 
      <div>
        <Navbar />
        <Home />
      </div>,
  },

  {
     path:"/about",
    element:  
      <div>
        <Navbar />
        <About />
      </div>,
  },

  {
     path:"/dashboard",
    element: 
     <div>
        <Dashboard />
        <Home />
      </div>,
  },
  {
    path :"student/:id"
  },
]

);
function App() {
  

  return (
    <>

    {/** Providing context to the elemts so that it knows ki kya kya routes bane hai   */}

    <RouterProvider router={router} />
   
    </>

  )
}

export default App
