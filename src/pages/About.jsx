import './About.css'

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About Intuitive Spine</h1>
          <p className="subtitle">Your journey to wellness starts here</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              At Intuitive Spine, we believe in the body's innate ability to heal itself. 
              Our mission is to facilitate this natural healing process through Spinal Flow 
              technique, a gentle yet powerful approach that addresses blockages in the spine 
              and nervous system.
            </p>
          </div>

          <div className="about-section">
            <h2>What is Spinal Flow?</h2>
            <p>
              Spinal Flow is a holistic healing modality that works with the body's wisdom 
              to release tension, trauma, and stress stored in the nervous system. By accessing 
              specific points along the spine, we help restore the natural flow of energy and 
              information throughout your body.
            </p>
            <p>
              This non-invasive technique supports:
            </p>
            <ul>
              <li>Physical healing and pain relief</li>
              <li>Emotional well-being and stress reduction</li>
              <li>Mental clarity and focus</li>
              <li>Improved sleep and energy levels</li>
              <li>Enhanced overall vitality</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>Our Approach</h2>
            <p>
              We take a personalized approach to each client, recognizing that everyone's 
              healing journey is unique. Our practitioners are trained to listen to your 
              body's signals and work with your natural healing rhythms to achieve optimal results.
            </p>
            <p>
              Whether you're seeking relief from chronic pain, recovering from injury, 
              managing stress, or simply looking to optimize your health, we're here to 
              support you every step of the way.
            </p>
          </div>

          <div className="about-section">
            <h2>Why Choose Us?</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Expertise</h3>
                <p>Certified practitioners with extensive training and experience</p>
              </div>
              <div className="value-item">
                <h3>Compassion</h3>
                <p>We create a safe, nurturing space for your healing journey</p>
              </div>
              <div className="value-item">
                <h3>Results</h3>
                <p>Evidence-based techniques that produce real, lasting change</p>
              </div>
              <div className="value-item">
                <h3>Community</h3>
                <p>Join a supportive community committed to wellness</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
