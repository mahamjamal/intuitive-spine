import {
  PageContainer,
  HeroSection,
  ContentSection,
  SectionIntro,
  Button,
} from "../components/common";
import "./Booking.css";

import heroBgImage from "../assets/IMG_6135.jpg";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSebPiwlZdepUiXbzNbrfoyd3Elh9q084LyJoVaKO1Hpp-dteA/viewform";

function Booking() {
  return (
    <PageContainer className="booking-page">
      {/* Hero Section */}
      <HeroSection
        title="Book Your Appointment"
        subtitle="Take the first step towards wellness"
        backgroundImage={heroBgImage}
      />

      {/* Main Content */}
      <ContentSection maxWidth="default">
        {/* Mobile: Show button to open form */}
        <div className="mobile-form-button">
          <SectionIntro
            title="Ready to Book?"
            description="Click the button below to fill out our booking form."
          />
          <Button
            href={GOOGLE_FORM_URL}
            variant="gradient"
            size="large"
            className="form-link-btn"
          >
            Fill Out Booking Form
          </Button>
        </div>

        {/* Desktop: Show embedded form */}
        <div className="desktop-form">
          <iframe
            src={`${GOOGLE_FORM_URL}?embedded=true`}
            width="100%"
            height="1000"
            frameBorder="0"
            marginHeight="2"
            marginWidth="0"
            title="Booking Form"
          >
            Loading…
          </iframe>
        </div>
      </ContentSection>
    </PageContainer>
  );
}

export default Booking;
