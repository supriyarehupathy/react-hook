import React from 'react';
import { Link } from 'react-router-dom';
import { hasLoggedIn, clearLocalData } from '../../utils/utils';
import usePerson from '../../utils/customHooks/usePerson';

const Navigation = () => {
  return <PublicRoutes />;
};

const PrivateRoutes = () => {
  //ToDo later
  return <></>;
};

const PublicRoutes = () => {
  const isLoggedIn = hasLoggedIn();
  const person = usePerson();

  return (
    <>
      <div
        style={{
          backgroundColor: '#3399FF',
          height: '50px',
          lineHeight: '50px',
          paddingLeft: '30px',
          flexDirection: 'row',
          display: 'flex'
        }}
      >
        <div style={{ flex: '0.9' }}>
          <Link style={{ paddingRight: '10px' }} to="/">
            Home
          </Link>
          <Link to="/login" onClick={clearLocalData}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </Link>
        </div>
        <div style={{ color: 'white' }}>{isLoggedIn && person.name} </div>
      </div>
    </>
  );
};

export default Navigation;
