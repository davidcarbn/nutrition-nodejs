import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import {LoginPage} from './Components/LoginPage/LoginPage'
import { ProtectedRoute } from './protected.route';
function App() {
  return (
    <Switch>
      <Route exact path='/' component={LoginPage} />
      <ProtectedRoute exact path='/app' component={LoginPage} />
    </Switch>
  );
}

export default App;
