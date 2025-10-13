import {
  PageContainer,
  HeroSection,
  ContentSection,
  SectionIntro,
  GridLayout,
  Card,
  Button,
} from "../components/common";
import "./Landing.css";

function Landing() {
  const features = [
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
  ];

  return (
    <PageContainer className="landing-page">
      {/* Hero Section */}
      <HeroSection
        title="Welcome to Intuitive Spine"
        subtitle="Experience the transformative power of Spinal Flow"
      >
        <p className="hero-description">
          Discover a holistic approach to wellness that addresses the root cause
          of discomfort, helping you achieve optimal health and vitality.
        </p>
        <div className="hero-buttons">
          <Button to="/booking" variant="primary">
            Book an Appointment
          </Button>
          <Button to="/about" variant="secondary">
            Learn More
          </Button>
        </div>
      </HeroSection>

      {/* Features Section */}
      <ContentSection maxWidth="default" className="features-section">
        <SectionIntro title="Why Choose Intuitive Spine?" />
        <GridLayout columns={3} gap="medium">
          {features.map((item, index) => (
            <Card key={index} className="feature-card">
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Card>
          ))}
        </GridLayout>
      </ContentSection>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Wellness Journey?</h2>
          <p>Take the first step towards a healthier, more balanced life.</p>
          <Button to="/booking" variant="gradient" size="large">
            Book Your Session Today
          </Button>
        </div>
      </section>
    </PageContainer>
  );
}

export default Landing;
