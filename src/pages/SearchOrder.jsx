import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/SearchOrder.scss'

const SearchOrder = () => {
  return (
    <div className='searchContainer'>
      <Header />
      <div className="searchPage"></div>
      <Footer />
    </div>
  )
}

export default SearchOrder
