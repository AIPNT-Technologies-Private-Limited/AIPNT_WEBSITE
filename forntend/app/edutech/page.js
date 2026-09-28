"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InaugurationGallery from '../components/InaugurationGallery';
import BlogSection from '../components/BlogSection';
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaCheckCircle,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaExternalLinkAlt,
  FaBuilding,
  FaUserGraduate,
  FaFlask,
  FaLandmark,
  FaCog,
  FaAtom,
  FaCalculator,
  FaMicrochip,
  FaDna,
  FaRobot
} from 'react-icons/fa';

const offerings = [
  {
    title: 'Corporate Training',
    href: '/corporate-training',
    icon: <FaBuilding />,
    audience: 'For Enterprises',
    description:
      'Industry-focused Generative AI, Deep Learning, cloud and automation tracks for enterprise upskilling with measurable intelligent outcomes.',
    points: ['Role-based AI & ML curriculum', 'Hands-on neural network labs', 'Prompt Engineering certification']
  },
  {
    title: 'College Training Programs',
    href: '/summer-internship',
    icon: <FaUserGraduate />,
    audience: 'For College Students',
    description:
      'Mentor-led internships offering college students real product development cycles focused on LLMs, Computer Vision, and AI-driven IoT.',
    points: ['Live AI-model training sprints', 'AI product portfolio & demo day', 'Machine Learning career support']
  },
  {
    title: 'School STEM Programs',
    href: '/school-stem',
    icon: <FaFlask />,
    audience: 'For Schools',
    description:
      'Age-appropriate AI & STEM programming for schools, evolving from foundational coding to advanced robotics and machine learning innovation labs.',
    points: ['AI Literacy for teachers', 'Smart AI Lab setup support', 'Global AI & Robotics competitions']
  },
  {
    title: 'School Transformation',
    href: '/government',
    icon: <FaLandmark />,
    audience: 'For Government',
    description:
      'AI-powered learning ecosystems for government schools — transforming classrooms with personalized learning, teacher empowerment, and hands-on STEM hardware kits at scale.',
    points: ['AI-Powered Learning Ecosystem', 'Teacher Capacity Building', 'STEM & Robotics Hardware Kits', 'State-wide Scalable Deployment']
  }
];

export default function EduTechPage() {

  return (
    <>
      <Navbar />

      <section className="bgvideo" id="home">
        <div className="bgvideoText">
          <p className="headText">
            Transforming Potential <br />
            into Next-Gen Expertise
          </p>
          <p className="subhead">See & Learn | Do & Learn | Learn & Earn</p>
        </div>


        <video
          className="bgfullvideo"
          poster="/assets/bgVideo-poster.webp"
          preload="auto"
          muted
          autoPlay
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/assets/bgvideo.mp4" type="video/mp4" />
        </video>
      </section>

      <main>
        <section className="tech-marquee-bar">
          <div className="marquee-content">
            <span>5000+ Students Empowered</span><span className="dot">•</span>
            <span>AI-Powered Learning Ecosystems</span><span className="dot">•</span>
            <span>Custom Hardware Kits</span><span className="dot">•</span>
            <span>200+ School Partnerships</span><span className="dot">•</span>
            <span>Teacher Capacity Building</span><span className="dot">•</span>
            <span>Regional Language Support</span><span className="dot">•</span>
            <span>State-wide Scalability</span><span className="dot">•</span>
            <span>Learn & Earn Model</span><span className="dot">•</span>

            <span aria-hidden="true">5000+ Students Empowered</span><span className="dot" aria-hidden="true">•</span>
            <span aria-hidden="true">AI-Powered Learning Ecosystems</span><span className="dot" aria-hidden="true">•</span>
            <span aria-hidden="true">Custom Hardware Kits</span><span className="dot" aria-hidden="true">•</span>
            <span aria-hidden="true">200+ School Partnerships</span><span className="dot" aria-hidden="true">•</span>
            <span aria-hidden="true">Teacher Capacity Building</span><span className="dot" aria-hidden="true">•</span>
            <span aria-hidden="true">Regional Language Support</span><span className="dot" aria-hidden="true">•</span>
            <span aria-hidden="true">State-wide Scalability</span><span className="dot" aria-hidden="true">•</span>
            <span aria-hidden="true">Learn & Earn Model</span>
          </div>
        </section>

        <section className="hero">
          <div className="hero-content">
            <h1>Focused, High-Impact AI & Tech Training</h1>
            <p>
              We are an agile tech-education partner dedicated to delivering deep, hands-on learning experiences powered by modern Artificial Intelligence.
              <br /><br />
              Whether you are a startup upskilling an engineering team in Generative AI, a school deploying an AI-integrated STEM lab, or a student seeking a mentored Machine Learning internship, we provide customized, data-driven curriculums.
            </p>
            <a className="register-demo" href="#offerings">
              Explore Our Programs
            </a>
          </div>
          <div className="hero-image">
            <img src="/assets/hero-image.png" alt="Students and trainees" />
          </div>
        </section>

        <section className="focus-areas-section" id="offerings">
          <div className="focus-areas-bg"></div>
          <div className="focus-header">
            <h2>Our Focus Areas</h2>
            <p>Empowering every stage of the learning journey — from classrooms to boardrooms</p>
          </div>

          <div className="focus-cards-container">
            {offerings.map((offering, index) => (
              <Link href={offering.href} key={offering.title} className="focus-card-link">
                <article className="focus-card">
                  <div className="focus-card-icon">
                    {offering.icon}
                  </div>
                  <div className="focus-card-audience">{offering.audience}</div>
                  <h3>{offering.title}</h3>
                  <p>{offering.description}</p>
                  <ul className="focus-card-points">
                    {offering.points.map((point) => (
                      <li key={point}>
                        <FaCheckCircle aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="focus-card-cta">
                    <span>Explore Program</span>
                    <FaArrowRight />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <section className="feature-section" id="corporate">
          <div className="feature-video-container">
            <iframe
              width="586"
              height="330"
              src="https://www.youtube.com/embed/lbEDXgQAkaI?rel=0&modestbranding=1&controls=1&showinfo=0"
              title="AIPNT Programs"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="feature-content corporate-feature-card">
            <h2>Corporate Training</h2>
            <ul className="feature-list">
              <li>
                <FaCheckCircle />
                <div className="feature-item-text">
                  <h3>AI-Powered Workforce Upskilling</h3>
                  <p>Custom LLM and Machine Learning learning paths for engineering teams, plus AI-literacy for non-tech and management functions.</p>
                </div>
              </li>
              <li>
                <FaCheckCircle />
                <div className="feature-item-text">
                  <h3>Intelligent Delivery Modes</h3>
                  <p>AI bootcamps, weekend coding cohorts, and hybrid sessions for rapid capability building.</p>
                </div>
              </li>
              <li>
                <FaCheckCircle />
                <div className="feature-item-text">
                  <h3>Data-Driven ROI Tracking</h3>
                  <p>Pre-post assessment, manager feedback and impact reports for leadership teams.</p>
                </div>
              </li>
            </ul>
            <Link className="primary-cta-btn" href="/corporate-training" style={{ margin: '20px auto 0', display: 'block', width: 'fit-content' }}>
              View Corporate Capabilities →
            </Link>
          </div>
        </section>

        <section className="comprehensive-learning-section" id="internship">
          <div className="comprehensive-learning-header">
            <h2>College Training Programs</h2>
            <p>For college students and fresh graduates</p>
          </div>
          <div className="learning-cards-container">
            <div className="learning-card">
              <img src="/image/B_1.jpg" alt="Internship project track" />
              <h3>Gen-AI & LLM Product Sprints</h3>
            </div>
            <div className="learning-card">
              <img src="/image/B_2.jpg" alt="Internship mentorship" />
              <h3>Mentored Machine Learning Labs</h3>
            </div>
            <div className="learning-card">
              <img src="/image/B_3.jpg" alt="Career launch" />
              <h3>AI Engineers Placement Prep</h3>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link className="primary-cta-btn" href="/summer-internship">
              Explore Internship Details →
            </Link>
          </div>
        </section>

        <section className="visionary-moment" id="stem">
          <div className="stem-circuit-bg"></div>
          <div className="stem-floating-elements">
            <div className="stem-icon"><FaAtom /></div>
            <div className="stem-icon"><FaCog /></div>
            <div className="stem-icon"><FaCalculator /></div>
            <div className="stem-icon"><FaMicrochip /></div>
            <div className="stem-icon"><FaDna /></div>
            <div className="stem-icon"><FaRobot /></div>
          </div>
          <div className="video-container">
            <img
              src="/assets/SchoolStemPrograms.png"
              alt="Students working in a STEM and robotics lab"
            />
          </div>
          <div className="visionary-text">
            <h2>School STEM Programs</h2>
            <p>
              Structured robotics, coding and AI curriculum for K-12 schools with teacher training,
              lab setup and project-based competitions.
            </p>
            <Link className="register-demo" href="/school-stem">
              Request School Proposal
            </Link>
          </div>
        </section>

        <section className="school-transform-section" id="government">
          {/* Decorative Background */}
          <div className="transform-bg">
            <div className="bg-circle bg-circle-1"></div>
            <div className="bg-circle bg-circle-2"></div>
            <div className="bg-line bg-line-1"></div>
            <div className="bg-line bg-line-2"></div>
          </div>

          <div className="transform-header">
            <h2>School Transformation Programs</h2>
            <p>Building AI-Powered Learning Ecosystems That Scale</p>
          </div>

          {/* Creative Cutout Tiles */}
          <div className="cutout-tiles-container">

            {/* Tile 1 - Image Right */}
            <div className="cutout-tile tile-img-right">
              <div className="tile-text-block">
                <div className="tile-number">01</div>
                <h3>AI-Powered Student Learning</h3>
                <p>
                  Personalized AI tutoring that adapts to each student's pace. From coding basics to robotics — we make every child future-ready with gamified STEM challenges and regional language support.
                </p>
                <div className="tile-features">
                  <span><FaCheckCircle /> Adaptive Learning</span>
                  <span><FaCheckCircle /> Hindi & Regional Languages</span>
                  <span><FaCheckCircle /> Gamified Challenges</span>
                </div>
              </div>
              <div className="tile-image-block">
                <div className="image-cutout">
                  <img src="/info-PNT/SchoolTransformationImages/AI-Powered%20Student%20Learning.jpg" alt="Students learning AI" />
                </div>
                <div className="floating-badge badge-orange">5000+ Students</div>
              </div>
            </div>

            {/* Tile 2 - Image Left */}
            <div className="cutout-tile tile-img-left">
              <div className="tile-image-block">
                <div className="image-cutout">
                  <img src="/info-PNT/SchoolTransformationImages/Teacher%20Empowerment.jpg" alt="Teacher training" />
                </div>
                <div className="floating-badge badge-purple">Train the Trainer</div>
              </div>
              <div className="tile-text-block">
                <div className="tile-number">02</div>
                <h3>Teacher Empowerment</h3>
                <p>
                  We transform teachers from traditional lecturers into modern facilitators. AI-assisted lesson planning, real-time student tracking, and hands-on tech workshops for 21st-century classrooms.
                </p>
                <div className="tile-features">
                  <span><FaCheckCircle /> AI Teaching Assistants</span>
                  <span><FaCheckCircle /> Smart Classroom Tools</span>
                  <span><FaCheckCircle /> Continuous Development</span>
                </div>
              </div>
            </div>

            {/* Tile 3 - Image Right */}
            <div className="cutout-tile tile-img-right">
              <div className="tile-text-block">
                <div className="tile-number">03</div>
                <h3>STEM & Robotics Hardware Kits</h3>
                <p>
                  Custom-built and ready-made hardware kits designed for Indian classrooms. Arduino, IoT sensors, AI modules, and robotics components — budget-friendly and built to last.
                </p>
                <div className="tile-features">
                  <span><FaCheckCircle /> Customizable Kits</span>
                  <span><FaCheckCircle /> Arduino & IoT Modules</span>
                  <span><FaCheckCircle /> Budget-Friendly</span>
                </div>
              </div>
              <div className="tile-image-block">
                <div className="image-cutout">
                  <img src="/info-PNT/SchoolTransformationImages/STEM%20&%20Robotics%20Hardware%20Kits.jpg" alt="Hardware kits" />
                </div>
                <div className="floating-badge badge-green">Made in India</div>
              </div>
            </div>

            {/* Tile 4 - Image Left */}
            <div className="cutout-tile tile-img-left">
              <div className="tile-image-block">
                <div className="image-cutout">
                  <img src="/info-PNT/SchoolTransformationImages/StateLevl%20Deployment.jpg" alt="State-wide deployment" />
                </div>
                <div className="floating-badge badge-blue">Pan-India Ready</div>
              </div>
              <div className="tile-text-block">
                <div className="tile-number">04</div>
                <h3>State-wide Scalable Deployment</h3>
                <p>
                  From a single pilot school to entire districts — our blended learning model scales seamlessly. Complete compliance reporting and measurable impact analytics built-in.
                </p>
                <div className="tile-features">
                  <span><FaCheckCircle /> Pilot to District</span>
                  <span><FaCheckCircle /> Impact Analytics</span>
                  <span><FaCheckCircle /> Government Compliant</span>
                </div>
              </div>
            </div>

          </div>

          <div className="transform-cta">
            <Link className="primary-cta-btn" href="/government">
              Partner With Us →
            </Link>
            <p className="cta-subtext">Join 200+ schools already transforming education</p>
          </div>
        </section>

        <section className="brochures-section" id="resources">
          <div className="bootcamp-circuit-pattern"></div>
          <div className="section-header-centered">
            <h2>Explore Our Technical Bootcamps</h2>
            <p>Dive deep into our signature hardware, software, and AI specialized curriculum</p>
          </div>

          <div className="brochures-grid">

            <a href="/info-PNT/HARDWARE Designing for  IOT based market products.png" target="_blank" rel="noopener noreferrer" className="brochure-card">
              <span className="bootcamp-badge hardware">Hardware</span>
              <div className="brochure-image-wrap">
                <img src="/info-PNT/HARDWARE Designing for  IOT based market products.png" alt="Hardware Design Bootcamp" loading="lazy" />
                <div className="brochure-overlay">
                  <FaExternalLinkAlt className="brochure-icon" />
                  <span>View Details</span>
                </div>
              </div>
              <div className="brochure-info">
                <h3>Hardware Design for IoT</h3>
                <p>Learn end-to-end hardware development for consumer market products.</p>
              </div>
            </a>

            <a href="/info-PNT/PCB Design Bootcamp from schematic to Gerber.jpeg" target="_blank" rel="noopener noreferrer" className="brochure-card">
              <span className="bootcamp-badge pcb">PCB Design</span>
              <div className="brochure-image-wrap">
                <img src="/info-PNT/PCB Design Bootcamp from schematic to Gerber.jpeg" alt="PCB Design Bootcamp" loading="lazy" />
                <div className="brochure-overlay">
                  <FaExternalLinkAlt className="brochure-icon" />
                  <span>View Details</span>
                </div>
              </div>
              <div className="brochure-info">
                <h3>PCB Design Bootcamp</h3>
                <p>From schematic capture to final Gerber file generation and prototyping.</p>
              </div>
            </a>

            <a href="/info-PNT/Embedded Design for  IOT based market product.png" target="_blank" rel="noopener noreferrer" className="brochure-card">
              <span className="bootcamp-badge embedded">Embedded</span>
              <div className="brochure-image-wrap">
                <img src="/info-PNT/Embedded Design for  IOT based market product.png" alt="Embedded Design" loading="lazy" />
                <div className="brochure-overlay">
                  <FaExternalLinkAlt className="brochure-icon" />
                  <span>View Details</span>
                </div>
              </div>
              <div className="brochure-info">
                <h3>Embedded Design</h3>
                <p>Master embedded systems programming for real-world IoT deployments.</p>
              </div>
            </a>

            <a href="/info-PNT/Web application development  for Market Product.png" target="_blank" rel="noopener noreferrer" className="brochure-card">
              <span className="bootcamp-badge software">Software</span>
              <div className="brochure-image-wrap">
                <img src="/info-PNT/Web application development  for Market Product.png" alt="Web Application Development" loading="lazy" />
                <div className="brochure-overlay">
                  <FaExternalLinkAlt className="brochure-icon" />
                  <span>View Details</span>
                </div>
              </div>
              <div className="brochure-info">
                <h3>Web App Development</h3>
                <p>Full-stack modern web development tailored for enterprise product scaling.</p>
              </div>
            </a>

            <a href="/info-PNT/AI block coding application development for Govt Project.png" target="_blank" rel="noopener noreferrer" className="brochure-card">
              <span className="bootcamp-badge ai">AI & ML</span>
              <div className="brochure-image-wrap">
                <img src="/info-PNT/AI block coding application development for Govt Project.png" alt="AI Block Coding for Government" loading="lazy" />
                <div className="brochure-overlay">
                  <FaExternalLinkAlt className="brochure-icon" />
                  <span>View Details</span>
                </div>
              </div>
              <div className="brochure-info">
                <h3>AI Block Coding Frameworks</h3>
                <p>Specialized block-based application environments implemented for govt projects.</p>
              </div>
            </a>

          </div>
        </section>

        <InaugurationGallery />

        <BlogSection />

        <section className="lead-generation-banner">
          <h2>Ready to Level Up?</h2>
          <p>Let's discuss how our tailored training programs can empower your team or institution.</p>
          <Link className="primary-cta-btn inverse" href="/contact">
            Schedule a Free Consultation
          </Link>
        </section>
      </main>

      <Footer />

      <a href="https://api.whatsapp.com/send?phone=917788016666" className="phone-button" aria-label="Chat on WhatsApp">
        <FaWhatsapp />
      </a>
    </>
  );
}
