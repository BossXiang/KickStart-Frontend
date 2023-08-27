import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import '../styles/Shop.scss'

// 在 QuantitySelector 组件中
const QuantitySelector = ({ quantity = 1, onChange }) => {
  const [localQuantity, setLocalQuantity] = useState(quantity)

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
