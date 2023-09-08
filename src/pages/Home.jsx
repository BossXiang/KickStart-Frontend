import React, { useState, useEffect, Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import '../styles/Home.scss'
import { getTrendingProducts } from '../plugins/api/api_service.ts'

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([])
  const images = [
    'assets/samples/sample1.jpg',
    'assets/samples/sample2.jpg',
    'assets/samples/sample3.jpg',
    'assets/samples/sample4.jpg',
    'assets/samples/sample5.jpg',
  ]
  
  useEffect(() => {
    getTrendingProducts()
      .then((data) => {
        setTrendingProducts(data)
      })
      .catch((error) => {
        console.error('Error fetching trendingProduct data:', error)
      })
  }, [])
  return (
    <div className="homeContainer">
      <Header />
      <div className="homePage">
        <img
          src="assets/img/background.png"
          alt="background"
          className="mainImg"
        />
        <div className="homeTitle">The bliss we once tailored</div>
        <div className="workContainer">
          <div className="work">
            <div className="pic">
              <img src="assets/samples/sample1.jpg" alt="pic" />
            </div>
            <div className="paintGroup">
              <div className="paint"></div>
              <div className="paint"></div>
              <div className="paint"></div>
            </div>
          </div>
          <div className="work">
            <div className="paintGroup">
              <div className="paint"></div>
              <div className="paint"></div>
              <div className="paint"></div>
            </div>
            <div className="pic">
              <img src="assets/samples/sample2.jpg" alt="pic" />
            </div>
          </div>
        </div>
        <div className="homeTitle">These are people's favorites</div>
        <div className="trendingContainer">
          <Slider images={images} />
        </div>
        <div className="subscriptionContainer">
          <div className="subscription">
            <p className="subscriptionTitle">
              Subscribe for special discounts and first look at new artworks
            </p>
            <p>Don't worry, we don't have time to send a lot of mails</p>
            <label className="emailLabel">Enter your email here *</label>
            <input type="text" className="emailInput" />
            <button className="signUp">Sign up</button>
          </div>
        </div>
        <div className="partnerContainer">
          <p className="partnerTitle">Our Partners</p>
          <div className="partnerList">
            {/* <img src="assets/img/pixar.png" alt="pixar" className="pixar" /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
