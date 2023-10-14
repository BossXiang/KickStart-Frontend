import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Completion.scss'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Completion = () => {
  const { orderId } = useParams()
  const navigate = useNavigate()

  const handleViewOrder = () => {
    navigate(`/searchOrder?id=${orderId}`)
  }
  useEffect(() => {
    createConfetti()
  }, [])
  const createConfetti = () => {
    for (let i = 0; i < 100; i++) {
      const randomRotation = Math.floor(Math.random() * 360)
      const randomWidth = Math.floor(
        Math.random() *
          Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      )
      const randomHeight = Math.floor(
        Math.random() *
          Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 500
          )
      )
      const randomAnimationDelay = Math.floor(Math.random() * 25)
      const colors = [
        '#0CD977',
        '#FF1C1C',
        '#FF93DE',
        '#5767ED',
        '#FFC61C',
        '#8497B0',
      ]
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      const confetti = document.createElement('div')
      confetti.className = 'confetti'
      confetti.style.opacity = 0
      confetti.style.top = randomHeight + 'px'
      confetti.style.right = randomWidth + 'px'
      confetti.style.backgroundColor = randomColor
      confetti.style.transform = 'skew(15deg) rotate(' + randomRotation + 'deg)'
      confetti.style.animationDelay = randomAnimationDelay + 's'
      document.getElementById('confetti-wrapper').appendChild(confetti)
    }
  }
  return (
    <div className="completionContainer">
      <Header />
      <div className="wrapper">
        <div className="modal">
          Payment Completed
          <div className="orderId">Order ID : {orderId}</div>
          <button onClick={handleViewOrder} className="viewBtn">
            View order
          </button>
        </div>
        <div id="confetti-wrapper"></div>
      </div>
      <Footer />
    </div>
  )
}

export default Completion
