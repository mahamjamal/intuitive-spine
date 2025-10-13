import {
  PageContainer,
  HeroSection,
  ContentSection,
  SectionIntro,
  GridLayout,
  Card,
  Button,
} from "../components/common";
import practitioners from "../data/practitionersData";
import "./Practitioners.css";

function Practitioners() {
  return (
    <PageContainer className="practitioners-page">
      {/* Hero Section */}
      <HeroSection
        title="Our Practitioners"
        subtitle="Meet the dedicated healers behind Intuitive Spine"
      />

      {/* Content Section */}
      <ContentSection maxWidth="wide">
        <SectionIntro
          title="Meet Our Team"
          description={
            <>
              Our practitioners are highly trained in the{" "}
              <strong>Spinal Flow Technique</strong>, combining deep knowledge of
              the nervous system with a compassionate, intuitive approach. Each
              member of our team is dedicated to helping you unlock your body's
              natural healing potential.
            </>
          }
        />

        <GridLayout columns={4} gap="medium" className="fade-in">
          {practitioners.map((practitioner) => (
            <Card key={practitioner.id} className="practitioner-card">
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
            </Card>
          ))}
        </GridLayout>

        <div className="cta-section fade-in">
          <h2>Begin Your Healing Journey</h2>
          <p>Book a session with one of our experienced practitioners today.</p>
          <Button href="/booking" variant="gradient">
            Book an Appointment
          </Button>
        </div>
      </ContentSection>
    </PageContainer>
  );
}

export default Practitioners;
