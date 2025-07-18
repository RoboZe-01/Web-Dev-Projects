import './App.css'
import Stopwatch from './Components/stopwatch'  // Changed to capitalized component name

function App() {
  return (
    <>
      <h1 className='app-h1'>Stopwatch</h1>
      <div>
        <Stopwatch />  {/* Changed to capitalized component name */}
      </div>
    </>
  )
}

export default App