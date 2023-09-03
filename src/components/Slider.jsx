import React, { useState, useEffect } from 'react';
import '../styles/Slider.scss';

const ImageSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleHover = (imageIndex) => {
    setActiveIndex(imageIndex)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      setActiveIndex(nextIndex);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, images]);

  return (
    <div className="image-slider">
      {images.map((image, imageIndex) => (
        <div
          key={imageIndex}
          className={`image-item ${activeIndex === imageIndex ? 'active' : ''}`}
          onMouseOver={() => handleHover(imageIndex)}
        >
          <img src={image} alt={`Slide ${imageIndex + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
