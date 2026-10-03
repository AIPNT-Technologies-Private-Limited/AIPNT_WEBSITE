"use client";

import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './page.module.css';
import {
  FaHeartbeat,
  FaHospital,
  FaUserMd,
  FaArrowRight,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaCalendarCheck,
  FaUsers,
  FaClipboardCheck,
  FaRobot,
  FaMicrophone,
  FaPills,
  FaBed,
  FaBriefcaseMedical,
  FaHistory,
  FaCapsules,
  FaCommentDots,
  FaChartLine,
  FaUserTie,
  FaClinicMedical,
  FaShareAlt,
  FaFlask,
  FaShieldAlt,
  FaConciergeBell,
  FaMicrochip,
  FaMobileAlt,
  FaDoorOpen
} from 'react-icons/fa';

// The 20 Healthcare & Clinical AI Products mapped into 4 clinical functional categories
const clinicalCategories = [
  {
    id: "access",
    categoryTitle: "Patient Experience & Access",
    icon: <FaUserMd />,
    count: "05 Tools",
    products: [
      {
        id: "MED-01",
        title: "AppointmentAI",
        desc: "Smart multi-channel appointment booking & calendar orchestration for patients and clinics.",
        icon: <FaCalendarCheck />,
        // PASTE TARGET LINK HERE:
        link: "/products/digiswasth"
      },
      {
        id: "MED-02",
        title: "QueueAI",
        desc: "Intelligent real-time OPD queue sequencing, wait-time prediction, and turnstile synchronization.",
        icon: <FaUsers />,
        // PASTE TARGET LINK HERE:
        link: "/products/digiswasth#simulator"
      },
      {
        id: "MED-03",
        title: "CheckIn",
        desc: "Contactless digital patient check-in via 0.3s facial liveness, ABHA QR, and NFC smart cards.",
        icon: <FaClipboardCheck />,
        // PASTE TARGET LINK HERE:
        link: "/products/digiswasth#hardware"
      },
      {
        id: "MED-04",
        title: "PatientBot",
        desc: "Pre-consultation conversational AI triaging patient symptoms in Hindi, Odia, and English.",
        icon: <FaRobot />,
        // PASTE TARGET LINK HERE:
        link: "/products/digiswasth"
      },
      {
        id: "MED-05",
        title: "DoctorCopilot",
        desc: "Clinical intelligence assistant generating instant pre-consultation briefings and history summaries.",
        icon: <FaUserMd />,
        // PASTE TARGET LINK HERE:
        link: "/products/digiswasth#doctor-ai"
      }
    ]
  },
  {
    id: "documentation",
    categoryTitle: "Clinical Documentation & EHR",
    icon: <FaBriefcaseMedical />,
    count: "05 Tools",
    products: [
      {
        id: "MED-06",
        title: "VoiceNote",
        desc: "Ambient listening and voice-to-text NLP converting doctor-patient discussions into SOAP notes.",
        icon: <FaMicrophone />,
        // PASTE TARGET LINK HERE:
        link: "/products/digiswasth#doctor-ai"
      },
      {
        id: "MED-07",
        title: "PrescriptionAI",
        desc: "Automated digital prescription generation with Indian brand name mapping and conflict alerts.",
        icon: <FaPills />,
        // PASTE TARGET LINK HERE:
        link: "/products/digiswasth#doctor-ai"
      },
      {
        id: "MED-08",
        title: "DischargeAI",
        desc: "Automated inpatient discharge summaries, medication instructions, and follow-up schedules.",
        icon: <FaBed />,
        // PASTE TARGET LINK HERE:
        link: "/products/digiswasth"
      },
      {
        id: "MED-09",
        title: "MedicalRecordAI",
        desc: "ABDM-compliant digital health locker synchronization and longitudinal patient record management.",
        icon: <FaBriefcaseMedical />,
        // PASTE TARGET LINK HERE:
        link: "/products/digiswasth"
      },
      {
        id: "MED-10",
        title: "FollowUpAI",
        desc: "Intelligent recovery tracking, automated SMS/WhatsApp wellness check-ins, and recurrence alerts.",
        icon: <FaHistory />,
        // PASTE TARGET LINK HERE:
        link: "/products/digiswasth"
      }
    ]
  },
  {
    id: "support",
    categoryTitle: "Care Support & Analytics",
    icon: <FaClinicMedical />,
    count: "05 Tools",
    products: [
      {
        id: "MED-11",
        title: "MedicineReminder",
        desc: "Automated personalized dosage reminders via WhatsApp and interactive voice response (IVR).",
        icon: <FaCapsules />,
        // PASTE TARGET LINK HERE:
        link: "/products/digiswasth"
      },
      {
        id: "MED-12",
        title: "FeedbackAI",
        desc: "Post-visit patient sentiment intelligence and doctor ratings analytics for hospital administrators.",
        icon: <FaCommentDots />,
        // PASTE TARGET LINK HERE:
        link: "/products/digiswasth"
      },
      {
        id: "MED-13",
        title: "OPDAnalytics",
        desc: "Executive hospital cockpits tracking footfalls, doctor utilization, and bottleneck diagnostics.",
        icon: <FaChartLine />,
        // PASTE TARGET LINK HERE:
        link: "/products/digiswasth#calculator"
      },
      {
        id: "MED-14",
        title: "DoctorAnalytics",
        desc: "Performance and consultation throughput analytics with anonymous clinical peer benchmarking.",
        icon: <FaUserTie />,
        // PASTE TARGET LINK HERE:
        link: "/products/digiswasth"
      },
      {
        id: "MED-15",
        title: "PharmacyAI",
        desc: "Direct EHR-to-dispensary prescription routing, batch expiration tracking, and stock automation.",
        icon: <FaClinicMedical />,
        // PASTE TARGET LINK HERE:
        link: "/products/digiswasth"
      }
    ]
  },
  {
    id: "operations",
    categoryTitle: "Hospital Operations & Diagnostics",
    icon: <FaHospital />,
    count: "05 Tools",
    products: [
      {
        id: "MED-16",
        title: "ReferralAI",
        desc: "Inter-specialty and external clinic patient transfer coordination with verified record handover.",
        icon: <FaShareAlt />,
        // PASTE TARGET LINK HERE:
        link: "/products/digiswasth"
      },
      {
        id: "MED-17",
        title: "LabReportAI",
        desc: "Automated optical character recognition (OCR) and diagnostic biomarker trend interpretations.",
        icon: <FaFlask />,
        // PASTE TARGET LINK HERE:
        link: "/products/digiswasth"
      },
      {
        id: "MED-18",
        title: "InsuranceDesk",
        desc: "Pre-authorization claim validation, ABDM insurance mapping, and cashless claim paperwork.",
        icon: <FaShieldAlt />,
        // PASTE TARGET LINK HERE:
        link: "/products/digiswasth"
      },
      {
        id: "MED-19",
        title: "ReceptionAI",
        desc: "Virtual hospital concierge kiosk providing physical ward directions and doctor timetable lookup.",
        icon: <FaConciergeBell />,
        // PASTE TARGET LINK HERE:
        link: "/products/digiswasth#hardware"
      },
      {
        id: "MED-20",
        title: "HospitalCopilot",
        desc: "Enterprise operational intelligence unifying bed occupancy, staff shifts, and emergency triage.",
        icon: <FaHospital />,
        // PASTE TARGET LINK HERE:
        link: "/products/digiswasth"
      }
    ]
  }
];

export default function MedTechPage() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {/* Top Utility Strip */}
      <div className={styles.topNavStrip}>
        <div className={styles.topNavInner}>
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span>/</span>
            <Link href="/products" className={styles.breadcrumbLink}>Domains</Link>
            <span>/</span>
            <span className={styles.breadcrumbCurrent}>MedTech</span>
          </div>

          <div className={styles.complianceBadge}>
            <span className={styles.pulseDot} />
            <span>ABDM M1, M2 &amp; M3 Certified • HL7 FHIR Interoperable • HIPAA Aligned</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.domainBadge}>
            <FaHeartbeat /> Healthcare Intelligence Domain
          </div>

          <h1 className={styles.heroTitle}>
            Technology that makes healthcare <span className={styles.highlightTeal}>more connected.</span>
          </h1>

          <p className={styles.heroLead}>
            AI-enabled healthcare platforms, hospital systems, voice interfaces, digital health and connected devices.
            We build clinical software and purpose-engineered medical hardware that eliminate waiting queues, accelerate documentation, and unify patient records across India.
          </p>

          <div className={styles.heroActions}>
            <Link href="#flagship" className={styles.btnMain}>
              Explore Flagship Platform <FaArrowRight />
            </Link>
            <Link href="#catalog" className={styles.btnGhost}>
              View All 20 Clinical Micro-Tools
            </Link>
          </div>
        </div>

        {/* Quick Domain Metrics Grid */}
        <div className={styles.heroMetricsGrid}>
          <div className={styles.metricTile}>
            <span className={`${styles.metricValue} ${styles.metricValueAccent}`}>&lt; 0.3s</span>
            <span className={styles.metricLabel}>Biometric Facial Check-in with ABDM verification</span>
          </div>
          <div className={styles.metricTile}>
            <span className={styles.metricValue}>60%</span>
            <span className={styles.metricLabel}>Doctor documentation time saved per patient</span>
          </div>
          <div className={styles.metricTile}>
            <span className={styles.metricValue}>20+</span>
            <span className={styles.metricLabel}>Specialized Clinical &amp; Hospital AI Micro-SaaS tools</span>
          </div>
          <div className={styles.metricTile}>
            <span className={`${styles.metricValue} ${styles.metricValueAccent}`}>100%</span>
            <span className={styles.metricLabel}>Paperless OPD, automated tokens &amp; digital records</span>
          </div>
        </div>
      </section>

      {/* Flagship Product Showcase: DigiSwasth */}
      <section className={styles.section} id="flagship">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionCategory}>FLAGSHIP HOSPITAL OPERATING SYSTEM</span>
          <h2 className={styles.sectionTitle}>DigiSwasth Hospital Intelligence Suite</h2>
          <p className={styles.sectionLead}>
            A complete end-to-end hardware and AI cloud ecosystem connecting patients, triage desks, doctors, and pharmacy operations.
          </p>
        </div>

        <div className={styles.flagshipCard}>
          <div className={styles.flagshipContent}>
            <div className={styles.flagshipBadge}>Flagship Solution</div>
            <h3 className={styles.flagshipTitle}>DigiSwasth (Hospital AI &amp; Hardware OS)</h3>
            <p className={styles.flagshipTagline}>
              Zero-queue check-in kiosks, doctor voice-to-prescription AI, smart speed turnstiles, and unified ABDM-ready EHR.
            </p>
            <p className={styles.flagshipDesc}>
              Frontline intelligence engineered specifically for Indian high-volume healthcare institutions. Patients check in via facial liveness or ABHA QR in seconds, doctors dictate notes naturally without typing, and hospital corridors remain orderly through smart queue turnstiles.
            </p>

            <div className={styles.flagshipPills}>
              <span className={styles.pillItem}>Self Check-in Kiosk</span>
              <span className={styles.pillItem}>Bedside Clinical PDA</span>
              <span className={styles.pillItem}>Smart Speed Turnstiles</span>
              <span className={styles.pillItem}>Voice Clinical NLP</span>
              <span className={styles.pillItem}>Hindi &amp; Odia Voice</span>
              <span className={styles.pillItem}>ABDM Ready</span>
            </div>

            <div className={styles.flagshipActions}>
              {/* TARGET LINK TO PASTE / EDIT */}
              <Link href="/products/digiswasth" className={styles.btnMain}>
                Explore Full DigiSwasth Suite <FaArrowRight />
              </Link>
              <Link href="/products/digiswasth#simulator" className={styles.btnGhost}>
                Try Live Kiosk Simulator
              </Link>
            </div>
          </div>

          <div className={styles.flagshipImageContainer}>
            <img src="/assets/generated/digiswasth_product.jpg" alt="DigiSwasth Ecosystem Overview" />
          </div>
        </div>

        {/* 3 Dedicated Hardware Components */}
        <div className={styles.hardwareGrid}>
          <div className={styles.hardwareCard}>
            <div className={styles.hardwareImgWrap}>
              <img src="/assets/generated/digiswasth_kiosk.jpg" alt="DigiSwasth Smart Terminal" />
            </div>
            <div className={styles.hardwareBody}>
              <h4>Smart Check-in Terminal</h4>
              <p>High-speed kiosk with 3D biometric camera, dynamic QR thermal token printer, and trilingual voice instructions.</p>
              <div className={styles.productActionRow}>
                <span className={styles.statusIndicator}><span className={styles.statusDot} /> Hardware Ready</span>
                {/* PASTE TARGET LINK HERE */}
                <Link href="/products/digiswasth#hardware" className={styles.pasteLinkBtn}>
                  View Specs <FaExternalLinkAlt style={{ fontSize: '11px' }} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.hardwareCard}>
            <div className={styles.hardwareImgWrap}>
              <img src="/assets/generated/digiswasth_handheld.jpg" alt="DigiSwasth Handheld Scanner" />
            </div>
            <div className={styles.hardwareBody}>
              <h4>DigiSwasth Pro Handheld</h4>
              <p>Rugged IP65 clinical PDA for bedside verification, nurse rounds, barcode medication checks, and offline data cache.</p>
              <div className={styles.productActionRow}>
                <span className={styles.statusIndicator}><span className={styles.statusDot} /> Hardware Ready</span>
                {/* PASTE TARGET LINK HERE */}
                <Link href="/products/digiswasth#hardware" className={styles.pasteLinkBtn}>
                  View Specs <FaExternalLinkAlt style={{ fontSize: '11px' }} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.hardwareCard}>
            <div className={styles.hardwareImgWrap}>
              <img src="/assets/generated/digiswasth_smartgate.jpg" alt="Smart Access Turnstile" />
            </div>
            <div className={styles.hardwareBody}>
              <h4>Smart Access Speed Gate</h4>
              <p>Motorized glass turnstiles connected to doctor chamber queues. Gates unlock automatically when patient is called.</p>
              <div className={styles.productActionRow}>
                <span className={styles.statusIndicator}><span className={styles.statusDot} /> Hardware Ready</span>
                {/* PASTE TARGET LINK HERE */}
                <Link href="/products/digiswasth#hardware" className={styles.pasteLinkBtn}>
                  View Specs <FaExternalLinkAlt style={{ fontSize: '11px' }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 20 Clinical Micro-SaaS Product Catalog */}
      <section className={styles.section} id="catalog">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionCategory}>SPECIALIZED CLINICAL AI SUITE</span>
          <h2 className={styles.sectionTitle}>Explore All MedTech &amp; Healthcare Products</h2>
          <p className={styles.sectionLead}>
            20 modular clinical micro-services designed to plug directly into existing Hospital Information Systems (HIS) or deploy as standalone software.
          </p>
        </div>

        {clinicalCategories.map((group) => (
          <div key={group.id} className={styles.productCategorySection}>
            <div className={styles.categoryHeading}>
              <div className={styles.categoryTitleWrap}>
                <span className={styles.categoryIcon}>{group.icon}</span>
                <h3 className={styles.categoryTitle}>{group.categoryTitle}</h3>
              </div>
              <span className={styles.categoryBadgeCount}>{group.count}</span>
            </div>

            <div className={styles.productCardsGrid}>
              {group.products.map((item) => (
                <div key={item.id} className={styles.productItemCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.itemIcon}>{item.icon}</div>
                    <span className={styles.productIdCode}>{item.id}</span>
                  </div>

                  <h4 className={styles.cardItemTitle}>{item.title}</h4>
                  <p className={styles.cardItemDesc}>{item.desc}</p>

                  <div className={styles.productActionRow}>
                    <span className={styles.statusIndicator}>
                      <span className={styles.statusDot} /> Active Module
                    </span>

                    {/* TARGET LINK TO PASTE / EDIT */}
                    <Link
                      href={item.link}
                      className={styles.pasteLinkBtn}
                      title={`Open ${item.title}`}
                    >
                      Explore Product <FaExternalLinkAlt style={{ fontSize: '11px' }} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Hospital Architecture & Compliance Standards */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionCategory}>CLINICAL INTEROPERABILITY &amp; SECURITY</span>
          <h2 className={styles.sectionTitle}>Engineered for Indian &amp; Global Compliance</h2>
        </div>

        <div className={styles.architectureStrip}>
          <div className={styles.archFeature}>
            <h5>ABDM M1, M2 &amp; M3 Ready</h5>
            <p>Seamless Ayushman Bharat Health Account (ABHA) creation, QR scan-and-share, and digital consent exchange.</p>
          </div>
          <div className={styles.archFeature}>
            <h5>HL7 FHIR Interoperability</h5>
            <p>Open RESTful APIs that connect directly to existing HIS, LIMS lab systems, and PACS radiology networks.</p>
          </div>
          <div className={styles.archFeature}>
            <h5>Offline Edge Architecture</h5>
            <p>On-premise localized gateways keep kiosks and token sequencing functioning during broadband outages.</p>
          </div>
          <div className={styles.archFeature}>
            <h5>Trilingual NLP Intelligence</h5>
            <p>Native voice understanding in Odia, Hindi, and English built for accessibility across diverse patient demographics.</p>
          </div>
        </div>
      </section>

      {/* Domain Pilot Call to Action */}
      <section className={styles.section}>
        <div className={styles.domainCtaCard}>
          <h3>Modernize Your Hospital Operations</h3>
          <p>
            Whether you run a 500-bed multi-specialty medical center or a busy outpatient clinic, our MedTech engineering team provides on-site hardware walkthroughs and turnkey deployments.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            {/* TARGET CONTACT / INQUIRY LINK */}
            <Link href="/contact" className={styles.btnMain}>
              Schedule Clinical Demo <FaArrowRight />
            </Link>
            <Link href="/products/digiswasth" className={styles.btnGhost}>
              Read DigiSwasth Case Study
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
