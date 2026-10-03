"use client";

import React, { useState } from 'react';
import { 
  FaCompass, 
  FaLayerGroup, 
  FaBrain, 
  FaRocket, 
  FaArrowRight, 
  FaCheck,
  FaShieldAlt,
  FaBolt,
  FaCheckCircle
} from 'react-icons/fa';

export default function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      step: '01',
      phase: 'STAGE 1 • DISCOVERY',
      title: 'Operational Reality',
      subtitle: 'Understand Context & Constraints',
      desc: 'We study user workflows, low-bandwidth edge constraints, and institutional failure points directly in the field before writing architecture.',
      icon: <FaCompass />,
      color: '#6366f1',
      bgLight: 'rgba(99, 102, 241, 0.08)',
      borderColor: 'rgba(99, 102, 241, 0.25)',
      deliverables: [
        'Field User Research & Workflows',
        'Edge & Network Constraint Mapping',
        'Sovereign Data Governance Plan'
      ]
    },
    {
      step: '02',
      phase: 'STAGE 2 • ARCHITECTURE',
      title: 'Modular Architecture',
      subtitle: 'Design Resilient Systems',
      desc: 'We architect vendor-neutral, modular systems engineered for high-concurrency cloud, on-prem air-gapped clusters, and edge IoT devices.',
      icon: <FaLayerGroup />,
      color: '#0284c7',
      bgLight: 'rgba(2, 132, 199, 0.08)',
      borderColor: 'rgba(2, 132, 199, 0.25)',
      deliverables: [
        'Cloud & Edge Hybrid Topology',
        'Modular Microservices & APIs',
        'Custom Hardware Sensor Specs'
      ]
    },
    {
      step: '03',
      phase: 'STAGE 3 • AI INTEGRATION',
      title: 'Neural Stack Injection',
      subtitle: 'Embed Specialized Intelligence',
      desc: 'We train and inject specialized AI models—vernacular speech engines, edge vision, enterprise RAG, and autonomous decision loops.',
      icon: <FaBrain />,
      color: '#059669',
      bgLight: 'rgba(5, 150, 105, 0.08)',
      borderColor: 'rgba(5, 150, 105, 0.25)',
      deliverables: [
        'Fine-Tuned Domain LLMs / SLMs',
        '12+ Indic Language Speech & Voice',
        'Real-Time Edge Computer Vision'
      ]
    },
    {
      step: '04',
      phase: 'STAGE 4 • IMPACT & SCALE',
      title: 'Nationwide Rollout',
      subtitle: 'Deploy, Monitor & Scale',
      desc: 'We roll out production systems across institutions, districts, and states with zero downtime, real-time telemetry, and SLA guarantees.',
      icon: <FaRocket />,
      color: '#d97706',
      bgLight: 'rgba(217, 119, 6, 0.08)',
      borderColor: 'rgba(217, 119, 6, 0.25)',
      deliverables: [
        'Phased Nationwide Deployments',
        'Real-Time Health & Telemetry Hub',
        'Continuous Model Optimization'
      ]
    }
  ];

  return (
    <section className="how-we-work-section">
      <div className="hww-container">
        {/* Section Header */}
        <div className="hww-header">
          <div className="hww-label">
            <span className="hww-pulse-dot"></span>
            <span>ENGINEERING METHODOLOGY</span>
          </div>
          <h2>From Problem → Intelligence → Impact.</h2>
          <p className="hww-subtitle">
            A battle-tested 4-stage engineering lifecycle built to bridge the gap between high-level AI capabilities 
            and real-world public digital infrastructure.
          </p>
        </div>

        {/* 4-Stage Connected Pipeline Grid */}
        <div className="hww-pipeline-grid">
          {steps.map((item, idx) => {
            const isHovered = activeStep === idx;
            return (
              <div 
                key={item.step}
                className={`hww-card ${isHovered ? 'hww-card--active' : ''}`}
                style={{
                  '--step-color': item.color,
                  '--step-bg': item.bgLight,
                  '--step-border': item.borderColor
                }}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Top Accent Gradient Bar */}
                <div className="hww-card-top-bar" style={{ background: item.color }}></div>

                {/* Subtle Background Watermark Numeral */}
                <span className="hww-watermark-num">{item.step}</span>

                <div className="hww-card-body">
                  {/* Step Header with Icon & Number Badge */}
                  <div className="hww-card-head">
                    <div className="hww-icon-box" style={{ color: item.color, background: item.bgLight }}>
                      {item.icon}
                    </div>
                    <div className="hww-num-badge" style={{ borderColor: item.borderColor, color: item.color }}>
                      {item.step}
                    </div>
                  </div>

                  {/* Phase Label */}
                  <span className="hww-phase-tag" style={{ color: item.color }}>
                    {item.phase}
                  </span>

                  {/* Title & Subtitle */}
                  <h3 className="hww-card-title">{item.title}</h3>
                  <h4 className="hww-card-sub">{item.subtitle}</h4>

                  {/* Description */}
                  <p className="hww-card-desc">{item.desc}</p>

                  {/* Deliverables Checklist */}
                  <div className="hww-deliverables">
                    <span className="hww-deliverables-header">KEY DELIVERABLES:</span>
                    <ul className="hww-deliverables-list">
                      {item.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="hww-del-item">
                          <FaCheck className="hww-check-icon" style={{ color: item.color }} />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Step Connector Arrow (for desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hww-flow-indicator">
                    <FaArrowRight />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quality & Sovereign Assurance Banner */}
        <div className="hww-assurance-bar">
          <div className="hww-assurance-item">
            <FaShieldAlt className="assurance-icon" style={{ color: '#0284c7' }} />
            <div>
              <strong>Sovereign &amp; Private</strong>
              <span>ABDM &amp; Air-Gapped Ready</span>
            </div>
          </div>
          <div className="hww-assurance-divider"></div>
          <div className="hww-assurance-item">
            <FaBolt className="assurance-icon" style={{ color: '#6366f1' }} />
            <div>
              <strong>Low-Latency Edge</strong>
              <span>Works Offline &amp; Hybrid</span>
            </div>
          </div>
          <div className="hww-assurance-divider"></div>
          <div className="hww-assurance-item">
            <FaCheckCircle className="assurance-icon" style={{ color: '#059669' }} />
            <div>
              <strong>Milestone-Driven</strong>
              <span>Continuous SLA &amp; Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
