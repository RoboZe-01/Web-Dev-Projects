import { useState } from 'react'
import './App.css'
import Navbar from './components/Navigation/Navbar'
import ContackHeader from './components/ContactHeader/ContackHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Navbar />
   <ContackHeader />

   </>
  )
}

export default App
