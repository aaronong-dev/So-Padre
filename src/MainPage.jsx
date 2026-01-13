import { useState, useEffect } from 'react'
import './MainPage.css'

// Property data
const properties = [
  {
    id: 1,
    name: "Ocean Breeze Villa",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    beds: 3,
    baths: 2,
    guests: 8,
    pool: true,
    beachfront: true,
    description: "Stunning beachfront villa with panoramic ocean views and private pool access."
  },
  {
    id: 2,
    name: "Sunset Paradise",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    beds: 4,
    baths: 3,
    guests: 10,
    pool: true,
    beachfront: false,
    description: "Spacious modern home perfect for families, featuring a private pool and outdoor entertainment area."
  },
  {
    id: 3,
    name: "Coastal Retreat",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    beds: 2,
    baths: 2,
    guests: 6,
    pool: false,
    beachfront: true,
    description: "Charming beachfront condo with direct beach access and breathtaking sunset views."
  },
  {
    id: 4,
    name: "Tropical Haven",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
    beds: 5,
    baths: 4,
    guests: 12,
    pool: true,
    beachfront: true,
    description: "Luxury beachfront estate with private pool, hot tub, and spacious outdoor living areas."
  },
  {
    id: 5,
    name: "Seaside Escape",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    beds: 3,
    baths: 2.5,
    guests: 8,
    pool: true,
    beachfront: false,
    description: "Beautifully decorated home with pool, game room, and close proximity to the beach."
  },
  {
    id: 6,
    name: "Beachside Bliss",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
    beds: 4,
    baths: 3,
    guests: 10,
    pool: true,
    beachfront: true,
    description: "Elegant beachfront property with infinity pool, outdoor kitchen, and stunning ocean vistas."
  },
  {
    id: 7,
    name: "Island View Condo",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
    beds: 2,
    baths: 2,
    guests: 6,
    pool: true,
    beachfront: false,
    description: "Modern condo with resort-style pool access, updated amenities, and convenient location."
  }
]

function MainPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    property: '',
    message: ''
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would send this to a backend
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      property: '',
      message: ''
    })
  }

  return (
    <div className="app">
      {/* Sticky Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo" onClick={() => scrollToSection('hero')}>
            So Padre
          </div>
          <ul className="nav-links">
            <li><a href="#properties" onClick={(e) => { e.preventDefault(); scrollToSection('properties') }}>PROPERTIES</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>ABOUT</a></li>
            <li><a href="#attractions" onClick={(e) => { e.preventDefault(); scrollToSection('attractions') }}>ATTRACTIONS</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>CONTACT</a></li>
          </ul>
          <button className="nav-button" onClick={() => scrollToSection('contact')}>
            LIST YOUR HOME
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Discover Your Perfect South Padre Getaway</h1>
          <p className="hero-subtitle">Luxury vacation rentals in the heart of South Padre Island</p>
        </div>
      </section>

      {/* Overlapping Box Section */}
      <div className="overlapping-box">
        <div className="overlapping-box-content">
          <h2>Experience Luxury Living</h2>
          <p>Discover premium vacation rentals with world-class amenities</p>
        </div>
      </div>

      {/* Properties Section */}
      <section id="properties" className="properties">
        <div className="container">
          <h2 className="section-title">Our Properties</h2>
          <p className="section-subtitle">Choose from our collection of premium vacation rentals</p>
          <div className="properties-grid">
            {properties.map((property) => (
              <div key={property.id} className="property-card">
                <div className="property-image">
                  <img src={property.image} alt={property.name} />
                </div>
                <div className="property-content">
                  <h3>{property.name}</h3>
                  <div className="property-features">
                    <span>{property.beds} Beds</span>
                    <span>{property.baths} Baths</span>
                    <span>Sleeps {property.guests}</span>
                  </div>
                  <p className="property-description">{property.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">About So Padre</h2>
            <p className="about-text">
              So Padre offers an exceptional collection of vacation rental properties in beautiful South Padre Island, Texas. 
              Our carefully curated selection features beachfront villas, modern condos, and spacious homes designed to 
              provide the perfect backdrop for your island getaway.
            </p>
            <p className="about-text">
              What sets our properties apart is their prime locations, premium amenities, and attention to detail. 
              Whether you're seeking a romantic escape, a family adventure, or a group celebration, we have the perfect 
              property to make your South Padre experience unforgettable. Each rental is professionally maintained and 
              equipped with everything you need for a comfortable and memorable stay.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <h3>Prime Locations</h3>
                <p>Beachfront and near-beach properties in the best areas of South Padre</p>
              </div>
              <div className="feature-item">
                <h3>Premium Amenities</h3>
                <p>Private pools, modern kitchens, and luxury furnishings throughout</p>
              </div>
              <div className="feature-item">
                <h3>Personalized Service</h3>
                <p>Dedicated support to ensure your vacation is perfect from start to finish</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section id="attractions" className="attractions">
        <div className="container">
          <h2 className="section-title">Local Attractions</h2>
          <p className="section-subtitle">Discover the best of South Padre Island</p>
          <div className="attractions-grid">
            <div className="attraction-card">
              <h3>Beaches</h3>
              <p>Miles of pristine sandy beaches perfect for sunbathing, swimming, and water sports</p>
            </div>
            <div className="attraction-card">
              <h3>Dolphin Watching</h3>
              <p>Take a boat tour to see dolphins in their natural habitat</p>
            </div>
            <div className="attraction-card">
              <h3>Deep Sea Fishing</h3>
              <p>Charter a boat for an unforgettable fishing adventure in the Gulf of Mexico</p>
            </div>
            <div className="attraction-card">
              <h3>Water Sports</h3>
              <p>Jet skiing, parasailing, paddleboarding, and more exciting activities</p>
            </div>
            <div className="attraction-card">
              <h3>Dining & Nightlife</h3>
              <p>Enjoy fresh seafood, beachside bars, and vibrant nightlife</p>
            </div>
            <div className="attraction-card">
              <h3>Sea Turtle Inc.</h3>
              <p>Visit the sea turtle rescue and rehabilitation center</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Ready to book your perfect getaway? Send us a message!</p>
          <div className="contact-content">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="property">Property Interest</label>
                <select
                  id="property"
                  name="property"
                  value={formData.property}
                  onChange={handleInputChange}
                >
                  <option value="">Select a property...</option>
                  {properties.map((property) => (
                    <option key={property.id} value={property.name}>
                      {property.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Send Inquiry</button>
            </form>
            <div className="contact-info">
              <h3>Alternative Contact</h3>
              <div className="info-item">
                <strong>Email:</strong>
                <a href="mailto:info@so-padre.com">info@so-padre.com</a>
              </div>
              <div className="info-item">
                <strong>Phone:</strong>
                <a href="tel:+19561234567">(956) 123-4567</a>
              </div>
              <div className="info-item">
                <strong>Location:</strong>
                <p>South Padre Island, Texas</p>
              </div>
              <div className="info-item">
                <strong>Hours:</strong>
                <p>Monday - Sunday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>So Padre</h3>
              <p>Your gateway to the perfect South Padre Island vacation experience.</p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">Facebook</a>
                <a href="#" aria-label="Instagram">Instagram</a>
                <a href="#" aria-label="Twitter">Twitter</a>
                <a href="#" aria-label="TripAdvisor">TripAdvisor</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#properties" onClick={(e) => { e.preventDefault(); scrollToSection('properties') }}>Properties</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a></li>
                <li><a href="#attractions" onClick={(e) => { e.preventDefault(); scrollToSection('attractions') }}>Attractions</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>info@so-padre.com</p>
              <p>(956) 123-4567</p>
              <p>South Padre Island, TX</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} So Padre. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainPage
