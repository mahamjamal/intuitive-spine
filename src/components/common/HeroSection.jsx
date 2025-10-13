import PropTypes from 'prop-types';
import './HeroSection.css';

function HeroSection({ title, subtitle, children }) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

export default HeroSection;
