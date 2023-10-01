import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/OurWork.scss'

const MyWork = () => {
  return (
    <div className='myWorkContainer'>
      <Header />
      <div className='container'>
        <div className='imageRow'>
          <div className='demoImg'><img src="assets/examples/style1-1.png" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/examples/style1-2.png" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/examples/style1-3.png" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/examples/style1-4.png" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/examples/style1-5.png" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/examples/style2-1.png" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/examples/style2-2.png" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/examples/style2-3.png" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/examples/style2-4.png" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/examples/style2-5.png" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/examples/style3-1.png" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/examples/style3-2.png" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/examples/style3-3.png" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/examples/style3-4.png" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/examples/style3-5.png" alt="demo work"/></div>
        </div>
        <div className='gallery'>
          <p className='galleryTitle'>Step Inside a World of Artistry – Explore Our VR Gallery!</p>
          <a href="/gallery" className='takeATour'><img src="assets/img/art-icon.png" alt="icon" className='galleryIcon'/>Take a tour!</a>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default MyWork
