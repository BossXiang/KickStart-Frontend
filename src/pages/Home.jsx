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
        <div className='homeTitle'>'These are people's favorites.'</div>
        <div className="trendingContainer">
          <div className="trendingProduct" />
          <div className="trendingProduct" />
          <div className="trendingProduct" />
          <div className="trendingProduct" />
          <div className="trendingProduct" />
        </div>
        <div className='homeTitle'>The bliss we once tailored</div>
        <div className="workContainer">
          <div className="work" />
          <div className="mainWork" />
          <div className="work" />
        </div>
        <div className='aboutUsTitle'>About us</div>
        <div className='aboutUsContainer'>
          <img src="/assets/img/elijah.jpg" alt="Elijah" className='pictureLeft'/>
          <div className='verticalContainer'>
            <div className='description-left'>
              <p>Hi. I am Elijah</p>
              <p>The Co-founder of Tailor Bliss</p>
            </div>
            <div className='description-right'>
              <p>Hi. I am Tom</p>
              <p>The Co-founder of Tailor Bliss</p>
            </div>
          </div>
          <img src="/assets/img/tom.jpg" alt="Tom" className='pictureRight'/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
