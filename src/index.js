import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HitsCountProvider } from './components/Context/Context';

ReactDOM.render(
  <HitsCountProvider>
    <App />
  </HitsCountProvider>,
  document.getElementById('root')
);

// ToDo: using env variable
// ToD0: Update READ.me
