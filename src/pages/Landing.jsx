import {
  PageContainer,
  HeroSection,
  ContentSection,
  SectionIntro,
  GridLayout,
  Card,
  Button,
} from "../components/common";
import Logo from "../components/common/Logo";
import "./Landing.css";

function Landing() {
  const features = [
    {
      icon: "🌿",
      title: "Safe and non invasive",
      text: "No cracking, popping, or discomfort.",
    },
    {
      icon: "✨",
      title: "Science-backed and holistic",
      text: "Combines philosophy, anatomy, and energy healing.",
    },
    {
      icon: "🎯",
      title: "Promotes real, lasting change",
      text: "Many experience relief from pain, anxiety, fatigue, and more.",
    },
  ];

  return (
    <PageContainer className="landing-page">
      {/* Hero Section */}

      <HeroSection
        title="Welcome to Intuitive Spine"
        subtitle="Living in Spinal Flow"
      >
        <Logo white size={300} className="hero-logo" />
        <p className="hero-description">
          Are you feeling overwhelmed, stressed, or stuck in a cycle of tension
          and fatigue? Imagine unlocking your body’s natural ability to heal,
          grow, and thrive—effortlessly. That’s exactly what the Spinal Flow®
          Technique offers.
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
