import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-light text-center p-3">
      <p>&copy {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  )
}

export default Footer
