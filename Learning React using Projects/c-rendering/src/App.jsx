import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login_btn from './components/Login_btn'
import Logout_btn from './components/logot_btn'

function App() {
  const [isLoggedin, setLogin] = useState(false)
 
  
 if (isLoggedin){
  return(
    <Logout_btn/>
  )
 }else{
  <Login_btn/>
 }
}

export default App
