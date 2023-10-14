import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/OurWork.scss'

const MyWork = () => {
  return (
    <div className="myWorkContainer">
      <Header />
      <div className="container">
        <div className="imageRow">
          <div className="demoImg">
            <img src="assets/our_works/sample1.png" alt="demo work" />
          </div>
          <div className="demoImg">
            <img src="assets/our_works/sample2.png" alt="demo work" />
          </div>
          <div className="demoImg">
            <img src="assets/our_works/sample3.png" alt="demo work" />
          </div>
          <div className="demoImg">
            <img src="assets/our_works/sample4.png" alt="demo work" />
          </div>
          <div className="demoImg">
            <img src="assets/our_works/sample11.png" alt="demo work" />
          </div>
          <div className="demoImg">
            <img src="assets/our_works/sample6.png" alt="demo work" />
          </div>
          <div className="demoImg">
            <img src="assets/our_works/sample7.png" alt="demo work" />
          </div>
          <div className="demoImg">
            <img src="assets/our_works/sample8.png" alt="demo work" />
          </div>
          <div className="demoImg">
            <img src="assets/our_works/sample9.png" alt="demo work" />
          </div>
          <div className="demoImg">
            <img src="assets/our_works/sample17.png" alt="demo work" />
          </div>
          <div className="demoImg">
            <img src="assets/our_works/sample5.png" alt="demo work" />
          </div>
          <div className="demoImg">
            <img src="assets/our_works/sample12.png" alt="demo work" />
          </div>
          <div className="demoImg">
            <img src="assets/our_works/sample13.png" alt="demo work" />
          </div>
          <div className="demoImg">
            <img src="assets/our_works/sample14.png" alt="demo work" />
          </div>
          <div className="demoImg">
            <img src="assets/our_works/sample16.png" alt="demo work" />
          </div>
        </div>
        <div className="gallery">
          <p className="galleryTitle">
            Step Inside a World of Artistry – Explore Our VR Gallery!
          </p>
          <button className="tourBtn">
            <span>
              <a href="/gallery" style={{textDecoration: 'none'}}>
                <img
                  src="assets/img/art-icon.png"
                  alt="icon"
                />
                Take a tour!
              </a>
            </span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default MyWork
