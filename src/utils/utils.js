import { LOGIN_LOCAL_STORAGE_KEY } from '../config/constants';
export const hasLoggedIn = () => {
  const status = localStorage.getItem(LOGIN_LOCAL_STORAGE_KEY);
  return status || false;
};

export const clearLocalData = () => {
  localStorage.removeItem(LOGIN_LOCAL_STORAGE_KEY);
};
