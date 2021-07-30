import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import Menu from '../../components/menu/Menu'
import RecommendedMovie from '../../components/recommendedmovie/RecommendedMovie'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import CoverImage from '../../assets/main_movie.jpg'
import './home.css'

const HomeScreen = () => {
  return (
    <div className="home__container">
      <Header redirectTo={ '/login' } />
      <RecommendedMovie movieCover={ CoverImage } alt={ CoverImage } movieTitle="El castillo del vagabundo" />
      <Carousel category="Mi lista" />
      <Carousel category="Lo mas visto" />
      <Carousel category="Ganadoras del Oscar" />
      <Menu />
      <Footer />
    </div>
  )
}

export default HomeScreen
