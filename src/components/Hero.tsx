import React from 'react';
import { STATS } from '../data/portfolioData';

const Hero: React.FC = () => {
  const handleScrollTo = (id: string): void => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      {/* Background image — THUMBNILE.jpg */}
      <div className="hero__bg-img" aria-hidden="true" />

      {/* Dark gradient overlay */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Noise texture */}
      <div className="hero__noise" aria-hidden="true" />


      <div className="hero__content">
        <div className="hero__left">
          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name">
            <span className="hero__name-line">TINTO ARYO</span>
            <span className="hero__name-line">NUGROHO</span>
          </h1>
          <p className="hero__title">Photographer &amp; Videographer</p>
          <p className="hero__desc">
            Mengabadikan momen menjadi karya visual yang bercerita. Spesialis dalam
            foto portrait, couple, group, dan video cinematic berkualitas tinggi.
          </p>
          <div className="hero__actions">
            <button
              className="btn btn--primary"
              onClick={() => handleScrollTo('#portfolio')}
              id="hero-portfolio-btn"
            >
              View Portfolio
            </button>
            <button
              className="btn btn--outline"
              onClick={() => handleScrollTo('#contact')}
              id="hero-contact-btn"
            >
              Let's Work
            </button>
          </div>

          <div className="hero__availability">
            <span className="hero__dot" />
            <span>Available for Freelance</span>
          </div>
        </div>

        {/* Stats — pojok kanan bawah */}
        <div className="hero__right">
          <div className="hero__stats">
            {STATS.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" onClick={() => handleScrollTo('#about')} aria-label="Scroll down">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-text">SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;
