import PropTypes from 'prop-types';
import './ContentSection.css';

function ContentSection({ children, maxWidth = 'default', className = '' }) {
  const widthClass = `content-section-${maxWidth}`;
  
  return (
    <section className={`content-section ${widthClass} ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}

ContentSection.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.oneOf(['narrow', 'default', 'wide']),
  className: PropTypes.string,
};

export default ContentSection;
