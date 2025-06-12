import React, { useState } from 'react';
import './ImageCarousel.css';
import placeholder1 from '../assets/placeholder1.jpg';
import placeholder2 from '../assets/placeholder2.jpg';
import placeholder3 from '../assets/placeholder3.jpg';
import placeholder4 from '../assets/placeholder4.jpg';

const PLACEHOLDER_IMAGES = [
  { id: 1, url: placeholder1 },
  { id: 2, url: placeholder2 },
  { id: 3, url: placeholder3 },
  { id: 4, url: placeholder4 },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === PLACEHOLDER_IMAGES.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? PLACEHOLDER_IMAGES.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide(); // Swipe left
    }
    if (touchStart - touchEnd < -75) {
      prevSlide(); // Swipe right
    }
  };

  return (
    <div className="carousel-container">
      <div 
        className="carousel"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button className="carousel-button prev" onClick={prevSlide}>←</button>
        <div className="carousel-slide">
          <img 
            src={PLACEHOLDER_IMAGES[currentIndex].url} 
            alt={`Slide ${currentIndex + 1}`}
            className="carousel-image"
          />
        </div>
        <button className="carousel-button next" onClick={nextSlide}>→</button>
        
        <div className="carousel-dots">
          {PLACEHOLDER_IMAGES.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 