import React, { useState, useRef, useCallback } from 'react';
import { VIDEOS } from '../data/portfolioData';
import type { VideoItem } from '../types';

interface YTClip {
  id: string;
  youtubeId: string;
  title: string;
}

const YT_CLIPS: YTClip[] = [
  { id: 'yt1', youtubeId: 'vUjv7UkFEQw', title: 'Movie Clip 01' },
  { id: 'yt2', youtubeId: 'giUSG3O1BsU', title: 'Movie Clip 02' },
  { id: 'yt3', youtubeId: 'mQV7g4QaUE4', title: 'Movie Clip 03' },
  { id: 'yt4', youtubeId: '3JVOAkg7M-E', title: 'Movie Clip 04' },
  { id: 'yt5', youtubeId: 'W4qwXnzCWtw', title: 'Movie Clip 05' },
  { id: 'yt6', youtubeId: 'vPTRHgZC89c', title: 'Movie Clip 06' },
];

const Videos: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [activeYT, setActiveYT] = useState<YTClip | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openVideo = useCallback((video: VideoItem): void => {
    setActiveVideo(video);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeVideo = useCallback((): void => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setActiveVideo(null);
    document.body.style.overflow = '';
  }, []);

  const openYT = useCallback((clip: YTClip): void => {
    setActiveYT(clip);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeYT = useCallback((): void => {
    setActiveYT(null);
    document.body.style.overflow = '';
  }, []);

  const getYouTubeThumbnail = (id: string): string =>
    `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

  return (
    <section className="videos" id="videos">
      <div className="container">
        {/* ── Video for Social Media ── */}
        <div className="section-header">
          <span className="section-label">CINEMATICS</span>
          <h2 className="section-title">Video for Social Media</h2>
          <div className="section-line" aria-hidden="true" />
        </div>

        <div className="videos__grid">
          {VIDEOS.map((video, idx) => (
            <div
              key={video.id}
              className="video-card"
              onClick={() => openVideo(video)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openVideo(video)}
              id={`video-${video.id}`}
            >
              {/* Thumbnail */}
              <div className="video-card__thumb">
                {video.type === 'youtube' && video.youtubeId ? (
                  <img
                    src={getYouTubeThumbnail(video.youtubeId)}
                    alt={video.title}
                    className="video-card__img"
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={video.src}
                    className="video-card__img"
                    muted
                    preload="metadata"
                    playsInline
                    onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
                    onMouseLeave={(e) => {
                      const v = e.currentTarget as HTMLVideoElement;
                      v.pause();
                      v.currentTime = 0;
                    }}
                  />
                )}
                <div className="video-card__overlay">
                  <span className="video-card__play">▶</span>
                </div>
                {video.type === 'youtube' && (
                  <span className="video-card__badge">YouTube</span>
                )}
              </div>

              {/* Info */}
              <div className="video-card__info">
                <span className="video-card__num">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="video-card__title">{video.title}</h3>
                  {video.description && (
                    <p className="video-card__desc">{video.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Movie Clips (YouTube) ── */}
        <div className="section-header yt-clips__header">
          <span className="section-label">YOUTUBE</span>
          <h2 className="section-title">Movie Clips</h2>
          <div className="section-line" aria-hidden="true" />
        </div>

        <div className="yt-clips__grid">
          {YT_CLIPS.map((clip, idx) => (
            <div
              key={clip.id}
              className="yt-clip-card"
              onClick={() => openYT(clip)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openYT(clip)}
              id={`yt-clip-${clip.id}`}
            >
              <div className="yt-clip-card__thumb">
                <img
                  src={getYouTubeThumbnail(clip.youtubeId)}
                  alt={clip.title}
                  className="yt-clip-card__img"
                  loading="lazy"
                />
                <div className="yt-clip-card__overlay">
                  <span className="yt-clip-card__play">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </span>
                </div>
                <span className="yt-clip-card__badge">
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.6 1.87A2 2 0 0 0 14.18.43C12.95.08 8 .08 8 .08s-4.95 0-6.18.35A2 2 0 0 0 .4 1.87C.06 3.12.06 5.75.06 5.75s0 2.63.34 3.88a2 2 0 0 0 1.42 1.44C3.05 11.42 8 11.42 8 11.42s4.95 0 6.18-.35a2 2 0 0 0 1.42-1.44c.34-1.25.34-3.88.34-3.88s0-2.63-.34-3.88Z" fill="#FF0000"/>
                    <path d="M6.4 8.25V3.25L10.8 5.75 6.4 8.25Z" fill="white"/>
                  </svg>
                  YouTube
                </span>
              </div>
              <div className="yt-clip-card__info">
                <span className="yt-clip-card__num">{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="yt-clip-card__title">{clip.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal — local video */}
      {activeVideo && (
        <div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Playing: ${activeVideo.title}`}
          onClick={closeVideo}
          id="video-modal"
        >
          <button
            className="video-modal__close"
            onClick={closeVideo}
            aria-label="Close video"
            id="video-modal-close"
          >
            ✕
          </button>
          <div className="video-modal__content" onClick={(e) => e.stopPropagation()}>
            <h3 className="video-modal__title">{activeVideo.title}</h3>
            {activeVideo.type === 'youtube' && activeVideo.youtubeId ? (
              <iframe
                className="video-modal__iframe"
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                ref={videoRef}
                src={activeVideo.src}
                className="video-modal__player"
                controls
                autoPlay
              />
            )}
          </div>
        </div>
      )}

      {/* Modal — YouTube clips */}
      {activeYT && (
        <div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Playing: ${activeYT.title}`}
          onClick={closeYT}
          id="yt-modal"
        >
          <button
            className="video-modal__close"
            onClick={closeYT}
            aria-label="Close video"
            id="yt-modal-close"
          >
            ✕
          </button>
          <div className="video-modal__content" onClick={(e) => e.stopPropagation()}>
            <h3 className="video-modal__title">{activeYT.title}</h3>
            <iframe
              className="video-modal__iframe"
              src={`https://www.youtube.com/embed/${activeYT.youtubeId}?autoplay=1`}
              title={activeYT.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Videos;
