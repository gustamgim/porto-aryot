import React from 'react';
import { SERVICES } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">WHO I AM</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line" aria-hidden="true" />
        </div>

        <div className="about__grid">
          <div className="about__text">
            <p className="about__lead">
              Saya adalah seorang <strong>Fotografer & Videografer</strong> yang berfokus pada
              pembuatan konten visual berkualitas tinggi dengan pendekatan artistik dan storytelling yang kuat.
            </p>
            <p className="about__body">
              Dengan lebih dari 3 tahun pengalaman, saya telah menangani berbagai proyek mulai
              dari sesi foto personal, couple shoot, dokumentasi group, hingga pembuatan video
              cinematic untuk berbagai keperluan komersial dan pribadi.
            </p>
            <p className="about__body">
              Setiap gambar yang saya ambil dan setiap video yang saya buat adalah sebuah cerita
              sebuah momen yang diabadikan untuk selamanya.
            </p>

            <div className="about__tags">
              {['Photography', 'Videography', 'Color Grading', 'Lightroom', 'Premiere Pro', 'After Effects', 'DaVinci Resolve'].map(tag => (
                <span key={tag} className="about__tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="about__services">
            <h3 className="about__services-title">Layanan</h3>
            <div className="about__services-grid">
              {SERVICES.map((service) => (
                <div key={service.title} className="service-card">
                  <span className="service-card__icon">{service.icon}</span>
                  <h4 className="service-card__title">{service.title}</h4>
                  <p className="service-card__desc">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="about__quote">
          <span className="about__quote-mark">&ldquo;</span>
          <p className="about__quote-text">
            Good photography is not just how it looks, but how it makes you feel.
          </p>
          <span className="about__quote-author">— ARYO TINTO</span>
        </div>
      </div>
    </section>
  );
};

export default About;
