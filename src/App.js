import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import CounterUi from './components/Counter/Ui';
import CounterWithReducer from './components/CounterWithReducer/Ui';
import './App.css';
import HomeUi from './containers/Home/Ui';
import TimerUi from './components/Timer/Ui';
import Navigation from './components/Navigation/Ui';
import ListUi from './components/List/Ui';
import HitsCountUi from './components/HitCount/Ui';
import TextInput from './components/UI/TextInput/Ui';
import LoginUi from './components/Login/Ui';
import { hasLoggedIn } from './utils/utils';

const App = () => {
  return (
    <>
      <Router>
        <div
          style={{
            display: 'flex',
            justifyContent: 'centers',
            alignItems: 'left',
            flexDirection: 'column'
          }}
        >
          <Switch>
            <PublicRoute exact path="/" component={HomeUi} />
            <PublicRoute path="/login" component={LoginUi} />

            <PrivateRoute exact path="/timer" component={TimerUi} />
            <PrivateRoute sensitive path="/counter" component={CounterUi} />
            <PrivateRoute path="/number-of-page-hits" component={HitsCountUi} />
            <PrivateRoute path="/list" component={ListUi} />
            <PrivateRoute path="/text-input" component={TextInput} />
            <PrivateRoute
              path="/counter-with-reducer"
              render={() => <CounterWithReducer value={5} />}
            />
            <Route render={() => <div> Page not found</div>} />
          </Switch>
          <div
            style={{
              backgroundColor: '#3399FF',
              height: '50px',
              color: 'white',
              lineHeight: '50px',
              textAlign: 'center'
            }}
          >
            {/* ToDo: Fixed footer */}
            Footer
          </div>
        </div>
      </Router>
    </>
  );
};
const PrivateRoute = props => (
  <>
    {hasLoggedIn ? (
      <>
        <Navigation />
        <div style={{ height: '80vh' }}>
          <Route {...props} />
        </div>
      </>
    ) : (
      <Redirect
        to={{
          pathname: '/login'
          // state: { referrer: currentLocation }
        }}
      />
    )}
  </>
);
const PublicRoute = props => (
  <>
    {hasLoggedIn ? (
      <>
        <Navigation />
        <div
          style={{
            height: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Route {...props} />
        </div>
      </>
    ) : (
      <Redirect
        to={{
          pathname: '/login'
          // ToDo: state: { referrer: currentLocation }
        }}
      />
    )}
  </>
);
export default App;
//ToDo: withrouter
