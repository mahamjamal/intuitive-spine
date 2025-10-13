import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Button.css';

function Button({ 
  children, 
  variant = 'primary', 
  to, 
  href, 
  onClick, 
  type = 'button',
  className = '',
  size = 'medium'
}) {
  const classes = `btn btn-${variant} btn-${size} ${className}`;

  // If it's a router link
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  // If it's an external link
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  // If it's a button
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'gradient']),
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Button;
