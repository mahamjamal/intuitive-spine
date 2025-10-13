import "./About.css";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Intuitive Spine</h1>
          <p className="subtitle">Your journey to wellness starts here</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="about-content">
        <div className="container">
          <div className="about-section fade-in">
            <h2>Our Mission</h2>
            <p>
              At <strong>Intuitive Spine</strong>, we believe in the body's
              innate ability to heal itself. Our mission is to facilitate this
              natural healing process through the{" "}
              <em>Spinal Flow technique</em>, a gentle yet powerful approach that
              addresses blockages in the spine and nervous system.
            </p>
          </div>

          <div className="about-section fade-in">
            <h2>What is Spinal Flow?</h2>
            <p>
              Spinal Flow is a holistic healing modality that works with the
              body’s wisdom to release tension, trauma, and stress stored in the
              nervous system. By accessing specific points along the spine, we
              restore the natural flow of energy and information throughout your
              body.
            </p>
            <p>This non-invasive technique supports:</p>
            <ul>
              <li>Physical healing and pain relief</li>
              <li>Emotional well-being and stress reduction</li>
              <li>Mental clarity and focus</li>
              <li>Improved sleep and energy levels</li>
              <li>Enhanced overall vitality</li>
            </ul>
          </div>

          <div className="about-section fade-in">
            <h2>Our Approach</h2>
            <p>
              We take a personalized approach to each client, recognizing that
              everyone’s healing journey is unique. Our practitioners listen to
              your body’s signals and work with your natural rhythms to achieve
              optimal results.
            </p>
            <p>
              Whether you’re seeking relief from chronic pain, recovering from
              injury, managing stress, or simply optimizing your health — we’re
              here to support you every step of the way.
            </p>
          </div>

          <div className="about-section fade-in">
            <h2>Why Choose Us?</h2>
            <div className="values-grid">
              {[
                {
                  title: "Expertise",
                  text: "Certified practitioners with extensive training and experience",
                },
                {
                  title: "Compassion",
                  text: "We create a safe, nurturing space for your healing journey",
                },
                {
                  title: "Results",
                  text: "Evidence-based techniques that produce real, lasting change",
                },
                {
                  title: "Community",
                  text: "Join a supportive community committed to wellness",
                },
              ].map((item, index) => (
                <div key={index} className="value-item">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
