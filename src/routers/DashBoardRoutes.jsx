import { Navigate, Route, Routes } from 'react-router-dom'
import HomeScreen from '../views/home/HomeScreen'
import FavoritesScreen from '../views/favorites/FavoritesScreen'
import MovieInfo from '../components/movieinfo/MovieInfo'
import SearchScreen from '../views/search/SearchScreen'
import Profile from '../views/profile/Profile'

const DashBoardRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='home' element={<HomeScreen />} />
        <Route path='favorites' element={<FavoritesScreen />} />
        <Route path="movie/:id" element={<MovieInfo />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="profile" element={<Profile />} />
        <Route path='*' element={<Navigate to='/home' replace />} />
      </Routes>
    </div>
  )
}

export default DashBoardRoutes
