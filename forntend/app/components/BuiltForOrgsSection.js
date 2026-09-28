"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaGraduationCap, 
  FaHeartbeat, 
  FaLandmark, 
  FaBuilding, 
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaCircle
} from 'react-icons/fa';

export default function BuiltForOrgsSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const orgs = [
    {
      id: 'education',
      title: 'Education',
      tag: 'EDUTECH & ADAPTIVE LEARNING',
      headline: 'Schools, Universities & Skill Academies',
      desc: 'Smart digital classrooms, vernacular AI tutors, automated grading, and student intelligence tracking for state boards and higher education.',
      icon: <FaGraduationCap />,
      color: '#6366f1',
      bgLight: 'rgba(99, 102, 241, 0.08)',
      borderColor: 'rgba(99, 102, 241, 0.25)',
      link: '/products/prarambh',
      tags: ['Prarambh Suite', 'Vernacular AI Tutors', 'Smart Attendance'],
      metrics: '20+ Institutions'
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      tag: 'MEDTECH & CLINICAL SYSTEMS',
      headline: 'Hospitals, Clinics & PHC Networks',
      desc: 'Point-of-care vital diagnostic kiosks, ABDM-certified electronic health records (EHR), and automated patient triage engines for public health.',
      icon: <FaHeartbeat />,
      color: '#ef4444',
      bgLight: 'rgba(239, 68, 68, 0.08)',
      borderColor: 'rgba(239, 68, 68, 0.25)',
      link: '/products/digiswasth',
      tags: ['DigiSwasth Ecosystem', 'ABDM M1-M3 EHR', '10+ Vitals Kiosks'],
      metrics: 'Clinical Grade'
    },
    {
      id: 'government',
      title: 'Government',
      tag: 'GOVTECH & PUBLIC DIGITAL STACK',
      headline: 'Central, State & Local Municipal Bodies',
      desc: 'Constituency grievance resolution, geospatial GIS ward telemetry, multilingual citizen voice agents, and executive command centers.',
      icon: <FaLandmark />,
      color: '#10b981',
      bgLight: 'rgba(16, 185, 129, 0.08)',
      borderColor: 'rgba(16, 185, 129, 0.25)',
      link: '/products',
      tags: ['Grievance Triage AI', 'GIS Ward Tagging', 'Command Hub'],
      metrics: 'Sovereign Cloud'
    },
    {
      id: 'enterprises',
      title: 'Enterprises',
      tag: 'ENTERPRISE AI & AGENTS',
      headline: 'High-Growth Businesses & Industry Leaders',
      desc: 'Private RAG knowledge bases, air-gapped enterprise copilots, autonomous multi-agent tool loops, and automated document synthesis.',
      icon: <FaBuilding />,
      color: '#0284c7',
      bgLight: 'rgba(2, 132, 199, 0.08)',
      borderColor: 'rgba(2, 132, 199, 0.25)',
      link: '/enterprise-ai',
      tags: ['Private RAG Hub', 'Autonomous Agents', 'Air-Gapped LLMs'],
      metrics: 'Sub-50ms SLA'
    }
  ];

  return (
    <section className="built-for-section">
      <div className="built-for-container">
        {/* Section Header */}
        <div className="section-header-modern">
          <div className="header-left">
            <span className="section-label-modern">
              <span className="label-pulse-dot"></span> BUILT FOR SCALE
            </span>
            <h2>Organisations That Solve Real Problems.</h2>
          </div>
          <div className="header-right">
            <p>
              Our platforms are deployed across public institutions, health networks, government secretariats, 
              and private enterprises to drive systemic efficiency and nationwide impact.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="built-for-grid-modern">
          {orgs.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <Link 
                href={item.link} 
                key={item.id}
                className={`org-card-modern ${isHovered ? 'org-card-modern--active' : ''}`}
                style={{
                  '--domain-color': item.color,
                  '--domain-bg': item.bgLight,
                  '--domain-border': item.borderColor
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Top Accent Bar */}
                <div className="org-card-top-accent" style={{ background: item.color }}></div>

                <div className="org-card-inner">
                  {/* Card Header: Icon & Domain Tag */}
                  <div className="org-card-header">
                    <div className="org-icon-badge" style={{ color: item.color, background: item.bgLight }}>
                      {item.icon}
                    </div>
                    <span className="org-domain-badge" style={{ color: item.color, borderColor: item.borderColor }}>
                      {item.metrics}
                    </span>
                  </div>

                  {/* Title & Domain Tag */}
                  <span className="org-meta-tag" style={{ color: item.color }}>
                    {item.tag}
                  </span>
                  <h3 className="org-title">{item.title}</h3>
                  <h4 className="org-headline">{item.headline}</h4>

                  {/* Description */}
                  <p className="org-desc">{item.desc}</p>

                  {/* Feature Chips */}
                  <div className="org-chips-row">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="org-chip">{tag}</span>
                    ))}
                  </div>

                  {/* Interactive Action Footer */}
                  <div className="org-card-footer">
                    <span className="org-explore-link" style={{ color: item.color }}>
                      Explore Solutions <FaArrowRight className="org-arrow-icon" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
