import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/AboutUs.scss'

const Contact = () => {
  return (
    <div className='contactContainer'>
      <Header />
      <div className='container'>
        
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
        
        <div className='block1'>
          <img src="assets/img/tom.jpg" alt="A face"/>
          <div className='description'>
            <h2>Contact me</h2>
            <p>Tom</p>
            <span className='line'>
              <p>Email:</p>
              <a href="mailto:tom@tailorbliss.com">tom@tailorbliss.com</a>
            </span>
            <span className='line'>
              <p>Phone:</p>
              <a href="tel:123-456-7890">123-456-7890</a>
            </span>
          </div>
        </div>
        <div className='block2'>
          <div className='description'>
            <h2>Contact me</h2>
            <p>Elijah</p>
            <span className='line'>
              <p>Email:</p>
              <a href="mailto:haha@tailorbliss.com">haha@tailorbliss.com</a>
            </span>
            <span className='line'>
              <p>Phone:</p>
              <a href="tel:123-456-7890">123-456-7890</a>
            </span>
          </div>
          <img src="assets/img/elijah.jpg" alt="A face"/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
