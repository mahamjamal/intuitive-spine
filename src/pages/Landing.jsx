import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Intuitive Spine</h1>
          <p className="hero-subtitle">
            Experience the transformative power of Spinal Flow
          </p>
          <p className="hero-description">
            Discover a holistic approach to wellness that addresses the root cause of discomfort,
            helping you achieve optimal health and vitality.
          </p>
          <div className="hero-buttons">
            <Link to="/booking" className="btn-primary">
              Book an Appointment
            </Link>
            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Intuitive Spine?</h2>
          <div className="features-grid">
            {[
              {
                icon: "🌿",
                title: "Holistic Approach",
                text: "We focus on treating the whole person, not just symptoms.",
              },
              {
                icon: "✨",
                title: "Experienced Practitioners",
                text: "Our team of certified professionals are dedicated to your wellness.",
              },
              {
                icon: "🎯",
                title: "Personalized Care",
                text: "Each treatment plan is tailored to your unique needs.",
              },
            ].map((item, index) => (
              <div className="feature-card fade-in" key={index}>
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Start Your Wellness Journey?</h2>
          <p>Take the first step towards a healthier, more balanced life.</p>
          <Link to="/booking" className="btn-large">
            Book Your Session Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Landing;
