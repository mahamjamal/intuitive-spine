import { useState } from "react";
import "./Booking.css";
import practitioners from "../data/practitionersData";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    practitioner: "",
    date: "",
    time: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Get selected practitioner's available dates and times
  const selectedPractitioner = practitioners.find(
    (p) => p.id.toString() === formData.practitioner
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // reset date/time when changing practitioner
    if (name === "practitioner") {
      setFormData((prev) => ({
        ...prev,
        date: "",
        time: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        practitioner: "",
        date: "",
        time: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="booking-page">
      {/* Hero Section */}
      <section className="booking-hero">
        <div className="hero-content">
          <h1>Book Your Appointment</h1>
          <p className="subtitle">Take the first step towards wellness</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="booking-content">
        <div className="container">
          <div className="intro-section fade-in">
            <h2>What to Expect</h2>
            <p>
              Your first <strong>Spinal Flow session</strong> is a gentle and
              transformative experience. Select your practitioner, choose an
              available date, and we’ll take care of the rest.
            </p>
          </div>

          <div className="booking-form-container fade-in">
            <h2>Book Your Session</h2>

            {submitted ? (
              <div className="success-message">
                <h3>Thank you for your booking!</h3>
                <p>We'll contact you soon to confirm your appointment.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Preferred Practitioner</label>
                  <select
                    name="practitioner"
                    value={formData.practitioner}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Practitioner</option>
                    {practitioners.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedPractitioner && (
                  <>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Available Dates *</label>
                        <select
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Date</option>
                          {selectedPractitioner.availableDates.map((d, i) => (
                            <option key={i} value={d}>
                              {d}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Available Times *</label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Time</option>
                          {selectedPractitioner.availableTimes.map((t, i) => (
                            <option key={i} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </>
                )}

                <div className="form-group">
                  <label>Additional Notes (Optional)</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Let us know if you have any specific concerns or preferences..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary">
                  Submit Booking Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Booking;
