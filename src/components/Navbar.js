import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          <span className="navbar__logo">🌿</span>
          <span className="navbar__name">TimbuCloud</span>
        </Link>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <Link to="/" className={`navbar__link ${location.pathname === '/' ? 'navbar__link--active' : ''}`} onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/about" className={`navbar__link ${location.pathname === '/about' ? 'navbar__link--active' : ''}`} onClick={() => setMenuOpen(false)}>About</Link>
        </nav>

        <div className="navbar__actions">
          <Link to="/cart" className="navbar__cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            {cartCount > 0 && <span className="navbar__badge">{cartCount}</span>}
          </Link>
          <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
