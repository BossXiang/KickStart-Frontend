import React from 'react'
import '../styles/Footer.scss'

const Footer = () => {
  return (
    <footer className="bg-light text-center p-3 footer">
      <p>&copy; {new Date().getFullYear()} Tailor Bliss. All rights reserved.</p>
    </footer>
  )
}

export default Footer
