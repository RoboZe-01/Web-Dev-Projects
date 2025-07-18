import React, { useEffect, useRef, useState } from 'react'

const stopwatch = () => {
    const [isRunning, setisRunning] = useState(false);
    const[elapsedTime, setElapsedTime]=useState(0);
    const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(()=>{
    if(isRunning){
     intervalIdRef.current= setInterval(() => {
        setElapsedTime(Date.now()-startTimeRef.current)
      }, 10);
    }
    return ()=>{
      clearInterval(intervalIdRef.current);
    }

  } ,[isRunning]);

    // Function to start the stopwatch 

  function start(){

    setisRunning(true);
    startTimeRef.current= Date.now()- elapsedTime;

  }


  // Function to stop the stopwatch 
  function stop(){
    setisRunning(false);

  }

  // Function to reset the stopwatch 
  function resest (){
    setElapsedTime(0);
    setisRunning(false);

  }

  // function to format the time 
  function formatTime (){

    let hours = Math.floor(elapsedTime/(1000*60*60));
    let minutes = Math.floor(elapsedTime/(1000*60) % 60);
    let seconds = Math.floor((elapsedTime/1000)%60);
    let miliseconds = Math.floor((elapsedTime%1000)/10);

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    miliseconds = String(miliseconds).padStart(2,"0");


    
          return `${minutes}:${seconds}:${miliseconds}`
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
