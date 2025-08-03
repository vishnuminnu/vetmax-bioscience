import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import azimax from "../assets/3.jpg"
import azimax2 from "../assets/4.jpg"
import amox2 from "../assets/6.jpg"
import amox from "../assets/5.jpg"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { FaFilePdf } from 'react-icons/fa'

const ViewDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const [product, setProduct] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    // Mock product data with multiple images for each product
    const mockProducts = {
      1: {
        id: 1,
        name: "AZIMAX-LB",
        description: "Azithromycin 5% · Levofloxacin 10% · Bromhexine 5%",
        fullDescription: "AZIMAX-LB is a broad-spectrum antibiotic powder containing Azithromycin, Levofloxacin, and Bromhexine. It is effective against respiratory and gut infections in poultry, offering strong antibacterial and mucolytic action. Ideal for improving chick health, reducing disease, and enhancing farm productivity.",
        images: [azimax, azimax2],
        pdfUrl: "/pdfs/azimax.pdf", // Add PDF URL for each product
        category: "Powder",
        specifications: {
          dosage: "10 mg/kg body weight for 5–7 days in drinking water/feed",
          storage: "Store in a cool, dry place below 25°C",
          shelfLife: "24 months from the date of manufacture",
          administration: "Oral – via drinking water or mixed with feed",
          protection: "Helps prevent respiratory & gut infections, improves chick health, and enhances growth",
          Composition: `Azithromycin I.P. – 50 mg
Levofloxacin I.P. – 100 mg
Bromhexine HCL – 50 mg`,
          "Key Benefits": `Broad-spectrum antibiotic for respiratory & gut infections
Strong bactericidal and mucolytic action
Protects against endotoxins from E. coli, Salmonella
Enhances chick health and reduces disease incidence`,
          Indications: `CRD, CCRD, CORYZA
Respiratory & skin infections
Mixed & Gram-negative bacterial infections`
        }
      },
      2: {
        id: 2,
        name: "AMOX",
        description: "Amoxicillin 50% – Water Soluble Powder for Poultry",
        fullDescription: "AMOX is a water-soluble antibiotic powder containing Amoxicillin 50%, designed to treat a broad range of bacterial infections in poultry. It is effective against E. coli, Salmonella, Mycoplasma, and other common pathogens. Enriched with vitamins for improved recovery and health.",
        images: [amox, amox2],
        pdfUrl: "/pdfs/amox.pdf", // Add PDF URL for each product
        category: "Powder",
        specifications: {
          dosage: [
            "Chicks: 1 gram / 3 to 4 liters water",
            "Growers & Layers: 1 gram / 3 liters water",
            "Broilers: 1 gram / 3 liters water",
            "Breeders: 1 gram / 1 to 2 liters water"
          ],
          storage: "Store in a cool, dry place, tightly closed and protected from direct sunlight",
          shelfLife: "24 months from date of manufacture",
          administration: "Oral – Mix with drinking water",
          protection: "Powder (Water-soluble)",
          "Composition": `Each 1 gram contains:
Amoxicillin Trihydrate I.P.
Equivalent to Amoxicillin Base 50% w/w`,
          "Indications": `E. coli
Salmonella
Mycoplasma
Coryza
Fowl Cholera
Early chick mortality
Wing rot & dermatitis`,
          "Category": "Powder (Water-soluble)"
        }
      },
      3: {
        id: 3,
        name: "FlyHit Liquid",
        description: "Natural fly attractant and controller for poultry farms",
        fullDescription: "FlyHit Liquid is a natural, herbal fly control solution formulated with neem oil and castor oil. It effectively attracts and controls house flies in poultry farms, breaking their life cycle and minimizing fly-borne issues. Safe for poultry, humans, and the environment.",
        images: [azimax, azimax2],
        pdfUrl: "/pdfs/azimax.pdf",
        category: "Vaccines",
        specifications: {
          "How to use": `Mix 100 ml FlyHit Liquid in 1–2 liters of water
Place in open, wide containers in fly-infested areas
Replace with fresh solution every 72 hours`,
          storage: "Store in a cool, dry place away from direct sunlight",
          shelfLife: "24 months from the date of manufacture",
          "Available Pack Sizes": "250 ml, 2.5 L, 5 L",
          "Category": "Liquid (External Fly Control Solution)",
          "Application": "Environmental fly control — used externally, not given to animals directly",
          "Composition": "Natural oils in an organic carrier (Neem oil & Castor oil)Contains fly attractants for effective luring and control",
          "Key Benefits": `Highly effective against all types of flies in poultry farms
Herbal formulation prevents resistance development
Safe for poultry, humans, and the environment`
        }
      },
      4: {
        id: 4,
        name: "LARVA HIT – FEED",
        description: "Biological, non-medicinal feed additive for poultry",
        fullDescription: "LARVA HIT – FEED is a natural, enzyme-based feed supplement designed to biologically dry poultry and cattle excreta. It controls fly breeding, improves gut health, boosts immunity, and enhances overall animal performance. Safe and effective without using pesticides.",
        images: [azimax, azimax2],
        pdfUrl: "/pdfs/azimax.pdf",
        category: "Vaccines",
        specifications: {
          dosage: `Layer: 100 g / ton of feed
Breeder: 150 g / ton of feed
Schedule: Administer for 30 days every alternate month
(Total 180 days per year)
`,
          storage: "Store in a dry, cool place away from moisture",
          Composition: "Enzymes (oral encapsulated)",
          Formulation: "Encapsulated in nanoparticles",
          Presentation: "500 g pack",
          Features:`Biological
No resistance development
Non-medicinal`,
Category:"Feed Additive (Dry Powder)",
"Key Benefits":`Controls fly breeding biologically
Reduces ammonia and urea excretion
Improves stool bulking and biomass
Stimulates immunity and performance
Antagonist to mycotoxins in feed
Modifies gut microbiota and reduces inflammation
Prevents pathogen colonization`
        }
      },
       5: {
        id: 5,
        name: "LARVA HIT – SPRAY",
        description: "Biological Management of Excreta in Poultry & Dairy Farms",
        fullDescription: "LARVA HIT – SPRAY is a biological, enzyme-based emulsion designed to dry poultry and cattle excreta through in-situ composting. It helps reduce fly breeding, moisture, and harmful gas emissions, promoting a safer and more hygienic farm environment—without using toxic pesticides.",
        images: [azimax, azimax2],
        pdfUrl: "/pdfs/azimax.pdf",
        category: "Vaccines",
        specifications: {
          "Dosage & Application": `Mix 50 g of product in 15 litres of water
Spray on 4,000 sq. ft. area
Spray once only, preferably in the evening (5:00–6:30 PM)
Avoid wetting litter excessively
Moisture reduction begins after 72 hours
`,
          Presentation: "100 g pouch",
         Category: "Liquid Biological Spray (Emulsion)",
          Storage: "Store in a cool, dry place. Avoid heat exposure.",
          Target: "Excreta drying & composting to minimize fly incidence",
          Formulation:`Emulsion`,
Composition:"Enzymes",
"Key Benefits":`Controls fly breeding naturally
Reduces toxic gas emissions (ammonia & hydrogen sulfide)
Minimizes moisture in excreta
Accelerates composting process
Safe, biological, and non-toxic solution`
        }
      },
       6: {
        id: 6,
        name: "TOXINAUT",
        description: " Liquid & Premix",
        fullDescription: "TOXINAUT is an advanced animal feed supplement formulated to neutralize mycotoxins and reduce chemical or pesticide toxicity. With a blend of hydrolysing enzymes, organic metabolites, and liver stimulants, it enhances immunity, improves organ function, and promotes better growth and feed efficiency in poultry and livestock.",
        images: [azimax, azimax2],
        pdfUrl: "/pdfs/azimax.pdf",
        category: "Vaccines",
        specifications: {
          "Dosage / Usage": `Poultry (Liquid):
0.5 ml/L of water or 20 ml/100 birds daily
In severe toxicity: 40 ml/100 birds for 5 days
Sheep/Goat: 10 ml per animal/day
Feed (Premix):
500 g/ton (regular)
750 g–1 kg/ton (severe toxicity for 7 days)`,
          Presentation: `Liquid: 1 L, 5 L
Premix: 5 Kg`,
         Category: "Feed Supplement / Water Soluble Liquid & Premix",
          Formulation:`Liquid (1 L / 5 L)
Premix Powder (5 Kg)`,
Composition:"Hydrolysing enzymes, organic metabolites, rare herbs, citric acid, and liver stimulants",
"Key Benefits":`Neutralizes mycotoxins (e.g., aflatoxins)
Effective in chemical & pesticide toxicity
Cures Ascitis and Gout quickly
Improves liver, kidney, and metabolic functions
Enhances production, feed conversion, weight gain
Reduces gizzard erosion, intestinal damage
Improves hatchability, fertility, immunity
Enhances vaccine response`
        }
      }

    }

    // Check if product was passed via state
    if (location.state?.product) {
      setProduct(location.state.product)
      return
    }

    // Fall back to mock data
    const selectedProduct = mockProducts[id]
    if (selectedProduct) {
      setProduct(selectedProduct)
    } else {
      navigate('/products')
    }
  }, [id, navigate, location.state])

  const nextImage = () => {
    setCurrentImageIndex(prev =>
      prev === product.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex(prev =>
      prev === 0 ? product.images.length - 1 : prev - 1
    )
  }

  if (!product) return <div className="text-center py-5">Loading product details...</div>

  return (
    <div className="container py-5">
      <div className="row">
        {/* Left Column - Image Gallery */}
        <div className="col-md-6">
          {/* Main Image with Navigation */}
          <div className="position-relative mb-4" style={{ height: '600px', overflow: 'hidden' }}>
            <img
              src={product.images[currentImageIndex]}
              alt={`${product.name} - Image ${currentImageIndex + 1}`}
              className="img-fluid rounded shadow w-100 h-100"
              style={{ objectFit: 'contain' }}
            />

            {/* Navigation Arrows */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="position-absolute top-50 start-0 translate-middle-y btn btn-light rounded-circle p-2"
                  style={{ left: '15px' }}
                >
                  <FaChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="position-absolute top-50 end-0 translate-middle-y btn btn-light rounded-circle p-2"
                  style={{ right: '15px' }}
                >
                  <FaChevronRight size={20} />
                </button>
              </>
            )}

            {/* Image Indicators */}
            {product.images.length > 1 && (
              <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`btn btn-sm mx-1 p-0 rounded-circle ${currentImageIndex === index ? 'bg-#5FB0A5' : 'bg-secondary'}`}
                    style={{
                      width: '12px',
                      height: '12px',
                      backgroundColor: currentImageIndex === index ? '#5FB0A5' : ''
                    }}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Thumbnail Gallery */}
          {product.images.length > 1 && (
            <div className="d-flex justify-content-center gap-3 mb-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`border ${currentImageIndex === index ? 'border-#5FB0A5 border-3' : 'border-secondary'} rounded`}
                  style={{
                    width: '80px',
                    height: '80px',
                    overflow: 'hidden',
                    padding: 0,
                    transition: 'all 0.3s ease',
                    borderColor: currentImageIndex === index ? '#5FB0A5' : ''
                  }}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="img-fluid h-100 w-100"
                    style={{ objectFit: 'cover' }}
                  />
                </button>
              ))}
            </div>
          )}

          {/* PDF Download Section */}
         {/* PDF Download Section */}
<div className="card border-0 shadow-sm p-4 mb-4">
  <h4 className="text-#5FB0A5 mb-3" style={{ color: '#5FB0A5' }}>
    <FaFilePdf className="me-2" />
    Product Documentation
  </h4>
  <div className="d-grid">
    <a
      href={product.pdfUrl}
      className="btn btn-#5FB0A5 py-2"
      style={{ backgroundColor: '#5FB0A5', color: 'white' }}
      download
      target="_blank"
      rel="noopener noreferrer"
    >
      Download Product PDF
    </a>
  </div>
  <p className="text-muted mt-2 mb-0 small">
    Detailed product information and specifications
  </p>
</div>


        </div>

        {/* Right Column - Product Details */}
        <div className="col-md-6">
          <h1 className="mb-3">{product.name}</h1>
          <div className="badge bg-info text-dark mb-4">{product.category}</div>
          <p className="lead mb-4" style={{ color: '#555' }}>{product.description}</p>

          <div className="card mb-4 border-#5FB0A5" style={{ borderColor: '#5FB0A5' }}>
            <div className="card-header bg-#5FB0A5 text-white" style={{ backgroundColor: '#5FB0A5' }}>
              <h5 className="mb-0">Specifications</h5>
            </div>
            <div className="card-body p-0"> {/* Remove padding from card-body */}
              <div style={{
                maxHeight: '400px',  // Set your desired height
                overflowY: 'auto',   // Enable vertical scrolling
                padding: '1.25rem'  // Add padding back for the content
              }}>
                <ul className="list-group list-group-flush">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <li key={key} className="list-group-item py-3">
                      <span className="text-capitalize fw-bold d-block mb-2 text-#5FB0A5" style={{ color: '#5FB0A5' }}>
                        {key.replace(/([A-Z])/g, ' $1')}:
                      </span>
                      {Array.isArray(value) ? (
                        <ul className="mb-0 ps-3">
                          {value.map((line, i) => (
                            <li key={i} className="mb-1">{line}</li>
                          ))}
                        </ul>
                      ) : typeof value === 'string' && value.includes('\n') ? (
                        <ul className="mb-0 ps-3">
                          {value.split('\n').map((line, i) => (
                            <li key={i} className="mb-1">{line}</li>
                          ))}
                        </ul>
                      ) : (
                        <span>{value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

           {/* Product Highlights */}
          <div className="card border-0 shadow-sm p-4">
            <h4 className="text-#5FB0A5 mb-3" style={{ color: '#5FB0A5' }}>Product Highlights</h4>
            <p className="mb-0" style={{ textAlign: 'justify', lineHeight: '1.6' }}>
              {product.fullDescription}
            </p>
          </div>

          <div className="d-flex gap-3">
            <button
              className="btn btn-#5FB0A5 px-4 py-2 flex-grow-1"
              style={{ backgroundColor: '#5FB0A5', color: 'white' }}
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </button>
            <button
              className="btn btn-outline-#5FB0A5 px-4 py-2"
              style={{ borderColor: '#5FB0A5', color: '#5FB0A5' }}
              onClick={() => navigate(-1)}
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewDetails