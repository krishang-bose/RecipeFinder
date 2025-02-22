import { useState, useEffect } from 'react';

const Timer1 = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState('stopwatch');
  const [inputTime, setInputTime] = useState(60);

  useEffect(() => {
    let intervalId;
    
    if (isRunning) {
      intervalId = setInterval(() => {
        if (mode === 'stopwatch') {
          setTime(prevTime => prevTime + 1);
        } else {
          setTime(prevTime => {
            if (prevTime <= 0) {
              setIsRunning(false);
              return 0;
            }
            return prevTime - 1;
          });
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, mode]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(mode === 'countdown' ? inputTime : 0);
  };

  const toggleMode = () => {
    setIsRunning(false);
    setMode(prevMode => {
      const newMode = prevMode === 'stopwatch' ? 'countdown' : 'stopwatch';
      setTime(newMode === 'countdown' ? inputTime : 0);
      return newMode;
    });
  };

  const handleTimeInput = (e) => {
    const value = parseInt(e.target.value) || 0;
    setInputTime(value);
    if (mode === 'countdown' && !isRunning) {
      setTime(value);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="w-full max-w-md mx-auto rounded-lg shadow-lg overflow-hidden bg-gradient-to-br from-orange-50 to-green-200">
        {/* Header */}
        <div className="bg-orange-100 p-4 border-b-4 border-green-200">
          <h1 className="text-center text-2xl font-bold text-green-700">
            {mode === 'stopwatch' ? 'Stopwatch' : 'Countdown Timer'}
          </h1>
        </div>

        {/* Content */}
        <div className="p-6 bg-green-50/50">
          <div className="flex flex-col items-center gap-4">
            {/* Timer Display */}
            <div className="text-7xl font-sans font-black tracking-wider text-green-700 bg-white px-6 py-4 rounded-xl shadow-sm w-full text-center border-2 border-green-200 tabular-nums">
              {formatTime(time)}
            </div>
            
            {/* Input for countdown mode */}
            {mode === 'countdown' && !isRunning && (
              <div className="flex items-center gap-2 w-full justify-center">
                <input
                  type="number"
                  value={inputTime}
                  onChange={handleTimeInput}
                  className="w-24 p-2 border-2 border-green-200 rounded bg-green-50 text-green-700 focus:ring-2 focus:ring-green-300 focus:outline-none font-bold text-lg"
                  min="0"
                />
                <span className="text-green-700">seconds</span>
              </div>
            )}

            {/* Control Buttons */}
            <div className="flex flex-wrap gap-2 justify-center w-full">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className={`flex items-center px-4 py-2 rounded ${
                  isRunning 
                    ? 'bg-orange-200 hover:bg-orange-300' 
                    : 'bg-green-300 hover:bg-green-400'
                } text-green-800 shadow-sm font-bold transition-colors`}
              >
                {isRunning ? (
                  <>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                    </svg>
                    Pause
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                    Start
                  </>
                )}
              </button>

              <button
                onClick={handleReset}
                className="flex items-center px-4 py-2 rounded bg-green-200 hover:bg-green-300 text-green-800 shadow-sm font-bold transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset
              </button>

              <button
                onClick={toggleMode}
                className="flex items-center px-4 py-2 rounded bg-green-200 hover:bg-green-300 text-green-800 shadow-sm font-bold transition-colors"
              >
                Switch to {mode === 'stopwatch' ? 'Countdown' : 'Stopwatch'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer1;