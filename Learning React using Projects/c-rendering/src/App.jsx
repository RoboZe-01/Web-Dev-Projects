import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login_btn from './components/Login_btn'
import Logout_btn from './components/Logout_btn' // Fixed import path

function App() {
  const [isLoggedin, setLogin] = useState(false)
 
  if (isLoggedin) {
    return <Logout_btn />
  } else {
    return <Login_btn /> // Added return statement
  }
}

export default App