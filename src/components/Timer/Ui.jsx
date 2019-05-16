import React, { useState, useEffect } from 'react';

const TimerUi = () => {
  const setInitialTime = time => {
    return time;
  };

  const [time, setTime] = useState(setInitialTime(0));
  const [isStopped, setStop] = useState(false);

  useEffect(() => {
    console.log('useEffect entered');

    const timer = setInterval(() => {
      setTime(t => t + 1);
    }, 1000);
    isStopped && clearInterval(timer);
    return () => {
      console.log('willunmount');
      clearInterval(timer);
    };
  }, [isStopped]); //isStopped is a dependency field
  return (
    <>
      <h2>Example for useEffect</h2>
      Timer: {time}
      <button
        onClick={() => {
          setTime(0);
          setStop(prevValue => !prevValue);
        }}
      >
        {isStopped ? 'Start' : 'Stop'}
      </button>
    </>
  );
};

export default TimerUi;
