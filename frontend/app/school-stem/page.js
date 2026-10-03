"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaWhatsapp } from 'react-icons/fa';
import {
  FaCheckCircle,
  FaChalkboardTeacher,
  FaFlask,
  FaTrophy,
  FaBoxOpen,
  FaRobot,
  FaPython,
  FaMicrochip,
  FaLightbulb,
  FaBrain,
  FaCode
} from 'react-icons/fa';
import styles from './page.module.css';

const tiers = [
  {
    icon: <FaRobot />,
    grade: 'Primary (Class 3–5)',
    title: 'Scratch & Robotics',
    desc: 'Block-based coding with Scratch, basic electronics with LEDs and sensors, and simple robotics projects that spark curiosity.',
    color: '#00d68f',
  },
  {
    icon: <FaPython />,
    grade: 'Middle (Class 6–8)',
    title: 'Python & IoT',
    desc: 'Text-based programming with Python, Internet of Things projects with Arduino, data visualization and mini web apps.',
    color: '#ff9900',
  },
  {
    icon: <FaBrain />,
    grade: 'Senior (Class 9–12)',
    title: 'AI & Advanced Projects',
    desc: 'Machine learning foundations, computer vision, NLP projects, competitive programming and national-level competition prep.',
    color: '#a855f7',
  },
];

const services = [
  { icon: <FaChalkboardTeacher />, title: 'Teacher Training', desc: 'Comprehensive training workshops for school faculty to deliver STEM curriculum independently.' },
  { icon: <FaFlask />, title: 'Lab Setup', desc: 'End-to-end lab infrastructure — hardware kits, software licensing, furniture and networking.' },
  { icon: <FaTrophy />, title: 'Competition Prep', desc: 'Coaching and mentorship for national and international STEM, robotics and AI competitions.' },
  { icon: <FaBoxOpen />, title: 'Curriculum Kits', desc: 'Grade-appropriate curriculum packages with lesson plans, student workbooks and project materials.' },
];

export default function SchoolStemPage() {
  return (
    <>
      <Navbar />

      <section className={styles.hero}>
        <img src="/assets/school-stem-hero.png" alt="" className={styles.heroBg} />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.badge}>K-12 SCHOOLS</span>
          <h1>School STEM Programs</h1>
          <p>
            Age-appropriate robotics, coding and AI curriculum for K-12 schools
            with teacher training, lab setup and project-based competitions.
          </p>
          <a className={styles.ctaButton} href="#curriculum">
            View Curriculum
          </a>
        </div>
      </section>

      <main>
        <section className={styles.tiersSection} id="curriculum">
          <h2>Grade-Wise Curriculum</h2>
          <p className={styles.sectionSub}>Progressive learning path from foundational to advanced</p>
          <div className={styles.tiersGrid}>
            {tiers.map((tier) => (
              <article className={styles.tierCard} key={tier.title} style={{ borderTopColor: tier.color }}>
                <div className={styles.tierIcon} style={{ color: tier.color }}>{tier.icon}</div>
                <span className={styles.tierGrade}>{tier.grade}</span>
                <h3>{tier.title}</h3>
                <p>{tier.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.servicesSection}>
          <h2>What We Provide</h2>
          <p className={styles.sectionSub}>Everything your school needs for a world-class STEM lab</p>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <div className={styles.serviceCard} key={service.title}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.videoSection}>
          <div className={styles.videoWrapper}>
            <img
              src="/assets/stem-lab-setup.png"
              alt="Students working in a STEM and robotics lab"
            />
          </div>
          <div className={styles.videoText}>
            <h2>STEM in Action</h2>
            <p>
              See how our STEM programs transform classrooms into innovation
              labs where students build, experiment and compete.
            </p>
          </div>
        </section>

        <section className={styles.showcaseSection}>
          <h2>Our STEM Lab Setup</h2>
          <img src="/assets/stem-lab-setup.png" alt="Modern STEM lab in an Indian school" className={styles.showcaseImage} />
          <p className={styles.showcaseCaption}>A fully equipped STEM and robotics lab ready for hands-on learning</p>
        </section>

        <section className={styles.alignmentSection}>
          <h2>Aligned with Indian Education Standards</h2>
          <ul className={styles.alignmentList}>
            <li><FaCheckCircle /> NEP 2020 compliant curriculum framework</li>
            <li><FaCheckCircle /> CBSE and state board integration ready</li>
            <li><FaCheckCircle /> ATL (Atal Tinkering Lab) compatible projects</li>
            <li><FaCheckCircle /> STEM.org accreditation pathway</li>
            <li><FaCheckCircle /> National and international competition alignment</li>
          </ul>
        </section>

        <section className={styles.ctaSection}>
          <h2>Request a School Proposal</h2>
          <p>Get a customized STEM program proposal designed for your school's specific needs and budget.</p>
          <a
            className={styles.ctaButton}
            href="https://api.whatsapp.com/send?phone=917788016666"
            target="_blank"
            rel="noopener noreferrer"
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
