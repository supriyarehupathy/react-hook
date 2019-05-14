import React from 'react';
import { NavLink } from 'react-router-dom';
const LeftMenuUi = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#80BEFB',
          paddingLeft: '30px',
          height: '80vh'
        }}
      >
        <NavLink to="/list"> List</NavLink>
        <NavLink to="/timer"> Timer</NavLink>
        <NavLink to="/counter"> Counter</NavLink>
        <NavLink to="/text-input"> Text Input </NavLink>
        <NavLink to="/number-of-page-hits"> Page Hits Count </NavLink>
        <NavLink to="/counter-with-reducer"> Counter with reducer </NavLink>
      </div>
    </>
  );
};

export default LeftMenuUi;
