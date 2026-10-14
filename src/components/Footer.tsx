import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="brand-logo">
              <svg className="brand-logo__svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="92" height="92" x="4" y="4" rx="22" fill="#09090b" stroke="rgba(255,255,255,0.22)" strokeWidth="3"/>
                <path d="M22 72 L40 26 H80" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M40 26 L58 72" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30 55 H50" stroke="#ffffff" strokeWidth="7" strokeLinecap="round"/>
                <path d="M63 26 V72" stroke="#ffffff" strokeWidth="8" strokeLinecap="round"/>
                <circle cx="80" cy="72" r="3.5" fill="#ffffff"/>
              </svg>
              <span className="footer__logo">PORTOFOLIO ARYO TINTO</span>
            </div>
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
            &copy; {year} ARYO TINTO. All rights reserved.
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
