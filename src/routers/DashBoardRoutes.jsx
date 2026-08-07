import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const HomeScreen = lazy(() => import('../views/home/HomeScreen'))
const FavoritesScreen = lazy(() => import('../views/favorites/FavoritesScreen'))
const MovieInfo = lazy(() => import('../components/movieinfo/MovieInfo'))
const SearchScreen = lazy(() => import('../views/search/SearchScreen'))
const Profile = lazy(() => import('../views/profile/Profile'))

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
