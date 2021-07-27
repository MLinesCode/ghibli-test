import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import LoginScreen from '../views/login/LoginScreen'
import SingUpScreen from '../views/singup/SingUpScreen'
import DashBoardRoutes from './DashBoardRoutes'

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/login' component={ LoginScreen } />
          <Route exact path="/singup" component={ SingUpScreen } />
          <Route path='/' component={ DashBoardRoutes } />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
