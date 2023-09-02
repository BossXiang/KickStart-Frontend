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
          <div className='demoImg'><img src="assets/samples/sample1.jpg" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/samples/sample2.jpg" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/samples/sample3.jpg" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/samples/sample4.jpg" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/samples/sample5.jpg" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/samples/sample6.jpg" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/samples/sample7.jpg" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/samples/sample8.jpg" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/samples/sample9.jpg" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/samples/sample10.jpg" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/samples/sample11.jpg" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/samples/sample12.jpg" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/samples/sample13.jpg" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/samples/sample14.jpg" alt="demo work"/></div>
          <div className='demoImg'><img src="assets/samples/sample15.jpg" alt="demo work"/></div>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default MyWork
