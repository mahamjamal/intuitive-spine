import PropTypes from 'prop-types';
import './GridLayout.css';

function GridLayout({ children, columns = 3, gap = 'medium', className = '' }) {
  const gapClass = `grid-gap-${gap}`;
  const columnsClass = `grid-cols-${columns}`;
  
  return (
    <div className={`grid-layout ${gapClass} ${columnsClass} ${className}`}>
      {children}
    </div>
  );
}

GridLayout.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.oneOf([1, 2, 3, 4]),
  gap: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
};

export default GridLayout;
