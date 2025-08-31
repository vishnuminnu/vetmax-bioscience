import React, { useState, useContext, useEffect } from 'react';
import { FaSearch, FaFilter, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../components/ThemeContext';

// Import your product images
import azimax from "../assets/azimax-pa.png";
import amox from "../assets/amox-pa.png";
import flyhitl from "../assets/flyhitl-pa.png";
import larvahit from "../assets/larvahit-pa.png";
import larvahits from "../assets/larvahits-pa.png";
import toxinut from "../assets/toxinut.png";

const ProductsView = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate('/#contact');
  };
  
  const { darkMode } = useContext(ThemeContext);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // All products data
  const allProducts = [
    { id: 1, name: "AZIMAX-LB", description: "Broad-spectrum antibiotic powder for Poultry", image: azimax, category: "Antibiotics", featured: true },
    { id: 2, name: "AMOX", description: "Amoxicillin 50% – Water Soluble Powder for Poultry", image: amox, category: "Antibiotics" },
    { id: 3, name: "FlyHit Liquid", description: "Natural fly attractant and controller for poultry farms", image: flyhitl, category: "Pest Control", featured: true },
    { id: 4, name: "LARVA HIT – FEED", description: "Biological, non-medicinal feed additive for poultry", image: larvahit, category: "Feed Additives" },
    { id: 5, name: "LARVA HIT – SPRAY", description: "Biological Management of Excreta in Poultry & Dairy Farms", image: larvahits, category: "Pest Control" },
    { id: 6, name: "TOXINAUT", description: "Mycotoxin binder liquid & premix for poultry feed", image: toxinut, category: "Feed Additives", featured: true },
  ];

  // Categories for filtering
  const categories = ["All", "Antibiotics", "Pest Control", "Feed Additives"];

  // Filter products based on category and search query
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Simple animation on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Poultry Health Products | Vetmax Biosciences</title>
        <meta 
          name="description" 
          content="Explore Vetmax Biosciences’ poultry health solutions: AZIMAX-LB antibiotic, AMOX powder, FlyHit fly control, LarvaHit feed & spray, and TOXINAUT mycotoxin binder." 
        />
        <meta 
          name="keywords" 
          content="Vetmax products, poultry antibiotics, poultry feed additives, fly control for poultry, mycotoxin binders, AZIMAX-LB, AMOX, FlyHit, LarvaHit, TOXINAUT" 
        />
        <meta property="og:title" content="Poultry Health Products | Vetmax Biosciences" />
        <meta 
          property="og:description" 
          content="Discover Vetmax Biosciences’ product range: antibiotics, pest control, feed additives, and mycotoxin binders for healthier poultry." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vetmaxbio.in/products" />
        <meta property="og:image" content="https://www.vetmaxbio.in/assets/azimax-pa.png" />
      </Helmet>
   
    <section className="py-5" style={{ 
      backgroundColor: darkMode ? '#121212' : '#f8f9fa',
      minHeight: '100vh'
    }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold" style={{ color: darkMode ? 'white' : 'inherit' }}>
            Our <span style={{ color: '#5FB0A5' }}>Solutions</span>
          </h2>
          <p className="lead" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>
            Specialized products for optimal poultry health and performance
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="row mb-4">
          <div className="col-md-8 mb-3 mb-md-0">
            <div className="input-group">
              <span className="input-group-text" style={{ backgroundColor: darkMode ? '#2a2a2a' : 'white', borderColor: darkMode ? '#444' : '#ced4da' }}>
                <FaSearch color={darkMode ? '#e0e0e0' : '#6c757d'} />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ 
                  backgroundColor: darkMode ? '#2a2a2a' : 'white',
                  color: darkMode ? 'white' : 'inherit',
                  borderColor: darkMode ? '#444' : '#ced4da'
                }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <button 
              className="btn w-100 d-flex align-items-center justify-content-center"
              onClick={() => setShowFilters(!showFilters)}
              style={{
                backgroundColor: darkMode ? '#2a2a2a' : 'white',
                color: darkMode ? 'white' : 'inherit',
                border: `1px solid ${darkMode ? '#444' : '#ced4da'}`
              }}
            >
              <FaFilter className="me-2" />
              Filters
            </button>
          </div>
        </div>

        {/* Category Filters - shown when filter button is clicked */}
        {showFilters && (
          <div className="row mb-4">
            <div className="col-12">
              <div className="p-3 rounded" style={{ backgroundColor: darkMode ? '#1e1e1e' : 'white' }}>
                <h6 className="mb-3" style={{ color: darkMode ? 'white' : 'inherit' }}>Categories</h6>
                <div className="d-flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`btn btn-sm ${activeCategory === category ? '' : 'btn-outline'}`}
                      onClick={() => setActiveCategory(category)}
                      style={{
                        backgroundColor: activeCategory === category ? '#5FB0A5' : 'transparent',
                        color: activeCategory === category ? 'white' : '#5FB0A5',
                        borderColor: '#5FB0A5'
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="mb-4">
          <p style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>
            Showing {filteredProducts.length} of {allProducts.length} products
          </p>
        </div>

        {/* Product Grid - Full Width Cards */}
        {filteredProducts.length > 0 ? (
          <div className="row justify-content-center">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="col-12 mb-4"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`
                }}
              >
                <div 
                  className="card border-0 overflow-hidden product-card"
                  style={{
                    borderRadius: '16px',
                    transition: 'all 0.3s ease',
                    backgroundColor: darkMode ? '#1e1e1e' : 'white',
                    boxShadow: darkMode ? '0 5px 15px rgba(0,0,0,0.2)' : '0 5px 20px rgba(0,0,0,0.08)'
                  }}
                >
                  <div className="row g-0">
                    {/* Product Image */}
                    <div className="col-md-4 position-relative">
                      <div style={{ height: '250px', overflow: 'hidden' }}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="img-fluid w-100 h-100"
                          style={{ 
                            objectFit: 'cover', 
                            transition: 'transform 0.5s ease',
                          }}
                        />
                        {product.featured && (
                          <div className="position-absolute top-0 start-0 bg-warning text-dark px-3 py-1 small fw-bold">
                            FEATURED
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Product Details */}
                    <div className="col-md-8">
                      <div className="card-body h-100 d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <div>
                            <span className="badge rounded-pill mb-2" style={{ backgroundColor: '#5FB0A5', color: 'white' }}>
                              {product.category}
                            </span>
                            <h3 className="h4 mb-1" style={{ color: darkMode ? 'white' : 'inherit' }}>{product.name}</h3>
                          </div>
                        </div>
                        
                        <p className="mb-3 flex-grow-1" style={{ color: darkMode ? '#b0b0b0' : '#6c757d' }}>
                          {product.description}
                        </p>
                        
                        <div className="d-flex justify-content-between align-items-center mt-auto">
                          <button 
                            className="btn d-flex align-items-center"
                            onClick={() => navigate(`/products/${product.id}`)}
                            style={{
                              color: '#5FB0A5',
                              padding: 0,
                              fontWeight: '600'
                            }}
                          >
                            View Full Details <FaArrowRight className="ms-2" />
                          </button> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <h4 style={{ color: darkMode ? 'white' : 'inherit' }}>No products found</h4>
            <p style={{ color: darkMode ? '#b0b0b0' : '#6c757d' }}>Try adjusting your search or filter criteria</p>
            <button 
              className="btn rounded-pill px-4"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              style={{
                backgroundColor: '#5FB0A5',
                color: 'white'
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Call to Action Section */}
        <div className="row mt-5 pt-4">
          <div className="col-12">
            <div className="p-5 rounded text-center" style={{ 
              backgroundColor: darkMode ? '#1e1e1e' : '#e9f5f3',
              border: `1px solid ${darkMode ? '#333' : '#5FB0A5'}`,
              borderRadius: '16px'
            }}>
              <h3 style={{ color: darkMode ? 'white' : 'inherit' }}>Need Help Choosing the Right Product?</h3>
              <p className="mb-4" style={{ color: darkMode ? '#b0b0b0' : '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
                Our poultry experts are ready to assist you in selecting the best solutions for your operation. Get personalized recommendations based on your specific needs.
              </p>
              <button 
                className="btn rounded-pill px-4 py-2"
                style={{
                  backgroundColor: '#5FB0A5',
                  color: 'white'
                }}
                onClick={handleContactClick}
              >
                Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: ${darkMode ? '0 10px 25px rgba(0,0,0,0.3)' : '0 10px 30px rgba(0,0,0,0.12)'} !important;
        }
        .product-card:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
     </>
  );
};

export default ProductsView;