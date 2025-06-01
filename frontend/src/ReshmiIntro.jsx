import React from 'react';
import './ReshmiIntro.css';
import ImageCarousel from './components/ImageCarousel';

export default function ReshmiIntro() {
  return (
    <>
      {/* Intro (100vh high, circles + name) */}
      <div className="container">
        {/* Circles */}
        <div className="circle left-circle" />
        <div className="circle right-circle" />
        <div className="circle large-circle" />

        {/* Main Section */}
        <div className="text-container">
          <div className="hi-text">hi, i'm</div>
          <div className="name-text">reshmi</div>
        </div>
      </div>

      {/* Image Carousel */}
      <ImageCarousel />

      {/* Portfolio Section */}
      <div className="portfolio-section">
        <div className="portfolio-content">
          <div className="portfolio-title">welcome to my shop.</div>
          <div className="subtitle">we're buzzing to meet you!</div>
        </div>
      </div>
    </>
  );
}
