import React, { useState, useEffect } from 'react';
import '../styles/Slider.scss';

const ImageSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // 自动切换下一张图片的逻辑，每5秒切换一次
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      setActiveIndex(nextIndex);
    }, 5000);

    // 清除定时器以防止内存泄漏
    return () => clearInterval(interval);
  }, [activeIndex, images]);

  return (
    <div className="image-slider">
      {images.map((image, imageIndex) => (
        <div
          key={imageIndex}
          className={`image-item ${activeIndex === imageIndex ? 'active' : ''}`}
        >
          <img src={image} alt={`Slide ${imageIndex + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
