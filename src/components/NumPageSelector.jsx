import React from 'react'
import '../styles/NumPageSelector.scss'

const NumPageSelector = ({ selectedNumPage, onNumPageChange }) => {
  const numPageOptions = [ 6, 8, 14, 25 ]

  return (
    <div className='numPageContainer'> 
      <p>Select the number of pages</p>
      <div className='numPageSelector'>
        {numPageOptions.map((numPage) => (
          <label key={numPage} className="numPageItem">
            {numPage} Pages
            <input type="radio" value={numPage} checked={selectedNumPage === numPage} onChange={onNumPageChange} className='numPageRadio'/>
          </label>
        ))}
      </div>
    </div>
  )
}

export default NumPageSelector
