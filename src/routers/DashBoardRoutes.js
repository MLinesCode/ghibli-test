import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import HomeScreen from '../views/home/HomeScreen'
import FavoritesScreen from '../views/favorites/FavoritesScreen'
import MovieInfo from '../components/movieinfo/MovieInfo'
import SearchScreen from '../views/search/SearchScreen'

const DashBoardRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/home' component={ HomeScreen } />
        <Route exact path='/favorites' component={ FavoritesScreen } />
        <Route exact path="/movie" component={ MovieInfo } />
        <Route exact path="/search" component={ SearchScreen } />
        <Redirect to='/home' />
      </Switch>
    </div>
  )
}

export default DashBoardRoutes
