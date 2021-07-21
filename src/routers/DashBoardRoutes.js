import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import HomeScreen from '../views/home/HomeScreen'
import FavoritesScreen from '../views/favorites/FavoritesScreen'

const DashBoardRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/home' component={ HomeScreen } />
        <Route exact path='/favorites' component={ FavoritesScreen } />
        <Redirect to='/home' />
      </Switch>
    </div>
  )
}

export default DashBoardRoutes
