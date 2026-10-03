"use client";

import React, { useState } from 'react';
import { 
  FaRobot, 
  FaWandMagicSparkles, 
  FaMicrophoneLines, 
  FaDatabase, 
  FaEye, 
  FaChartLine,
  FaBolt,
  FaArrowRight,
  FaCircleCheck,
  FaShieldHalved
} from 'react-icons/fa6';

export default function AiCoreDiagram() {
  const [activeId, setActiveId] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const capabilities = [
    {
      id: 'agents',
      title: 'AI Agents',
      sub: 'Autonomous Workflows',
      desc: 'Goal-driven reasoning loops, multi-agent coordination, and dynamic tool invocation.',
      category: 'reasoning',
      side: 'left',
      color: '#38bdf8', // Cyan
      badge: 'AUTONOMOUS LOOP',
      tags: ['Tool Calling', 'Multi-Agent Loop', 'Self-Healing'],
      icon: <FaRobot />,
      telemetry: {
        metric: '1.2k ops/s',
        latency: '32ms',
        status: 'Active Pipeline'
      }
    },
    {
      id: 'genai',
      title: 'Generative AI',
      sub: 'Domain Reasoning & LLMs',
      desc: 'Fine-tuned domain models engineered for high-accuracy synthesis and structured output.',
      category: 'reasoning',
      side: 'left',
      color: '#c084fc', // Purple
      badge: 'DOMAIN LLMS',
      tags: ['Fine-Tuned SLMs', 'Structured Output', 'Context Engine'],
      icon: <FaWandMagicSparkles />,
      telemetry: {
        metric: '850 tokens/s',
        latency: '45ms',
        status: 'Inference Ready'
      }
    },
    {
      id: 'voice',
      title: 'Voice AI',
      sub: 'Multilingual Indic Speech',
      desc: 'Real-time streaming speech-to-text and expressive neural voice across 12+ Indian languages.',
      category: 'perception',
      side: 'left',
      color: '#06b6d4', // Teal/Cyan
      badge: '12+ INDIC LANGUAGES',
      tags: ['Streaming ASR', 'Neural TTS', 'Sub-120ms'],
      icon: <FaMicrophoneLines />,
      telemetry: {
        metric: '12 Streams',
        latency: '<110ms',
        status: 'Audio Pipeline'
      }
    },
    {
      id: 'rag',
      title: 'Enterprise RAG',
      sub: 'Sovereign Knowledge Hub',
      desc: 'Hybrid dense-sparse vector indexing with strict sovereign guardrails to prevent hallucinations.',
      category: 'reasoning',
      side: 'right',
      color: '#818cf8', // Indigo
      badge: 'HYBRID RETRIEVAL',
      tags: ['Vector DB', 'Hallucination Guard', 'Private Embeddings'],
      icon: <FaDatabase />,
      telemetry: {
        metric: '99.8% Grounded',
        latency: '18ms',
        status: 'Sync Active'
      }
    },
    {
      id: 'vision',
      title: 'Computer Vision',
      sub: 'Real-Time Edge Analytics',
      desc: 'Ultra-fast edge inference for real-time video analytics, object tracking, and OCR.',
      category: 'perception',
      side: 'right',
      color: '#34d399', // Emerald
      badge: 'EDGE INFERENCE',
      tags: ['YOLO / ViT', '60 FPS Video', 'Document OCR'],
      icon: <FaEye />,
      telemetry: {
        metric: '60 FPS Edge',
        latency: '14ms',
        status: 'Vision Node'
      }
    },
    {
      id: 'predictive',
      title: 'Predictive Analytics',
      sub: 'Forecasting & Decision Radar',
      desc: 'Time-series anomaly detection, risk modeling, and operational decision support.',
      category: 'analytics',
      side: 'right',
      color: '#fb7185', // Rose
      badge: 'OPERATIONAL AI',
      tags: ['Time-Series', 'Anomaly Radar', 'Actionable Insights'],
      icon: <FaChartLine />,
      telemetry: {
        metric: '99.4% Precision',
        latency: '24ms',
        status: 'Telemetry Live'
      }
    }
  ];

  const leftNodes = capabilities.filter(c => c.side === 'left');
  const rightNodes = capabilities.filter(c => c.side === 'right');
  const activeNode = capabilities.find(c => c.id === activeId);

  const filterMatches = (node) => {
    if (activeFilter === 'all') return true;
    return node.category === activeFilter;
  };

  return (
    <div className="ai-core-mainframe">
      {/* ── Console Header Filter Bar ── */}
      <div className="mainframe-header">
        <div className="mainframe-title-badge">
          <span className="live-pulse-dot"></span>
          <span className="mainframe-status-text">NEURAL ARCHITECTURE MESH</span>
        </div>

        <div className="mainframe-filter-tabs">
          <button 
            type="button"
            className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Engines (6)
          </button>
          <button 
            type="button"
            className={`filter-tab ${activeFilter === 'reasoning' ? 'active' : ''}`}
            onClick={() => setActiveFilter('reasoning')}
          >
            Reasoning
          </button>
          <button 
            type="button"
            className={`filter-tab ${activeFilter === 'perception' ? 'active' : ''}`}
            onClick={() => setActiveFilter('perception')}
          >
            Perception
          </button>
          <button 
            type="button"
            className={`filter-tab ${activeFilter === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveFilter('analytics')}
          >
            Analytics
          </button>
        </div>
      </div>

      {/* ── Architecture Interactive Canvas ── */}
      <div className="mainframe-grid">
        {/* ══ LEFT NODES ══ */}
        <div className="mainframe-column mainframe-column--left">
          {leftNodes.map((node) => {
            const isMatch = filterMatches(node);
            const isSelected = activeId === node.id;
            return (
              <div
                key={node.id}
                className={`ai-node-card ${isSelected ? 'ai-node-card--active' : ''} ${!isMatch ? 'ai-node-card--dimmed' : ''}`}
                style={{
                  '--accent-color': node.color,
                }}
                onMouseEnter={() => setActiveId(node.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                <div className="node-card-indicator" style={{ background: node.color }}></div>
                <div className="node-card-inner">
                  <div className="node-header">
                    <div className="node-icon-wrapper" style={{ color: node.color }}>
                      {node.icon}
                    </div>
                    <div className="node-title-group">
                      <div className="node-title-row">
                        <h4>{node.title}</h4>
                        <span className="node-badge" style={{ color: node.color }}>
                          {node.badge}
                        </span>
                      </div>
                      <span className="node-sub">{node.sub}</span>
                    </div>
                  </div>

                  <p className="node-desc">{node.desc}</p>

                  <div className="node-tags">
                    {node.tags.map((tag, idx) => (
                      <span key={idx} className="node-tag">{tag}</span>
                    ))}
                  </div>

                  {/* Node Micro Telemetry Bar */}
                  <div className="node-telemetry">
                    <span className="node-telemetry-item">
                      <strong>LATENCY:</strong> {node.telemetry.latency}
                    </span>
                    <span className="node-telemetry-divider">•</span>
                    <span className="node-telemetry-item">
                      <strong>RATE:</strong> {node.telemetry.metric}
                    </span>
                  </div>
                </div>

                {/* Connection line toward center */}
                <div className={`node-connector-line node-connector--right ${isSelected ? 'active' : ''}`}>
                  <div className="connector-pulse"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ══ CENTER NEURAL CORE REACTOR ══ */}
        <div className="mainframe-center">
          <div className="core-reactor-stage">
            {/* Ambient Backlight Glow */}
            <div 
              className="reactor-ambient-glow"
              style={{
                background: activeNode 
                  ? `radial-gradient(circle, ${activeNode.color}33 0%, rgba(56, 189, 248, 0.15) 45%, transparent 70%)`
                  : 'radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(99, 102, 241, 0.12) 50%, transparent 75%)'
              }}
            ></div>

            {/* Rotating SVG Radar & Calibration Rings */}
            <svg className="reactor-svg-rings" viewBox="0 0 320 320">
              <circle cx="160" cy="160" r="148" className="svg-ring-outer" strokeDasharray="6 8" />
              <circle cx="160" cy="160" r="132" className="svg-ring-mid" strokeDasharray="14 10" />
              <circle cx="160" cy="160" r="112" className="svg-ring-inner" strokeDasharray="4 6" />
              {/* Target reticle ticks */}
              <line x1="160" y1="6" x2="160" y2="20" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="2" />
              <line x1="160" y1="300" x2="160" y2="314" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="2" />
              <line x1="6" y1="160" x2="20" y2="160" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="2" />
              <line x1="300" y1="160" x2="314" y2="160" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="2" />
            </svg>

            {/* Central Holographic Heart */}
            <div 
              className="reactor-core-disc"
              style={{
                borderColor: activeNode ? activeNode.color : '#38bdf8',
                boxShadow: activeNode 
                  ? `0 0 35px ${activeNode.color}66, inset 0 0 25px ${activeNode.color}44` 
                  : '0 0 35px rgba(56, 189, 248, 0.5), inset 0 0 20px rgba(56, 189, 248, 0.35)'
              }}
            >
              <div className="reactor-disc-shine"></div>
              <div className="reactor-brand-stack">
                <span className="reactor-badge">ORCHESTRATOR</span>
                <h3 className="reactor-logo-text">AIPNT</h3>
                <span className="reactor-sub-text">AI ENGINE</span>
              </div>
            </div>

            {/* Live Core Telemetry HUD Display */}
            <div className="reactor-hud-card">
              {activeNode ? (
                <div className="hud-content-active">
                  <div className="hud-status-row">
                    <span className="hud-led" style={{ background: activeNode.color }}></span>
                    <span className="hud-node-name" style={{ color: activeNode.color }}>
                      {activeNode.title} ACTIVE
                    </span>
                  </div>
                  <div className="hud-metric-row">
                    <span>{activeNode.telemetry.status}</span>
                    <strong>{activeNode.telemetry.latency}</strong>
                  </div>
                </div>
              ) : (
                <div className="hud-content-idle">
                  <div className="hud-status-row">
                    <span className="hud-led hud-led--green"></span>
                    <span className="hud-idle-title">ALL 6 ENGINES SYNCHRONIZED</span>
                  </div>
                  <div className="hud-metric-row">
                    <span>Zero-Trust Enterprise Mesh</span>
                    <strong>&lt;40ms</strong>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ══ RIGHT NODES ══ */}
        <div className="mainframe-column mainframe-column--right">
          {rightNodes.map((node) => {
            const isMatch = filterMatches(node);
            const isSelected = activeId === node.id;
            return (
              <div
                key={node.id}
                className={`ai-node-card ${isSelected ? 'ai-node-card--active' : ''} ${!isMatch ? 'ai-node-card--dimmed' : ''}`}
                style={{
                  '--accent-color': node.color,
                }}
                onMouseEnter={() => setActiveId(node.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                {/* Connection line toward center */}
                <div className={`node-connector-line node-connector--left ${isSelected ? 'active' : ''}`}>
                  <div className="connector-pulse"></div>
                </div>

                <div className="node-card-indicator" style={{ background: node.color }}></div>
                <div className="node-card-inner">
                  <div className="node-header">
                    <div className="node-icon-wrapper" style={{ color: node.color }}>
                      {node.icon}
                    </div>
                    <div className="node-title-group">
                      <div className="node-title-row">
                        <h4>{node.title}</h4>
                        <span className="node-badge" style={{ color: node.color }}>
                          {node.badge}
                        </span>
                      </div>
                      <span className="node-sub">{node.sub}</span>
                    </div>
                  </div>

                  <p className="node-desc">{node.desc}</p>

                  <div className="node-tags">
                    {node.tags.map((tag, idx) => (
                      <span key={idx} className="node-tag">{tag}</span>
                    ))}
                  </div>

                  {/* Node Micro Telemetry Bar */}
                  <div className="node-telemetry">
                    <span className="node-telemetry-item">
                      <strong>LATENCY:</strong> {node.telemetry.latency}
                    </span>
                    <span className="node-telemetry-divider">•</span>
                    <span className="node-telemetry-item">
                      <strong>RATE:</strong> {node.telemetry.metric}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Console Footer Micro-Bar ── */}
      <div className="mainframe-footer">
        <div className="footer-metric">
          <FaShieldHalved className="footer-icon" />
          <span>Sovereign &amp; On-Premise Air-Gapped Ready</span>
        </div>
        <div className="footer-metric">
          <FaBolt className="footer-icon" />
          <span>Low-Latency Real-Time Edge &amp; Cloud Hybrid</span>
        </div>
      </div>
    </div>
  );
}
