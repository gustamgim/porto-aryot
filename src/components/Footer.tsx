import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">ARYOT</span>
            <p className="footer__tagline">Photographer &amp; Videographer</p>
          </div>
          <div className="footer__links">
            {['Home', 'About', 'Portfolio', 'Videos', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="footer__link"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {year} ARYOT. All rights reserved.
          </p>
          <p className="footer__made">
            Made with <span>♥</span> in Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
