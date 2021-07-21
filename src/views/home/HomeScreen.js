import React from 'react'
import MovieInfo from '../../components/movieinfo/MovieInfo'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <MovieInfo />
      <h2>Home Screen</h2>
      <Footer />
    </div>
  )
}

export default HomeScreen
