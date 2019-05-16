import React, { useState, useContext } from 'react';
import { HitsCountContext } from '../Context/Context';

const CounterUi = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const { updateHitCount } = useContext(HitsCountContext);
  return (
    <>
      <h2> Example for useState </h2>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button
        onClick={() => {
          updateHitCount();
          setCount(prevCount => prevCount + 1);
        }}
      >
        +
      </button>
      <button onClick={() => setCount(prevCount => prevCount && prevCount - 1)}>
        -
      </button>
    </>
  );
};

export default CounterUi;
