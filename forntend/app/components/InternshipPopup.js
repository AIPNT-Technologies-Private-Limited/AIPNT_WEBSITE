"use client";

import { useState, useEffect } from 'react';
import { FaTimes, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function InternshipPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const popupShown = sessionStorage.getItem('internshipPopupShown');
    
    if (!popupShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('internshipPopupShown', 'true');
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`popup-overlay ${isClosing ? 'popup-closing' : ''}`} onClick={closePopup}>
      <div className={`popup-container ${isClosing ? 'popup-container-closing' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={closePopup} aria-label="Close popup">
          <FaTimes />
        </button>
        
        <div className="popup-image">
          <img src="/assets/summer-internship-hero.png" alt="Summer Internship" />
          <div className="popup-image-overlay"></div>
          <span className="popup-tag">SUMMER 2026</span>
        </div>
        
        <div className="popup-content">
          <h2>Apply for Internship</h2>
          <p>
            Kickstart your career with hands-on projects in AI, IoT, Web Development & Software Testing. Limited seats available!
          </p>
          
          <div className="popup-features">
            <div className="feature-item">
              <span className="feature-dot"></span>
              Real Projects
            </div>
            <div className="feature-item">
              <span className="feature-dot"></span>
              Industry Mentors
            </div>
            <div className="feature-item">
              <span className="feature-dot"></span>
              Certification
            </div>
          </div>
          
          <div className="popup-actions">
            <Link href="/summer-internship" className="popup-cta" onClick={closePopup}>
              View Programs <FaArrowRight />
            </Link>
            <button className="popup-skip" onClick={closePopup}>
              Not Now
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        .popup-overlay.popup-closing {
          animation: fadeOut 0.3s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        .popup-container {
          position: relative;
          background: #ffffff;
          border-radius: 16px;
          max-width: 420px;
          width: 100%;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .popup-container.popup-container-closing {
          animation: slideDown 0.3s ease forwards;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(30px) scale(0.96);
          }
        }

        .popup-close {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          color: #333;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          transition: all 0.2s ease;
          z-index: 10;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .popup-close:hover {
          background: #ff9900;
          color: #fff;
          transform: scale(1.1);
        }

        .popup-image {
          position: relative;
          height: 180px;
          overflow: hidden;
        }

        .popup-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .popup-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 30%, rgba(0, 0, 0, 0.4) 100%);
        }

        .popup-tag {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: #ff9900;
          color: #fff;
          padding: 6px 14px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .popup-content {
          padding: 28px 24px;
        }

        .popup-content h2 {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 12px;
        }

        .popup-content p {
          font-size: 15px;
          line-height: 1.6;
          color: #555;
          margin-bottom: 20px;
        }

        .popup-features {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 24px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #333;
          font-weight: 500;
        }

        .feature-dot {
          width: 8px;
          height: 8px;
          background: #ff9900;
          border-radius: 50%;
        }

        .popup-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .popup-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ff9900;
          color: #fff;
          padding: 14px 24px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 4px 15px rgba(255, 153, 0, 0.3);
        }

        .popup-cta:hover {
          background: #e68a00;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 153, 0, 0.4);
        }

        .popup-skip {
          background: transparent;
          border: none;
          color: #888;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          padding: 8px 12px;
          transition: color 0.2s ease;
        }

        .popup-skip:hover {
          color: #333;
        }

        @media (max-width: 480px) {
          .popup-container {
            border-radius: 12px;
            max-width: 340px;
          }

          .popup-image {
            height: 150px;
          }

          .popup-content {
            padding: 24px 20px;
          }

          .popup-content h2 {
            font-size: 20px;
          }

          .popup-content p {
            font-size: 14px;
          }

          .popup-features {
            gap: 10px;
          }

          .feature-item {
            font-size: 12px;
          }

          .popup-actions {
            flex-direction: column;
            gap: 12px;
          }

          .popup-cta {
            width: 100%;
            justify-content: center;
            padding: 14px 20px;
          }

          .popup-skip {
            order: 1;
          }
        }
      `}</style>
    </div>
  );
}

