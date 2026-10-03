"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaWhatsapp } from 'react-icons/fa';
import {
  FaRocket,
  FaProjectDiagram,
  FaUserGraduate,
  FaBriefcase,
  FaCheckCircle
} from 'react-icons/fa';
import styles from './page.module.css';

const tracks = [
  {
    image: '/assets/hardware_iot.png',
    title: 'Hardware & IoT Engineering',
    desc: 'Master MCU programming, sensor interfacing, and end-to-end hardware prototyping for industrial and consumer IoT products.',
  },
  {
    image: '/assets/medical_devices.png',
    title: 'Medical Devices & HealthTech',
    desc: 'Work on critical diagnostic hardware, signal processing software, and strictly regulated biotech prototyping.',
  },
  {
    image: '/assets/software_dev.png',
    title: 'Full-Stack Software Development',
    desc: 'Build and deploy scalable enterprise web applications, REST architectures, and cloud-hosted databases using modern stacks.',
  },
  {
    image: '/assets/ai_ml.png',
    title: 'Artificial Intelligence & ML',
    desc: 'Train predictive models, build Generative AI chatbots, and develop Computer Vision pipelines for real-world analytical problems.',
  },
];

const timeline = [
  { step: '01', title: 'Apply & Screen', desc: 'Submit your application with academic details and areas of interest.' },
  { step: '02', title: 'Onboard & Orient', desc: 'Meet your mentor, join your project cohort and get set up with tools.' },
  { step: '03', title: 'Build & Ship', desc: '6–8 weeks of hands-on project work with weekly demos and feedback.' },
  { step: '04', title: 'Demo Day & Certify', desc: 'Present your project to a panel, receive certification and career support.' },
];

const audience = [
  { icon: <FaUserGraduate />, title: 'College Students', desc: 'B.Tech, BCA, MCA and M.Tech students from any year looking for practical experience.' },
  { icon: <FaBriefcase />, title: 'Fresh Graduates', desc: 'Recent graduates seeking to bridge the gap between academic knowledge and industry skills.' },
  { icon: <FaRocket />, title: 'Career Changers', desc: 'Professionals looking to transition into AI, data science or product development roles.' },
];

const summerCourses = [
  {
    number: '01',
    title: 'Web Application Development for Market Product',
    desc: 'Build production-ready web applications using modern frameworks. Learn React, Next.js, databases, and deployment strategies for real market products.',
    image: '/info-PNT/SummerInternshipCourses/Web application development  for Market Product.png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSezkXYpYAI998UPFgvHu6cptBQetrkGrbTiPTN4_WaHL599bg/viewform?usp=header',
    badge: '8 Weeks',
    badgeColor: 'orange',
    features: ['Full-Stack Development', 'Live Project', 'Industry Mentorship'],
  },
  {
    number: '02',
    title: 'Hardware Designing for IoT Based Market Products',
    desc: 'Master PCB design, sensor integration, and embedded systems. Create IoT products ready for manufacturing with hands-on hardware prototyping.',
    image: '/info-PNT/SummerInternshipCourses/HARDWARE Designing for  IOT based market products.png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSduXdOSwMTvqeeWb5GAeBOeDBEjhTevSh7C53scn903qyBvhg/viewform?usp=header',
    badge: 'Hands-On',
    badgeColor: 'green',
    features: ['Arduino & ESP32', 'PCB Design', 'IoT Protocols'],
  },
  {
    number: '03',
    title: 'STLC Internship Program - Web, Desktop & Mobile Testing',
    desc: 'Learn complete Software Testing Life Cycle with real projects. Master manual testing, automation frameworks, and quality assurance best practices.',
    image: '/info-PNT/SummerInternshipCourses/SDLC TESTING for Web products.png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSd9UHHh458vzmvcjyb3cT6zD8_neJOj5-y4_TUjd4c36yPCJw/viewform?usp=header',
    badge: 'Job Ready',
    badgeColor: 'purple',
    features: ['Manual Testing', 'Test Automation', 'API Testing'],
  },
  {
    number: '04',
    title: 'AI & ML Training Program',
    desc: 'Build practical AI and machine learning solutions with hands-on projects. Learn model development, data workflows, and deployment basics for real-world applications.',
    image: '/info-PNT/SummerInternshipCourses/AIML TRAINING.png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSejhuIp1eoclDD_n6aejSm--WKEwUlfPuXj56TtNXvab81ZXA/viewform?usp=header',
    badge: 'AI Track',
    badgeColor: 'blue',
    features: ['Machine Learning', 'Model Building', 'Project Portfolio'],
  },
];

export default function SummerInternshipPage() {
  return (
    <>
      <Navbar />

      <section className={styles.hero}>
        <img src="/assets/summer-internship-hero.png" alt="" className={styles.heroBg} />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.badge}>SUMMER 2026 — APPLICATIONS OPEN</span>
          <h1>Summer Internship Programs</h1>
          <p>
            Mentor-led internships for college students with real projects
            in AI, robotics, IoT and product development.
          </p>
          <a className={styles.ctaButton} href="#tracks">
            View Program Tracks
          </a>
        </div>
      </section>

      <main>
        <section className={styles.tracksSection} id="tracks">
          <h2>Program Tracks</h2>
          <p className={styles.sectionSub}>Choose your path and build something real</p>
          <div className={styles.tracksGrid}>
            {tracks.map((track) => (
              <article className={styles.trackCard} key={track.title}>
                <img src={track.image} alt={track.title} className={styles.trackImage} />
                <div className={styles.trackBody}>
                  <h3>{track.title}</h3>
                  <p>{track.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.pcbSection}>
          <h2>Internship Moments 2025</h2>
          <p className={styles.sectionSub}>Highlights from our Summer Internship program activities.</p>
          <div className={styles.pamphletContainer}>
            <img src="/info-PNT/SummerInternshipmoments2025/image1.jpeg" alt="Summer Internship Moments 2025" loading="lazy" />
          </div>
        </section>

        <section className={styles.coursesSection}>
          <div className={styles.coursesBgPattern}></div>
          <div className={styles.coursesHeader}>
            <h2>Summer Internship Courses</h2>
            <p>Choose your path and kickstart your career with hands-on projects</p>
          </div>
          
          <div className={styles.courseTilesContainer}>
            {summerCourses.map((course, index) => (
              <div 
                className={`${styles.courseTile} ${index % 2 === 0 ? styles.tileImgRight : styles.tileImgLeft}`} 
                key={course.title}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className={styles.tileTextBlock}>
                      <div className={styles.tileNumber}>{course.number}</div>
                      <h3>{course.title}</h3>
                      <p>{course.desc}</p>
                      <div className={styles.tileFeatures}>
                        {course.features.map((feature) => (
                          <span key={feature}><FaCheckCircle /> {feature}</span>
                        ))}
                      </div>
                      <a
                        className={styles.tileApplyBtn}
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply Now →
                      </a>
                    </div>
                    <div className={styles.tileImageBlock}>
                      <div className={styles.imageCutout}>
                        <img src={course.image} alt={course.title} loading="lazy" />
                      </div>
                      <div className={`${styles.floatingBadge} ${styles[`badge${course.badgeColor.charAt(0).toUpperCase() + course.badgeColor.slice(1)}`]}`}>
                        {course.badge}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.tileImageBlock}>
                      <div className={styles.imageCutout}>
                        <img src={course.image} alt={course.title} loading="lazy" />
                      </div>
                      <div className={`${styles.floatingBadge} ${styles[`badge${course.badgeColor.charAt(0).toUpperCase() + course.badgeColor.slice(1)}`]}`}>
                        {course.badge}
                      </div>
                    </div>
                    <div className={styles.tileTextBlock}>
                      <div className={styles.tileNumber}>{course.number}</div>
                      <h3>{course.title}</h3>
                      <p>{course.desc}</p>
                      <div className={styles.tileFeatures}>
                        {course.features.map((feature) => (
                          <span key={feature}><FaCheckCircle /> {feature}</span>
                        ))}
                      </div>
                      <a
                        className={styles.tileApplyBtn}
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply Now →
                      </a>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.timelineSection}>
          <h2>How It Works</h2>
          <p className={styles.sectionSub}>From application to certification in 4 simple steps</p>
          <div className={styles.timeline}>
            {timeline.map((item) => (
              <div className={styles.timelineItem} key={item.step}>
                <div className={styles.timelineStep}>{item.step}</div>
                <div className={styles.timelineContent}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.audienceSection}>
          <h2>Who Is This For?</h2>
          <div className={styles.audienceGrid}>
            {audience.map((item) => (
              <div className={styles.audienceCard} key={item.title}>
                <div className={styles.audienceIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.highlightsSection}>
          <h2>Program Highlights</h2>
          <ul className={styles.highlightsList}>
            <li><FaCheckCircle /> Live project experience with real deliverables</li>
            <li><FaCheckCircle /> Industry mentor assigned to every intern</li>
            <li><FaCheckCircle /> Completion certificate and letter of recommendation</li>
            <li><FaCheckCircle /> Demo day presentation to hiring partners</li>
            <li><FaCheckCircle /> Resume and LinkedIn profile optimization</li>
            <li><FaCheckCircle /> Access to alumni network and job referrals</li>
          </ul>
        </section>

        <section className={styles.showcaseSection}>
          <img src="/assets/internship-demo-day.png" alt="Interns presenting at Demo Day" className={styles.showcaseImage} />
          <p className={styles.showcaseCaption}>Interns presenting their AI and robotics projects at Demo Day</p>
        </section>

        <section className={styles.ctaSection}>
          <h2>Apply for Summer 2026</h2>
          <p>Limited seats per cohort. Secure your spot and kickstart your career in tech.</p>
          <a
            className={styles.ctaButton}
            href="https://api.whatsapp.com/send?phone=917788016666"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now on WhatsApp
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
