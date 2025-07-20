import { useState } from 'react'
import './App.css'
import Navbar from './components/Navigation/Navbar'
import ContackHeader from './components/ContactHeader/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Navbar />
   <ContackHeader />
   <ContactForm />

   </>
  )
}

export default App
