"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InaugurationGallery from '../components/InaugurationGallery';
import {
  FaWhatsapp,
  FaLightbulb,
  FaRocket,
  FaLandmark,
  FaHeartbeat,
  FaGraduationCap,
  FaBrain
} from 'react-icons/fa';
import styles from './page.module.css';

const journeySteps = [
  {
    year: '2020',
    title: 'Founding the Core Lab',
    desc: 'Started as a specialized group of AI, robotics, and embedded systems engineers solving core automation and intelligent hardware problems.'
  },
  {
    year: '2022',
    title: 'Multi-Domain Expansion',
    desc: 'Scaled engineering into integrated platforms spanning connected healthcare devices, public governance, and intelligent education.'
  },
  {
    year: '2024',
    title: 'Proprietary Product Launches',
    desc: 'Rolled out flagship systems: DigiSwasth (AI Healthcare & Smart Terminals), ATAT (AI Teaching Assistant), and Constituency Grievance Redressal.'
  },
  {
    year: '2026',
    title: 'Sovereign Intelligence Engine',
    desc: 'Powering hospitals, municipal bodies, educational institutions, and enterprises across India with unified AI and digital infrastructure.'
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.badge}>WHO WE ARE</span>
          <h1>Building the Intelligence Layer for a Digital India</h1>
          <p>
            AIPNT combines Artificial Intelligence, Software, IoT, and Automation to build
            scalable technology products and digital platforms across EduTech, MedTech,
            DigiTech (GovTech), and Enterprise AI.
          </p>
        </div>
      </section>

      <main>
        <section className={styles.missionSection}>
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <FaLightbulb className={styles.missionIcon} />
              <h2>Our Mission</h2>
              <p>
                To architect scalable, intelligent products and digital infrastructure that empower
                education, modernize healthcare delivery, streamline civic governance, and accelerate
                enterprise efficiency.
              </p>
            </div>
            <div className={styles.missionCard}>
              <FaRocket className={styles.missionIcon} />
              <h2>Our Vision</h2>
              <p>
                To be India's premier indigenous technology and intelligence engine—transforming
                critical national sectors through applied AI, edge IoT devices, and human-centric software.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.storySection}>
          <h2>Our Journey</h2>
          <p className={styles.sectionSub}>From a deep-tech lab to a national multi-domain technology provider</p>
          <div className={styles.timeline}>
            {journeySteps.map((step) => (
              <div className={styles.timelineItem} key={step.year}>
                <div className={styles.yearBadge}>{step.year}</div>
                <div className={styles.timelineContent}>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.workedWithSection}>
          <h2>Strategic Deployments & Impact</h2>
          <p className={styles.sectionSub}>Delivering mission-critical digital systems across key sectors</p>
          <div className={styles.workedWithGrid}>
            <div className={styles.workedWithCard}>
              <FaGraduationCap className={styles.workedWithIcon} />
              <h3>EduTech & STEM</h3>
              <p>Smart classrooms, AI tutors, and advanced robotics labs for schools and universities</p>
            </div>
            <div className={styles.workedWithCard}>
              <FaHeartbeat className={styles.workedWithIcon} />
              <h3>MedTech Infrastructure</h3>
              <p>ABDM-compliant check-in kiosks, digital OPD workflows, and connected clinical care</p>
            </div>
            <div className={styles.workedWithCard}>
              <FaLandmark className={styles.workedWithIcon} />
              <h3>DigiTech & GovTech</h3>
              <p>AI grievance redressal systems, GIS ward mapping, and public fund monitoring</p>
            </div>
          </div>
        </section>

        <InaugurationGallery />

        <section className={styles.ctaSection}>
          <h2>Partner with AIPNT to Build the Future</h2>
          <p>
            Whether you represent a healthcare provider, government body, academic institution,
            or enterprise, discover what our technology engine can do for you.
          </p>
          <a
            className={styles.ctaButton}
            href="/contact"
          >
            Get in Touch
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
