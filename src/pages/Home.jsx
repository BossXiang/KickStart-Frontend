import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import '../styles/Home.scss'
import { getTrendingProducts } from '../plugins/api/api_service.ts'

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([])
  const images = [
    'assets/img/hot1.png',
    'assets/img/hot2.png',
    'assets/img/hot3.png',
    'assets/img/hot4.png'
  ]
  const [isVisible1, setIsVisible1] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const [isVisible3, setIsVisible3] = useState(false)
  const [isVisible4, setIsVisible4] = useState(false)
  const [isVisible5, setIsVisible5] = useState(false)
  const [isVisible6, setIsVisible6] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible1(true);
        setTimeout(() => {
          setIsVisible2(true);
        }, 100);
        setTimeout(() => {
          setIsVisible3(true);
        }, 200);
      }
      if (window.scrollY > 600) {
        setIsVisible4(true);
        setTimeout(() => {
          setIsVisible5(true);
        }, 100);
        setTimeout(() => {
          setIsVisible6(true);
        }, 200);
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  // useEffect(() => {
  //   getTrendingProducts()
  //     .then((data) => {
  //       setTrendingProducts(data)
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching trendingProduct data:', error)
  //     })
  // }, [])
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
              <img src="assets/img/blonde.png" alt="pic" />
            </div>
            <div className="paintGroup">
              {isVisible1 && <div className="paint"><img src="assets/img/blonde1.png" alt="pic" /></div>}
              {isVisible2 && <div className="paint"><img src="assets/img/blonde2.png" alt="pic" /></div>}
              {isVisible3 && <div className="paint"><img src="assets/img/blonde3.png" alt="pic" /></div>}
            </div>
          </div>
          <div className="work">
            <div className="paintGroup">
              {isVisible6 && <div className="paint"><img src="assets/img/dog1.jpg" alt="pic" /></div>}
              {isVisible5 && <div className="paint"><img src="assets/img/dog2.jpg" alt="pic" /></div>}
              {isVisible4 && <div className="paint"><img src="assets/img/dog3.jpg" alt="pic" /></div>}
            </div>
            <div className="pic">
              <img src="assets/img/dog.png" alt="pic" />
            </div>
          </div>
        </div>
        <div className="homeTitle">These are people's favorites</div>
        <div className="trendingContainer">
          <Slider images={images} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
