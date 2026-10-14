import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../data/portfolioData';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string): void => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__brand" />

      <button
        className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        id="hamburger-btn"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <button
              className="navbar__link"
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </button>
          </li>
        ))}
        <li>
          <button
            className="navbar__cta"
            onClick={() => handleNavClick('#contact')}
            id="navbar-hire-btn"
          >
            Hire Me
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
