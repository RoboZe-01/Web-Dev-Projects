import React, { useEffect, useRef, useState } from 'react'

const Stopwatch = () => {
    // State for tracking if stopwatch is running
    const [isRunning, setIsRunning] = useState(false);
    
    // State for elapsed time in milliseconds
    const [elapsedTime, setElapsedTime] = useState(0);
    
    // Refs for interval ID and start time
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);
    const lapTimesRef = useRef([]); // New: For storing lap times

    // Effect to handle the timer interval
    useEffect(() => {
        if (isRunning) {
            // Update elapsed time every 10ms for smooth display
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }
        
        // Cleanup function to clear interval
        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, [isRunning]);

    // Start the stopwatch
    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    // Stop the stopwatch
    function stop() {
        setIsRunning(false);
    }

    // Reset the stopwatch
    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
        lapTimesRef.current = []; // Clear lap times on reset
    }

    // Record a lap time
    function recordLap() {
        const currentTime = formatTime();
        lapTimesRef.current = [...lapTimesRef.current, currentTime];
    }

    // Format time as MM:SS:ms
    function formatTime() {
        const totalSeconds = elapsedTime / 1000;
        
        // Calculate time components
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds % 60);
        const milliseconds = Math.floor((elapsedTime % 1000) / 10);

        // Pad with leading zeros
        const pad = (num) => String(num).padStart(2, "0");
        
        return `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
    }

    return (
        <div className='stopwatch'> 
            {/* Time display */}
            <div className="display">
                {formatTime()}
            </div>

            {/* Control buttons */}
            <div className="controls">
                {!isRunning ? (
                    <button className='start-btn' onClick={start}>Start</button>
                ) : (
                    <button className='stop-btn' onClick={stop}>Stop</button>
                )}
                <button className='reset-btn' onClick={reset}>Reset</button>
                <button className='lap-btn' onClick={recordLap} disabled={!isRunning}>Lap</button>
            </div>

            {/* Lap times display - new feature */}
            {lapTimesRef.current.length > 0 && (
                <div className="laps">
                    <h3>Lap Times</h3>
                    <ul>
                        {lapTimesRef.current.map((lap, index) => (
                            <li key={index}>Lap {index + 1}: {lap}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Stopwatch;