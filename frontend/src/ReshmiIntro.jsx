import React from 'react';
import './ReshmiIntro.css';
import ImageCarousel from './components/ImageCarousel';

export default function ReshmiIntro() {
  return (
    <>
      {/* Intro (100vh high, circles + name) */}
      <div className="container">
        {/* Side Images */}
        <img src="/reshmileft.png" alt="" className="side-image left" />
        <img src="/reshmiright.png" alt="" className="side-image right" />

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

      {/* Curved Separator */}
      <div className="curve-separator">
        <div className="curve-decoration left">
          <div className="curve-circle"></div>
          <div className="curve-line"></div>
        </div>
        <div className="curve-decoration right">
          <div className="curve-circle"></div>
          <div className="curve-line"></div>
        </div>
      </div>

      {/* Wrapper for all content below curve */}
      <div className="bottom-content-wrapper">
        {/* Image Carousel */}
        <ImageCarousel />

        {/* Portfolio Section */}
        <div className="portfolio-section">
          <div className="portfolio-content">
            <div className="portfolio-title">welcome to my shop.</div>
            <div className="subtitle">we're buzzing to meet you!</div>
          </div>
        </div>
      </div>
    </>
  );
}
