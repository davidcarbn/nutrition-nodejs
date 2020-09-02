import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { LoginPage } from './Components/LoginPage/LoginPage'
import { AppLayout } from './Components/AppLayout/AppLayout'

import Axios from 'axios';
import { useAuth } from './providers/AuthContext';
import {ProtectedRoute} from './Components/RedirectHOC/ProtectedRoute'
function App() {
  const {setIsAuthenticated, isAuthenticated} = useAuth()
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await Axios.get('/api/v1/auth')
        if (response.status === 200){
          setIsAuthenticated(true)
        }
      } catch (error) {
        console.log(error)
      }
      
    }
    checkLogin()
  })
  return (  
      <Switch>
        <ProtectedRoute exact path='/' component={LoginPage} redirectCond={() => isAuthenticated} redirectLocation={"/app"} />
        <ProtectedRoute exact path='/app' component={AppLayout} redirectCond={() => !isAuthenticated} />
        <Route path='*' component={() => { return <h1>404</h1> }} />
      </Switch>
  );
}

export default App;
