import React, { useState, useRef, useEffect, useContext } from 'react';
import { FaTools } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../components/ThemeContext';
import azimax from "../assets/azimax-pa.png"
import amox from "../assets/amox-pa.png"
import flyhitl from "../assets/flyhitl-pa.png"
import larvahit from "../assets/larvahit-pa.png"
import larvahits from "../assets/larvahits-pa.png"
import toxinut from "../assets/toxinut.png"

const ProductsView = () => {
  const navigate = useNavigate();
  const [activeCategory] = useState("All"); // Simplified since you only have one category
  const { darkMode } = useContext(ThemeContext);

  // All products data
  const allProducts = [
    { id: 1, name: "AZIMAX-LB", description: "broad-spectrum antibiotic powder for Poultry", image: azimax, category: "Vaccines" },
    { id: 2, name: "AMOX", description: "Amoxicillin 50% – Water Soluble Powder for Poultry", image: amox, category: "Vaccines" },
    { id: 3, name: "FlyHit Liquid", description: "Natural fly attractant and controller for poultry farms", image: flyhitl, category: "Vaccines" },
    { id: 4, name: "LARVA HIT – FEED", description: "Biological, non-medicinal feed additive for poultry", image: larvahit, category: "Vaccines" },
    { id: 5, name: "LARVA HIT – SPRAY", description: "Biological Management of Excreta in Poultry & Dairy Farms", image: larvahits, category: "Pharma" },
    { id: 6, name: "TOXINAUT", description: "Liquid & Premix", image: toxinut, category: "Pharma" },
  ];

  // Since you only have "All Products" category, we can just use allProducts directly
  const productsToDisplay = allProducts;

  return (
    <section className="py-5" style={{ 
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

        {/* Product Grid */}
        <div className="row g-4 justify-content-center">
          {productsToDisplay.map((product) => (
            <div key={product.id} className="col-md-6 col-lg-4 col-xl-3">
              <div 
                className="card h-100 border-0 shadow-sm overflow-hidden"
                style={{
                  borderRadius: '12px',
                  transition: 'transform 0.3s ease',
                  backgroundColor: darkMode ? '#1e1e1e' : 'white'
                }}
              >
                <div className="position-relative" style={{ height: '180px', overflow: 'hidden' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                  <div className="position-absolute top-0 end-0 text-white px-2 py-1 small" style={{backgroundColor: '#5FB0A5'}}>
                    {product.category}
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
      </div>
    </section>
  );
};

export default ProductsView;