import React, { useState } from 'react'
import '../styles/ColorSelector.scss'

const ColorSelector = ({ selectedColor, onColorChange }) => {
  const colors = ['Black', 'Burgundy', 'Olive', 'Cerulean', 'Gray', 'White']

  const handleColorChange = (event) => {
    onColorChange(event.target.value)
  }

  return (
    <div className="colorContainer">
      <p>
        Color {selectedColor && selectedColor.length ? '-' : ''} {selectedColor}
      </p>{' '}
      <div className={`colorSelector colorSelector--${selectedColor}`}>
        {colors.map((color) => (
          <label
            key={color}
            className={
              selectedColor === color
                ? `colorChecked--${color}`
                : `colorLable--${color}`
            }>
            <input
              type="radio"
              value={color}
              checked={selectedColor === color}
              onChange={handleColorChange}
            />
          </label>
        ))}
      </div>
    </div>
  )
}

export default ColorSelector
