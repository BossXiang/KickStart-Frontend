import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from 'react-bootstrap'
import '../styles/Home.scss'

const Home = () => {
  return (
    <div className='homeContainer'>
      <Header />
      <Container className="my-5">
        <h1>Welcome to My Website</h1>
        <p>This is a simple example of a React and Bootstrap 5 website.</p>
      </Container>
      <Footer />
    </div>
  )
}

export default Home
