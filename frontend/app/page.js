"use client";

import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AiCoreDiagram from './components/AiCoreDiagram';
import InaugurationGallery from './components/InaugurationGallery';
import BlogSection from './components/BlogSection';
import RegionalDeploymentHub from './components/RegionalDeploymentHub';
import HowWeWorkSection from './components/HowWeWorkSection';
import BuiltForOrgsSection from './components/BuiltForOrgsSection';
import './home.css';
import {
  FaPlay, FaArrowRight, FaHeartbeat, FaLandmark, FaBrain,
  FaRobot, FaMagic, FaMicrophone, FaDatabase, FaEye, FaChartLine,
  FaLanguage, FaCloud, FaServer, FaWifi, FaHdd, FaArrowCircleRight,
  FaUsers, FaSchool, FaRocket, FaBox,
  FaGraduationCap, FaHeart, FaBuilding, FaCity
} from 'react-icons/fa';

export default function Home() {
  return (
    <div className="premium-home">
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-tags">AI • DIGITAL • PEOPLE • IMPACT</div>
            <h1>
              Building the<br />
              Intelligence Layer<br />
              for a <span>Digital India</span>.
            </h1>
            <p className="hero-subtitle">
              AI-powered products, digital platforms and intelligent systems for Education, Healthcare, Government and Enterprise.
            </p>
            <p className="hero-desc">
              AIPNT combines Artificial Intelligence, Software, IoT and Automation to transform complex real-world problems into scalable technology products.
            </p>
            <div className="hero-actions">
              <Link href="#solutions" className="btn-primary-gradient">
                Explore Our Solutions <FaArrowRight />
              </Link>
              <button className="btn-outline-play">
                <FaPlay /> Watch Video
              </button>
            </div>
          </div>

          <div className="hero-visual">
            {/* AIPNT Core Reactor Orb with Logo */}
            <div className="hero-orb">
              <div className="hero-orb-content">
                <img
                  src="/assets/logo-mark.png"
                  alt="AIPNT Logo"
                  className="hero-logo-mark"
                />
              </div>
            </div>

            <div className="floating-card fc-1">
              <img src="/assets/generated/enterprise_ai_domain.jpg" alt="Enterprise AI" />
              <div>
                <h4>Enterprise AI</h4>
                <p>AI for Businesses</p>
              </div>
            </div>

            <div className="floating-card fc-2">
              <img src="/assets/generated/edutech_domain.jpg" alt="EduTech" />
              <div>
                <h4>EduTech</h4>
                <p>Next-Gen Learning</p>
              </div>
            </div>

            <div className="floating-card fc-3">
              <img src="/assets/generated/medtech_domain.jpg" alt="MedTech" />
              <div>
                <h4>MedTech</h4>
                <p>Connected Healthcare</p>
              </div>
            </div>

            <div className="floating-card fc-4">
              <img src="/assets/generated/digitech_domain.jpg" alt="DigiTech" />
              <div>
                <h4>DigiTech</h4>
                <p>Digital Governance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ DOMAINS ═══════════ */}
      <section className="domains-section" id="solutions">
        <div className="section-header">
          <div className="section-title">
            <span className="section-label">OUR SOLUTIONS</span>
            <h2>Four Domains. One Technology Engine.</h2>
          </div>
          <div className="section-desc">
            AIPNT builds AI-powered platforms and solutions across key sectors, backed by a common layer of technology, data and intelligent systems.
          </div>
        </div>

        <div className="domains-grid">
          <div className="domain-card">
            <div className="domain-img">
              <img src="/assets/generated/edutech_domain.jpg" alt="EduTech" />
            </div>
            <div className="domain-body">
              <div className="domain-icon" style={{color: '#7c3aed'}}>
                <FaGraduationCap />
              </div>
              <h3>EduTech</h3>
              <h4>Intelligent learning for the next generation.</h4>
              <p>AI-powered learning platforms, STEM education, robotics, AI teachers and institutional learning systems.</p>
              <Link href="/edutech" className="domain-link" style={{color: '#7c3aed'}}>
                Explore EduTech <FaArrowRight />
              </Link>
            </div>
          </div>

          <div className="domain-card">
            <div className="domain-img">
              <img src="/assets/generated/medtech_domain.jpg" alt="MedTech" />
            </div>
            <div className="domain-body">
              <div className="domain-icon" style={{color: '#2563eb'}}>
                <FaHeartbeat />
              </div>
              <h3>MedTech</h3>
              <h4>Technology that makes healthcare more connected.</h4>
              <p>AI-enabled healthcare platforms, hospital systems, voice interfaces, digital health and connected devices.</p>
              <Link href="/medtech" className="domain-link" style={{color: '#2563eb'}}>
                Explore MedTech <FaArrowRight />
              </Link>
            </div>
          </div>

          <div className="domain-card">
            <div className="domain-img">
              <img src="/assets/generated/digitech_domain.jpg" alt="DigiTech" />
            </div>
            <div className="domain-body">
              <div className="domain-icon" style={{color: '#059669'}}>
                <FaLandmark />
              </div>
              <h3>DigiTech</h3>
              <h4>Digitising how organisations and communities operate.</h4>
              <p>Digital governance, citizen platforms, workflow automation, IoT and large-scale digital transformation.</p>
              <Link href="/digitech" className="domain-link" style={{color: '#059669'}}>
                Explore DigiTech <FaArrowRight />
              </Link>
            </div>
          </div>

          <div className="domain-card">
            <div className="domain-img">
              <img src="/assets/generated/enterprise_ai_domain.jpg" alt="Enterprise AI" />
            </div>
            <div className="domain-body">
              <div className="domain-icon" style={{color: '#7c3aed'}}>
                <FaBrain />
              </div>
              <h3>Enterprise AI</h3>
              <h4>AI systems built around your organisation.</h4>
              <p>Enterprise copilots, RAG platforms, AI agents, document intelligence, automation and private AI deployments.</p>
              <Link href="https://enterprise.aipnt.in/" className="domain-link" style={{color: '#7c3aed'}}>
                Explore Enterprise AI <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PRODUCTS ═══════════ */}
      <section className="products-section">
        <div className="section-header">
          <div className="section-title">
            <span className="section-label">OUR PRODUCTS</span>
            <h2>From Ideas to Intelligent Products.</h2>
          </div>
          <div className="section-desc">
            <span>We build and deploy real-world products that solve meaningful problems in education, healthcare, governance and enterprise.</span>
            <br /><br />
            <Link href="/products" className="link-right">
              View All Products <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="bento-products-grid">
          {/* ═══ FLAGSHIP 1: DIGISWASTH (MEDTECH - SPAN 7) ═══ */}
          <Link href="/products/digiswasth" className="bento-card bento-card--flagship-left bento-card--medtech">
            <div className="bento-card-glow"></div>
            <div className="bento-content">
              <div className="bento-header">
                <div className="bento-badges">
                  <span className="bento-tag bento-tag--medtech">
                    <FaHeartbeat /> MEDTECH
                  </span>
                  <span className="bento-live-badge bento-live-badge--teal">
                    <span className="bento-pulse-dot"></span> Flagship • Clinical Deployment
                  </span>
                </div>
                <div className="bento-arrow-btn">
                  <span>Explore</span>
                  <FaArrowRight />
                </div>
              </div>

              <div className="bento-info">
                <h3>DigiSwasth</h3>
                <h4 className="bento-subtitle">AI-Powered Digital Healthcare Ecosystem</h4>
                <p>
                  End-to-end digital health infrastructure connecting smart diagnostic kiosks, point-of-care vital sensors, ABDM-compliant EHR, and hospital PMS.
                </p>
              </div>

              <div className="bento-metrics">
                <div className="bento-metric-pill">
                  <span className="metric-val">10+</span>
                  <span className="metric-lbl">Vital Diagnostics</span>
                </div>
                <div className="bento-metric-pill">
                  <span className="metric-val">ABDM</span>
                  <span className="metric-lbl">Certified EHR</span>
                </div>
                <div className="bento-metric-pill">
                  <span className="metric-val">Smart</span>
                  <span className="metric-lbl">Triage Kiosks</span>
                </div>
              </div>
            </div>

            <div className="bento-visual bento-visual--wide">
              <img
                src="/assets/generated/digiswasth_product.jpg"
                alt="DigiSwasth AI Healthcare Ecosystem"
              />
              <div className="bento-visual-fade"></div>
            </div>
          </Link>

          {/* ═══ FLAGSHIP 2: PRARAMBH (EDUTECH - SPAN 5) ═══ */}
          <Link href="/products/prarambh" className="bento-card bento-card--flagship-right bento-card--edutech">
            <div className="bento-card-glow"></div>
            <div className="bento-content">
              <div className="bento-header">
                <div className="bento-badges">
                  <span className="bento-tag bento-tag--edutech">
                    <FaGraduationCap /> EDUTECH
                  </span>
                  <span className="bento-live-badge bento-live-badge--purple">
                    <span className="bento-pulse-dot"></span> Flagship • K-12 STEM
                  </span>
                </div>
                <div className="bento-arrow-btn">
                  <span>Explore</span>
                  <FaArrowRight />
                </div>
              </div>

              <div className="bento-info">
                <h3>Prarambh</h3>
                <h4 className="bento-subtitle">AI-Powered STEM Coding &amp; Robotics</h4>
                <p>
                  Interactive physical computing and visual block programming designed for elementary and high school learners with regional language AI.
                </p>
              </div>

              <div className="bento-metrics">
                <div className="bento-metric-pill">
                  <span className="metric-val">Block &amp; Python</span>
                  <span className="metric-lbl">Curriculum</span>
                </div>
                <div className="bento-metric-pill">
                  <span className="metric-val">Odia &amp; English</span>
                  <span className="metric-lbl">Dual AI Audio</span>
                </div>
                <div className="bento-metric-pill">
                  <span className="metric-val">IoT Ready</span>
                  <span className="metric-lbl">Hardware Kits</span>
                </div>
              </div>
            </div>

            <div className="bento-visual">
              <img
                src="/assets/generated/prarambh_product.jpg"
                alt="Prarambh Coding & STEM Learning"
              />
              <div className="bento-visual-fade"></div>
            </div>
          </Link>

          {/* ═══ PRODUCT 3: ATAT (AI TEACHER - SPAN 6) ═══ */}
          <Link href="/products/atat" className="bento-card bento-card--compact bento-card--atat">
            <div className="bento-card-glow"></div>
            <div className="bento-content">
              <div className="bento-header">
                <div className="bento-badges">
                  <span className="bento-tag bento-tag--amber">
                    <FaRobot /> EDUTECH
                  </span>
                  <span className="bento-live-badge bento-live-badge--amber">
                    <span className="bento-pulse-dot"></span> Smart Classroom AI
                  </span>
                </div>
                <div className="bento-arrow-btn">
                  <span>Explore</span>
                  <FaArrowRight />
                </div>
              </div>

              <div className="bento-info">
                <h3>ATAT (AI Teaching Assistant)</h3>
                <h4 className="bento-subtitle">Interactive AI Classroom Co-Teacher</h4>
                <p>
                  Empowers teachers with dual classroom &amp; student modes, PPT-to-interactive lesson conversion, and live voice AI on interactive smart boards.
                </p>
              </div>

              <div className="bento-metrics">
                <div className="bento-metric-pill">
                  <span className="metric-val">Dual Mode</span>
                  <span className="metric-lbl">Student / Teacher</span>
                </div>
                <div className="bento-metric-pill">
                  <span className="metric-val">Smart Board</span>
                  <span className="metric-lbl">Instant Sync</span>
                </div>
                <div className="bento-metric-pill">
                  <span className="metric-val">AI PPT</span>
                  <span className="metric-lbl">To Dialogue</span>
                </div>
              </div>
            </div>

            <div className="bento-visual">
              <img
                src="/assets/generated/ai_teacher_product.jpg"
                alt="ATAT AI Teaching Assistant Smart Classroom"
              />
              <div className="bento-visual-fade"></div>
            </div>
          </Link>

          {/* ═══ PRODUCT 4: GRIEVANCE REDRESSAL (DIGITECH - SPAN 6) ═══ */}
          <Link href="/products/constituency-intelligence" className="bento-card bento-card--compact bento-card--digitech">
            <div className="bento-card-glow"></div>
            <div className="bento-content">
              <div className="bento-header">
                <div className="bento-badges">
                  <span className="bento-tag bento-tag--digitech">
                    <FaCity /> DIGITECH
                  </span>
                  <span className="bento-live-badge bento-live-badge--sky">
                    <span className="bento-pulse-dot"></span> GovTech Intelligence
                  </span>
                </div>
                <div className="bento-arrow-btn">
                  <span>Explore</span>
                  <FaArrowRight />
                </div>
              </div>

              <div className="bento-info">
                <h3>Grievance Redressal System</h3>
                <h4 className="bento-subtitle">Constituency Operations &amp; Citizen Triage</h4>
                <p>
                  AI-driven municipal and parliamentary governance suite featuring geo-tagged grievance tracking, sentiment analytics, and officer field dispatch.
                </p>
              </div>

              <div className="bento-metrics">
                <div className="bento-metric-pill">
                  <span className="metric-val">GIS Mapping</span>
                  <span className="metric-lbl">Ward Geo-Tag</span>
                </div>
                <div className="bento-metric-pill">
                  <span className="metric-val">Real-Time</span>
                  <span className="metric-lbl">Triage Engine</span>
                </div>
                <div className="bento-metric-pill">
                  <span className="metric-val">Sentiment AI</span>
                  <span className="metric-lbl">Citizen Voice</span>
                </div>
              </div>
            </div>

            <div className="bento-visual">
              <img
                src="/assets/generated/constituency_product.jpg"
                alt="Grievance Redressal System and Command Center"
              />
              <div className="bento-visual-fade"></div>
            </div>
          </Link>
        </div>
      </section>

      {/* ═══════════ AI CORE ═══════════ */}
      <section className="ai-core-section">
        <div className="ai-core-layout">
          <div className="ai-core-left">
            <span className="section-label-glow">
              <span className="core-pulse-dot"></span> OUR TECHNOLOGY
            </span>
            <h2>AI at the Core.</h2>
            <p>
              We don't just integrate AI. We engineer modular, high-throughput intelligence layers
              orchestrated around real-world workflows—from vernacular voice at the edge to sovereign reasoning agents.
            </p>

            <div className="ai-core-highlights">
              <div className="ai-highlight-pill">
                <span className="highlight-val">6</span>
                <span className="highlight-label">Engineered AI Engines</span>
              </div>
              <div className="ai-highlight-pill">
                <span className="highlight-val">&lt;40ms</span>
                <span className="highlight-label">Median Edge Latency</span>
              </div>
              <div className="ai-highlight-pill">
                <span className="highlight-val">100%</span>
                <span className="highlight-label">Sovereign &amp; Private</span>
              </div>
            </div>

            <Link href="/ai" className="btn-ai-capabilities">
              Explore Our AI Capabilities <FaArrowRight />
            </Link>
          </div>
          <AiCoreDiagram />
        </div>
      </section>

      {/* ═══════════ DESIGNED FOR INDIA ═══════════ */}
      <section className="designed-india-section">
        <div className="designed-india-container">
          <div className="di-intro">
            <div className="di-content">
              <span className="section-label" style={{background: 'rgba(59,130,246,0.12)', color: '#60a5fa'}}>
                BUILT FOR INDIA • NATIONWIDE SCALE
              </span>
              <h2>Technology Designed for the Real India.</h2>
              <p>
                From rural primary health centers to high-tech classrooms and government secretariats,
                AIPNT engineers resilient systems designed for diverse vernacular users, low-bandwidth edge constraints,
                and nationwide public digital infrastructure.
              </p>

              <div className="di-features">
                <div className="di-group">
                  <h4>MULTILINGUAL BY DESIGN</h4>
                  <div className="di-icons">
                    <div className="di-icon-item"><span className="di-lang-badge">EN</span> English</div>
                    <div className="di-icon-item"><span className="di-lang-badge">HI</span> हिंदी</div>
                    <div className="di-icon-item"><span className="di-lang-badge">OD</span> ଓଡ଼ିଆ</div>
                    <div className="di-icon-item"><span className="di-lang-badge">REG</span> Regional AI</div>
                  </div>
                </div>
                <div className="di-group">
                  <h4>FLEXIBLE DEPLOYMENT</h4>
                  <div className="di-icons">
                    <div className="di-icon-item"><FaCloud /> Cloud</div>
                    <div className="di-icon-item"><FaWifi /> Edge</div>
                    <div className="di-icon-item"><FaServer /> IoT Hardware</div>
                    <div className="di-icon-item"><FaHdd /> On-Premise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ═══ INTERACTIVE REGIONAL DEPLOYMENT HUB & MAP ═══ */}
          <div className="di-hub-wrapper">
            <RegionalDeploymentHub />
          </div>
        </div>
      </section>

      {/* ═══════════ HOW WE WORK ═══════════ */}
      <HowWeWorkSection />

      {/* ═══════════ BUILT FOR ORGS ═══════════ */}
      <BuiltForOrgsSection />

      {/* ═══════════ IMPACT ═══════════ */}
      <section className="impact-section">
        <div className="impact-grid">
          <div className="impact-title">
            <span className="section-label">OUR IMPACT</span>
            <h2>Creating Meaningful<br />Impact Across India.</h2>
          </div>

          <div className="impact-stat">
            <FaUsers />
            <h3>5,000+</h3>
            <p>Students Empowered</p>
          </div>
          <div className="impact-stat">
            <FaSchool />
            <h3>20+</h3>
            <p>School Partnerships</p>
          </div>
          <div className="impact-stat">
            <FaRocket />
            <h3>50+</h3>
            <p>AI Deployments</p>
          </div>
          <div className="impact-stat">
            <FaBox />
            <h3>100+</h3>
            <p>Technology Products</p>
          </div>
        </div>
      </section>

      {/* ═══════════ INAUGURATION HIGHLIGHTS ═══════════ */}
      <InaugurationGallery />

      {/* ═══════════ INSIGHTS & NEWS ═══════════ */}
      <BlogSection />

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="final-cta">
        <div>
          <h2>Have a problem worth solving?</h2>
          <p>Let's build the technology behind it.</p>
        </div>
        <Link href="/contact" className="btn-white">
          Start a Conversation <FaArrowRight />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
