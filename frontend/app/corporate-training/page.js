"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaWhatsapp } from 'react-icons/fa';
import {
  FaCheckCircle,
  FaBrain,
  FaCloud,
  FaDatabase,
  FaCogs,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaLaptopCode,
  FaBuilding,
  FaChartLine,
  FaUsers,
  FaCertificate
} from 'react-icons/fa';
import styles from './page.module.css';

const tracks = [
  {
    icon: <FaBrain />,
    title: 'AI & Machine Learning',
    desc: 'Deep learning, NLP, computer vision, generative AI and MLOps for engineering and product teams.',
  },
  {
    icon: <FaCloud />,
    title: 'Cloud & DevOps',
    desc: 'AWS, Azure, GCP certification tracks with hands-on infrastructure-as-code and CI/CD pipelines.',
  },
  {
    icon: <FaDatabase />,
    title: 'Data Engineering',
    desc: 'ETL pipelines, data warehousing, Apache Spark, Kafka and real-time analytics platforms.',
  },
  {
    icon: <FaCogs />,
    title: 'Automation & RPA',
    desc: 'UiPath, Power Automate and custom automation workflows for business process optimization.',
  },
];

const deliveryModes = [
  { icon: <FaChalkboardTeacher />, title: 'Intensive Bootcamps', desc: '2–4 week immersive programs with daily live sessions and project work' },
  { icon: <FaCalendarAlt />, title: 'Weekend Cohorts', desc: 'Part-time learning designed for working professionals on a flexible schedule' },
  { icon: <FaLaptopCode />, title: 'Hybrid Sessions', desc: 'Blend of online self-paced modules with periodic in-person workshops' },
  { icon: <FaBuilding />, title: 'On-Site Programs', desc: 'Fully customized training delivered at your corporate campus with dedicated trainers' },
];

const stats = [
  { value: '500+', label: 'Professionals Trained' },
  { value: '92%', label: 'Completion Rate' },
  { value: '40+', label: 'Corporate Partners' },
  { value: '4.8★', label: 'Average Rating' },
];

export default function CorporateTrainingPage() {
  return (
    <>
      <Navbar />

      <section className={styles.hero}>
        <img src="/assets/corporate-training-hero.png" alt="" className={styles.heroBg} />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.badge}>FOR COMPANIES & TEAMS</span>
          <h1>Corporate Training Programs</h1>
          <p>
            Industry-focused AI, data, cloud and automation tracks for employee
            upskilling with measurable outcomes and ROI tracking.
          </p>
          <a className={styles.ctaButton} href="#tracks">
            Explore Training Tracks
          </a>
        </div>
      </section>

      <section className={styles.statsBar}>
        {stats.map((stat) => (
          <div className={styles.statItem} key={stat.label}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </section>

      <main>
        <section className={styles.tracksSection} id="tracks">
          <h2>Training Tracks</h2>
          <p className={styles.sectionSub}>Role-based curriculum designed for real-world impact</p>
          <div className={styles.tracksGrid}>
            {tracks.map((track) => (
              <article className={styles.trackCard} key={track.title}>
                <div className={styles.trackIcon}>{track.icon}</div>
                <h3>{track.title}</h3>
                <p>{track.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.bootcampsSection}>
          <h2>Specialized Engineering Bootcamps</h2>
          <p className={styles.sectionSub}>Featured deep-dive curriculums available for immediate deployment.</p>
          <div className={styles.bootcampsGrid}>
            <a href="/info-PNT/HARDWARE Designing for  IOT based market products.png" target="_blank" rel="noopener noreferrer" className={styles.bootcampCard}>
              <img src="/info-PNT/HARDWARE Designing for  IOT based market products.png" alt="Hardware Designing Bootcamp" loading="lazy" />
              <div className={styles.bootcampOverlay}>
                <span>View Syllabus</span>
              </div>
            </a>
            <a href="/info-PNT/Embedded Design for  IOT based market product.png" target="_blank" rel="noopener noreferrer" className={styles.bootcampCard}>
              <img src="/info-PNT/Embedded Design for  IOT based market product.png" alt="Embedded Design Bootcamp" loading="lazy" />
              <div className={styles.bootcampOverlay}>
                <span>View Syllabus</span>
              </div>
            </a>
            <a href="/info-PNT/Web application development  for Market Product.png" target="_blank" rel="noopener noreferrer" className={styles.bootcampCard}>
              <img src="/info-PNT/Web application development  for Market Product.png" alt="Web App Bootcamp" loading="lazy" />
              <div className={styles.bootcampOverlay}>
                <span>View Syllabus</span>
              </div>
            </a>
          </div>
        </section>

        <section className={styles.deliverySection}>
          <h2>Delivery Models</h2>
          <p className={styles.sectionSub}>Choose the format that fits your business</p>
          <div className={styles.deliveryGrid}>
            {deliveryModes.map((mode) => (
              <div className={styles.deliveryCard} key={mode.title}>
                <div className={styles.deliveryIcon}>{mode.icon}</div>
                <h3>{mode.title}</h3>
                <p>{mode.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.showcaseSection}>
          <img src="/assets/corporate-delivery.png" alt="Training delivery formats" className={styles.showcaseImage} />
        </section>

        <section className={styles.videoSection}>
          <div className={styles.videoWrapper}>
            <iframe
              width="700"
              height="394"
              src="https://www.youtube.com/embed/lbEDXgQAkaI?rel=0&modestbranding=1&controls=1&showinfo=0"
              title="AIPNT Corporate Programs"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className={styles.videoText}>
            <h2>See Our Programs in Action</h2>
            <p>
              Watch how our corporate training programs are transforming
              workforce capability across organizations.
            </p>
          </div>
        </section>

        <section className={styles.outcomesSection}>
          <h2>Outcome & ROI Tracking</h2>
          <div className={styles.outcomesList}>
            <div className={styles.outcomeItem}>
              <FaChartLine className={styles.outcomeIcon} />
              <div>
                <h3>Pre-Post Assessment</h3>
                <p>Measurable skill gap analysis before and after training with detailed competency reports.</p>
              </div>
            </div>
            <div className={styles.outcomeItem}>
              <FaUsers className={styles.outcomeIcon} />
              <div>
                <h3>Manager Feedback Loop</h3>
                <p>Structured feedback from reporting managers to correlate training impact with on-job performance.</p>
              </div>
            </div>
            <div className={styles.outcomeItem}>
              <FaCertificate className={styles.outcomeIcon} />
              <div>
                <h3>Certification & Badging</h3>
                <p>Industry-recognized certifications and digital badges for every completed track.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2>Ready to Upskill Your Team?</h2>
          <p>Get a customized training proposal tailored to your organization's needs and goals.</p>
          <a
            className={styles.ctaButton}
            href="https://api.whatsapp.com/send?phone=917788016666"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Consultation
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
