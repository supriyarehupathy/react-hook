import React, { useContext } from 'react';
import { HitsCountContext } from '../Context/Context';

const HitCountUi = () => {
  const { hitsCount } = useContext(HitsCountContext);

  return <>Total number of hits: {hitsCount}</>;
};

export default HitCountUi;
