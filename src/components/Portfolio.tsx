import React, { useState, useCallback } from 'react';
import { PHOTOS } from '../data/portfolioData';
import type { Photo, PhotoCategory } from '../types';

const CATEGORIES: { key: PhotoCategory; label: string }[] = [
  { key: 'personal', label: 'Personal' },
  { key: 'couple', label: 'Couple' },
  { key: 'group', label: 'Group' },
  { key: 'product', label: 'Product' },
  { key: 'wedding', label: 'Wedding' },
  { key: 'all', label: 'Semua' },
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PhotoCategory>('all');
  const [lightbox, setLightbox] = useState<Photo | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState<number>(0);

  const filtered: Photo[] = activeCategory === 'all'
    ? PHOTOS
    : PHOTOS.filter((p) => p.category === activeCategory);

  const openLightbox = useCallback((photo: Photo, idx: number): void => {
    setLightbox(photo);
    setLightboxIdx(idx);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback((): void => {
    setLightbox(null);
    document.body.style.overflow = '';
  }, []);

  const navigateLightbox = useCallback((dir: 1 | -1): void => {
    const newIdx = (lightboxIdx + dir + filtered.length) % filtered.length;
    setLightbox(filtered[newIdx]);
    setLightboxIdx(newIdx);
  }, [lightboxIdx, filtered]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent): void => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') navigateLightbox(1);
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
  }, [closeLightbox, navigateLightbox]);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-label">MY WORK</span>
          <h2 className="section-title">Portfolio Foto</h2>
          <div className="section-line" aria-hidden="true" />
        </div>

        {/* Filter tabs */}
        <div className="portfolio__filters" role="tablist">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={activeCategory === cat.key}
              className={`portfolio__filter-btn ${activeCategory === cat.key ? 'portfolio__filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
              id={`filter-${cat.key}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="portfolio__grid">
          {filtered.map((photo, idx) => (
            <div
              key={photo.id}
              className="portfolio__item"
              onClick={() => openLightbox(photo, idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(photo, idx)}
              aria-label={`View ${photo.title ?? photo.alt}`}
              id={`photo-${photo.id}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="portfolio__img"
                loading="lazy"
              />
              <div className="portfolio__overlay">
                <span className="portfolio__overlay-icon">⊕</span>
                <span className="portfolio__overlay-title">{photo.title}</span>
                <span className="portfolio__overlay-cat">{photo.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          id="lightbox"
        >
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close lightbox" id="lightbox-close">
            ✕
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            aria-label="Previous photo"
            id="lightbox-prev"
          >
            ‹
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="lightbox__img"
            />
            <p className="lightbox__caption">{lightbox.title} · {lightbox.category}</p>
            <p className="lightbox__counter">{lightboxIdx + 1} / {filtered.length}</p>
          </div>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            aria-label="Next photo"
            id="lightbox-next"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
