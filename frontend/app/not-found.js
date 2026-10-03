"use client";

import Link from 'next/link';
import { FaRocket, FaClock, FaHome } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="coming-soon-page">
      <div className="coming-soon-content">
        <div className="rocket-icon">
          <FaRocket />
        </div>
        
        <h1>Coming Soon</h1>
        <p className="tagline">We're working hard to bring you something amazing!</p>
        
        <div className="status-badge">
          <FaClock />
          <span>Under Development</span>
        </div>
        
        <p className="description">
          This page is currently being crafted with care. 
          Check back soon for exciting new content and features.
        </p>
        
        <Link href="/" className="home-button">
          <FaHome />
          <span>Back to Home</span>
        </Link>
      </div>

      <style jsx>{`
        .coming-soon-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%);
          padding: 40px 20px;
          position: relative;
          overflow: hidden;
        }

        .coming-soon-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(255, 153, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 153, 0, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .coming-soon-content {
          text-align: center;
          max-width: 500px;
          position: relative;
          z-index: 1;
        }

        .rocket-icon {
          font-size: 80px;
          color: #ff9900;
          margin-bottom: 30px;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(-15deg);
          }
          50% {
            transform: translateY(-15px) rotate(-15deg);
          }
        }

        h1 {
          font-size: 48px;
          color: #fff;
          margin: 0 0 15px 0;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .tagline {
          font-size: 18px;
          color: #ffcc80;
          margin: 0 0 30px 0;
          font-weight: 500;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 153, 0, 0.15);
          border: 1px solid rgba(255, 153, 0, 0.3);
          padding: 12px 24px;
          border-radius: 50px;
          color: #ff9900;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 30px;
        }

        .description {
          font-size: 16px;
          color: #a8a8bb;
          line-height: 1.7;
          margin: 0 0 40px 0;
        }

        .home-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ff9900;
          color: #fff;
          padding: 14px 32px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(255, 153, 0, 0.3);
        }

        .home-button:hover {
          background: #ffb84d;
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(255, 153, 0, 0.4);
        }

        @media (max-width: 600px) {
          .rocket-icon {
            font-size: 60px;
          }

          h1 {
            font-size: 36px;
          }

          .tagline {
            font-size: 16px;
          }

          .description {
            font-size: 15px;
          }

          .home-button {
            padding: 12px 28px;
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
}
