"use client";

import { useState, useEffect, useCallback } from 'react';
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaRibbon
} from 'react-icons/fa';

const galleryPhotos = [
  {
    id: 0,
    src: '/assets/inauguration-collage-banner.jpg',
    title: 'AIPNT Inauguration Day',
    desc: ''
  },
  {
    id: 1,
    src: '/assets/inauguration/inauguration-1.jpg',
    title: 'Inauguration Ceremony Keynote',
    desc: 'Distinguished guests and leadership delivering the opening keynote address for the AIPNT facility.'
  },
  {
    id: 2,
    src: '/assets/inauguration/inauguration-2.jpg',
    title: 'Ribbon Cutting Milestone',
    desc: 'Official ribbon cutting ceremony marking the formal inauguration of AIPNT tech ecosystem.'
  },
  {
    id: 3,
    src: '/assets/inauguration/inauguration-3.jpg',
    title: 'Dignitaries & Chief Guests',
    desc: 'Honored delegates, industry experts, and academic leaders gathered at the inauguration.'
  },
  {
    id: 4,
    src: '/assets/inauguration/inauguration-4.jpg',
    title: 'Unveiling Innovation Labs',
    desc: 'Inaugurating state-of-the-art AI, Machine Learning, and STEM learning infrastructure.'
  },
  {
    id: 5,
    src: '/assets/inauguration/inauguration-5.jpg',
    title: 'Interactive Facility Tour',
    desc: 'Chief guests and attendees touring the newly commissioned hardware and robotics labs.'
  },
  {
    id: 6,
    src: '/assets/inauguration/inauguration-6.jpg',
    title: 'Commemorative Felicitation',
    desc: 'Honoring key contributors, mentors, and partner delegates during the grand inaugural function.'
  },
  {
    id: 7,
    src: '/assets/inauguration/inauguration-7.jpg',
    title: 'Ecosystem Partnership Launch',
    desc: 'Commencing transformative academic and enterprise collaboration agreements.'
  },
  {
    id: 8,
    src: '/assets/inauguration/inauguration-8.jpg',
    title: 'Group Celebrations & Team',
    desc: 'The passionate team, mentors, and guests celebrating the successful launch of AIPNT.'
  }
];

export default function
  InaugurationGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index = 0) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const showPrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? galleryPhotos.length - 1 : prev - 1));
  }, []);

  const showNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev === galleryPhotos.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  return (
    <section className="inauguration-section" id="inauguration">
      <div className="inauguration-container">
        {/* Section Header */}
        <div className="inauguration-header">
          <div className="badge-pill">
            <FaRibbon className="badge-icon" />
            <span>SPECIAL MILESTONE</span>
          </div>
          <h2>Grand Inauguration Day Highlights</h2>
          <p className="inauguration-subtitle">
            Celebrating the milestone launch of AIPNT’s next-generation AI & STEM training ecosystem.
            Click below to view the master collage in full resolution.
          </p>
        </div>

        {/* Master Stitched Poster Banner Only */}
        <div className="poster-container">
          <div className="poster-card" onClick={() => openLightbox(0)}>
            <img
              src="/assets/inauguration-collage-banner.jpg"
              alt="AIPNT Inauguration Day"
              className="poster-img"
            />
            <div className="poster-overlay">
              <div className="poster-click-hint">
                <FaExpand /> Click to View Fullscreen
              </div>
            </div>
          </div>
          <div className="poster-caption">
            <h3>AIPNT Inauguration Day  </h3>
            <p>
              03/08/2026
              {/* A high-resolution composite graphic combining all key inaugural moments into a unified milestone banner. */}
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <div className="lightbox-backdrop"></div>

          {/* Close Button */}
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close Lightbox">
            <FaTimes />
          </button>

          {/* Previous Button */}
          <button className="lightbox-nav lightbox-prev" onClick={showPrev} aria-label="Previous Photo">
            <FaChevronLeft />
          </button>

          {/* Main Lightbox Content */}
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image-container">
              <img
                src={galleryPhotos[lightboxIndex].src}
                alt={galleryPhotos[lightboxIndex].title}
              />
            </div>
            <div className="lightbox-footer">
              <div className="lightbox-info">
                <h3>{galleryPhotos[lightboxIndex].title}</h3>
                <p>{galleryPhotos[lightboxIndex].desc}</p>
              </div>
              <div className="lightbox-counter">
                {lightboxIndex + 1} / {galleryPhotos.length}
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button className="lightbox-nav lightbox-next" onClick={showNext} aria-label="Next Photo">
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}
