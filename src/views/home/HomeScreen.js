import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Carousel />
      <Carousel />
      <Footer />
    </div>
  )
}

export default HomeScreen
