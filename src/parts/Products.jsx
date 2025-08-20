import React, { useState, useRef, useEffect, useContext } from 'react';
import { FaSyringe, FaPills, FaMicroscope, FaSeedling, FaSprayCan, FaFlask, FaTools } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../components/ThemeContext';
// import azimax from "../assets/3.1.jpg";
// import amox from "../assets/4.1.jpg";
import azimax from "../assets/azimax-pa.png"
import amox from "../assets/amox-pa.png"
import flyhitl from "../assets/flyhitl-pa.png"
import larvahit from "../assets/larvahit-pa.png"

const Products = () => {
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);

  const categories = [
    // { name: "All", icon: <FaTools /> },
     // { name: "Powder", icon: <FaPills /> },
     // { name: "Liquid", icon: <FaFlask /> },
     // { name: "Tablet", icon: <FaSeedling /> }
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const underlineRef = useRef(null);
  const containerRef = useRef(null);

  // Sample products data with specific categories
  const products = [
    { 
      id: 1, 
      name: "AZIMAX-LB", 
      description: "broad-spectrum antibiotic powder for Poultry", 
      image: azimax, 
      category: "Powder",
      categoryDisplay: "Powder Form" 
    },
    { 
      id: 2, 
      name: "AMOX", 
      description: "Amoxicillin 50% – Water Soluble Powder for Poultry", 
      image: amox, 
      category: "Powder",
      categoryDisplay: "Powder Form"
    },
    { 
      id: 3, 
      name: "FlyHit Liquid", 
      description: "Natural fly attractant and controller for poultry farms", 
      image: flyhitl, 
      category: "Liquid",
      categoryDisplay: "Liquid Solution"
    },
    { 
      id: 4, 
      name: "LARVA HIT – FEED", 
      description: "Biological, non-medicinal feed additive for poultry", 
      image: larvahit, 
      category: "Tablet",
      categoryDisplay: "powder"
    }
  ];

  // Filter products based on active category
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  useEffect(() => {
    if (containerRef.current && underlineRef.current) {
      const activeTab = containerRef.current.querySelector('.active-tab');
      if (activeTab) {
        const containerWidth = containerRef.current.offsetWidth;
        const tabWidth = activeTab.offsetWidth;
        const tabOffset = activeTab.offsetLeft;
        
        containerRef.current.scrollLeft = tabOffset - (containerWidth / 2) + (tabWidth / 2);
        underlineRef.current.style.width = `${tabWidth}px`;
        underlineRef.current.style.left = `${tabOffset}px`;
      }
    }
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <section className="py-5" id="products" style={{ 
      backgroundColor: darkMode ? '#121212' : 'white',
      transition: 'background-color 0.3s ease'
    }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold" style={{ color: darkMode ? 'white' : 'inherit' }}>
            Our <span style={{ color: '#5FB0A5' }}>Solutions</span>
          </h2>
          <p className="lead" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>
            Specialized products for poultry health
          </p>
        </div>

        {/* Centered Category Selector */}
        <div className="position-relative mb-5 px-4">
          <div 
            ref={containerRef}
            className="d-flex overflow-auto hide-scrollbar pb-2"
            style={{
              scrollBehavior: 'smooth',
              justifyContent: 'center'
            }}
          >
            <div className="d-flex gap-2" style={{ padding: '0 2rem' }}>
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`btn rounded-pill px-3 px-md-4 py-2 d-flex align-items-center gap-2 ${
                    activeCategory === category.name 
                      ? 'active-tab text-white' 
                      : darkMode ? 'text-white bg-dark' : 'text-dark bg-light'
                  }`}
                  onClick={() => handleCategoryClick(category.name)}
                  style={{ 
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    fontSize: '0.95rem',
                    ...(activeCategory === category.name ? {
                      backgroundColor: '#5FB0A5',
                      borderColor: '#5FB0A5'
                    } : {})
                  }}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          {/* <div 
            ref={underlineRef}
            className="position-absolute bottom-0" 
            style={{ 
              height: '3px',
              transition: 'all 0.3s ease',
              borderRadius: '3px',
              backgroundColor: '#5FB0A5'
            }}
          /> */}
        </div>

        {/* Product Grid */}
        <div className="row g-4 justify-content-center">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-md-6 col-lg-4 col-xl-3">
              <div 
                className="card h-100 border-0 overflow-hidden"
                style={{ 
                  borderRadius: '12px',
                  transition: 'transform 0.3s ease',
                  backgroundColor: darkMode ? '#1e1e1e' : 'white',
                  boxShadow: darkMode ? '0 4px 6px rgba(0, 0, 0, 0.3)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="position-relative" style={{ height: '180px', overflow: 'hidden' }}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="img-fluid w-100 h-100"
                    style={{ 
                      objectFit: 'cover', 
                      transition: 'transform 0.5s ease',
                      filter: darkMode ? 'brightness(0.9)' : 'none'
                    }}
                  />
                  <div 
                    className="position-absolute top-0 end-0 text-white px-2 py-1 small" 
                    style={{ backgroundColor: '#5FB0A5' }}
                  >
                    {product.categoryDisplay || product.category}
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="h5 mb-2" style={{ color: darkMode ? 'white' : 'inherit' }}>{product.name}</h3>
                  <p className="small mb-3" style={{ color: darkMode ? '#b0b0b0' : '#6c757d' }}>{product.description}</p>
                  <button 
                    className="btn btn-sm btn-outline w-100" 
                    onClick={() => navigate(`/products/${product.id}`)}
                    style={{
                      color: '#5FB0A5',
                      borderColor: '#5FB0A5',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#5FB0A5';
                      e.target.style.color = 'white';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#5FB0A5';
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <button 
            className="btn px-4 py-2 position-relative overflow-hidden"
            style={{
              border: '2px solid #5FB0A5',
              color: darkMode ? 'white' : '#5FB0A5',
              backgroundColor: 'transparent',
              borderRadius: '50px',
              transition: 'all 0.3s ease',
              zIndex: 1
            }}
            onMouseOver={(e) => {
              e.target.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.target.style.color = darkMode ? 'white' : '#5FB0A5';
            }}
            onClick={() => navigate('/allproducts')}
          >
            <span className="position-relative z-index-1">View All Products</span>
            <span 
              className="position-absolute top-0 start-0 w-100 h-100" 
              style={{
                zIndex: -1,
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.3s ease',
                backgroundColor: '#5FB0A5'
              }}
            />
          </button>
          </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .card:hover {
          transform: translateY(-5px);
        }
        .card:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Products;