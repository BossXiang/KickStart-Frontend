import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

const QuantitySelector = ({ onChange, newQuantity = 1 }) => {
  const [localQuantity, setLocalQuantity] = useState(newQuantity)

  useEffect(() => {
    setLocalQuantity(newQuantity)
  }, [newQuantity])

  const handleDecrease = () => {
    if (localQuantity > 1) {
      setLocalQuantity(localQuantity - 1)
      onChange(localQuantity - 1)
    }
  }

  const handleIncrease = () => {
    setLocalQuantity(localQuantity + 1)
    onChange(localQuantity + 1)
  }

  return (
    <InputGroup className="quantitySelector">
      <Button
        variant="outline-secondary"
        id="quantityBtn"
        onClick={handleDecrease}>
        -
      </Button>
      <FormControl
        value={localQuantity}
        aria-label="Quantity"
        readOnly
        style={{ textAlign: 'center' }}
      />
      <Button
        variant="outline-secondary"
        id="quantityBtn"
        onClick={handleIncrease}>
        +
      </Button>
    </InputGroup>
  )
}

export default QuantitySelector
