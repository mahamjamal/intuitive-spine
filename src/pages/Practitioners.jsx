import "./Practitioners.css";
import practitioners from "../data/practitionersData";

function Practitioners() {
  return (
    <div className="practitioners-page">
      {/* Hero Section */}
      <section className="practitioners-hero">
        <div className="hero-content">
          <h1>Our Practitioners</h1>
          <p className="subtitle">Meet the dedicated healers behind Intuitive Spine</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="practitioners-content">
        <div className="container">
          <div className="intro-section fade-in">
            <h2>Meet Our Team</h2>
            <p>
              Our practitioners are highly trained in the{" "}
              <strong>Spinal Flow Technique</strong>, combining deep knowledge
              of the nervous system with a compassionate, intuitive approach.
              Each member of our team is dedicated to helping you unlock your
              body’s natural healing potential.
            </p>
          </div>

          <div className="practitioners-grid">
            {practitioners.map((practitioner) => (
              <div key={practitioner.id} className="practitioner-card fade-in">
                <div className="practitioner-avatar">
                  {practitioner.image ? (
                    <img
                      src={practitioner.image}
                      alt={practitioner.name}
                      className="practitioner-img"
                    />
                  ) : (
                    <span className="initials">
                      {practitioner.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                </div>

                <h2>{practitioner.name}</h2>
                <h3>{practitioner.title}</h3>
                <p className="bio">{practitioner.bio}</p>

                {practitioner.availability_notes && (
                  <p className="availability-notes">
                    <em>{practitioner.availability_notes}</em>
                  </p>
                )}

              </div>
            ))}
          </div>

          <div className="cta-section fade-in">
            <h2>Begin Your Healing Journey</h2>
            <p>Book a session with one of our experienced practitioners today.</p>
            <a href="/booking" className="btn-primary">
              Book an Appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Practitioners;
