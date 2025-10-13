import { useState } from 'react'
import './Booking.css'

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practitioner: '',
    date: '',
    time: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send data to a backend
    console.log('Booking submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        practitioner: '',
        date: '',
        time: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="booking-page">
      <section className="booking-hero">
        <div className="container">
          <h1>Book Your Appointment</h1>
          <p className="subtitle">Take the first step towards wellness</p>
        </div>
      </section>

      <section className="booking-content">
        <div className="container">
          <div className="booking-info">
            <h2>What to Expect</h2>
            <div className="info-grid">
              <div className="info-item">
                <div className="info-icon">📅</div>
                <h3>Schedule</h3>
                <p>Choose a convenient time that works for you</p>
              </div>
              <div className="info-item">
                <div className="info-icon">⏱️</div>
                <h3>Duration</h3>
                <p>Sessions typically last 60-90 minutes</p>
              </div>
              <div className="info-item">
                <div className="info-icon">💆</div>
                <h3>Experience</h3>
                <p>Gentle, non-invasive treatment in a relaxing environment</p>
              </div>
            </div>
          </div>

          <div className="booking-form-container">
            <h2>Book Your Session</h2>
            {submitted ? (
              <div className="success-message">
                <h3>Thank you for your booking request!</h3>
                <p>We'll contact you shortly to confirm your appointment.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="practitioner">Preferred Practitioner</label>
                  <select
                    id="practitioner"
                    name="practitioner"
                    value={formData.practitioner}
                    onChange={handleChange}
                  >
                    <option value="">No preference</option>
                    <option value="dr-mitchell">Dr. Sarah Mitchell</option>
                    <option value="james-thompson">James Thompson</option>
                    <option value="dr-chen">Dr. Emily Chen</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Preferred Date *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="time">Preferred Time *</label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Additional Notes (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Let us know if you have any specific concerns or questions..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-submit">
                  Submit Booking Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Booking
