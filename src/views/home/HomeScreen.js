import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import Menu from '../../components/menu/Menu'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import './home.css'

const HomeScreen = () => {
  return (
    <div className="home__container">
      <Header />
      <Carousel />
      <Carousel />
      <Carousel />
      <Menu />
      <Footer />
    </div>
  )
}

export default HomeScreen
