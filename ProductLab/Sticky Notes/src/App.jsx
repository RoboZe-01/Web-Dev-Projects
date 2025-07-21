import { useState } from 'react'
import './App.css'
import NotesPage from './Pages/NotesPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <NotesPage />
    </>
  )
}
export default App
