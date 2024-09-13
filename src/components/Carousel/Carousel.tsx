import React, { useState } from 'react';
import './Carousel.scss';

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjqxIpXerBuppF8T5-rqlYGIJzoYVig3Sezw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTly4SY_XvaTlvUX0d0-slunxXkLBFhth0Q8w&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYV8sLLMwEl27lgEm2A3HdsGF-TcWttHUnfQ&s',
]

const Carousel = () => {
  const [Index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((Index) => (Index === 0 ? images.length - 1 : Index - 1));
  };

  const handleNext = () => {
    setIndex((Index) => (Index === images.length - 1 ? 0 : Index + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrev}>
        &#10094;
      </button>
      <div className="carousel-images">
        <img src={images[Index]} alt={`Image ${Index + 1}`} />
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
