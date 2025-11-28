import PropTypes from 'prop-types';
import './HeroSection.css';

function HeroSection({ title, subtitle, children, className = '', backgroundImage = null }) {
  const style = backgroundImage ? {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  } : {};

  return (
    <section 
      className={`hero-section ${backgroundImage ? 'hero-with-bg' : ''} ${className}`}
      style={style}
    >
      <div className="hero-content">
        {title && <h1>{title}</h1>}
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  backgroundImage: PropTypes.string,
};

export default HeroSection;
