import React, { useContext } from 'react';
import { HitsCountContext } from '../Context/Context';

const HitCountUi = () => {
  const { hitsCount } = useContext(HitsCountContext);

  return (
    <>
      <h2> Example for useContext </h2>
      Total number of hits: {hitsCount}
    </>
  );
};

export default HitCountUi;
