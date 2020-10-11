import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { LoginPage } from './Components/LoginPage/LoginPage'
import { AppLayout } from './Components/AppLayout/AppLayout'
import Dashboard from './Components/pages/Dashboard'
import Axios from 'axios';
import { useAuth } from './providers/AuthContext';
import { ProtectedRoute } from './Components/RedirectHOC/ProtectedRoute'
import Search from './Components/pages/Search';
import { DateProvider } from './providers/DateContext';
import addFood from './Components/pages/Food/AddFood';
import FoodDetails from './Components/Food/FoodDetails';
import EditFood from './Components/pages/Food/EditFood';
import Settings from './Components/pages/Settings'
import AddCustomFood from './Components/pages/Settings/CustomFood/AddCustomFood'
import CustomFood from './Components/pages/Settings/CustomFood'
import EditCustomFood from './Components/pages/Settings/CustomFood/EditCustomFood'
function App() {
  const { setIsAuthenticated, isAuthenticated, setUser } = useAuth()
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await Axios.get('/api/v1/auth', { baseURL: process.env.REACT_APP_BASE_URL })
        if (response.status === 200) {
          setIsAuthenticated(true)
          setUser(response.data.user)
        }
      } catch (error) {
        console.log(error)
      }

    }
    checkLogin()
  }, [])
  return (
    <DateProvider>
      <Switch>
        <ProtectedRoute
          exact path='/'
          component={LoginPage}
          redirectCond={() => isAuthenticated}
          redirectLocation={"/dashboard"}
        />
        <ProtectedRoute
          exact path='/app'
          component={AppLayout}
          redirectCond={() => !isAuthenticated}
        />
        <ProtectedRoute
          exact path='/dashboard'
          component={Dashboard}
          redirectCond={() => !isAuthenticated}
          />
        <ProtectedRoute
          exact path='/food/search'
          component={Search}
          redirectCond={() => !isAuthenticated}
        />
        <ProtectedRoute
          path='/food/add'
          component={addFood}
          redirectCond={() => !isAuthenticated}
        />
        <ProtectedRoute
          exact path='/food/edit'
          component={EditFood}
          redirectCond={() => !isAuthenticated}
        />
        <ProtectedRoute
          exact path='/settings'
          component={Settings}
          redirectCond={() => !isAuthenticated}
        />
        <ProtectedRoute
          exact path='/settings/customFood'
          component={CustomFood}
          redirectCond={() => !isAuthenticated}
        />
        <ProtectedRoute
          exact path='/settings/customFood/add'
          component={AddCustomFood}
          redirectCond={() => !isAuthenticated}
        />
        <ProtectedRoute
          exact path='/settings/customFood/edit'
          component={EditCustomFood}
          redirectCond={() => !isAuthenticated}
        />
        <Route
          exact path='/dev'
          component={FoodDetails}
          redirectCond={() => !isAuthenticated}
        />
        <Route path='*' component={() => { return <h1>404</h1> }} />
      </Switch>
    </DateProvider>

  );
}

export default App;
