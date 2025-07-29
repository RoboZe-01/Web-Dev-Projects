import { useState } from 'react'
import './App.css'

function App() {


  return (
  <>
    <div className='h-screen flex items-center justify-center'>

      <div className='bg-white rounded-xl p-6 w-96'>
        <form className='flex flex-col items-center'>
          <input className = 'border-2 border-black px-3 py-1 text-xl rounded' type="text" placeholder='Enter Name here' />

          <input className = 'border-2 border-black px-3 py-1 text-xl rounded' type="password" placeholder='Enter Password' />

          <input className = 'border-2 border-black px-3 py-1 text-xl rounded' type="email" placeholder='Enter Your email' />

          <input className = 'border-2 border-black px-3 py-1 text-xl rounded' type="password" placeholder='Confirm Password' />

          <button className='text-xl px-4 rounded bg-emerald-500'></button>
         
        </form>
      </div>
    </div>
  </>
  )
}

export default App
