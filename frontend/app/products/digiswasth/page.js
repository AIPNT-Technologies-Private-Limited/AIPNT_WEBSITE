"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';
import {
  FaHeartbeat,
  FaHospital,
  FaUserMd,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
  FaQrcode,
  FaMicrochip,
  FaDoorOpen,
  FaClock,
  FaPlay,
  FaPause,
  FaRedo,
  FaPrint,
  FaCloud,
  FaMobileAlt,
  FaHeadset,
  FaIdCard,
  FaUserCheck,
  FaFilePrescription,
  FaChartLine,
  FaLanguage,
  FaLock,
  FaCalendarCheck,
  FaExternalLinkAlt,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaUsers,
  FaStethoscope,
  FaProcedures
} from 'react-icons/fa';

// 3 Core Hardware Devices
const hardwareDevices = {
  kiosk: {
    id: 'kiosk',
    name: 'DigiSwasth Smart Check-in Terminal',
    tagline: 'Zero-Queue Self Check-in with Facial Liveness & Automated Token Slip Printing',
    image: '/assets/generated/digiswasth_kiosk.jpg',
    specOverlay: 'Dual 3D Camera • Thermal Printer • NFC Reader',
    desc: 'The frontline intelligence hub for high-volume hospitals and outpatient clinics. Patients walk up, scan their face or ABHA QR code in under 3 seconds, and receive an instant token slip with assigned doctor and room navigation.',
    features: [
      'Sub-0.3s Facial Liveness AI recognition resistant to photo/video spoofing',
      'Integrated High-Speed Thermal Printer with dynamic QR token slips',
      'Triple-mode check-in: Face Biometric, Mobile App QR Code, or NFC Smart Card',
      'Intuitive vertical touch display with multi-language voice guidance (Hindi, Odia, English)',
      'Sub-chassis status glow bar indicating real-time system ready and scan verification'
    ],
    idealFor: 'Hospital Main Lobbies, OPD Registration Halls, Emergency Triage, Diagnostic Centers'
  },
  handheld: {
    id: 'handheld',
    name: 'DigiSwasth Pro Handheld Scanner',
    tagline: 'Rugged Clinical PDA for Bedside Verification, Nurse Rounds & Ward Mobility',
    image: '/assets/generated/digiswasth_handheld.jpg',
    specOverlay: 'IP65 Rugged • 1D/2D Barcode • NFC • 5000mAh Battery',
    desc: 'Empowers on-duty nurses, doctors, and triage staff with instant bedside patient verification, medication cross-checks, and real-time electronic health record synchronization right from the palm of their hand.',
    features: [
      'Industrial-grade drop-proof rubberized casing designed for medical disinfectant wiping',
      'Dedicated hardware scan triggers for instantaneous wristband & specimen barcode capture',
      'Embedded NFC reader for tap-to-verify patient identification & staff authentication',
      'Direct synchronization with Hospital PMS for real-time queue & room status',
      'Offline-capable cache ensuring continuous uninterrupted rounds even in network dead-zones'
    ],
    idealFor: 'Inpatient Wards, Bedside Medication Administration, Phlebotomy, OT Patient Transfer'
  },
  gate: {
    id: 'gate',
    name: 'DigiSwasth Smart Access Gate',
    tagline: 'Automated Speed Turnstiles with Facial Recognition & Doctor Queue Synchronization',
    image: '/assets/generated/digiswasth_smartgate.jpg',
    specOverlay: 'Motorized Glass • Access Granted LED • <0.4s Throughput',
    desc: 'A revolutionary patient flow controller that connects physical entrance turnstiles directly to OPD doctor consultation chambers. Speed gates automatically open only for the patient whose token has been called by the doctor.',
    features: [
      'Bidirectional motorized swing glass turnstiles featuring illuminated AiPNT medical emblem',
      'Dual biometric terminal combining face recognition with green/red LED access indicators',
      'Doctor Consultation Chamber Synchronization: Completely eliminates hallway crowding',
      'Emergency safety break-away protocol auto-unlocking on fire/hospital alarm trigger',
      'Ultra-high throughput: handles 40+ patient verifications per minute without congestion'
    ],
    idealFor: 'OPD Consultation Corridors, VIP Health Zones, Daycare Surgery Units, Hospital Entrances'
  }
};

// 6-Step Patient Journey
const journeySteps = [
  {
    step: 1,
    title: 'Book Appointment',
    subtitle: 'From Home or On-the-Go',
    icon: <FaMobileAlt />,
    desc: 'Patients easily select their doctor, specialty, and preferred time slot on the DigiSwasth mobile app. Facial enrollment can be completed instantly during booking.',
    benefit: 'Zero early morning queues at hospital counters',
    timeSaved: '20-30 min saved'
  },
  {
    step: 2,
    title: 'Pre-Consultation',
    subtitle: 'AI Health Assistant Intake',
    icon: <FaHeartbeat />,
    desc: 'An intelligent AI conversational agent collects patient symptoms, chief complaints, and past medical history in their native language (Hindi, Odia, or English) prior to arrival.',
    benefit: 'Doctors receive a pre-summarized clinical note before patient walks in',
    timeSaved: '5-8 min clinical intake saved'
  },
  {
    step: 3,
    title: 'Arrive & Check-in',
    subtitle: 'Zero-Queue Biometric Match',
    icon: <FaUserCheck />,
    desc: 'Patient arrives at hospital and checks in at the DigiSwasth Terminal via 0.3s Face Recognition, QR code scan, or NFC smart card tap without speaking to a receptionist.',
    benefit: '100% contactless check-in with verified identity',
    timeSaved: '15-25 min waiting line eliminated'
  },
  {
    step: 4,
    title: 'Token & Smart Direction',
    subtitle: 'Automated Navigation & Turnstile Access',
    icon: <FaDoorOpen />,
    desc: 'The kiosk prints an immediate token slip (e.g. Token A-127) with assigned Doctor Dr. Priya Sharma, Room 204, and live estimated wait time. Smart turnstile gates grant corridor access when called.',
    benefit: 'No chaotic waiting rooms or corridor crowding',
    timeSaved: 'Real-time live queue tracking'
  },
  {
    step: 5,
    title: 'AI Consultation',
    subtitle: 'Voice-to-Prescription Doctor Suite',
    icon: <FaStethoscope />,
    desc: 'Doctor conducts consultation naturally. DigiSwasth Doctor AI listens, transcribes dialogue in real-time, extracts symptoms, and generates an automated structured digital prescription draft.',
    benefit: 'Doctor gives 100% eye contact to patient with zero keyboard friction',
    timeSaved: '60% documentation time saved'
  },
  {
    step: 6,
    title: 'Prescription & Records',
    subtitle: 'Digital Health Locker & Pharmacy Sync',
    icon: <FaFilePrescription />,
    desc: 'Digital prescription is instantly delivered to patient’s phone, synced with hospital pharmacy for fast dispensing, and scheduled into smart medicine alarm reminders.',
    benefit: 'Legible digital records, instant pharmacy pickup, timely dosage alarms',
    timeSaved: 'Lifetime digital EHR storage'
  }
];

// FAQs
const faqs = [
  {
    q: 'How does DigiSwasth integrate with our existing Hospital Information System (HIS / EHR)?',
    a: 'DigiSwasth is designed as an open interoperable platform. It provides standard HL7 FHIR and RESTful API endpoints that seamlessly integrate with popular Indian and global HIS, LIMS (laboratory), and RIS/PACS radiology systems without replacing your current infrastructure.'
  },
  {
    q: 'Is DigiSwasth compliant with the Ayushman Bharat Digital Mission (ABDM)?',
    a: 'Yes! DigiSwasth is built from the ground up to support ABDM M1, M2, and M3 milestones. It enables seamless ABHA (Ayushman Bharat Health Account) creation, ABHA QR code scan-and-share check-in, and instant digital consent-based health record sharing.'
  },
  {
    q: 'What happens if the hospital experiences network or internet downtime?',
    a: 'All DigiSwasth hardware terminals, turnstiles, and handheld scanners run on an offline-first architecture with localized edge servers. Patient check-in, queue sequencing, and token printing continue without interruption and sync back to the cloud the moment connectivity resumes.'
  },
  {
    q: 'Can the DigiSwasth Kiosk and Patient App converse in regional Indian languages?',
    a: 'Absolutely. DigiSwasth offers native bilingual and trilingual voice models in Hindi, Odia, and English. Patients can interact using their voice or select their preferred language on screen for full accessibility.'
  },
  {
    q: 'What is the implementation timeline for a typical multi-specialty hospital?',
    a: 'A standard turnkey hospital deployment—including hardware kiosk installation, smart turnstile gate setup, network configuration, doctor suite onboarding, and PMS integration—typically takes between 7 to 14 business days.'
  }
];

export default function DigiSwasthPage() {
  // Device Showcase Tab State
  const [activeDevice, setActiveDevice] = useState('kiosk');

  // 6-Step Journey State
  const [activeStep, setActiveStep] = useState(1);

  // Kiosk Simulator State
  const [simName, setSimName] = useState('Ramesh Kumar');
  const [simDept, setSimDept] = useState('General Medicine (Room 204)');
  const [simDoctor, setSimDoctor] = useState('Dr. Priya Sharma');
  const [simMethod, setSimMethod] = useState('face');
  const [simStatus, setSimStatus] = useState('idle'); // idle | scanning | verified | printed
  const [simToken, setSimToken] = useState('A-127');

  // Doctor AI Voice Simulator State
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [transcriptText, setTranscriptText] = useState('');
  const [rxApproved, setRxApproved] = useState(false);

  // ROI Calculator State
  const [calcPatients, setCalcPatients] = useState(850);
  const [calcRooms, setCalcRooms] = useState(12);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Pilot Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    hospitalName: '',
    contactPerson: '',
    email: '',
    phone: '',
    beds: '100 - 300 Beds',
    city: ''
  });

  // Doctor Voice Simulation Text Streamer
  useEffect(() => {
    let timer;
    if (audioPlaying) {
      const fullText =
        'Patient Ramesh Kumar, 42/M. Chief complaints: Fever for 2 days, accompanied by mild tension headache. No vomiting or shortness of breath reported. Vital signs normal. Prescribe Paracetamol 650 mg twice daily for three days and Cetirizine 10 mg at bedtime for five days. Advise adequate hydration and rest.';
      let charIdx = 0;
      setTranscriptText('');
      timer = setInterval(() => {
        if (charIdx < fullText.length) {
          setTranscriptText(fullText.slice(0, charIdx + 3));
          charIdx += 3;
        } else {
          clearInterval(timer);
          setAudioPlaying(false);
        }
      }, 50);
    }
    return () => clearInterval(timer);
  }, [audioPlaying]);

  // Handle Kiosk Simulator Start
  const handleStartScan = () => {
    setSimStatus('scanning');
    setTimeout(() => {
      setSimStatus('verified');
      setTimeout(() => {
        setSimStatus('printed');
      }, 1200);
    }, 1800);
  };

  const handleResetSim = () => {
    setSimStatus('idle');
  };

  const currentDev = hardwareDevices[activeDevice];
  const currentStepData = journeySteps.find((s) => s.step === activeStep) || journeySteps[0];

  // Dynamic ROI Calculations
  const hoursSavedDaily = Math.round((calcPatients * 32) / 60);
  const annualSavingsLakhs = ((calcPatients * 365 * 18) / 100000).toFixed(1);
  const doctorHoursSaved = (calcRooms * 1.8).toFixed(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setModalSubmitted(true);
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {/* Ambient Glow Orbs */}
      <div className={styles.bgGlowOrb1} />
      <div className={styles.bgGlowOrb2} />
      <div className={styles.bgGlowOrb3} />
      <div className={styles.bgGlowOrb4} />

      {/* Top Bar with Breadcrumbs & Live Compliance Status */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className={styles.breadcrumbLink}>
              Products
            </Link>
            <span>/</span>
            <span className={styles.breadcrumbCurrent}>DigiSwasth</span>
          </div>

          <div className={styles.liveBadge}>
            <span className={styles.pulseDot} />
            <span>ABDM Certified • HIPAA Compliant Hospital AI OS</span>
          </div>

          <div className={styles.quickNav}>
            <a href="#hardware" className={styles.quickNavBtn}>
              Hardware Suite
            </a>
            <a href="#simulator" className={styles.quickNavBtn}>
              Kiosk Simulator
            </a>
            <a href="#journey" className={styles.quickNavBtn}>
              Patient Journey
            </a>
            <a href="#doctor-ai" className={styles.quickNavBtn}>
              Doctor AI Suite
            </a>
            <a href="#pms" className={styles.quickNavBtn}>
              Hospital PMS
            </a>
            <a href="#calculator" className={styles.quickNavBtn}>
              ROI Calculator
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroTag}>
          <FaHospital /> NEXT-GEN MEDTECH ECOSYSTEM
        </div>

        <h1 className={styles.heroTitle}>
          DigiSwasth: The <span className={styles.gradientCyan}>AI Operating System</span> for Modern Hospitals
        </h1>

        <p className={styles.heroSubtitle}>
          Complete end-to-end healthcare intelligence connecting Patients, Clinicians, and Hospital Administrators.
          Zero-queue biometric check-ins, doctor voice-to-prescription AI, smart speed turnstiles, and unified ABDM-ready EHR.
        </p>

        <div className={styles.heroActions}>
          <button className={styles.btnPrimary} onClick={() => setModalOpen(true)}>
            Schedule Live Hospital Demo <FaArrowRight />
          </button>
          <a href="#hardware" className={styles.btnSecondary}>
            <FaMicrochip /> Explore Hardware Suite
          </a>
          <a href="#simulator" className={styles.btnOutline}>
            <FaUserCheck /> Try Kiosk Simulator
          </a>
        </div>

        {/* Hero KPI Stat Counters */}
        <div className={styles.heroStats}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>&lt; 3 sec</div>
            <div className={styles.statLabel}>Zero-Queue Self Check-in</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>60%</div>
            <div className={styles.statLabel}>Doctor Documentation Time Saved</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>99.9%</div>
            <div className={styles.statLabel}>AI Face Liveness Verification</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Paperless OPD &amp; Pharmacy Dispatch</div>
          </div>
        </div>

        {/* Master 3-Device Showroom Banner */}
        <div className={styles.heroShowcase}>
          <img
            src="/assets/generated/digiswasth_product.jpg"
            alt="DigiSwasth 3-Device Medical Showroom"
            className={styles.heroShowcaseImg}
          />
          <div className={styles.heroShowcaseOverlay}>
            <div className={styles.showcaseCaption}>
              <h4>The Unified DigiSwasth Hardware &amp; AI Cloud Suite</h4>
              <p>Self Check-in Kiosk • Rugged Bedside PDA • Smart Turnstile Speed Gates</p>
            </div>
            <div className={styles.showcasePills}>
              <span className={styles.showcasePill}>ABDM M1/M2/M3</span>
              <span className={styles.showcasePill}>Hindi • Odia • English</span>
              <span className={styles.showcasePill}>HIPAA Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Core Hardware Suite */}
      <section className={styles.section} id="hardware">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>ENGINEERED HARDWARE INNOVATION</span>
          <h2 className={styles.sectionTitle}>Built for High-Throughput Hospital Operations</h2>
          <p className={styles.sectionDesc}>
            From the entrance lobby to the doctor’s chamber and inpatient wards, DigiSwasth provides purpose-built,
            hospital-grade hardware engineered for durability, hygiene, and rapid patient processing.
          </p>
        </div>

        {/* Device Switcher Tabs */}
        <div className={styles.deviceTabs}>
          <button
            className={`${styles.deviceTabBtn} ${activeDevice === 'kiosk' ? styles.deviceTabBtnActive : ''}`}
            onClick={() => setActiveDevice('kiosk')}
          >
            <FaIdCard /> Smart Check-in Kiosk
          </button>
          <button
            className={`${styles.deviceTabBtn} ${activeDevice === 'handheld' ? styles.deviceTabBtnActive : ''}`}
            onClick={() => setActiveDevice('handheld')}
          >
            <FaMobileAlt /> DigiSwasth Pro Handheld
          </button>
          <button
            className={`${styles.deviceTabBtn} ${activeDevice === 'gate' ? styles.deviceTabBtnActive : ''}`}
            onClick={() => setActiveDevice('gate')}
          >
            <FaDoorOpen /> Smart Access Turnstile
          </button>
        </div>

        {/* Active Device Showcase Card */}
        <div className={styles.deviceShowcaseCard}>
          <div className={styles.deviceContent}>
            <h3>{currentDev.name}</h3>
            <div className={styles.deviceTagline}>{currentDev.tagline}</div>
            <p className={styles.deviceDesc}>{currentDev.desc}</p>

            <div className={styles.deviceFeatureList}>
              {currentDev.features.map((feat, idx) => (
                <div key={idx} className={styles.deviceFeatureItem}>
                  <FaCheckCircle className={styles.deviceFeatureIcon} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: '24px', fontSize: '13px', color: '#94a3b8' }}>
              <strong style={{ color: '#2dd4bf' }}>Recommended Deployments: </strong>
              {currentDev.idealFor}
            </div>

            <div className={styles.deviceActions}>
              <button className={styles.btnPrimary} onClick={() => setModalOpen(true)}>
                Inquire for Hospital Pilot <FaArrowRight />
              </button>
              {activeDevice === 'kiosk' && (
                <a href="#simulator" className={styles.btnOutline}>
                  Test Kiosk Live Simulator
                </a>
              )}
            </div>
          </div>

          <div className={styles.deviceImageWrap}>
            <img src={currentDev.image} alt={currentDev.name} className={styles.deviceMainImg} />
            <div className={styles.deviceSpecOverlay}>
              <span className={styles.specDot}></span>
              {currentDev.specOverlay}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Kiosk Simulator */}
      <section className={styles.section} id="simulator">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>INTERACTIVE EXPERIENCE</span>
          <h2 className={styles.sectionTitle}>Simulate DigiSwasth Check-in &amp; Token Slip</h2>
          <p className={styles.sectionDesc}>
            Experience how a patient checks in at the DigiSwasth Kiosk in under 3 seconds. Select your preferred
            method, trigger biometric verification, and generate a real-time thermal token slip.
          </p>
        </div>

        <div className={styles.simulatorWrap}>
          <div className={styles.simLayout}>
            {/* Simulator Controls */}
            <div className={styles.simControls}>
              <h3 className={styles.simControlsTitle}>Check-in Configuration</h3>
              <p className={styles.simControlsSubtitle}>
                Customize patient details and trigger a simulated kiosk terminal event:
              </p>

              <div className={styles.simFormGroup}>
                <label className={styles.simLabel}>Patient Name</label>
                <input
                  type="text"
                  className={styles.simInput}
                  value={simName}
                  onChange={(e) => setSimName(e.target.value)}
                  placeholder="Enter patient name"
                />
              </div>

              <div className={styles.simFormGroup}>
                <label className={styles.simLabel}>Target Department &amp; Room</label>
                <select
                  className={styles.simSelect}
                  value={simDept}
                  onChange={(e) => {
                    setSimDept(e.target.value);
                    if (e.target.value.includes('General')) setSimDoctor('Dr. Priya Sharma');
                    else if (e.target.value.includes('Cardio')) setSimDoctor('Dr. Rajesh Verma');
                    else if (e.target.value.includes('Ortho')) setSimDoctor('Dr. Amit Singh');
                    else setSimDoctor('Dr. Sneha Patel');
                  }}
                >
                  <option value="General Medicine (Room 204)">General Medicine (Room 204)</option>
                  <option value="Cardiology (Room 302)">Cardiology (Room 302)</option>
                  <option value="Orthopedics (Room 118)">Orthopedics (Room 118)</option>
                  <option value="Pediatrics (Room 105)">Pediatrics (Room 105)</option>
                </select>
              </div>

              <div className={styles.simFormGroup}>
                <label className={styles.simLabel}>Verification Method</label>
                <div className={styles.simMethodGrid}>
                  <button
                    type="button"
                    className={`${styles.simMethodBtn} ${simMethod === 'face' ? styles.simMethodBtnActive : ''}`}
                    onClick={() => setSimMethod('face')}
                  >
                    <FaUserCheck style={{ fontSize: '18px' }} />
                    <span>Face AI</span>
                  </button>
                  <button
                    type="button"
                    className={`${styles.simMethodBtn} ${simMethod === 'qr' ? styles.simMethodBtnActive : ''}`}
                    onClick={() => setSimMethod('qr')}
                  >
                    <FaQrcode style={{ fontSize: '18px' }} />
                    <span>App QR</span>
                  </button>
                  <button
                    type="button"
                    className={`${styles.simMethodBtn} ${simMethod === 'nfc' ? styles.simMethodBtnActive : ''}`}
                    onClick={() => setSimMethod('nfc')}
                  >
                    <FaIdCard style={{ fontSize: '18px' }} />
                    <span>Smart Card</span>
                  </button>
                </div>
              </div>

              <button
                className={styles.simStartBtn}
                onClick={handleStartScan}
                disabled={simStatus === 'scanning' || simStatus === 'printed'}
              >
                {simStatus === 'scanning' ? (
                  <>Scanning Face &amp; Verifying ABHA...</>
                ) : simStatus === 'printed' ? (
                  <>Token Generated Successfully!</>
                ) : (
                  <>
                    <FaUserCheck /> Initiate {simMethod === 'face' ? 'Face Scan' : simMethod.toUpperCase()} Check-in
                  </>
                )}
              </button>

              {simStatus === 'printed' && (
                <div style={{ textAlign: 'center' }}>
                  <button className={styles.simResetBtn} onClick={handleResetSim}>
                    <FaRedo /> Reset Simulator
                  </button>
                </div>
              )}
            </div>

            {/* Terminal Screen & Thermal Slip Output */}
            <div className={styles.simTerminal}>
              <div className={styles.terminalHeader}>
                <div className={styles.terminalBrand}>
                  <FaHeartbeat /> AI PNT • DigiSwasth Kiosk
                </div>
                <div className={styles.terminalTime}>10:24 AM | Room Sync Active</div>
              </div>

              <div className={styles.terminalBody}>
                {simStatus === 'idle' && (
                  <div className={styles.terminalMessage}>
                    <div className={styles.faceScanReticle}>
                      <FaUserCheck style={{ fontSize: '48px', color: '#2dd4bf' }} />
                    </div>
                    <h4 style={{ fontSize: '20px', color: '#ffffff', marginBottom: '8px' }}>
                      Welcome to DigiSwasth
                    </h4>
                    <p style={{ fontSize: '13px', color: '#94a3b8' }}>
                      Look into the 3D camera or tap your smart card below to check in
                    </p>
                  </div>
                )}

                {simStatus === 'scanning' && (
                  <div className={styles.terminalMessage}>
                    <div className={styles.faceScanReticle}>
                      <div className={styles.faceScanLaser} />
                      <FaUserCheck style={{ fontSize: '48px', color: '#2dd4bf' }} />
                    </div>
                    <h4 style={{ fontSize: '18px', color: '#2dd4bf', marginBottom: '6px' }}>
                      Scanning Biometrics...
                    </h4>
                    <p style={{ fontSize: '12px', color: '#94a3b8' }}>
                      Verifying face liveness with ABDM health records...
                    </p>
                  </div>
                )}

                {(simStatus === 'verified' || simStatus === 'printed') && (
                  <div>
                    {/* Realistic Thermal Token Slip Output */}
                    <div className={styles.thermalTokenSlip}>
                      <div className={styles.tokenBrand}>
                        AI PNT DIGISWASTH
                        <div style={{ fontSize: '10px', color: '#64748b', fontWeight: 'normal' }}>
                          Smart Health Check-in
                        </div>
                      </div>

                      <div className={styles.tokenNumberLabel}>Assigned Token</div>
                      <div className={styles.tokenNumberLarge}>{simToken}</div>

                      <div className={styles.tokenDetails}>
                        <div className={styles.tokenDetailRow}>
                          <span>Patient:</span>
                          <span>{simName}</span>
                        </div>
                        <div className={styles.tokenDetailRow}>
                          <span>Doctor:</span>
                          <span>{simDoctor}</span>
                        </div>
                        <div className={styles.tokenDetailRow}>
                          <span>Location:</span>
                          <span>{simDept}</span>
                        </div>
                        <div className={styles.tokenDetailRow}>
                          <span>Est. Wait:</span>
                          <span style={{ color: '#0d9488' }}>8 Minutes</span>
                        </div>
                      </div>

                      <div className={styles.tokenQrWrap}>
                        <div
                          style={{
                            background: '#0f172a',
                            padding: '8px',
                            borderRadius: '6px',
                            display: 'inline-flex'
                          }}
                        >
                          <FaQrcode style={{ fontSize: '64px', color: '#ffffff' }} />
                        </div>
                      </div>

                      <div className={styles.tokenBarcode} style={{ marginTop: '8px' }}>
                        *DGSTH-{simToken}-2026*
                      </div>

                      <div
                        style={{
                          fontSize: '10px',
                          color: '#64748b',
                          textAlign: 'center',
                          marginTop: '8px'
                        }}
                      >
                        Proceed to {simDept.split('(')[1]?.replace(')', '') || 'Room 204'} when called on display
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The 6-Step Patient Journey */}
      <section className={styles.section} id="journey">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>SMOOTH PATIENT EXPERIENCE</span>
          <h2 className={styles.sectionTitle}>The 6-Step Automated Healthcare Journey</h2>
          <p className={styles.sectionDesc}>
            DigiSwasth transforms the traditional, anxiety-inducing hospital visit into an intelligent, frictionless,
            and paperless workflow from home booking to post-consultation pharmacy care.
          </p>
        </div>

        {/* Step Buttons Grid */}
        <div className={styles.journeyGrid}>
          {journeySteps.map((s) => (
            <div
              key={s.step}
              className={`${styles.journeyStepBtn} ${activeStep === s.step ? styles.journeyStepBtnActive : ''}`}
              onClick={() => setActiveStep(s.step)}
            >
              <div className={styles.stepNumBadge}>{s.step}</div>
              <div className={styles.stepIcon}>{s.icon}</div>
              <div className={styles.stepTitle}>{s.title}</div>
            </div>
          ))}
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className={styles.journeyDetailCard}>
          <div className={styles.journeyDetailLeft}>
            <div style={{ color: '#2dd4bf', fontSize: '13px', fontWeight: '700', marginBottom: '8px' }}>
              STEP {currentStepData.step} OF 6: {currentStepData.subtitle.toUpperCase()}
            </div>
            <h3>{currentStepData.title}</h3>
            <p>{currentStepData.desc}</p>

            <div className={styles.journeyHighlights}>
              <div className={styles.journeyHighlightItem}>
                <FaCheckCircle style={{ color: '#10b981' }} />
                <span>
                  <strong>Key Patient Impact: </strong> {currentStepData.benefit}
                </span>
              </div>
              <div className={styles.journeyHighlightItem}>
                <FaClock style={{ color: '#38bdf8' }} />
                <span>
                  <strong>Efficiency Gains: </strong> {currentStepData.timeSaved}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.journeyDetailRight}>
            <div className={styles.journeyMetricLabel}>Patient Flow Acceleration</div>
            <div className={styles.journeyMetricValue}>{currentStepData.timeSaved}</div>
            <div style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
              By orchestrating pre-consultation data and real-time room status, DigiSwasth completely eliminates
              crowded corridors and paperwork delays.
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Doctor AI Suite - "More Time For Care" */}
      <section className={styles.section} id="doctor-ai">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>CLINICIAN PRODUCTIVITY</span>
          <h2 className={styles.sectionTitle}>Doctor AI Suite: Voice-to-Prescription</h2>
          <p className={styles.sectionDesc}>
            Doctors spend more than 40% of consultation time typing notes into rigid EHRs. DigiSwasth Doctor AI listens
            to the doctor-patient dialogue, transcribes clinical symptoms, and generates structured prescriptions automatically.
          </p>
        </div>

        <div className={styles.doctorSuiteCard}>
          <div className={styles.doctorSuiteLeft}>
            <h3>More Time for Care, Zero Time Wasted on Typing</h3>
            <div className={styles.doctorSuiteSubtitle}>
              Voice-Driven Clinical Documentation with Real-Time Medical NER
            </div>
            <p className={styles.doctorSuiteDesc}>
              Using medical-domain NLP trained on Indian clinical terminology and multi-lingual pronunciations, DigiSwasth
              automatically drafts medication dosage, frequency, and lifestyle directions with one-click digital signing.
            </p>

            <div className={styles.doctorFeaturesGrid}>
              <div className={styles.doctorFeatureBox}>
                <h4>
                  <FaHeadset style={{ color: '#2dd4bf' }} /> Voice-to-Text Clinical NLP
                </h4>
                <p>Natural conversation stream transcribed into structured SOAP clinical notes in real-time.</p>
              </div>
              <div className={styles.doctorFeatureBox}>
                <h4>
                  <FaFilePrescription style={{ color: '#38bdf8' }} /> Auto Dosage &amp; Duration
                </h4>
                <p>Intelligently formats prescriptions with standard 1-0-1 dosages, drug conflict warnings, and advice.</p>
              </div>
              <div className={styles.doctorFeatureBox}>
                <h4>
                  <FaHeartbeat style={{ color: '#10b981' }} /> Pre-Consultation Summary
                </h4>
                <p>Synthesizes chief complaints collected by the patient mobile assistant prior to consultation.</p>
              </div>
              <div className={styles.doctorFeatureBox}>
                <h4>
                  <FaLock style={{ color: '#f59e0b' }} /> One-Click Sign &amp; ABDM Sync
                </h4>
                <p>Instant digital signature, encrypted dispatch to pharmacy, and ABDM health locker delivery.</p>
              </div>
            </div>

            <button
              className={styles.btnPrimary}
              onClick={() => {
                if (audioPlaying) {
                  setAudioPlaying(false);
                } else {
                  setAudioPlaying(true);
                  setRxApproved(false);
                }
              }}
            >
              {audioPlaying ? (
                <>
                  <FaPause /> Pause Voice Demo
                </>
              ) : (
                <>
                  <FaPlay /> Simulate Doctor Consultation Voice Stream
                </>
              )}
            </button>
          </div>

          {/* Interactive Voice Stream & Digital Rx Simulation Box */}
          <div className={styles.doctorDemoBox}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px'
              }}
            >
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#2dd4bf' }}>
                LIVE CONSULTATION AUDIO STREAM
              </div>
              <div
                style={{
                  fontSize: '11px',
                  color: audioPlaying ? '#10b981' : '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: audioPlaying ? '#10b981' : '#94a3b8'
                  }}
                />
                {audioPlaying ? 'Listening & Transcribing' : 'Ready to Stream'}
              </div>
            </div>

            {/* Audio Wave Visualizer */}
            <div className={styles.audioVisualizerBar}>
              {[...Array(24)].map((_, i) => (
                <div
                  key={i}
                  className={styles.soundwaveBar}
                  style={{
                    height: audioPlaying ? `${10 + ((i * 7) % 20)}px` : '6px',
                    animationPlayState: audioPlaying ? 'running' : 'paused'
                  }}
                />
              ))}
            </div>

            {/* Live Streaming Transcript Box */}
            <div className={styles.transcriptBox}>
              &quot;
              {transcriptText ||
                'Click "Simulate Doctor Consultation Voice Stream" above to listen to live clinical speech transcription in action...'}
              &quot;
            </div>

            {/* AI-Generated Prescription Draft Card */}
            <div className={styles.rxCard}>
              <div className={styles.rxHeader}>
                <div className={styles.rxTitle}>
                  <FaFilePrescription /> AI GENERATED PRESCRIPTION (DRAFT)
                </div>
                <div style={{ fontSize: '11px', color: '#64748b' }}>Dr. Priya Sharma • OPD-204</div>
              </div>

              <div className={styles.rxMedItem}>
                <div>
                  <span>1. Paracetamol 650 mg</span>
                  <div style={{ fontSize: '11px', color: '#64748b' }}>After meals • Fever &amp; headache</div>
                </div>
                <span>1 - 0 - 1 | 3 Days</span>
              </div>

              <div className={styles.rxMedItem}>
                <div>
                  <span>2. Cetirizine 10 mg</span>
                  <div style={{ fontSize: '11px', color: '#64748b' }}>At bedtime • Anti-histamine</div>
                </div>
                <span>0 - 0 - 1 | 5 Days</span>
              </div>

              <div style={{ padding: '8px 0', fontSize: '12px', color: '#475569' }}>
                <strong>Clinical Advice: </strong> Adequate oral hydration, rest, review after 3 days if fever persists.
              </div>

              <button
                style={{
                  width: '100%',
                  marginTop: '12px',
                  padding: '10px',
                  borderRadius: '8px',
                  background: rxApproved ? '#10b981' : '#0d9488',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: '700',
                  fontSize: '13px',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onClick={() => setRxApproved(true)}
              >
                {rxApproved ? (
                  <>
                    <FaCheckCircle /> Approved &amp; Dispatched to Pharmacy!
                  </>
                ) : (
                  <>
                    <FaCheckCircle /> One-Click Approve &amp; Sign
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Hospital Patient Management System (PMS) */}
      <section className={styles.section} id="pms">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>CENTRALIZED HOSPITAL INTELLIGENCE</span>
          <h2 className={styles.sectionTitle}>Hospital PMS: Real-Time OPD Telemetry</h2>
          <p className={styles.sectionDesc}>
            Unified command dashboard for medical superintendents and hospital administrators. Monitor patient volume,
            doctor occupancy, department queues, and daily revenue with minute-by-minute live synchronization.
          </p>
        </div>

        <div className={styles.pmsDashboardWrap}>
          {/* KPI Cards */}
          <div className={styles.pmsKpiGrid}>
            <div className={styles.pmsKpiCard}>
              <div className={styles.pmsKpiLabel}>Total Registered Patients</div>
              <div className={styles.pmsKpiValue}>12,458</div>
              <div className={styles.pmsKpiTrend}>
                <FaChartLine /> +18% this month
              </div>
            </div>
            <div className={styles.pmsKpiCard}>
              <div className={styles.pmsKpiLabel}>Today&apos;s Appointments</div>
              <div className={styles.pmsKpiValue}>1,284</div>
              <div className={styles.pmsKpiTrend}>
                <FaChartLine /> +12% vs yesterday
              </div>
            </div>
            <div className={styles.pmsKpiCard}>
              <div className={styles.pmsKpiLabel}>Active Doctors on Duty</div>
              <div className={styles.pmsKpiValue}>48 Active</div>
              <div className={styles.pmsKpiTrend} style={{ color: '#38bdf8' }}>
                <FaStethoscope /> 16 Consultation Rooms
              </div>
            </div>
            <div className={styles.pmsKpiCard}>
              <div className={styles.pmsKpiLabel}>OPD Revenue (Today)</div>
              <div className={styles.pmsKpiValue}>₹2.45 L</div>
              <div className={styles.pmsKpiTrend}>
                <FaChartLine /> +15% paperless collections
              </div>
            </div>
          </div>

          {/* Department Breakdown & Live Queue Status */}
          <div className={styles.pmsTablesGrid}>
            <div className={styles.pmsPanel}>
              <div className={styles.pmsPanelTitle}>
                <span>Department OPD Patient Volume</span>
                <span style={{ fontSize: '12px', color: '#2dd4bf' }}>Live Today</span>
              </div>
              <div className={styles.pmsRow}>
                <span>General Medicine</span>
                <strong>430 Patients</strong>
              </div>
              <div className={styles.pmsRow}>
                <span>Cardiology</span>
                <strong>210 Patients</strong>
              </div>
              <div className={styles.pmsRow}>
                <span>Orthopedics</span>
                <strong>180 Patients</strong>
              </div>
              <div className={styles.pmsRow}>
                <span>Pediatrics</span>
                <strong>160 Patients</strong>
              </div>
              <div className={styles.pmsRow}>
                <span>ENT &amp; Ophthalmology</span>
                <strong>125 Patients</strong>
              </div>
            </div>

            <div className={styles.pmsPanel}>
              <div className={styles.pmsPanelTitle}>
                <span>Real-Time Queue Distribution</span>
                <span style={{ fontSize: '12px', color: '#38bdf8' }}>Current OPD Cycle</span>
              </div>
              <div className={styles.pmsRow}>
                <span style={{ color: '#10b981' }}>Currently in Consultation</span>
                <strong style={{ color: '#10b981' }}>28 Patients</strong>
              </div>
              <div className={styles.pmsRow}>
                <span style={{ color: '#38bdf8' }}>Next in Line (Gate Unlocked)</span>
                <strong style={{ color: '#38bdf8' }}>22 Patients</strong>
              </div>
              <div className={styles.pmsRow}>
                <span style={{ color: '#f59e0b' }}>Waiting in OPD Lounge</span>
                <strong style={{ color: '#f59e0b' }}>125 Patients</strong>
              </div>
              <div className={styles.pmsRow}>
                <span>Consultation Completed Today</span>
                <strong>817 Patients</strong>
              </div>
              <div className={styles.pmsRow}>
                <span>Avg. Consultation Duration</span>
                <strong style={{ color: '#2dd4bf' }}>7.4 Minutes</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Cloud Architecture & Compliance */}
      <section className={styles.section} id="architecture">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>ENTERPRISE GRADE INFRASTRUCTURE</span>
          <h2 className={styles.sectionTitle}>Cloud Architecture &amp; Data Security</h2>
          <p className={styles.sectionDesc}>
            Engineered to meet the stringent compliance and privacy requirements of healthcare enterprises.
            End-to-end encrypted, high-availability microservices architecture with full ABDM registry integration.
          </p>
        </div>

        <div className={styles.cloudGrid}>
          <div className={styles.archImgWrap}>
            <img
              src="/assets/generated/digiswasth_architecture.jpg"
              alt="DigiSwasth Cloud Architecture & Ecosystem"
              className={styles.archImg}
            />
          </div>

          <div className={styles.archBadgesGrid}>
            <div className={styles.archBadgeCard}>
              <h4>
                <FaLock /> HIPAA &amp; GDPR Compliant
              </h4>
              <p>
                Strict role-based access control (RBAC), TLS 1.3 in-transit encryption, and AES-256 encrypted storage.
              </p>
            </div>
            <div className={styles.archBadgeCard}>
              <h4>
                <FaShieldAlt /> ABDM M1, M2 &amp; M3
              </h4>
              <p>
                Certified integration with Ayushman Bharat Digital Mission for ABHA ID generation and consent-based EHR.
              </p>
            </div>
            <div className={styles.archBadgeCard}>
              <h4>
                <FaCloud /> 99.99% High Availability
              </h4>
              <p>
                Multi-region fault-tolerant cloud architecture with automated edge failover for uninterrupted hospital uptime.
              </p>
            </div>
            <div className={styles.archBadgeCard}>
              <h4>
                <FaCheckCircle /> 100% Traceable Audit Logs
              </h4>
              <p>
                Every record access, biometric match, and prescription issuance is indelibly timestamped and logged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Stakeholder Benefits Matrix */}
      <section className={styles.section} id="benefits">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>VALUE CREATION</span>
          <h2 className={styles.sectionTitle}>Benefits Designed for Every Healthcare Stakeholder</h2>
          <p className={styles.sectionDesc}>
            Healthcare thrives when patients, doctors, and administrators are unified by seamless technology.
          </p>
        </div>

        <div className={styles.benefitsGrid}>
          {/* For Patients */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitHeader}>
              <div className={styles.benefitIconWrap} style={{ background: 'rgba(20, 184, 166, 0.15)', color: '#2dd4bf' }}>
                <FaUsers />
              </div>
              <h3 className={styles.benefitTitle}>For Patients</h3>
            </div>
            <div className={styles.benefitList}>
              <div className={styles.benefitItem}>
                <FaCheckCircle className={styles.benefitItemCheck} />
                <span>Zero long waiting queues at counters or OPD chambers</span>
              </div>
              <div className={styles.benefitItem}>
                <FaCheckCircle className={styles.benefitItemCheck} />
                <span>Quick 3-second check-in using facial recognition</span>
              </div>
              <div className={styles.benefitItem}>
                <FaCheckCircle className={styles.benefitItemCheck} />
                <span>AI Health Assistant in native language (Hindi, Odia, English)</span>
              </div>
              <div className={styles.benefitItem}>
                <FaCheckCircle className={styles.benefitItemCheck} />
                <span>All health records, lab reports &amp; prescriptions in your pocket</span>
              </div>
              <div className={styles.benefitItem}>
                <FaCheckCircle className={styles.benefitItemCheck} />
                <span>Automated medicine schedule &amp; dosage alarms</span>
              </div>
            </div>
          </div>

          {/* For Doctors */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitHeader}>
              <div className={styles.benefitIconWrap} style={{ background: 'rgba(14, 165, 233, 0.15)', color: '#38bdf8' }}>
                <FaUserMd />
              </div>
              <h3 className={styles.benefitTitle}>For Doctors</h3>
            </div>
            <div className={styles.benefitList}>
              <div className={styles.benefitItem}>
                <FaCheckCircle className={styles.benefitItemCheck} />
                <span>AI Patient Summary prepared before patient enters room</span>
              </div>
              <div className={styles.benefitItem}>
                <FaCheckCircle className={styles.benefitItemCheck} />
                <span>Voice-to-prescription removes repetitive typing friction</span>
              </div>
              <div className={styles.benefitItem}>
                <FaCheckCircle className={styles.benefitItemCheck} />
                <span>Complete longitudinal patient medical history in one tap</span>
              </div>
              <div className={styles.benefitItem}>
                <FaCheckCircle className={styles.benefitItemCheck} />
                <span>Automated clinical suggestions &amp; drug interaction alerts</span>
              </div>
              <div className={styles.benefitItem}>
                <FaCheckCircle className={styles.benefitItemCheck} />
                <span>More quality face-to-face consultation time with patients</span>
              </div>
            </div>
          </div>

          {/* For Hospitals & Admins */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitHeader}>
              <div className={styles.benefitIconWrap} style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8' }}>
                <FaHospital />
              </div>
              <h3 className={styles.benefitTitle}>For Hospitals</h3>
            </div>
            <div className={styles.benefitList}>
              <div className={styles.benefitItem}>
                <FaCheckCircle className={styles.benefitItemCheck} />
                <span>4x faster patient throughput and optimized doctor utilization</span>
              </div>
              <div className={styles.benefitItem}>
                <FaCheckCircle className={styles.benefitItemCheck} />
                <span>Real-time OPD queue analytics and resource allocation</span>
              </div>
              <div className={styles.benefitItem}>
                <FaCheckCircle className={styles.benefitItemCheck} />
                <span>100% paperless registration, token, and prescription flow</span>
              </div>
              <div className={styles.benefitItem}>
                <FaCheckCircle className={styles.benefitItemCheck} />
                <span>Substantial reduction in administrative overhead and queue chaos</span>
              </div>
              <div className={styles.benefitItem}>
                <FaCheckCircle className={styles.benefitItemCheck} />
                <span>Elevated patient satisfaction scores (CSAT &gt; 98%)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Interactive ROI & Hospital Savings Calculator */}
      <section className={styles.section} id="calculator">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>OPERATIONAL EFFICIENCY CALCULATOR</span>
          <h2 className={styles.sectionTitle}>Calculate Your Hospital&apos;s Time &amp; Cost Savings</h2>
          <p className={styles.sectionDesc}>
            Adjust the sliders to reflect your hospital or clinic&apos;s current daily patient footfall and active OPD
            consultation rooms to see projected monthly and annual gains.
          </p>
        </div>

        <div className={styles.calcCard}>
          <div>
            {/* Slider 1: Daily Patients */}
            <div className={styles.calcSliderGroup}>
              <div className={styles.calcSliderHeader}>
                <span className={styles.calcSliderLabel}>Daily OPD Patient Footfall</span>
                <span className={styles.calcSliderValue}>{calcPatients.toLocaleString()} Patients / Day</span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="50"
                value={calcPatients}
                onChange={(e) => setCalcPatients(Number(e.target.value))}
                className={styles.sliderInput}
              />
            </div>

            {/* Slider 2: OPD Rooms */}
            <div className={styles.calcSliderGroup}>
              <div className={styles.calcSliderHeader}>
                <span className={styles.calcSliderLabel}>Active OPD Consultation Rooms</span>
                <span className={styles.calcSliderValue}>{calcRooms} Consultation Rooms</span>
              </div>
              <input
                type="range"
                min="2"
                max="40"
                step="1"
                value={calcRooms}
                onChange={(e) => setCalcRooms(Number(e.target.value))}
                className={styles.sliderInput}
              />
            </div>

            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
              Based on empirical deployment data across Indian healthcare facilities: average patient wait time is
              reduced from 42 minutes to under 10 minutes, with 60% documentation time savings per doctor.
            </p>
          </div>

          <div className={styles.calcResultsBox}>
            <div className={styles.calcResultsTitle}>Projected Annual Impact</div>
            <div className={styles.calcMainMetric}>₹{annualSavingsLakhs} Lakhs</div>
            <div className={styles.calcMainLabel}>Estimated Annual Operational &amp; Paper Cost Saved</div>

            <div className={styles.calcSubMetrics}>
              <div>
                <div className={styles.calcSubMetricVal}>{hoursSavedDaily} hrs</div>
                <div className={styles.calcSubMetricLabel}>Patient Queue Time Saved Daily</div>
              </div>
              <div>
                <div className={styles.calcSubMetricVal}>~{doctorHoursSaved} hrs</div>
                <div className={styles.calcSubMetricLabel}>Doctor Documentation Saved / Day</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: FAQ Accordion */}
      <section className={styles.section} id="faq">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>FREQUENTLY ASKED QUESTIONS</span>
          <h2 className={styles.sectionTitle}>Everything You Need to Know</h2>
          <p className={styles.sectionDesc}>
            Clear answers to common technical, compliance, and deployment questions from hospital directors and clinicians.
          </p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  type="button"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <FaChevronUp style={{ color: '#2dd4bf' }} /> : <FaChevronDown />}
                </button>
                {isOpen && <div className={styles.faqAnswer}>{faq.a}</div>}
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 10: Bottom CTA & Pilot Modal */}
      <section className={styles.section}>
        <div className={styles.bottomCta}>
          <h2 className={styles.bottomCtaTitle}>Ready to Modernize Your Hospital with DigiSwasth?</h2>
          <p className={styles.bottomCtaDesc}>
            Join the forward-thinking hospitals and healthcare networks deploying AI-powered biometric check-in,
            voice-to-prescription suites, and zero-friction patient journeys.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button className={styles.btnPrimary} onClick={() => setModalOpen(true)}>
              Schedule a 14-Day Hospital Pilot <FaArrowRight />
            </button>
            <a href="https://api.whatsapp.com/send?phone=917788016666" className={styles.btnSecondary} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp with Healthcare Lead
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Hospital Pilot Modal */}
      {modalOpen && (
        <div className={styles.modalBackdrop} onClick={() => setModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setModalOpen(false)}>
              <FaTimes />
            </button>

            {!modalSubmitted ? (
              <>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>
                  Request DigiSwasth Hospital Pilot
                </h3>
                <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '20px' }}>
                  Our MedTech deployment team will arrange an on-site hardware walkthrough and technical readiness assessment.
                </p>

                <form onSubmit={handleFormSubmit}>
                  <div className={styles.simFormGroup}>
                    <label className={styles.simLabel}>Hospital / Clinic Name *</label>
                    <input
                      type="text"
                      required
                      className={styles.simInput}
                      value={formData.hospitalName}
                      onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
                      placeholder="e.g. Apollo / Kalinga Health Center"
                    />
                  </div>

                  <div className={styles.simFormGroup}>
                    <label className={styles.simLabel}>Contact Person &amp; Designation *</label>
                    <input
                      type="text"
                      required
                      className={styles.simInput}
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      placeholder="e.g. Dr. Rajesh Mohanty, Medical Director"
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div className={styles.simFormGroup}>
                      <label className={styles.simLabel}>Official Email *</label>
                      <input
                        type="email"
                        required
                        className={styles.simInput}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="doctor@hospital.in"
                      />
                    </div>
                    <div className={styles.simFormGroup}>
                      <label className={styles.simLabel}>Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        className={styles.simInput}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div className={styles.simFormGroup}>
                      <label className={styles.simLabel}>Facility Bed Capacity</label>
                      <select
                        className={styles.simSelect}
                        value={formData.beds}
                        onChange={(e) => setFormData({ ...formData, beds: e.target.value })}
                      >
                        <option value="Under 50 Beds">Under 50 Beds (Clinic)</option>
                        <option value="50 - 150 Beds">50 - 150 Beds</option>
                        <option value="150 - 500 Beds">150 - 500 Beds</option>
                        <option value="500+ Beds">500+ Beds (Multi-Specialty)</option>
                      </select>
                    </div>
                    <div className={styles.simFormGroup}>
                      <label className={styles.simLabel}>City / Location *</label>
                      <input
                        type="text"
                        required
                        className={styles.simInput}
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Bhubaneswar, Odisha"
                      />
                    </div>
                  </div>

                  <button type="submit" className={styles.simStartBtn} style={{ marginTop: '12px' }}>
                    Submit Pilot Request <FaArrowRight />
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '24px 12px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#10b981',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '32px',
                    margin: '0 auto 16px'
                  }}
                >
                  <FaCheckCircle />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>
                  Pilot Request Received!
                </h3>
                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '24px' }}>
                  Thank you, <strong>{formData.contactPerson}</strong>. Our Healthcare Solutions Lead will contact{' '}
                  <strong>{formData.hospitalName}</strong> within 4 business hours to arrange the hardware demo.
                </p>
                <button
                  className={styles.btnPrimary}
                  onClick={() => {
                    setModalSubmitted(false);
                    setModalOpen(false);
                  }}
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
