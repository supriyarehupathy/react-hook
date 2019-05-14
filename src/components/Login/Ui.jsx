import React from 'react';
import { Redirect } from 'react-router-dom';
import { LOGIN_LOCAL_STORAGE_KEY } from '../../config/constants';
import { hasLoggedIn } from '../../utils/utils';
const LoginUi = ({ history }) => {
  const login = () => {
    localStorage.setItem(LOGIN_LOCAL_STORAGE_KEY, true);
    history.replace('/');
  };
  const isLoggedIn = hasLoggedIn();
  return (
    <>
      <div>
        {isLoggedIn ? (
          <>
            <Redirect to="/" />
            {/* ToDo: need change */}
          </>
        ) : (
          <button onClick={() => login()}>Login</button>
        )}
      </div>
    </>
  );
};

export default LoginUi;
