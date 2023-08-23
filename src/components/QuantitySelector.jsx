import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import '../styles/Shop.scss'

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <InputGroup className='quantitySelector'>
      <Button variant="outline-secondary" id="quantityBtn" onClick={handleDecrease}>-</Button>
      <FormControl
        value={quantity}
        aria-label="Quantity"
        readOnly
        style={{ textAlign: 'center' }}
      />
      <Button variant="outline-secondary" id="quantityBtn" onClick={handleIncrease}>+</Button>
    </InputGroup>
  );
};

export default QuantitySelector;