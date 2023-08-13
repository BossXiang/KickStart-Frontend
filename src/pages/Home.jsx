import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Home.scss'

const Home = () => {
  return (
    <div className='homeContainer'>
      <Header />
      <div className="homePage">
        <div className='mainImg' />
        <div className='homeTitle'>These are people's favorites</div>
        <div className="trendingContainer">
          <div className="trendingProduct" />
          <div className="trendingProduct" />
          <div className="trendingProduct" />
          <div className="trendingProduct" />
          <div className="trendingProduct" />
        </div>
        <div className='homeTitle'>The bliss we once tailored</div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
