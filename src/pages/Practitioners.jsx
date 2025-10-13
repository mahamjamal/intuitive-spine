import './Practitioners.css'

function Practitioners() {
  const practitioners = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      title: "Senior Spinal Flow Practitioner",
      bio: "With over 10 years of experience in holistic healing, Dr. Mitchell specializes in chronic pain management and nervous system regulation.",
      specialties: ["Chronic Pain", "Stress Management", "Post-Injury Recovery"]
    },
    {
      id: 2,
      name: "James Thompson",
      title: "Certified Spinal Flow Practitioner",
      bio: "James brings a compassionate approach to healing, focusing on emotional wellness and the mind-body connection.",
      specialties: ["Emotional Release", "Anxiety Relief", "Sleep Disorders"]
    },
    {
      id: 3,
      name: "Dr. Emily Chen",
      title: "Spinal Flow & Wellness Coach",
      bio: "Dr. Chen combines Spinal Flow technique with lifestyle coaching to help clients achieve optimal health and vitality.",
      specialties: ["Preventive Care", "Athletic Performance", "Energy Optimization"]
    }
  ]

  return (
    <div className="practitioners-page">
      <section className="practitioners-hero">
        <div className="container">
          <h1>Our Practitioners</h1>
          <p className="subtitle">Meet our dedicated team of healing professionals</p>
        </div>
      </section>

      <section className="practitioners-content">
        <div className="container">
          <div className="intro-section">
            <p>
              Our team consists of highly trained and certified Spinal Flow practitioners 
              who are passionate about helping you achieve optimal health and well-being. 
              Each practitioner brings their unique experience and expertise to create a 
              personalized healing experience for every client.
            </p>
          </div>

          <div className="practitioners-grid">
            {practitioners.map(practitioner => (
              <div key={practitioner.id} className="practitioner-card">
                <div className="practitioner-avatar">
                  {practitioner.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h2>{practitioner.name}</h2>
                <h3>{practitioner.title}</h3>
                <p className="bio">{practitioner.bio}</p>
                <div className="specialties">
                  <h4>Specialties:</h4>
                  <ul>
                    {practitioner.specialties.map((specialty, index) => (
                      <li key={index}>{specialty}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="cta-section">
            <h2>Ready to begin your healing journey?</h2>
            <p>Book a session with one of our experienced practitioners today</p>
            <a href="/booking" className="btn btn-primary">Book an Appointment</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Practitioners
