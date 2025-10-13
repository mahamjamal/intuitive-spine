import { Link } from 'react-router-dom'
import './Landing.css'

function Landing() {
  return (
    <div className="landing-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Intuitive Spine</h1>
          <p className="hero-subtitle">Experience the transformative power of Spinal Flow</p>
          <p className="hero-description">
            Discover a holistic approach to wellness that addresses the root cause of discomfort,
            helping you achieve optimal health and vitality.
          </p>
          <div className="hero-buttons">
            <Link to="/booking" className="btn btn-primary">Book an Appointment</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Intuitive Spine?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3>Holistic Approach</h3>
              <p>We focus on treating the whole person, not just symptoms</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Experienced Practitioners</h3>
              <p>Our team of certified professionals are dedicated to your wellness</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Personalized Care</h3>
              <p>Each treatment plan is tailored to your unique needs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Start Your Wellness Journey?</h2>
          <p>Take the first step towards a healthier, more balanced life</p>
          <Link to="/booking" className="btn btn-large">Book Your Session Today</Link>
        </div>
      </section>
    </div>
  )
}

export default Landing
