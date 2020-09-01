import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { LoginPage } from './Components/LoginPage/LoginPage'
import { AppLayout } from './Components/AppLayout/AppLayout'
import { ProtectedRoute } from './protected.route';
import Auth from './Auth'
function App() {
  return (
    <Auth>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <ProtectedRoute exact path='/app' component={AppLayout} />
        <Route path='*' component={() => { return <h1>404</h1> }} />
      </Switch>
    </Auth>

  );
}

export default App;
