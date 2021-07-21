import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import DashBoardRoutes from './DashBoardRoutes'

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' component={ DashBoardRoutes } />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
