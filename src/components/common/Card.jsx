import PropTypes from 'prop-types';
import './Card.css';

function Card({ children, className = '', hover = true, backgroundImage = null }) {
  const style = backgroundImage ? {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  } : {};

  return (
    <div 
      className={`card ${hover ? 'card-hover' : ''} ${backgroundImage ? 'card-with-bg' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
  backgroundImage: PropTypes.string,
};

export default Card;
