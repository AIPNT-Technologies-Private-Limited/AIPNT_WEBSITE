"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';
import {
  FaLandmark,
  FaRobot,
  FaMapMarkedAlt,
  FaChartLine,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
  FaUsers,
  FaPlay,
  FaPause,
  FaRedo,
  FaWhatsapp,
  FaMicrophone,
  FaMobileAlt,
  FaBuilding,
  FaSearchLocation,
  FaClock,
  FaRegBell,
  FaLayerGroup,
  FaLock,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
  FaExternalLinkAlt,
  FaSlidersH,
  FaFileAlt,
  FaHeadset
} from 'react-icons/fa';

// Sample Simulation Scenarios
const simulationCases = [
  {
    id: 'water_leak',
    title: 'Severe Drinking Water Pipeline Burst',
    category: 'Water & Sanitation (Jal Sansthan)',
    citizen: 'Sunita Devi (Ward 14, Patel Nagar)',
    channel: 'WhatsApp Voice Note',
    dialect: 'Hindi / Odia Dialect',
    inputExcerpt: '"हमारी गली नंबर 4 में मुख्य पानी का पाइप फट गया है, 2 दिनों से गंदा पानी आ रहा है और सड़क धंस गई है।"',
    transcription: 'Chief drinking water mainline rupture in Lane No. 4, Patel Nagar. Contaminated sewage backflow, road sinkage threat.',
    urgency: 'CRITICAL (Tier-1)',
    urgencyColor: '#ef4444',
    confidence: '99.4%',
    department: 'Urban Water Supply & Sewerage Board',
    nodalOfficer: 'Er. R. K. Verma (Exec Engineer, Zone 3)',
    phone: '+91 9431X XXXXX',
    slaTarget: '12 Hours Response • 24 Hours Resolution',
    gisCoordinates: '25.6122° N, 85.1588° E • Ward 14',
    fundLink: 'AMRUT Urban Water Augmentation Phase-2 (Sub-head #412)'
  },
  {
    id: 'streetlight_cluster',
    title: 'Dark Corridor / 18 LED Streetlights Failed',
    category: 'Municipal Electrical & Safety',
    citizen: 'Mohammad Tariq (Ward 22, Azad Market)',
    channel: 'Civic Smart Kiosk (Face + Aadhaar)',
    dialect: 'Urdu / Hindi',
    inputExcerpt: '"मार्केट रोड पर लगातार 18 खंभों की बत्तियां बुझी पड़ी हैं। रात में लूटपाट और महिलाओं की सुरक्षा का खतरा है..."',
    transcription: '18 consecutive high-mast and pole LED streetlights non-operational along Azad Market Main Road. High public safety risk.',
    urgency: 'HIGH (Tier-2)',
    urgencyColor: '#f97316',
    confidence: '98.8%',
    department: 'Smart City Electrical Division',
    nodalOfficer: 'Shri A. K. Mishra (Assistant Municipal Commissioner)',
    phone: '+91 9827X XXXXX',
    slaTarget: '24 Hours Repair SLA',
    gisCoordinates: '25.5941° N, 85.1376° E • Ward 22',
    fundLink: 'Smart Cities Mission Energy Efficiency Fund'
  },
  {
    id: 'pothole_hospital',
    title: 'Hospital Access Road Crater & Waterlogging',
    category: 'Public Works Department (PWD)',
    citizen: 'Dr. Anand Swaroop (Civil Hospital Road)',
    channel: 'Citizen Mobile App (Geo-tagged Photo)',
    dialect: 'English / Hindi',
    inputExcerpt: '"Massive 3ft crater outside Emergency Gate of District Hospital. Ambulances facing hazardous 15-min delay."',
    transcription: 'Critical crater and waterlogging right at District Hospital emergency entrance hindering ambulance movement.',
    urgency: 'EMERGENCY (Tier-1)',
    urgencyColor: '#dc2626',
    confidence: '99.7%',
    department: 'PWD Road Infrastructure Wing',
    nodalOfficer: 'Er. S. N. Ray (Superintending Engineer, PWD)',
    phone: '+91 9415X XXXXX',
    slaTarget: '6 Hours Patching • 48 Hours Hot-Mix Resurfacing',
    gisCoordinates: '25.6023° N, 85.1432° E • Ward 08',
    fundLink: 'State Special Road Maintenance Corpus 2026'
  }
];

// Interactive Ward GIS Database
const wardDatabase = {
  ward14: {
    name: 'Ward 14 (Central Patel Nagar)',
    corporator: 'Smt. Pratibha Singh',
    population: '68,400',
    totalGrievances: 1420,
    resolved: 1358,
    pending: 62,
    slaRate: '95.6%',
    satisfaction: '93.2%',
    activeFund: '₹ 4.85 Cr (MPLAD + Nagar Nigam)',
    topIssues: ['Drinking Water Quality', 'Drainage Desilting', 'Pothole Repairs'],
    riskLevel: 'MODERATE'
  },
  ward22: {
    name: 'Ward 22 (Azad Market Commercial Hub)',
    corporator: 'Shri Imtiaz Ahmed',
    population: '54,200',
    totalGrievances: 980,
    resolved: 944,
    pending: 36,
    slaRate: '96.3%',
    satisfaction: '91.8%',
    activeFund: '₹ 3.40 Cr (Smart City Infra)',
    topIssues: ['Streetlight Lumens', 'Solid Waste Segregation', 'Traffic Parking'],
    riskLevel: 'LOW'
  },
  ward08: {
    name: 'Ward 08 (Civil Hospital & Station Belt)',
    corporator: 'Shri Rajeshwar Nath',
    population: '82,100',
    totalGrievances: 2190,
    resolved: 2015,
    pending: 175,
    slaRate: '92.0%',
    satisfaction: '88.4%',
    activeFund: '₹ 7.20 Cr (State Health Corridor)',
    topIssues: ['Emergency Corridor Potholes', 'Waterlogging', 'Street Vendors'],
    riskLevel: 'HIGH ALERT'
  },
  ward31: {
    name: 'Ward 31 (New Suburbs & IT Hub)',
    corporator: 'Dr. Kavita Verma',
    population: '94,800',
    totalGrievances: 1840,
    resolved: 1795,
    pending: 45,
    slaRate: '97.5%',
    satisfaction: '96.1%',
    activeFund: '₹ 6.10 Cr (Green Urban Mobility)',
    topIssues: ['Park Maintenance', 'EV Charging Slots', 'Stray Cattle'],
    riskLevel: 'OPTIMAL'
  }
};

// Cockpit Stakeholder Profiles
const cockpitViews = {
  mp_mla: {
    title: "Hon'ble MP / MLA & Leadership Cockpit",
    subtitle: "High-level constituency strategic overview, fund expenditure vs ground impact, and citizen sentiment heatmaps.",
    metrics: [
      { label: 'Total Constituency Grievances', val: '84,920', change: '+12% YOY' },
      { label: 'Resolution Rate within SLA', val: '96.8%', change: '+18.4% with AI' },
      { label: 'Development Fund Disbursed', val: '₹ 48.60 Cr', change: '89.2% utilized' },
      { label: 'Citizen Trust & CSAT Index', val: '4.72 / 5.0', change: 'Top 5% in State' }
    ],
    features: [
      'Constituency-wide GIS grievance density heatmaps correlated with voter clusters',
      'Real-time tracking of MPLAD / MLALAD project milestones with geo-tagged photographic evidence',
      'Automated WhatsApp milestone bulletins sent directly to affected citizens upon fund sanction',
      'Weekly automated AI briefings highlighting bureaucratic bottlenecks and non-performing departments'
    ]
  },
  collector_admin: {
    title: "District Magistrate & Municipal Commissioner Dashboard",
    subtitle: "Real-time administrative control, departmental SLA scorecards, automated escalations, and grievance dispatching.",
    metrics: [
      { label: 'Active Nodal Departments', val: '24 Depts', change: '100% Onboarded' },
      { label: 'Median First-Response Time', val: '28 Mins', change: 'Down from 5 days' },
      { label: 'Auto-Triage Accuracy', val: '99.2%', change: 'NLP Dialect Model' },
      { label: 'Repeat/Spam Grievances Filtered', val: '31.4%', change: 'Deduplicated' }
    ],
    features: [
      'Zero-delay automated ticket creation and direct push to Department Nodal Officers via Mobile & WhatsApp',
      'Escalation triggers: 48h SLA violations automatically flagged to District Magistrate / Municipal Commissioner',
      'Inter-departmental performance leaderboards creating healthy accountability among ward engineers',
      'Unified ingestion pipeline pulling tickets from CPGRAMS, CM Helpline, WhatsApp, and Field Kiosks'
    ]
  },
  field_engineer: {
    title: "Ground Engineer & Nodal Officer Mobile Suite",
    subtitle: "Actionable field workbench for on-site inspection, contractor assignment, before-and-after photo upload, and citizen sign-off.",
    metrics: [
      { label: 'Daily Field Work Orders', val: '14 Tasks/day', change: 'Optimized route' },
      { label: 'Avg Closure SLA', val: '18.4 Hrs', change: 'Ahead of target' },
      { label: 'Photo-Verification Rate', val: '100%', change: 'Tamper-proof GPS' },
      { label: 'Citizen Digital Sign-off', val: '94.8%', change: 'Via OTP confirmation' }
    ],
    features: [
      'Offline-capable mobile app with map-based driving directions to exact grievance coordinates',
      'Mandatory geo-fenced before/after photography with EXIF timestamp to prevent fake resolution reports',
      'One-touch contractor material requisition tied to approved municipal rate schedules',
      'Automated SMS/WhatsApp OTP sent to citizen phone for verified closure confirmation'
    ]
  },
  citizen_portal: {
    title: "Public Citizen Tracking & Transparency Web App",
    subtitle: "Empowering every resident with frictionless grievance filing, 24/7 status visibility, and democratic accountability.",
    metrics: [
      { label: 'Filing Channels Available', val: '6 Ways', change: 'WhatsApp/Voice/Kiosk' },
      { label: 'Supported Indian Languages', val: '14 Dialects', change: 'Voice + Text' },
      { label: 'Avg Filing Time', val: '45 Seconds', change: 'No paperwork' },
      { label: 'Citizen Re-Open Rate', val: '< 2.1%', change: 'High satisfaction' }
    ],
    features: [
      'No app install required: Citizens simply send a voice note, photo, or text message on WhatsApp',
      'Instant unique tracking ID (e.g. #PAT-2026-8912) with real-time status tracker link',
      'Interactive public transparency dashboard showing resolved works in citizen’s local ward',
      'Transparent budget tracking showing which public fund paid for the road or water repair'
    ]
  }
};

// Architecture Layers
const archLayers = [
  {
    num: '01',
    layer: 'Omni-Channel Citizen Ingestion',
    tech: 'WhatsApp Business API • Bhashini Multilingual Speech AI • Touch Kiosks • PWA',
    desc: 'Empowers citizens to file grievances using their natural spoken dialect, WhatsApp photos, IVR phone calls, or walk-in village panchayat kiosks. Zero digital literacy barrier.'
  },
  {
    num: '02',
    layer: 'AI Cognitive Triage & Deduplication Engine',
    tech: 'Domain-Trained GovNLP • Named Entity Extraction • Semantic Vector Clustering',
    desc: 'Instantly identifies incident severity, pinpoints exact municipal jurisdiction, detects duplicate reports for the same pothole/pipeline, and filters spam with 99.2% accuracy.'
  },
  {
    num: '03',
    layer: 'Intelligent Workflow & SLA Automation',
    tech: 'Dynamic Rule Matrix • Nodal Officer Dispatch • Geo-fenced Escalation Daemon',
    desc: 'Routes work orders to the right field officer in under 3 minutes. Runs continuous countdown timers against citizen charters; auto-escalates delays directly to executive leadership.'
  },
  {
    num: '04',
    layer: 'Sovereign Gov Cloud & Verifiable Proof',
    tech: 'MeitY Empaneled Data Center • DigiLocker • Aadhaar OTP • Immutable Audit Trails',
    desc: 'Compliant with Indian Data Protection & Digital Personal Data Protection (DPDP) Act. All before/after photos and funds are time-stamped and verifiable for public audit.'
  }
];

// FAQs
const faqs = [
  {
    q: 'How does this system integrate with existing portals like CPGRAMS, CM Helpline, or 311?',
    a: 'The AiPNT Grievance Redressal platform acts as an intelligent interoperability layer. It uses two-way REST APIs and Webhook connectors to ingest, sync, and close tickets across central CPGRAMS, state CM Helplines, and local municipal ERPs without requiring any existing portal to be replaced.'
  },
  {
    q: 'Can rural citizens report grievances if they cannot read or write?',
    a: 'Yes! That is our core breakthrough. Citizens can simply place a phone call or send a WhatsApp voice note speaking in their regional dialect (Hindi, Bhojpuri, Odia, Bengali, Tamil, etc.). Our integrated Bhashini speech-to-text AI converts the speech, extracts location and intent, and files a structured ticket automatically.'
  },
  {
    q: 'How does the system prevent fake or duplicate grievance filings?',
    a: 'Our CivicNLP semantic clustering engine compares incoming complaints against active tickets within a 500-meter geo-radius. If 15 neighbors report the same broken transformer, the engine merges them into a single master incident with 15 citizen subscribers, eliminating officer fatigue and redundant paperwork.'
  },
  {
    q: 'How are development funds (MPLAD / MLALAD / Nagar Nigam) tracked?',
    a: 'Every approved civil work order can be linked to a municipal budget head or legislative development scheme. When a contractor finishes work, geo-tagged photos and citizen OTP confirmations are required before funds are disbursed on the financial dashboard.'
  },
  {
    q: 'What is the implementation timeline for a Lok Sabha constituency or Municipal Corporation?',
    a: 'A complete constituency rollout—including WhatsApp bot activation, ward GIS boundary mapping, department nodal officer onboarding, and command center setup—is typically operational within 10 to 14 business days.'
  }
];

export default function GrievanceRedressalPage() {
  // Simulator State
  const [selectedCase, setSelectedCase] = useState(simulationCases[0]);
  const [simState, setSimState] = useState('idle'); // idle | analyzing | assigned | dispatched
  const [activeTab, setActiveTab] = useState('mp_mla');
  const [activeWard, setActiveWard] = useState('ward14');

  // ROI Calculator State
  const [population, setPopulation] = useState(650000);
  const [monthlyGrievances, setMonthlyGrievances] = useState(3800);
  const [officerCount, setOfficerCount] = useState(45);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: 'Member of Parliament (MP) / MLA Office',
    organization: '',
    email: '',
    phone: '',
    constituency: '',
    notes: ''
  });

  // Calculate dynamic ROI estimates
  const calculatedSavedHours = Math.round((monthlyGrievances * 1.85));
  const calculatedCostSavings = Math.round((monthlyGrievances * 420) / 100000); // In Lakhs
  const calculatedAvgResolutionTime = Math.max(12, Math.round(72 - (officerCount * 0.45)));

  // Simulation handler
  const runSimulation = () => {
    setSimState('analyzing');
    setTimeout(() => {
      setSimState('assigned');
      setTimeout(() => {
        setSimState('dispatched');
      }, 1600);
    }, 1800);
  };

  const resetSimulation = () => {
    setSimState('idle');
  };

  const handleCaseChange = (c) => {
    setSelectedCase(c);
    setSimState('idle');
  };

  const handleSubmitModal = (e) => {
    e.preventDefault();
    setModalSubmitted(true);
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {/* Atmospheric Background Ambient Orbs */}
      <div className={styles.glowOrb1} />
      <div className={styles.glowOrb2} />
      <div className={styles.glowOrb3} />

      {/* Top Sticky Breadcrumbs & Quick Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span>/</span>
            <Link href="/products" className={styles.breadcrumbLink}>Products</Link>
            <span>/</span>
            <span className={styles.breadcrumbCurrent}>Constituency Grievance Redressal</span>
          </div>

          <div className={styles.liveBadge}>
            <span className={styles.pulseDot} />
            <span>Civic Intelligence Engine v4.2 • MeitY & NIC Ready</span>
          </div>

          <div className={styles.quickNav}>
            <a href="#simulator" className={styles.quickNavBtn}>Live AI Simulator</a>
            <a href="#cockpits" className={styles.quickNavBtn}>Leadership Cockpits</a>
            <a href="#gis-map" className={styles.quickNavBtn}>GIS Heatmap</a>
            <a href="#intake" className={styles.quickNavBtn}>Omni-Channel</a>
            <a href="#calculator" className={styles.quickNavBtn}>Impact Calculator</a>
            <a href="#architecture" className={styles.quickNavBtn}>GovTech Stack</a>
          </div>
        </div>
      </div>

      {/* ════════════════ HERO SECTION ════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroTag}>
          <FaLandmark className={styles.heroTagIcon} />
          <span>Next-Gen Smart Governance & Citizen Redressal</span>
        </div>

        <h1 className={styles.heroTitle}>
          AI-Powered <span className={styles.gradientOrange}>Grievance Redressal</span> & Constituency Intelligence
        </h1>

        <p className={styles.heroSubtitle}>
          The unified digital nerve center for Members of Parliament, MLAs, District Collectors, and Municipal Corporations. Turn unstructured citizen voice notes and WhatsApp photos into automated, SLA-tracked public works in minutes.
        </p>

        {/* Live Metrics Ticker Banner */}
        <div className={styles.heroMetricTicker}>
          <div className={styles.tickerItem}>
            <span className={styles.tickerNum}>98.6%</span>
            <span className={styles.tickerLabel}>SLA Compliance</span>
          </div>
          <div className={styles.tickerDivider} />
          <div className={styles.tickerItem}>
            <span className={styles.tickerNum}>&lt; 3 Mins</span>
            <span className={styles.tickerLabel}>AI Auto-Triage & Dispatch</span>
          </div>
          <div className={styles.tickerDivider} />
          <div className={styles.tickerItem}>
            <span className={styles.tickerNum}>14+</span>
            <span className={styles.tickerLabel}>Regional Indian Dialects</span>
          </div>
          <div className={styles.tickerDivider} />
          <div className={styles.tickerItem}>
            <span className={styles.tickerNum}>₹ 250 Cr+</span>
            <span className={styles.tickerLabel}>Constituency Funds Tracked</span>
          </div>
        </div>

        <div className={styles.heroActions}>
          <a href="#simulator" className={styles.btnPrimary}>
            <FaPlay /> Test Live AI Triage Simulator
          </a>
          <button className={styles.btnSecondary} onClick={() => setModalOpen(true)}>
            Schedule Leadership Briefing <FaArrowRight />
          </button>
        </div>

        {/* Floating Hero Visual: Futuristic Command Center */}
        <div className={styles.heroVisualWrapper}>
          <div className={styles.visualCard}>
            <img
              src="/assets/generated/grievance_command_center.jpg"
              alt="Constituency Governance Integrated Command and Control Center"
              className={styles.heroImage}
            />
            <div className={styles.imageOverlayGradient} />

            {/* Live Interactive HUD Overlays */}
            <div className={styles.hudBadgeTopLeft}>
              <span className={styles.hudPill}>
                <span className={styles.liveRadarDot} /> LIVE CONSTITUENCY COMMAND DESK
              </span>
              <span className={styles.hudSub}>Active Ward Feed • Automated Nodal Routing</span>
            </div>

            <div className={styles.hudBadgeBottomRight}>
              <div className={styles.hudStatRow}>
                <span className={styles.hudLabel}>Active Ingested Grievances Today</span>
                <span className={styles.hudVal}>482 Tickets</span>
              </div>
              <div className={styles.hudStatRow}>
                <span className={styles.hudLabel}>Auto-Dispatched to Field Engineers</span>
                <span className={styles.hudValGreen}>469 Dispatched (97.3%)</span>
              </div>
              <div className={styles.hudProgress}>
                <div className={styles.hudProgressBar} style={{ width: '97.3%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ INTERACTIVE AI TRIAGE SIMULATOR ════════════════ */}
      <section id="simulator" className={styles.simulatorSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.pillBadge}>
            <FaRobot /> HANDS-ON AI EXPERIENCE
          </div>
          <h2 className={styles.sectionTitle}>
            Experience How Citizen Grievances Are <span className={styles.gradientOrange}>Triaged in Real-Time</span>
          </h2>
          <p className={styles.sectionDesc}>
            Select an actual on-ground civic issue reported in an Indian vernacular dialect. Watch our domain-trained GovNLP instantly decode the urgency, pinpoint the nodal officer, and assign an SLA.
          </p>
        </div>

        {/* Simulation Scenario Switcher */}
        <div className={styles.scenarioGrid}>
          {simulationCases.map((item) => (
            <button
              key={item.id}
              onClick={() => handleCaseChange(item)}
              className={`${styles.scenarioCard} ${selectedCase.id === item.id ? styles.scenarioCardActive : ''}`}
            >
              <div className={styles.scenarioHeader}>
                <span className={styles.scenarioChannel}>{item.channel}</span>
                <span className={styles.scenarioUrgency} style={{ color: item.urgencyColor }}>
                  {item.urgency.split(' ')[0]}
                </span>
              </div>
              <h4 className={styles.scenarioTitle}>{item.title}</h4>
              <p className={styles.scenarioCitizen}>Reported by: {item.citizen}</p>
            </button>
          ))}
        </div>

        {/* Simulator Interactive Terminal */}
        <div className={styles.simulatorConsole}>
          <div className={styles.consoleTopBar}>
            <div className={styles.consoleDots}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
            </div>
            <div className={styles.consoleTitle}>
              AiPNT GovNLP Engine • Ingestion Socket ID: #SYS-{selectedCase.id.toUpperCase()}-2026
            </div>
            <div className={styles.consoleStatus}>
              {simState === 'idle' && <span className={styles.statusIdle}>Ready for Ingestion</span>}
              {simState === 'analyzing' && <span className={styles.statusAnalyzing}>⚡ NLP Neural Triage Running...</span>}
              {simState === 'assigned' && <span className={styles.statusAssigned}>✓ Nodal Officer Matched</span>}
              {simState === 'dispatched' && <span className={styles.statusDispatched}>★ WhatsApp Alert Dispatched!</span>}
            </div>
          </div>

          <div className={styles.consoleBody}>
            {/* Left Column: Citizen Voice/Text Input Stream */}
            <div className={styles.consoleCol}>
              <div className={styles.colHeader}>
                <FaMicrophone className={styles.colHeaderIcon} />
                <span>Raw Citizen Ingestion Stream ({selectedCase.dialect})</span>
              </div>

              <div className={styles.rawInputBox}>
                <div className={styles.quoteMark}>“</div>
                <p className={styles.inputQuote}>{selectedCase.inputExcerpt}</p>
                <div className={styles.inputMeta}>
                  <span>Channel: <strong>{selectedCase.channel}</strong></span>
                  <span>Audio Waveform: <strong>Analyzed (Bhashini-ASR)</strong></span>
                </div>
              </div>

              <div className={styles.actionControls}>
                {simState === 'idle' ? (
                  <button className={styles.btnSimulate} onClick={runSimulation}>
                    <FaPlay /> Run AI Triage & Auto-Dispatch
                  </button>
                ) : (
                  <button className={styles.btnReset} onClick={resetSimulation}>
                    <FaRedo /> Reset & Try Another Case
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: AI Extraction & Automated Nodal Resolution Card */}
            <div className={styles.consoleCol}>
              <div className={styles.colHeader}>
                <FaRobot className={styles.colHeaderIcon} />
                <span>AI Automated Extraction & Nodal Assignment</span>
              </div>

              {simState === 'idle' && (
                <div className={styles.idlePlaceholder}>
                  <FaSlidersH className={styles.idleIcon} />
                  <p>Click "Run AI Triage & Auto-Dispatch" to witness neural intent recognition, automated GIS coordinate extraction, and nodal department routing.</p>
                </div>
              )}

              {simState !== 'idle' && (
                <div className={styles.triageResult}>
                  {/* Confidence & Urgency Bar */}
                  <div className={styles.triageHeader}>
                    <div className={styles.triagePill} style={{ borderColor: selectedCase.urgencyColor, color: selectedCase.urgencyColor }}>
                      Severity: {selectedCase.urgency}
                    </div>
                    <div className={styles.confidenceScore}>
                      NLP Confidence: <strong>{selectedCase.confidence}</strong>
                    </div>
                  </div>

                  {/* Standardized English Summary */}
                  <div className={styles.resultItem}>
                    <span className={styles.resultLabel}>Normalized Summary:</span>
                    <span className={styles.resultVal}>{selectedCase.transcription}</span>
                  </div>

                  {/* Department & Nodal Officer */}
                  <div className={styles.resultItem}>
                    <span className={styles.resultLabel}>Assigned Department:</span>
                    <span className={styles.resultValHighlight}>{selectedCase.department}</span>
                  </div>

                  <div className={styles.resultItem}>
                    <span className={styles.resultLabel}>Designated Nodal Officer:</span>
                    <span className={styles.resultValNodal}>{selectedCase.nodalOfficer} ({selectedCase.phone})</span>
                  </div>

                  <div className={styles.resultGrid2}>
                    <div className={styles.resultMini}>
                      <span className={styles.resultMiniLabel}><FaClock /> Response SLA</span>
                      <span className={styles.resultMiniVal}>{selectedCase.slaTarget}</span>
                    </div>
                    <div className={styles.resultMini}>
                      <span className={styles.resultMiniLabel}><FaMapMarkedAlt /> GIS Coordinates</span>
                      <span className={styles.resultMiniVal}>{selectedCase.gisCoordinates}</span>
                    </div>
                  </div>

                  {/* Development Fund Cross-Link */}
                  <div className={styles.fundNotice}>
                    <FaFileAlt className={styles.fundIcon} />
                    <span>Auto-linked Budget Head: <strong>{selectedCase.fundLink}</strong></span>
                  </div>

                  {simState === 'dispatched' && (
                    <div className={styles.dispatchSuccessBanner}>
                      <FaCheckCircle className={styles.checkIcon} />
                      <div>
                        <strong>Ticket Created & Broadcast Sent!</strong>
                        <p>Citizen notified via WhatsApp. Nodal Officer alerted on Mobile App with route navigation.</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ 4-STAKEHOLDER LEADERSHIP COCKPITS ════════════════ */}
      <section id="cockpits" className={styles.cockpitSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.pillBadge}>
            <FaLayerGroup /> MULTI-STAKEHOLDER GOVERNANCE
          </div>
          <h2 className={styles.sectionTitle}>
            Tailored Cockpits for Every <span className={styles.gradientOrange}>Administrative Tier</span>
          </h2>
          <p className={styles.sectionDesc}>
            From the Union Minister and Member of Parliament evaluating strategic public sentiment, to the on-ground junior engineer taking geo-stamped photos of resolved roadworks.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className={styles.tabNav}>
          <button
            className={`${styles.tabBtn} ${activeTab === 'mp_mla' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('mp_mla')}
          >
            <FaLandmark /> MP / MLA Leadership
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'collector_admin' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('collector_admin')}
          >
            <FaBuilding /> Collector & Municipal Head
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'field_engineer' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('field_engineer')}
          >
            <FaMobileAlt /> Ground Nodal Engineers
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'citizen_portal' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('citizen_portal')}
          >
            <FaUsers /> Citizen Public Portal
          </button>
        </div>

        {/* Active Tab Showcase Card */}
        <div className={styles.cockpitDisplayCard}>
          <div className={styles.cockpitCardHeader}>
            <div>
              <h3 className={styles.cockpitTitle}>{cockpitViews[activeTab].title}</h3>
              <p className={styles.cockpitSubtitle}>{cockpitViews[activeTab].subtitle}</p>
            </div>
            <button className={styles.btnTabAction} onClick={() => setModalOpen(true)}>
              Explore Cockpit Demo <FaArrowRight />
            </button>
          </div>

          {/* Metric KPI Grid */}
          <div className={styles.cockpitKpiGrid}>
            {cockpitViews[activeTab].metrics.map((kpi, idx) => (
              <div key={idx} className={styles.cockpitKpiItem}>
                <div className={styles.kpiValue}>{kpi.val}</div>
                <div className={styles.kpiLabel}>{kpi.label}</div>
                <div className={styles.kpiChange}>{kpi.change}</div>
              </div>
            ))}
          </div>

          {/* Feature List */}
          <div className={styles.cockpitFeatureGrid}>
            {cockpitViews[activeTab].features.map((feat, idx) => (
              <div key={idx} className={styles.cockpitFeatureItem}>
                <FaCheckCircle className={styles.featureItemIcon} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ INTERACTIVE WARD GIS HEATMAP & DEVELOPMENT FUND TRACKER ════════════════ */}
      <section id="gis-map" className={styles.gisSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.pillBadge}>
            <FaSearchLocation /> CONSTITUENCY GIS & FUND ALLOCATION
          </div>
          <h2 className={styles.sectionTitle}>
            Live Ward-Level <span className={styles.gradientOrange}>Intelligence & Public Works</span> Ledger
          </h2>
          <p className={styles.sectionDesc}>
            Eliminate ghost projects and delayed fund execution. View live grievance resolution rates mapped against ongoing MPLAD and Municipal development budgets in real-time.
          </p>
        </div>

        <div className={styles.gisLayout}>
          {/* Ward Selector List */}
          <div className={styles.wardSelectorList}>
            <div className={styles.wardSelectorTitle}>Select Constituency Ward:</div>
            {Object.keys(wardDatabase).map((key) => {
              const w = wardDatabase[key];
              return (
                <div
                  key={key}
                  onClick={() => setActiveWard(key)}
                  className={`${styles.wardCard} ${activeWard === key ? styles.wardCardActive : ''}`}
                >
                  <div className={styles.wardHeader}>
                    <strong>{w.name}</strong>
                    <span className={`${styles.wardRiskBadge} ${styles['risk_' + w.riskLevel.toLowerCase().replace(' ', '_')]}`}>
                      {w.riskLevel}
                    </span>
                  </div>
                  <div className={styles.wardMeta}>
                    <span>SLA: <strong>{w.slaRate}</strong></span>
                    <span>Pending: <strong>{w.pending}</strong></span>
                    <span>Fund: <strong>{w.activeFund.split(' ')[1]} Cr</strong></span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Ward Intelligence Panel */}
          <div className={styles.wardDetailPanel}>
            <div className={styles.wardDetailHeader}>
              <div>
                <h3>{wardDatabase[activeWard].name}</h3>
                <span className={styles.corporatorTag}>Elected Representative: {wardDatabase[activeWard].corporator}</span>
              </div>
              <div className={styles.populationTag}>
                <FaUsers /> Population: <strong>{wardDatabase[activeWard].population}</strong>
              </div>
            </div>

            {/* Ward Metrics Row */}
            <div className={styles.wardStatRow}>
              <div className={styles.wardStatBox}>
                <span className={styles.wardStatVal}>{wardDatabase[activeWard].totalGrievances}</span>
                <span className={styles.wardStatLbl}>Total Grievances</span>
              </div>
              <div className={styles.wardStatBox}>
                <span className={styles.wardStatValGreen}>{wardDatabase[activeWard].resolved}</span>
                <span className={styles.wardStatLbl}>Resolved & Verified</span>
              </div>
              <div className={styles.wardStatBox}>
                <span className={styles.wardStatValOrange}>{wardDatabase[activeWard].pending}</span>
                <span className={styles.wardStatLbl}>Under Active SLA</span>
              </div>
              <div className={styles.wardStatBox}>
                <span className={styles.wardStatVal}>{wardDatabase[activeWard].satisfaction}</span>
                <span className={styles.wardStatLbl}>Citizen Satisfaction</span>
              </div>
            </div>

            {/* Fund Transparency Block */}
            <div className={styles.wardFundBlock}>
              <div className={styles.fundHeader}>
                <div>
                  <span className={styles.fundTitle}>Allocated Development Budget</span>
                  <h4>{wardDatabase[activeWard].activeFund}</h4>
                </div>
                <div className={styles.slaBadge}>
                  <FaClock /> SLA Compliance Rate: <strong>{wardDatabase[activeWard].slaRate}</strong>
                </div>
              </div>

              <div className={styles.topIssuesBlock}>
                <span className={styles.topIssuesTitle}>Top Grievance Clusters in this Ward:</span>
                <div className={styles.issuePills}>
                  {wardDatabase[activeWard].topIssues.map((issue, idx) => (
                    <span key={idx} className={styles.issuePill}>
                      • {issue}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ OMNI-CHANNEL CITIZEN INTAKE ════════════════ */}
      <section id="intake" className={styles.intakeSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.pillBadge}>
            <FaWhatsapp /> SEAMLESS PUBLIC ACCESS
          </div>
          <h2 className={styles.sectionTitle}>
            Zero Friction: <span className={styles.gradientOrange}>Meet Citizens</span> Where They Already Are
          </h2>
          <p className={styles.sectionDesc}>
            No clunky apps or mandatory registration queues. A multi-channel intake mesh tailored for urban youth, elderly pensioners, rural farmers, and ward field workers alike.
          </p>
        </div>

        <div className={styles.intakeGrid}>
          {/* Card 1: WhatsApp Bot */}
          <div className={styles.intakeCard}>
            <div className={styles.intakeIconBoxWhatsApp}>
              <FaWhatsapp />
            </div>
            <h3>Official 24/7 WhatsApp AI Bot</h3>
            <p>Citizens can simply forward photos of broken water pipes or text complaints. Instant automated confirmation ticket and live tracking link delivered via WhatsApp.</p>
            <ul className={styles.intakeList}>
              <li><FaCheckCircle /> Voice note transcription in regional dialects</li>
              <li><FaCheckCircle /> Live location GPS pin capture with 1 tap</li>
              <li><FaCheckCircle /> Automated status update broadcasts</li>
            </ul>
          </div>

          {/* Card 2: Multilingual Voice IVR */}
          <div className={styles.intakeCard}>
            <div className={styles.intakeIconBoxVoice}>
              <FaHeadset />
            </div>
            <h3>Toll-Free Dialect Voice IVR</h3>
            <p>Dedicated toll-free helpline powered by Bhashini speech models. Senior citizens and non-literate residents speak naturally in their mother tongue.</p>
            <ul className={styles.intakeList}>
              <li><FaCheckCircle /> Natural dialect speech-to-text conversion</li>
              <li><FaCheckCircle /> Real-time emotion & distress escalation</li>
              <li><FaCheckCircle /> Automated SMS ticket ID dispatch</li>
            </ul>
          </div>

          {/* Card 3: Self-Service Kiosks */}
          <div className={styles.intakeCard}>
            <div className={styles.intakeIconBoxKiosk}>
              <FaBuilding />
            </div>
            <h3>Gram Panchayat & Ward Kiosks</h3>
            <p>Rugged, vandal-proof touch terminals installed at Tehsil offices, Nagar Nigam headquarters, and primary health centers with automated slip printing.</p>
            <ul className={styles.intakeList}>
              <li><FaCheckCircle /> Aadhaar biometric / QR check-in</li>
              <li><FaCheckCircle /> Integrated thermal slip printer</li>
              <li><FaCheckCircle /> Offline-first edge queue persistence</li>
            </ul>
          </div>

          {/* Card 4: Field Volunteer Mobile App */}
          <div className={styles.intakeCard}>
            <div className={styles.intakeIconBoxMobile}>
              <FaMobileAlt />
            </div>
            <h3>Field Worker & Volunteer PWA</h3>
            <p>Lightweight mobile app for booth workers, ward corporators, and municipal inspectors conducting door-to-door public grievance drives.</p>
            <ul className={styles.intakeList}>
              <li><FaCheckCircle /> Works completely offline in low-network areas</li>
              <li><FaCheckCircle /> Geo-tagged photographic proof of completion</li>
              <li><FaCheckCircle /> Citizen signature & OTP validation</li>
            </ul>
          </div>
        </div>

        {/* Visual Showcase: Citizen App & Kiosk */}
        <div className={styles.intakeVisualCard}>
          <img
            src="/assets/generated/grievance_citizen_app.jpg"
            alt="Citizen Grievance Redressal Mobile App and Smart Touch Kiosk"
            className={styles.intakeImage}
          />
          <div className={styles.intakeVisualOverlay}>
            <h4>Designed for 100% Digital Inclusivity</h4>
            <p>From smartphone users in Tier-1 cities to elderly citizens in remote rural hamlets.</p>
          </div>
        </div>
      </section>

      {/* ════════════════ CONSTITUENCY IMPACT & ROI CALCULATOR ════════════════ */}
      <section id="calculator" className={styles.calcSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.pillBadge}>
            <FaChartLine /> GOVERNANCE VALUE CALCULATOR
          </div>
          <h2 className={styles.sectionTitle}>
            Quantify the <span className={styles.gradientOrange}>Impact on Your Constituency</span>
          </h2>
          <p className={styles.sectionDesc}>
            Adjust the sliders below based on your parliamentary seat, assembly district, or municipal corporation scale to forecast operational savings and resolution speed gains.
          </p>
        </div>

        <div className={styles.calcContainer}>
          <div className={styles.calcInputs}>
            {/* Slider 1: Population */}
            <div className={styles.sliderGroup}>
              <div className={styles.sliderLabelRow}>
                <span>Constituency Population:</span>
                <span className={styles.sliderValueHighlight}>{population.toLocaleString()} Residents</span>
              </div>
              <input
                type="range"
                min="100000"
                max="2500000"
                step="50000"
                value={population}
                onChange={(e) => setPopulation(Number(e.target.value))}
                className={styles.sliderInput}
              />
              <div className={styles.sliderRangeLimits}>
                <span>100K (Assembly/Town)</span>
                <span>2.5M (Lok Sabha Seat)</span>
              </div>
            </div>

            {/* Slider 2: Monthly Grievances */}
            <div className={styles.sliderGroup}>
              <div className={styles.sliderLabelRow}>
                <span>Average Monthly Grievances Filed:</span>
                <span className={styles.sliderValueHighlight}>{monthlyGrievances.toLocaleString()} Complaints</span>
              </div>
              <input
                type="range"
                min="500"
                max="15000"
                step="250"
                value={monthlyGrievances}
                onChange={(e) => setMonthlyGrievances(Number(e.target.value))}
                className={styles.sliderInput}
              />
              <div className={styles.sliderRangeLimits}>
                <span>500 / month</span>
                <span>15,000 / month</span>
              </div>
            </div>

            {/* Slider 3: Nodal Officers */}
            <div className={styles.sliderGroup}>
              <div className={styles.sliderLabelRow}>
                <span>Active Department Nodal Officers:</span>
                <span className={styles.sliderValueHighlight}>{officerCount} Field Engineers</span>
              </div>
              <input
                type="range"
                min="10"
                max="150"
                step="5"
                value={officerCount}
                onChange={(e) => setOfficerCount(Number(e.target.value))}
                className={styles.sliderInput}
              />
              <div className={styles.sliderRangeLimits}>
                <span>10 Officers</span>
                <span>150 Officers</span>
              </div>
            </div>
          </div>

          {/* Calculator Output Displays */}
          <div className={styles.calcOutputs}>
            <div className={styles.outputCardMain}>
              <span className={styles.outputLabel}>Administrative Hours Saved Monthly</span>
              <div className={styles.outputNumBig}>{calculatedSavedHours.toLocaleString()} Hrs</div>
              <p className={styles.outputExpl}>
                Freed from manual clerical ticket sorting, physical file movement, and duplicate verification phone calls.
              </p>
            </div>

            <div className={styles.outputGrid2}>
              <div className={styles.outputCardMini}>
                <span className={styles.outputMiniLabel}>Projected Average Resolution</span>
                <div className={styles.outputMiniNum}>{calculatedAvgResolutionTime} Hours</div>
                <span className={styles.outputMiniSub}>Down from standard 14 days</span>
              </div>

              <div className={styles.outputCardMini}>
                <span className={styles.outputMiniLabel}>Public Fund Leakage Prevention</span>
                <div className={styles.outputMiniNum}>₹ {calculatedCostSavings} Lakhs</div>
                <span className={styles.outputMiniSub}>Via geo-tagged work proof</span>
              </div>
            </div>

            <div className={styles.calcCta}>
              <button className={styles.btnPrimaryFull} onClick={() => setModalOpen(true)}>
                Download Custom Feasibility Report <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ SOVEREIGN GOVTECH ARCHITECTURE ════════════════ */}
      <section id="architecture" className={styles.archSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.pillBadge}>
            <FaShieldAlt /> ENTERPRISE-GRADE SECURITY & COMPLIANCE
          </div>
          <h2 className={styles.sectionTitle}>
            Built on Sovereign, <span className={styles.gradientOrange}>Zero-Trust Digital Architecture</span>
          </h2>
          <p className={styles.sectionDesc}>
            Fully compliant with the Digital Personal Data Protection (DPDP) Act 2023, MeitY cloud hosting guidelines, and CERT-In security standards.
          </p>
        </div>

        <div className={styles.archLayersList}>
          {archLayers.map((item) => (
            <div key={item.num} className={styles.archLayerCard}>
              <div className={styles.archLayerNum}>{item.num}</div>
              <div className={styles.archLayerContent}>
                <div className={styles.archLayerTop}>
                  <h4 className={styles.archLayerTitle}>{item.layer}</h4>
                  <span className={styles.archLayerTech}>{item.tech}</span>
                </div>
                <p className={styles.archLayerDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Badges */}
        <div className={styles.complianceStrip}>
          <div className={styles.compBadge}>
            <FaLock /> MeitY Empaneled Cloud Host
          </div>
          <div className={styles.compBadge}>
            <FaShieldAlt /> 256-Bit Encrypted Data-at-Rest
          </div>
          <div className={styles.compBadge}>
            <FaCheckCircle /> CERT-In Audit Compliant
          </div>
          <div className={styles.compBadge}>
            <FaLandmark /> Aadhaar & DigiLocker Ready
          </div>
        </div>
      </section>

      {/* ════════════════ FREQUENTLY ASKED QUESTIONS ════════════════ */}
      <section className={styles.faqSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.pillBadge}>
            <FaFileAlt /> COMMON QUESTIONS
          </div>
          <h2 className={styles.sectionTitle}>
            Constituency Governance <span className={styles.gradientOrange}>Deployment FAQs</span>
          </h2>
          <p className={styles.sectionDesc}>
            Key questions answered regarding onboarding timelines, bureaucratic training, and legacy system interoperability.
          </p>
        </div>

        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
                onClick={() => setOpenFaq(isOpen ? -1 : index)}
              >
                <div className={styles.faqQuestion}>
                  <span>{faq.q}</span>
                  {isOpen ? <FaChevronUp className={styles.faqIcon} /> : <FaChevronDown className={styles.faqIcon} />}
                </div>
                {isOpen && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ════════════════ FINAL CALL TO ACTION ════════════════ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaGlow} />
          <h2>Ready to Transform Public Grievance Resolution in Your Constituency?</h2>
          <p>
            Schedule a high-level briefing with our GovTech implementation specialists. We provide a turn-key rollout plan tailored to your district demographics and administrative structure.
          </p>
          <div className={styles.ctaActions}>
            <button className={styles.btnPrimary} onClick={() => setModalOpen(true)}>
              Schedule Leadership Briefing <FaArrowRight />
            </button>
            <Link href="/products" className={styles.btnGhost}>
              Explore Other AIPNT Products
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════ LEADERSHIP DEMO REQUEST MODAL ════════════════ */}
      {modalOpen && (
        <div className={styles.modalOverlay} onClick={() => setModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCloseBtn} onClick={() => setModalOpen(false)}>
              <FaTimes />
            </button>

            {!modalSubmitted ? (
              <>
                <div className={styles.modalHeader}>
                  <div className={styles.modalBadge}>
                    <FaLandmark /> OFFICIAL GOVTECH BRIEFING
                  </div>
                  <h3>Request Constituency Intelligence Demo</h3>
                  <p>Our senior public sector advisory team will demonstrate live AI triage, WhatsApp bots, and MP/MLA dashboards tailored to your constituency.</p>
                </div>

                <form onSubmit={handleSubmitModal} className={styles.modalForm}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Full Name & Designation *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. S. K. Nair, Chief of Staff"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Administrative Tier *</label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      >
                        <option>Member of Parliament (MP) Office</option>
                        <option>Member of Legislative Assembly (MLA) Office</option>
                        <option>District Magistrate / Collectorate</option>
                        <option>Municipal Corporation / Nagar Nigam</option>
                        <option>Smart City SPV / Govt Agency</option>
                        <option>System Integrator / Partner</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Constituency / District Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Varanasi Parliamentary Constituency"
                        value={formData.constituency}
                        onChange={(e) => setFormData({ ...formData, constituency: e.target.value })}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>State / Union Territory *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Uttar Pradesh, Maharashtra, Odisha"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Official Email ID *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@nic.in / name@sansad.nic.in"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Direct Contact Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Key Priorities / Specific Areas of Focus</label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Waterlogging grievances in Ward 12, PWD road project tracking, WhatsApp bot in local dialect..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <button type="submit" className={styles.btnPrimaryFull}>
                    Submit Demo Request <FaArrowRight />
                  </button>
                  <p className={styles.modalPrivacy}>
                    <FaLock /> All information handled with strict government confidentiality protocols under Indian DPDP Act.
                  </p>
                </form>
              </>
            ) : (
              <div className={styles.modalSuccess}>
                <FaCheckCircle className={styles.successIcon} />
                <h3>Briefing Request Received!</h3>
                <p>
                  Thank you, <strong>{formData.name}</strong>. Our Public Sector Practice Director will coordinate with your office within 24 business hours to arrange the demonstration and feasibility walkthrough for <strong>{formData.constituency}</strong>.
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
