import {
  PageContainer,
  HeroSection,
  ContentSection,
  GridLayout,
  Card,
  Button,
} from "../components/common";
import "./About.css";

import heroBgImage from "../assets/IMG_6137.jpg";

function About() {
  const values = [
    {
      title: "Effective Pain Relief",
      text: "Chronic pain—especially in the back, neck, and head—are some of the most common complaints. Spinal Flow Therapy directly addresses the underlying disruptions in the spinae and nervous systems that often cause this pain. By gently facilitating spinal realignment and restoring flow. ",
    },
    {
      title: "Increased Energy and Vitality",
      text: "A misaligned spine can place unnecessary stress on your nervous system, draining your energy. Spinal Flow Therapy helps release blockages, allowing your body to function more efficiently. As energy begins to flow freely again, clients frequently report feeling more energized, alert, and capable of engaging fully in their day-to-day lives.",
    },
    {
      title: "Improved Sleep Quality",
      text: "Sleep is essential for recovery and resilience. When your body is in a constant state of tension or imbalance, deep rest can be elusive. Spinal Flow Therapy promotes nervous system regulation, helping you shift from fight-or-flight to rest-and-repair mode. As a result, many clients report falling asleep more easily, staying asleep longer, and waking up truly refreshed.",
    },
    {
      title: "Balanced Mood and Reduced Stress",
      text: "The mind-body connection is undeniable. Stress, anxiety, and mood disorders often stem from—or are worsened by—imbalances in the nervous system. Spinal Flow Therapy helps restore equilibrium, which naturally supports emotional regulation. Clients frequently describe feeling more calm, centered, and emotionally resilient after treatment.",
    },
    {
      title: "Stronger Immune Function",
      text: "A well-aligned spine contributes to a more responsive and effective immune system. By improving nerve communication and reducing systemic stress, Spinal Flow Therapy enhances the body's ability to defend itself against illness. In today’s health-conscious world, many clients are turning to this therapy not only for symptom relief but for proactive wellness.",
    },
  ];

  return (
    <PageContainer className="about-page">
      {/* Hero Section */}
      <HeroSection
        title="About Intuitive Spine"
        subtitle="Your journey to wellness starts here"
        backgroundImage={heroBgImage}
      />

      {/* Content Section */}
      <ContentSection maxWidth="default">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At <strong>Intuitive Spine</strong>, we believe in the body's innate
            ability to heal itself. Our mission is to facilitate this natural
            healing process through the <em>Spinal Flow technique</em>, a gentle
            yet powerful approach that addresses blockages in the spine and
            nervous system. The <strong>spine and nervous system</strong> is the
            core of your body’s healing intelligence. Through precise touch and
            intuitive guidance, Spinal Flow releases{" "}
            <strong>deeply held stress</strong> and restores the natural flow of{" "}
            <strong>Life Force Energy</strong>—the vital energy that powers your
            health, movement, and emotional wellbeing.
          </p>
        </div>

        <div className="about-section">
          <h2>What is Spinal Flow?</h2>
          <p>
            Spinal Flow is a holistic healing modality that works with the
            body's wisdom to release tension, trauma, and stress stored in the
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
        <div className="about-section">
          <h2>How Does It Work?</h2>
          <p>
            Just like your heart beats and your body and digests food without
            you thinking about it, your body also knows how to heal itself—when
            given the chance. Spinal Flow taps into that innate intelligence by
            waking up your inner wisdom to run a natural healing program in the
            nervous system to reset, rebalance, and reconnect you to your full
            potential. The spinal flow practitioner uses a light touch on your
            access points which stimulates your nervous system to activate your
            natural healing program that starts to identify stored tension and
            stress blockages in the spine and gently releases them. This process
            increases the flow of life force energy, promoting overall wellness
            and vitality. At the heart of Spinal Flow Technique is a deep caring
            for your well-being. By increasing the flow of life force energy, we
            aim to restore balance and harmony within your body. Your health and
            happiness are our top priorities, and we are dedicated to supporting
            you on your journey to living your best life!
          </p>
        </div>

        <div className="about-section">
          <h2>Our Approach</h2>
          <p>
            We take a personalized approach to each client, recognizing that
            everyone's healing journey is unique. Our practitioners listen to
            your body's signals and work with your natural rhythms to achieve
            optimal results.
          </p>
          <p>
            Whether you're seeking relief from chronic pain, recovering from
            injury, managing stress, or simply optimizing your health — we're
            here to support you every step of the way.
          </p>
        </div>

        <div className="about-section">
          <h2>What are the benefits of spinal flow?</h2>
          <p>
            As a practitioner experienced in Spinal Flow Therapy, I’ve witnessed
            first-hand how this powerful, non-invasive technique supports the
            body’s natural ability to heal and thrive. Here are the key benefits
            you can expect from regular sessions:
          </p>
          <GridLayout columns={2} gap="medium" className="values-grid">
            {values.map((item, index) => (
              <Card key={index} className="value-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Card>
            ))}
          </GridLayout>
        </div>
        <div className="about-section">
          <p>
            If you're looking to improve your overall health, reduce discomfort,
            and experience a greater sense of well-being, Spinal Flow Therapy
            offers a safe, natural, and proven approach.{" "}
            <strong>You don’t need to live in survival mode.</strong> Let your
            body do what it was designed to do— heal.
          </p>
        </div>
        <div className="about-section">
          <h2>This is why we do spinal flow</h2>
          <p>
            As Spinal Flow practitioners we are deeply committed to the health
            and well-being of each individual and believe that the Spinal Flow
            Technique is not just a treatment, but a way to show care and
            support for the whole person. By promoting healing and alignment in
            the spine, we aim to provide relief from physical pain, improve
            emotional well-being, and enhance overall nervous system function.
            Our goal is to reduce inflammation, improve posture, and support the
            body's natural healing abilities. We also strive to reduce stress
            and anxiety by addressing tension patterns stored in the nervous
            system, helping each person achieve a state of balance and wellness.
            Your well-being is our top priority, and we are dedicated to
            supporting you on your journey to optimal health.
          </p>
        </div>
        <div className="about-section">
          <h2>What is the Spinal Flow Wave?</h2>
          <p>
            Our Spinal Flow Practitioners care deeply about your well-being and
            believe in the power of the Spinal Wave to bring ease, life force,
            and a profound connection to your true self. This innate and natural
            movement of the spine can lead to increased healing and energy. The
            three forms of the Spinal Wave - breathing, sensing, and moving -
            work together to create a sense of wholeness and balance within the
            body. By cultivating a deeper awareness of this wave, you can tap
            into your body's wisdom to heal and experience a stronger connection
            to yourself. Our goal is to help you access more healing, more wave,
            and more energy, so you can thrive and live your best life. Many of
            our clients have already experienced a deeper connection to their
            bodies and a greater sense of well-being through the Spinal Flow
            technique.
          </p>
        </div>
      </ContentSection>
      <div className="cta-section">
        <h2>Begin Your Healing Journey</h2>
        <p>Book a session with one of our experienced practitioners today.</p>
        <Button href="/booking" variant="gradient">
          Book an Appointment
        </Button>
      </div>
    </PageContainer>
  );
}

export default About;
