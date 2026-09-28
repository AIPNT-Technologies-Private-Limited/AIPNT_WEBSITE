"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaWhatsapp } from 'react-icons/fa';
import {
  FaCheckCircle,
  FaSearch,
  FaPlay,
  FaExpand,
  FaFileAlt,
  FaShieldAlt,
  FaChartBar,
  FaGlobe,
  FaHandshake,
  FaUniversity
} from 'react-icons/fa';
import styles from './page.module.css';

const capabilities = [
  {
    icon: <FaGlobe />,
    title: 'Program Implementation',
    desc: 'State and district deployments for STEM and digital skills with standardized academic and progress reports. Turnkey execution with local coordination.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Compliance & Reporting',
    desc: 'Procurement-compatible documentation, utilization reports and project governance aligned with public program standards. Transparent and auditable delivery.',
  },
  {
    icon: <FaChartBar />,
    title: 'High-Scale Capacity Building',
    desc: 'College and school training pathways designed for employability, innovation and entrepreneurship at scale. From pilot batches to district-wide rollout.',
  },
];

const framework = [
  { step: '01', icon: <FaSearch />, title: 'Requirement Analysis', desc: 'Understand program objectives, target institutions, timelines and compliance requirements.' },
  { step: '02', icon: <FaPlay />, title: 'Pilot Deployment', desc: 'Run a controlled pilot across select schools or colleges with full monitoring and feedback.' },
  { step: '03', icon: <FaExpand />, title: 'Scale Across Districts', desc: 'Replicate the proven model with trained faculty and local coordinators at scale.' },
  { step: '04', icon: <FaFileAlt />, title: 'Report & Handover', desc: 'Comprehensive impact reports, compliance documentation and knowledge transfer to stakeholders.' },
];

const compliance = [
  'GEM Portal registered vendor',
  'GST and MSME compliant documentation',
  'PFMS-compatible fund utilization reports',
  'District and block-level progress dashboards',
  'Student enrollment and assessment data tracking',
  'Auditable attendance and session records',
];

export default function GovernmentPage() {
  return (
    <>
      <Navbar />

      <section className={styles.hero}>
        <img src="/assets/government-hero.png" alt="" className={styles.heroBg} />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.badge}>PUBLIC SECTOR PROGRAMS</span>
          <h1>Government Work Orders</h1>
          <p>
            Execution-ready training programs for schools and colleges under
            government initiatives and public projects with full compliance support.
          </p>
          <a className={styles.ctaButton} href="#capabilities">
            View Capabilities
          </a>
        </div>
      </section>

      <main>
        <section className={styles.capabilitiesSection} id="capabilities">
          <h2>Our Capabilities</h2>
          <p className={styles.sectionSub}>Implementation-ready partner for school and college-level programs</p>
          <div className={styles.capabilitiesGrid}>
            {capabilities.map((cap) => (
              <article className={styles.capCard} key={cap.title}>
                <div className={styles.capIcon}>{cap.icon}</div>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.frameworkSection}>
          <h2>Execution Framework</h2>
          <p className={styles.sectionSub}>Proven 4-step process from pilot to scale</p>
          <div className={styles.frameworkGrid}>
            {framework.map((item) => (
              <div className={styles.frameworkStep} key={item.step}>
                <div className={styles.frameworkStepNum}>{item.step}</div>
                <div className={styles.frameworkIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.complianceSection}>
          <div className={styles.complianceContent}>
            <h2>Compliance & Standards</h2>
            <p>We maintain procurement and governance standards compatible with Indian government frameworks.</p>
            <ul className={styles.complianceList}>
              {compliance.map((item) => (
                <li key={item}>
                  <FaCheckCircle />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.complianceVisual}>
            <div className={styles.trustBadge}>
              <FaHandshake className={styles.trustIcon} />
              <span>Trusted Government Partner</span>
            </div>
            <div className={styles.trustBadge}>
              <FaUniversity className={styles.trustIcon} />
              <span>500+ Institutions Served</span>
            </div>
          </div>
        </section>

        <section className={styles.projectModelSection}>
          <h2>Sample Project Model</h2>
          <p className={styles.sectionSub}>Example of our block-coding frameworks developed for public STEM deployment.</p>
          <div className={styles.pamphletContainer}>
            <img src="/info-PNT/AI block coding application development for Govt Project.png" alt="AI Block Coding for Government" loading="lazy" />
          </div>
        </section>

        <section className={styles.showcaseSection}>
          <img src="/assets/government-scale.png" alt="Large-scale government training program in India" className={styles.showcaseImage} />
          <p className={styles.showcaseCaption}>District-wide digital skills training program across Indian institutions</p>
        </section>

        <section className={styles.ctaSection}>
          <h2>Discuss a Government Program</h2>
          <p>Let us create a compliant, scalable training deployment for your state or district initiative.</p>
          <a
            className={styles.ctaButton}
            href="https://api.whatsapp.com/send?phone=917788016666"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Our Program Desk
          </a>
        </section>
      </main>

      <Footer />

      <a href="https://api.whatsapp.com/send?phone=917788016666" className="phone-button" aria-label="Chat on WhatsApp">
        <FaWhatsapp />
      </a>
    </>
  );
}
