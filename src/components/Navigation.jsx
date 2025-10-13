import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'
import Logo from './common/Logo'

function Navigation() {
  const location = useLocation()

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <Logo size={40}/>
          <Link to="/">Intuitive Spine</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/practitioners" 
              className={location.pathname === '/practitioners' ? 'active' : ''}
            >
              Our Practitioners
            </Link>
          </li>
          <li>
            <Link 
              to="/booking" 
              className={location.pathname === '/booking' ? 'active' : ''}
            >
              Booking
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
