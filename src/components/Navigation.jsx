import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import Logo from "./common/Logo";

function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" onClick={closeMenu}>
            <Logo variant="logo" size={100} />
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className={`hamburger-btn ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? "nav-open" : ""}`}>
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/practitioners"
              className={location.pathname === "/practitioners" ? "active" : ""}
              onClick={closeMenu}
            >
              Our Practitioners
            </Link>
          </li>
          <li>
            <Link
              to="/booking"
              className={location.pathname === "/booking" ? "active" : ""}
              onClick={closeMenu}
            >
              Booking
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
