import React, { useState } from 'react';
import './App.css';
import bannerImage from './assets/Reshmi Ravi.png';

// Import all painting images
import painting1 from './assets/paintings/IMG_0858.png';
import painting2 from './assets/paintings/IMG_0859.png';
import painting3 from './assets/paintings/IMG_0860.png';
import painting4 from './assets/paintings/IMG_0862.png';
import painting5 from './assets/paintings/IMG_0863.png';
import painting6 from './assets/paintings/IMG_0864.png';
import painting7 from './assets/paintings/IMG_0865.png';
import painting8 from './assets/paintings/IMG_0866.png';
import painting9 from './assets/paintings/IMG_0867.png';
import painting10 from './assets/paintings/IMG_0868.png';
import painting11 from './assets/paintings/IMG_0869.png';
import painting12 from './assets/paintings/IMG_0870.png';
import painting13 from './assets/paintings/IMG_0871.png';
import painting14 from './assets/paintings/IMG_0872.png';
import painting15 from './assets/paintings/IMG_0873.png';
import painting16 from './assets/paintings/IMG_0874.png';
import painting17 from './assets/paintings/IMG_0875.png';
import painting18 from './assets/paintings/IMG_0876.png';
import painting19 from './assets/paintings/IMG_0877.png';
import painting20 from './assets/paintings/IMG_0879.png';
import painting21 from './assets/paintings/IMG_0880.png';
import painting22 from './assets/paintings/IMG_0881.png';
import painting23 from './assets/paintings/IMG_0883.png';
import painting24 from './assets/paintings/IMG_0884.png';
import painting25 from './assets/paintings/IMG_0885.png';
import painting26 from './assets/paintings/IMG_0886.png';
import painting27 from './assets/paintings/IMG_0887.png';
import painting28 from './assets/paintings/IMG_0888.png';
import painting29 from './assets/paintings/IMG_0889.png';
import painting30 from './assets/paintings/IMG_0890.png';
import painting31 from './assets/paintings/IMG_0891.png';
import painting32 from './assets/paintings/IMG_0892.png';
import painting33 from './assets/paintings/IMG_0893.png';
import painting34 from './assets/paintings/IMG_0898.png';
import painting35 from './assets/paintings/IMG_0899.png';
import painting36 from './assets/paintings/IMG_0900.png';
import painting37 from './assets/paintings/IMG_0904.png';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const paintingItems = [
    {
      image: painting1,
      description: "Original Abstract Ocean Painting - Blue Wave Series",
      price: "$450.00 CAD",
      shortDescription: "An energetic interpretation of ocean waves using bold brushstrokes and a vibrant blue palette to capture the dynamic movement of water. The abstract approach allows viewers to experience the raw power and beauty of the ocean through expressive mark-making and layered textures."
    },
    {
      image: painting2,
      description: "Sunset Seascape Original Painting",
      price: "$550.00 CAD",
      shortDescription: "A breathtaking seascape that captures the magical moment when the sun meets the horizon, painted with warm oranges and deep purples. The careful balance of light and shadow creates a sense of tranquility, while the textured waves add movement and depth to the composition."
    },
    {
      image: painting3,
      description: "Abstract Coastal Landscape - Original Art",
      price: "$475.00 CAD",
      shortDescription: "An abstract interpretation of a coastal scene that combines organic shapes with geometric elements to create a unique perspective of the shoreline. The painting uses a sophisticated color palette to evoke the feeling of a misty coastal morning, where sea meets sky in a harmonious blend."
    },
    {
      image: painting4,
      description: "Ocean Waves Study - Original Painting",
      price: "$400.00 CAD",
      shortDescription: "A detailed study of ocean waves that explores the intricate patterns and movements found in water. The painting focuses on capturing the transparency and fluidity of waves through careful observation and masterful brush techniques."
    },
    {
      image: painting5,
      description: "Stormy Seas - Original Seascape",
      price: "$525.00 CAD",
      shortDescription: "A dramatic seascape that captures the raw energy and power of a storm at sea, with dark, moody colors and dynamic brushwork. The composition creates a sense of movement and tension, while maintaining a balance between chaos and control."
    },
    {
      image: painting6,
      description: "Abstract Ocean Series II - Limited Edition",
      price: "$475.00 CAD",
      shortDescription: "Part of a limited edition series exploring the abstract qualities of ocean movements through experimental techniques and bold color choices. The painting combines traditional seascape elements with contemporary abstract expressions to create a unique perspective of marine life."
    },
    {
      image: painting7,
      description: "Golden Hour Seascape - Original Painting",
      price: "$575.00 CAD",
      shortDescription: "A serene seascape that captures the magical golden hour light as it dances across the ocean surface. The painting uses a warm, golden palette to create a sense of peace and tranquility, while subtle texture work adds depth and dimension to the scene."
    },
    {
      image: painting8,
      description: "Coastal Dreams - Original Art Collection",
      price: "$495.00 CAD",
      shortDescription: "A dreamy interpretation of coastal landscapes that blends reality with imagination through soft color transitions and ethereal light effects. The painting creates a contemplative space where sea and sky merge in a harmonious display of nature's beauty."
    },
    {
      image: painting9,
      description: "Ocean Reflections - Original Painting",
      price: "$450.00 CAD",
      shortDescription: "A mesmerizing study of light and reflection on water, capturing the delicate interplay between sky and sea. The painting explores the concept of duality through mirrored images and subtle color variations."
    },
    {
      image: painting10,
      description: "Marine Life Series - Original Art",
      price: "$500.00 CAD",
      shortDescription: "A vibrant exploration of marine life through abstract forms and bold colors. The painting celebrates the diversity and beauty of ocean creatures while maintaining an artistic interpretation that invites viewer imagination."
    },
    {
      image: painting11,
      description: "Coastal Breeze - Original Seascape",
      price: "$475.00 CAD",
      shortDescription: "A light and airy interpretation of a coastal scene, capturing the gentle movement of sea breezes through dynamic brushwork and a fresh color palette. The painting evokes a sense of peaceful coastal living."
    },
    {
      image: painting12,
      description: "Ocean Depths - Abstract Painting",
      price: "$525.00 CAD",
      shortDescription: "An exploration of the mysterious depths of the ocean through abstract forms and deep, rich colors. The painting creates a sense of depth and movement that draws viewers into its underwater world."
    },
    {
      image: painting13,
      description: "Tidal Patterns - Original Art",
      price: "$450.00 CAD",
      shortDescription: "A study of tidal movements and patterns through rhythmic brushstrokes and flowing compositions. The painting captures the constant motion and changing nature of ocean tides."
    },
    {
      image: painting14,
      description: "Maritime Memories - Original Painting",
      price: "$550.00 CAD",
      shortDescription: "A nostalgic interpretation of maritime scenes that combines traditional seascape elements with contemporary artistic techniques. The painting evokes memories of coastal adventures and ocean journeys."
    },
    {
      image: painting15,
      description: "Ocean Currents - Abstract Seascape",
      price: "$475.00 CAD",
      shortDescription: "A dynamic representation of ocean currents through flowing lines and energetic brushwork. The painting captures the invisible forces that shape our oceans and marine life."
    },
    {
      image: painting16,
      description: "Coastal Harmony - Original Art",
      price: "$500.00 CAD",
      shortDescription: "A harmonious blend of coastal elements that celebrates the balance between land and sea. The painting uses a sophisticated color palette to create a sense of unity and peace."
    },
    {
      image: painting17,
      description: "Ocean Whispers - Original Painting",
      price: "$525.00 CAD",
      shortDescription: "A subtle and delicate interpretation of ocean scenes that captures the quiet moments of marine life. The painting uses soft colors and gentle brushstrokes to create an intimate atmosphere."
    },
    {
      image: painting18,
      description: "Marine Dreams - Abstract Art",
      price: "$475.00 CAD",
      shortDescription: "A dreamlike interpretation of marine scenes that combines reality with imagination. The painting creates a surreal underwater world that invites viewers to explore its depths."
    },
    {
      image: painting19,
      description: "Ocean Rhythms - Original Painting",
      price: "$450.00 CAD",
      shortDescription: "A rhythmic exploration of ocean movements through repeated patterns and flowing compositions. The painting captures the natural cadence of waves and tides."
    },
    {
      image: painting20,
      description: "Coastal Light - Original Seascape",
      price: "$550.00 CAD",
      shortDescription: "A study of light and its interaction with coastal landscapes, capturing the unique quality of seaside illumination. The painting uses light and shadow to create depth and atmosphere."
    },
    {
      image: painting21,
      description: "Ocean Essence - Abstract Painting",
      price: "$500.00 CAD",
      shortDescription: "An abstract exploration of the essential qualities of the ocean through simplified forms and bold colors. The painting distills the ocean's character into its most fundamental elements."
    },
    {
      image: painting22,
      description: "Marine Symphony - Original Art",
      price: "$475.00 CAD",
      shortDescription: "A harmonious composition that celebrates the diverse elements of marine life through a symphony of colors and forms. The painting creates a visual melody that resonates with viewers."
    },
    {
      image: painting23,
      description: "Ocean Perspectives - Original Painting",
      price: "$525.00 CAD",
      shortDescription: "A multi-faceted exploration of ocean scenes from different viewpoints and perspectives. The painting invites viewers to consider the ocean from various angles and interpretations."
    },
    {
      image: painting24,
      description: "Coastal Elements - Original Art",
      price: "$450.00 CAD",
      shortDescription: "A study of the fundamental elements that make up coastal landscapes, from sand and water to sky and vegetation. The painting celebrates the diversity of coastal environments."
    },
    {
      image: painting25,
      description: "Ocean Dynamics - Abstract Seascape",
      price: "$500.00 CAD",
      shortDescription: "A dynamic representation of ocean forces through abstract forms and energetic compositions. The painting captures the constant motion and energy of marine environments."
    },
    {
      image: painting26,
      description: "Marine Reflections - Original Painting",
      price: "$475.00 CAD",
      shortDescription: "A study of light and reflection on water surfaces, capturing the delicate interplay between sky and sea. The painting explores the concept of duality through mirrored images."
    },
    {
      image: painting27,
      description: "Ocean Whispers II - Original Art",
      price: "$525.00 CAD",
      shortDescription: "A continuation of the Ocean Whispers series, exploring the quiet moments and subtle movements of marine life. The painting creates an intimate atmosphere through delicate brushwork."
    },
    {
      image: painting28,
      description: "Coastal Dreams II - Original Painting",
      price: "$450.00 CAD",
      shortDescription: "A second exploration of dreamlike coastal scenes that blend reality with imagination. The painting creates a surreal atmosphere that invites viewers to explore its depths."
    },
    {
      image: painting29,
      description: "Ocean Patterns - Abstract Art",
      price: "$500.00 CAD",
      shortDescription: "A study of natural patterns found in ocean environments, from wave formations to marine life structures. The painting celebrates the mathematical beauty of nature."
    },
    {
      image: painting30,
      description: "Marine Harmony - Original Seascape",
      price: "$475.00 CAD",
      shortDescription: "A harmonious composition that celebrates the balance between different elements of marine life. The painting creates a sense of unity and peace through careful color choices."
    },
    {
      image: painting31,
      description: "Ocean Essence II - Original Painting",
      price: "$525.00 CAD",
      shortDescription: "A second exploration of the essential qualities of the ocean through abstract forms and bold colors. The painting continues to distill the ocean's character into its fundamental elements."
    },
    {
      image: painting32,
      description: "Coastal Light II - Original Art",
      price: "$450.00 CAD",
      shortDescription: "A continued study of light and its interaction with coastal landscapes, exploring new perspectives and techniques. The painting builds upon the original Coastal Light concept."
    },
    {
      image: painting33,
      description: "Ocean Rhythms II - Abstract Seascape",
      price: "$500.00 CAD",
      shortDescription: "A second exploration of ocean movements through rhythmic patterns and flowing compositions. The painting continues to capture the natural cadence of waves and tides."
    },
    {
      image: painting34,
      description: "Marine Dreams II - Original Painting",
      price: "$475.00 CAD",
      shortDescription: "A continuation of the Marine Dreams series, exploring new aspects of dreamlike marine scenes. The painting maintains the surreal atmosphere while introducing new elements."
    },
    {
      image: painting35,
      description: "Ocean Perspectives II - Original Art",
      price: "$525.00 CAD",
      shortDescription: "A second exploration of ocean scenes from different viewpoints and perspectives. The painting builds upon the original concept while introducing new interpretations."
    },
    {
      image: painting36,
      description: "Coastal Elements II - Original Painting",
      price: "$450.00 CAD",
      shortDescription: "A continued study of coastal elements, exploring new aspects and combinations of natural features. The painting builds upon the original concept while maintaining its focus on fundamental elements."
    },
    {
      image: painting37,
      description: "Ocean Dynamics II - Abstract Art",
      price: "$500.00 CAD",
      shortDescription: "A second exploration of ocean forces through abstract forms and energetic compositions. The painting continues to capture the constant motion and energy of marine environments."
    }
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="social-bar">
        <div className="social-links">
          <a href="https://www.instagram.com/reshmi.art/" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@strawberrycreamsicle.exe" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="https://ca.pinterest.com/silkmoth123/" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>

      <div className="banner-container">
        <img src={bannerImage} alt="Reshmi Ravi" className="banner-image" />
      </div>

      <div className="products-section">
        <h1 className="featured-work-title">FEATURED WORK</h1>
        
        <div className="section-container paintings">
          <h2 className="section-title"><i><u>PAINTINGS</u></i></h2>
          <div className="products-grid">
            {paintingItems.map((product, index) => (
              <div 
                className="product-item" 
                key={`painting-${index}`}
                onClick={() => handleProductClick(product)}
              >
                <img 
                  src={product.image} 
                  alt={`Painting ${index + 1}`} 
                  className="product-image"
                />
                <button className="sold-out-button">Sold out</button>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-container pottery">
          <h2 className="section-title"><i><u>POTTERY</u></i></h2>
          <div className="coming-soon-message">
            nothing to see here, for now!
          </div>
        </div>

        <div className="contact-section">
          <p className="contact-text">made w/ <i className="fas fa-heart"></i> by reshmi</p>
        </div>
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-layout">
              <div className="modal-image-section">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.description} 
                  className="modal-image"
                />
                <p className="modal-price">{selectedProduct.price}</p>
              </div>
              <div className="modal-info-section">
                <h3 className="modal-title">{selectedProduct.description}</h3>
                <p className="modal-description">{selectedProduct.shortDescription}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
