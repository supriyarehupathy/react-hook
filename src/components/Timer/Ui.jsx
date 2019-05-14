import React, { useState, useEffect } from 'react';

const TimerUi = () => {
  const setInitialTime = () => {
    console.log('initial time '); //ToDo: need to check
    return '';
  };

  const [time, setTime] = useState(setInitialTime());
  const [isStopped, setStop] = useState(false);

  useEffect(() => {
    console.log('usereffect entered');

    const timer = setInterval(() => {
      console.log('data', new Date());
      const date = new Date();
      setTime(date.getTime());
    }, 1000);
    isStopped && clearInterval(timer);
    return () => {
      console.log('willunmount');
      clearInterval(timer);
    };
  }, [isStopped]);
  return (
    <>
      Timer: {time}
      <button onClick={() => setStop(prevValue => !prevValue)}>
        {isStopped ? 'Start' : 'Stop'}
      </button>
    </>
  );
};

export default TimerUi;
