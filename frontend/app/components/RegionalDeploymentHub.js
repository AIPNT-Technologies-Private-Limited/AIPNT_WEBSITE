"use client";

import React, { useState } from 'react';
import {
  FaMapMarkerAlt, FaHeartbeat, FaGraduationCap,
  FaWifi, FaCheckCircle, FaSatelliteDish, FaServer, FaShieldAlt,
  FaLaptopCode, FaHospitalAlt, FaNetworkWired, FaBuilding
} from 'react-icons/fa';
import IndiaMapSVG from './IndiaMapSVG';

const REGIONS = {
  all: {
    id: 'all',
    name: 'Pan-India Scale',
    badge: 'National Footprint',
    headline: 'Multi-State Deep Tech Infrastructure',
    description:
      'Resilient edge-to-cloud architecture serving health centers, rural STEM classrooms, and municipal governance across eastern, southern, and northern India.',
    stats: [
      { label: 'Active Districts', value: '30+', icon: FaMapMarkerAlt, color: '#38bdf8' },
      { label: 'Connected Clinics', value: '45+', icon: FaHeartbeat, color: '#2dd4bf' },
      { label: 'STEM Classrooms', value: '120+', icon: FaGraduationCap, color: '#c084fc' },
      { label: 'Edge Uptime', value: '99.8%', icon: FaWifi, color: '#fbbf24' }
    ],
    highlights: [
      'Offline-First local storage with automatic cloud reconciliation',
      'Dual-language voice and vision models for rural vernacular users',
      'ABDM (Ayushman Bharat Digital Mission) compliant data architecture'
    ],
    liveStatus: 'Active nodes syncing across Odisha, Karnataka, and Bihar'
  },
  odisha: {
    id: 'odisha',
    name: 'Odisha (HQ & R&D)',
    badge: 'Headquarters & Core AI Lab',
    headline: 'Bhubaneswar R&D & Cuttack Outreach',
    description:
      'Our primary AI research labs at DLF Cyber City (Silicon University incubation) driving clinical kiosk deployments and native Odia LLM intelligence.',
    stats: [
      { label: 'Cyber City Lab', value: 'HQ Hub', icon: FaServer, color: '#38bdf8' },
      { label: 'Cuttack Outlet', value: 'Salipur', icon: FaBuilding, color: '#2dd4bf' },
      { label: 'District PHCs', value: '18 Units', icon: FaHospitalAlt, color: '#c084fc' },
      { label: 'Odia Voice AI', value: 'Native', icon: FaSatelliteDish, color: '#fbbf24' }
    ],
    highlights: [
      'DLF Cyber City: AI engine training, IoT kiosk assembly & validation',
      'Cuttack Regional Outlet (Gokana, Salipur): Grassroots field education & demo center',
      'Silicon University incubation partnership powering academic AI research'
    ],
    liveStatus: 'Bhubaneswar HQ: 4,200 EHR records synced to ABDM today'
  },
  karnataka: {
    id: 'karnataka',
    name: 'Karnataka (Bangalore RO)',
    badge: 'Regional Tech Office',
    headline: 'Bengaluru Embedded Systems & Cloud Lab',
    description:
      'Situated at Whitefield (ITPL back gate), our Bangalore regional office engineers hardware sensor interfaces, telemetry pipelines, and high-availability cloud services.',
    stats: [
      { label: 'Whitefield RO', value: 'ITPL Tech', icon: FaBuilding, color: '#38bdf8' },
      { label: 'Vital Sensors', value: '10+ Types', icon: FaHeartbeat, color: '#2dd4bf' },
      { label: 'IoT Firmware', value: 'Active', icon: FaServer, color: '#c084fc' },
      { label: 'Cloud Latency', value: '< 24ms', icon: FaWifi, color: '#fbbf24' }
    ],
    highlights: [
      'Whitefield RO: Embedded sensor calibration & cloud telemetry infrastructure',
      'Point-of-care vital diagnostic sensor integration bench',
      'Enterprise partnerships & pan-India system monitoring'
    ],
    liveStatus: 'Bangalore Team: Firmware v2.4 deployed to all field kiosks'
  },
  bihar: {
    id: 'bihar',
    name: 'Bihar (Regional Outlet)',
    badge: 'Grassroots Deployment',
    headline: 'Rohtas Grassroots Tech & STEM Desk',
    description:
      'Direct field presence in Karakat (Jaishree, Rohtas) bringing AI literacy, hands-on STEM hardware kits, and citizen digital assistance to rural youth and local bodies.',
    stats: [
      { label: 'Rohtas Outlet', value: 'Karakat', icon: FaBuilding, color: '#38bdf8' },
      { label: 'Rural Students', value: '2,500+', icon: FaGraduationCap, color: '#2dd4bf' },
      { label: 'Coding Labs', value: '15+ Schools', icon: FaLaptopCode, color: '#c084fc' },
      { label: 'Hindi AI Pilot', value: 'Active', icon: FaSatelliteDish, color: '#fbbf24' }
    ],
    highlights: [
      'Jaishree, Karakat: Rural STEM education & citizen tech support desk',
      'Hands-on block coding and IoT robotics workshops for rural students',
      'Demonstration center for low-cost telemedicine & AI diagnostics'
    ],
    liveStatus: 'Rohtas Center: 30 new students onboarded to Prarambh Coding today'
  }
};

export default function RegionalDeploymentHub() {
  const [activeRegion, setActiveRegion] = useState('all');
  const region = REGIONS[activeRegion];

  return (
    <div className="hub-container">
      {/* Region Switcher Tabs */}
      <div className="hub-nav">
        {Object.keys(REGIONS).map((key) => {
          const item = REGIONS[key];
          const isActive = activeRegion === key;
          return (
            <button
              key={key}
              type="button"
              className={`hub-nav-btn ${isActive ? 'hub-nav-btn--active' : ''}`}
              onClick={() => setActiveRegion(key)}
            >
              <span className={`hub-nav-dot ${isActive ? 'hub-nav-dot--active' : ''}`}></span>
              {item.name}
            </button>
          );
        })}
      </div>

      <div className="hub-body">
        {/* Interactive Map Visual */}
        <div className="hub-map-card">
          <div className="hub-map-header">
            <span className="hub-map-title">
              <FaNetworkWired /> REAL-TIME FIELD NODES
            </span>
            <span className="hub-map-badge">
              <span className="hub-pulse-beacon"></span>
              {activeRegion === 'all' ? 'All Hubs Online' : `${region.name} Selected`}
            </span>
          </div>

          <div className="hub-svg-wrapper">
            <svg
              className="hub-india-svg"
              viewBox="0 0 2500 2843"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Glow Filter */}
                <filter id="hubPinGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="14" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Map Grid Pattern */}
                <pattern id="hubMapGrid" width="120" height="120" patternUnits="userSpaceOnUse">
                  <path d="M 120 0 L 0 0 0 120" fill="none" stroke="rgba(255,255,255,0.035)" strokeWidth="1.5" />
                </pattern>

                <linearGradient id="hubArcGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#818cf8" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="hubArcGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Background Grid */}
              <rect width="100%" height="100%" fill="url(#hubMapGrid)" />

              {/* Official Recognized Sovereign Map of India with All States & UTs */}
              <IndiaMapSVG activeRegion={activeRegion} onSelectRegion={setActiveRegion} />

              {/* Connecting Telemetry Arcs */}
              {/* Bhubaneswar (1530, 1630) to Bengaluru (780, 2320) */}
              <path
                d="M 1530 1630 Q 1100 1950 780 2320"
                fill="none"
                stroke="url(#hubArcGrad1)"
                strokeWidth="7"
                strokeDasharray="22 22"
                className="hub-stream-arc hub-stream-arc--1"
              />

              {/* Bhubaneswar (1530, 1630) to Bihar/Rohtas (1440, 1180) */}
              <path
                d="M 1530 1630 Q 1540 1400 1440 1180"
                fill="none"
                stroke="url(#hubArcGrad2)"
                strokeWidth="7"
                strokeDasharray="22 22"
                className="hub-stream-arc hub-stream-arc--2"
              />

              {/* Bengaluru (780, 2320) to Bihar (1440, 1180) */}
              <path
                d="M 780 2320 Q 980 1700 1440 1180"
                fill="none"
                stroke="rgba(192, 132, 252, 0.45)"
                strokeWidth="6"
                strokeDasharray="18 18"
                className="hub-stream-arc hub-stream-arc--3"
              />

              {/* ═══ NODE 1: ODISHA (HQ - Bhubaneswar & Cuttack) ═══ */}
              <g
                className={`hub-pin-group ${activeRegion === 'odisha' || activeRegion === 'all' ? 'hub-pin-group--active' : ''}`}
                onClick={() => setActiveRegion('odisha')}
                style={{ cursor: 'pointer' }}
              >
                {/* Pulse Rings */}
                <circle cx="1530" cy="1630" r="75" className="hub-pulse-ring hub-pulse-ring--cyan" />
                <circle cx="1530" cy="1630" r="48" className="hub-pulse-ring-inner" />
                <circle cx="1530" cy="1630" r="24" fill="#38bdf8" filter="url(#hubPinGlow)" />
                <circle cx="1530" cy="1630" r="10" fill="#ffffff" />
                {/* Node Label */}
                <rect x="1575" y="1590" width="460" height="84" rx="20" fill="rgba(15, 23, 42, 0.92)" stroke="rgba(56, 189, 248, 0.55)" strokeWidth="3" />
                <text x="1605" y="1646" fill="#38bdf8" fontSize="36" fontWeight="700" fontFamily="sans-serif">
                  ★ ODISHA (HQ Hub)
                </text>
              </g>

              {/* ═══ NODE 2: KARNATAKA (Bangalore RO - ITPL) ═══ */}
              <g
                className={`hub-pin-group ${activeRegion === 'karnataka' || activeRegion === 'all' ? 'hub-pin-group--active' : ''}`}
                onClick={() => setActiveRegion('karnataka')}
                style={{ cursor: 'pointer' }}
              >
                <circle cx="780" cy="2320" r="70" className="hub-pulse-ring hub-pulse-ring--teal" />
                <circle cx="780" cy="2320" r="44" className="hub-pulse-ring-inner" />
                <circle cx="780" cy="2320" r="22" fill="#2dd4bf" filter="url(#hubPinGlow)" />
                <circle cx="780" cy="2320" r="9" fill="#ffffff" />
                {/* Node Label */}
                <rect x="290" y="2280" width="450" height="84" rx="20" fill="rgba(15, 23, 42, 0.92)" stroke="rgba(45, 212, 191, 0.55)" strokeWidth="3" />
                <text x="320" y="2336" fill="#2dd4bf" fontSize="36" fontWeight="700" fontFamily="sans-serif">
                  📍 BENGALURU (RO)
                </text>
              </g>

              {/* ═══ NODE 3: BIHAR (Rohtas Outlet - Karakat) ═══ */}
              <g
                className={`hub-pin-group ${activeRegion === 'bihar' || activeRegion === 'all' ? 'hub-pin-group--active' : ''}`}
                onClick={() => setActiveRegion('bihar')}
                style={{ cursor: 'pointer' }}
              >
                <circle cx="1440" cy="1180" r="70" className="hub-pulse-ring hub-pulse-ring--purple" />
                <circle cx="1440" cy="1180" r="44" className="hub-pulse-ring-inner" />
                <circle cx="1440" cy="1180" r="22" fill="#c084fc" filter="url(#hubPinGlow)" />
                <circle cx="1440" cy="1180" r="9" fill="#ffffff" />
                {/* Node Label */}
                <rect x="1485" y="1140" width="430" height="84" rx="20" fill="rgba(15, 23, 42, 0.92)" stroke="rgba(192, 132, 252, 0.55)" strokeWidth="3" />
                <text x="1515" y="1196" fill="#c084fc" fontSize="36" fontWeight="700" fontFamily="sans-serif">
                  📍 BIHAR (Outlet)
                </text>
              </g>
            </svg>
          </div>

          <div className="hub-telemetry-strip">
            <span className="hub-telemetry-indicator"></span>
            <span className="hub-telemetry-text">{region.liveStatus}</span>
          </div>
        </div>

        {/* Region Details & Live Metrics Card */}
        <div className="hub-details-card">
          <div className="hub-details-header">
            <span className="hub-region-badge">{region.badge}</span>
            <h3 className="hub-region-title">{region.headline}</h3>
            <p className="hub-region-desc">{region.description}</p>
          </div>

          {/* Metric Chips */}
          <div className="hub-stats-grid">
            {region.stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="hub-stat-item">
                  <div className="hub-stat-icon" style={{ color: stat.color, background: `${stat.color}18` }}>
                    <Icon />
                  </div>
                  <div className="hub-stat-info">
                    <span className="hub-stat-val">{stat.value}</span>
                    <span className="hub-stat-lbl">{stat.label}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Architecture Highlights */}
          <div className="hub-highlights">
            <span className="hub-highlights-title">OPERATIONAL CAPABILITIES</span>
            <ul className="hub-highlights-list">
              {region.highlights.map((item, i) => (
                <li key={i}>
                  <FaCheckCircle className="hub-check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
