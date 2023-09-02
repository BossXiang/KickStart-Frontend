import React from 'react'
import "../styles/RadioSelector.scss";

const RadioSelector = ({ setOption, selectedOption, options }) => {
  const handleRadioChange = (event) => {
    setOption(event.target.value)
  };

  return (
    <div className="container">
      {options.map((option, idx) => (
        <div key={idx}>
          <input
            type="radio"
            name="delivery"
            value={option}
            id={option}
            checked={selectedOption === option}
            onChange={handleRadioChange}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioSelector;
