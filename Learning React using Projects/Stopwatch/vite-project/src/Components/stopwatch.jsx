import React, { useEffect, useRef, useState } from 'react'

const stopwatch = () => {
    const [isRunning, setisRunning] = useState(false);
    const[elapsedTime, setElapsedTime]=useState(0);
    const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(()=>{

  } , [isRunning]);

    // Function to start the stopwatch 

  function start(){

  }


  // Function to stop the stopwatch 
  function stop(){

  }

  // Function to reset the stopwatch 
  function resest (){

  }

  // function to format the time 
  function formatTime (){
          return `00:00:00`
  }
  return (
         // div to show the stopwatch
      <div className='stopwatch'> 
        
          <div className="display">
            {formatTime()}
          </div>

          <div className="controls">
            <button className='start-btn' onClick={start}>Start</button>
            <button className='stop-btn' onClick={stop}>Stop</button>
            <button className='reset-btn' onClick={resest}>Restart</button>
          </div>

      </div>
  )
}

export default stopwatch
