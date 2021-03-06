import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { LoginPage } from './Components/pages/LoginPage/LoginPage'
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
import DashboardDetails from './Components/pages/Dashboard/Details';
import RDA from './Components/pages/Settings/RDA';
import { RDAProvider, useRDA } from './providers/RDAProvider';
function App() {
  const { setIsAuthenticated, isAuthenticated, setUser } = useAuth()
  const [appLoading, setAppLoading] = useState(false)
  useEffect(() => {
    const checkLogin = async () => {
      try {
        setAppLoading(true)
        const response = await Axios.get('/api/v1/auth', { baseURL: process.env.REACT_APP_BASE_URL })
        if (response.status === 200) {
          setIsAuthenticated(true)
          setUser(response.data.user)
          setAppLoading(false)
        }
      } catch (error) {
        console.log(error)
      }

    }
    console.log(document.cookie)
    if (document.cookie.indexOf('logged') > -1) {
      checkLogin()
    } else {
      setIsAuthenticated(false)
    }

  }, [])
  if (appLoading) {
    return (
      <div className="spinner-outer">
        <img src="/spinner.svg" className="spinner" />
      </div>
    )
  } else {
    return (
      <div className="app-layout">
        <DateProvider>
          <RDAProvider>

          
          <Switch>
            <ProtectedRoute
              exact path='/'
              component={LoginPage}
              redirectCond={() => isAuthenticated}
              redirectLocation={"/dashboard"}
            />
            <ProtectedRoute
              exact path='/dashboard'
              component={Dashboard}
              redirectCond={() => !isAuthenticated}
            />
            <ProtectedRoute
              exact path='/dashboard/details'
              component={DashboardDetails}
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
            <ProtectedRoute
              exact path='/settings/rda'
              component={RDA}
              redirectCond={() => !isAuthenticated}
            />
            <Route
              exact path='/dev'
              component={FoodDetails}
              redirectCond={() => !isAuthenticated}
            />
            <Route path='*' component={() => { return <h1>404</h1> }} />
          </Switch>
          </RDAProvider>
        </DateProvider>
      </div>
    )
  }
}

export default App;
