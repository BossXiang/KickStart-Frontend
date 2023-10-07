import React, { useEffect, useState } from 'react'
import '../styles/SpaceStar.scss'

const SpaceStar = () => {
  let sky, center

  function dot(i) {
    const size = Math.round(Math.random() + 1)
    const root = document.createElement('span')
    root.style.top = center.y + 'px'
    root.style.left = center.x + 'px'
    root.classList.add('star', `size-${size}`, `axis-${i}`)
    return root
  }

  const clear = () => {
    sky.innerHTML = ''
  }

  const init = () => {
    sky = document.querySelector('#sky')
    center = {
      x: sky.clientWidth / 2,
      y: sky.clientHeight / 2,
    }
    clear()
    for (let i = 0; i < 360; i++) sky.appendChild(dot(i))
  }

  useEffect(() => {
    init()
  }, [])

  return <div id="sky"></div>
}

export default SpaceStar
