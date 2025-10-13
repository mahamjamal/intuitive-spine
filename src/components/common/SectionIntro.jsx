import PropTypes from 'prop-types';
import './SectionIntro.css';

function SectionIntro({ title, description, className = '' }) {
  return (
    <div className={`section-intro ${className}`}>
      <h2 className="section-intro-title">{title}</h2>
      {description && <p className="section-intro-description">{description}</p>}
    </div>
  );
}

SectionIntro.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
};

export default SectionIntro;
