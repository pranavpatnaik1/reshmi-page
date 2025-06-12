import React, { useState } from 'react';
import './App.css';
import placeholder1 from './assets/placeholder1.jpg';
import placeholder2 from './assets/placeholder2.jpg';
import placeholder3 from './assets/placeholder3.jpg';
import placeholder4 from './assets/placeholder4.jpg';
import paintplaceholder1 from './assets/paintplaceholder1.jpg';
import paintplaceholder2 from './assets/paintplaceholder2.jpg';
import paintplaceholder3 from './assets/paintplaceholder3.jpg';
import paintplaceholder4 from './assets/paintplaceholder4.jpg';
import paintplaceholder5 from './assets/paintplaceholder5.jpg';
import bannerImage from './assets/Reshmi Ravi.png';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const potteryItems = [
    {
      image: placeholder1,
      description: "Hand Painted Circle Ocean + Ship + Seascape Mirror Earrings - Landscape Jewelry",
      price: "$250.00 CAD",
      shortDescription: "These delicate ceramic earrings feature a miniature seascape with intricate ship details, each piece carefully hand-painted to capture the essence of maritime adventure. The circular design creates a perfect frame for the ocean scene, while the mirror-like finish adds depth and luminosity to the piece."
    },
    {
      image: placeholder2,
      description: "Hand Painted Gold Rectangular Ocean + Seascape Mirror Earrings - Landscape Jewelry",
      price: "$250.00 CAD",
      shortDescription: "Rectangular ceramic earrings adorned with a hand-painted seascape, featuring a golden finish that complements the ocean's natural beauty. The geometric shape provides a modern twist to the traditional maritime theme, while maintaining the elegance of fine ceramic craftsmanship."
    },
    {
      image: placeholder3,
      description: "Hand Painted Rose Gold Rectangular Ocean + Ship",
      price: "$925.00 CAD",
      shortDescription: "A stunning rose gold ceramic piece that showcases a meticulously painted ocean scene with a majestic sailing ship. The rectangular format allows for an expansive seascape narrative, while the rose gold accents add a touch of contemporary luxury to this traditional maritime theme."
    },
    {
      image: placeholder4,
      description: "Hand Painted Ship + Ocean Circle Landscape Mirror Painting / Wall Art",
      price: "$925.00 CAD",
      shortDescription: "This circular wall art piece combines ceramic craftsmanship with intricate maritime painting, creating a window-like view into an ocean scene. The mirror-like finish enhances the depth of the seascape, while the circular frame creates an endless horizon effect."
    },
    {
      image: placeholder1,
      description: "Hand Painted Ocean + Ship + Seascape Mirror Earrings - Limited Edition",
      price: "$275.00 CAD",
      shortDescription: "Part of our limited edition collection, these ceramic earrings feature unique hand-painted seascapes with detailed ship illustrations. Each piece is individually crafted and numbered, making them truly exclusive pieces of wearable art."
    },
    {
      image: placeholder2,
      description: "Hand Painted Silver Ocean + Seascape Mirror Earrings - Limited Edition",
      price: "$275.00 CAD",
      shortDescription: "Limited edition silver-finished ceramic earrings showcasing delicate hand-painted ocean scenes with a mirror-like quality. The silver finish creates a stunning interplay with the painted seascape, resulting in a sophisticated piece of jewelry that captures light beautifully."
    },
    {
      image: placeholder3,
      description: "Hand Painted Rose Gold Ocean + Ship - Special Collection",
      price: "$950.00 CAD",
      shortDescription: "A special collection piece featuring a rose gold ceramic base with an expertly painted ocean and ship scene. The combination of the warm rose gold finish and the cool ocean tones creates a striking contrast that brings the maritime scene to life."
    },
    {
      image: placeholder4,
      description: "Hand Painted Ship + Ocean Circle Mirror Art - Limited Edition",
      price: "$950.00 CAD",
      shortDescription: "This limited edition circular wall art piece combines traditional maritime themes with contemporary ceramic techniques. The mirror-like finish and circular format create an immersive viewing experience, making the ocean scene appear to extend beyond the piece's physical boundaries."
    }
  ];

  const paintingItems = [
    {
      image: paintplaceholder1,
      description: "Original Abstract Ocean Painting - Blue Wave Series",
      price: "$450.00 CAD",
      shortDescription: "An energetic interpretation of ocean waves using bold brushstrokes and a vibrant blue palette to capture the dynamic movement of water. The abstract approach allows viewers to experience the raw power and beauty of the ocean through expressive mark-making and layered textures."
    },
    {
      image: paintplaceholder2,
      description: "Sunset Seascape Original Painting",
      price: "$550.00 CAD",
      shortDescription: "A breathtaking seascape that captures the magical moment when the sun meets the horizon, painted with warm oranges and deep purples. The careful balance of light and shadow creates a sense of tranquility, while the textured waves add movement and depth to the composition."
    },
    {
      image: paintplaceholder3,
      description: "Abstract Coastal Landscape - Original Art",
      price: "$475.00 CAD",
      shortDescription: "An abstract interpretation of a coastal scene that combines organic shapes with geometric elements to create a unique perspective of the shoreline. The painting uses a sophisticated color palette to evoke the feeling of a misty coastal morning, where sea meets sky in a harmonious blend."
    },
    {
      image: paintplaceholder4,
      description: "Ocean Waves Study - Original Painting",
      price: "$400.00 CAD",
      shortDescription: "A detailed study of ocean waves that explores the intricate patterns and movements found in water. The painting focuses on capturing the transparency and fluidity of waves through careful observation and masterful brush techniques."
    },
    {
      image: paintplaceholder5,
      description: "Stormy Seas - Original Seascape",
      price: "$525.00 CAD",
      shortDescription: "A dramatic seascape that captures the raw energy and power of a storm at sea, with dark, moody colors and dynamic brushwork. The composition creates a sense of movement and tension, while maintaining a balance between chaos and control."
    },
    {
      image: paintplaceholder1,
      description: "Abstract Ocean Series II - Limited Edition",
      price: "$475.00 CAD",
      shortDescription: "Part of a limited edition series exploring the abstract qualities of ocean movements through experimental techniques and bold color choices. The painting combines traditional seascape elements with contemporary abstract expressions to create a unique perspective of marine life."
    },
    {
      image: paintplaceholder2,
      description: "Golden Hour Seascape - Original Painting",
      price: "$575.00 CAD",
      shortDescription: "A serene seascape that captures the magical golden hour light as it dances across the ocean surface. The painting uses a warm, golden palette to create a sense of peace and tranquility, while subtle texture work adds depth and dimension to the scene."
    },
    {
      image: paintplaceholder3,
      description: "Coastal Dreams - Original Art Collection",
      price: "$495.00 CAD",
      shortDescription: "A dreamy interpretation of coastal landscapes that blends reality with imagination through soft color transitions and ethereal light effects. The painting creates a contemplative space where sea and sky merge in a harmonious display of nature's beauty."
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
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-link">
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
          <h2 className="section-title">PAINTINGS</h2>
          <div className="products-grid">
            {paintingItems.map((product, index) => (
              <div 
                className="product-item" 
                key={`painting-${index}`}
                onClick={() => handleProductClick(product)}
              >
                <img src={product.image} alt={`Painting ${index + 1}`} className="product-image" />
                <button className="sold-out-button">Sold out</button>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-container pottery">
          <h2 className="section-title">POTTERY</h2>
          <div className="products-grid">
            {potteryItems.map((product, index) => (
              <div 
                className="product-item" 
                key={`pottery-${index}`}
                onClick={() => handleProductClick(product)}
              >
                <img src={product.image} alt={`Pottery ${index + 1}`} className="product-image" />
                <button className="sold-out-button">Sold out</button>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-section">
          <p className="contact-text">Contact: <a href="mailto:reshmiraviart@gmail.com">reshmiraviart@gmail.com</a></p>
        </div>
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-layout">
              <div className="modal-image-section">
                <img src={selectedProduct.image} alt={selectedProduct.description} className="modal-image" />
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
