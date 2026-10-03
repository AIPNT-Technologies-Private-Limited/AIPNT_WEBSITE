"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';
import {
  FaCode,
  FaBrain,
  FaRobot,
  FaMicrochip,
  FaGamepad,
  FaCloud,
  FaExternalLinkAlt,
  FaPlay,
  FaStop,
  FaFlag,
  FaArrowRight,
  FaCheckCircle,
  FaLightbulb,
  FaRocket,
  FaCog,
  FaTrophy,
  FaTimes,
  FaQrcode,
  FaGraduationCap,
  FaLaptopCode,
  FaEye,
  FaLanguage,
  FaMicrophone,
  FaCube,
  FaFileCode,
  FaCalendarCheck,
  FaBuilding,
  FaCheck,
  FaGlobe,
  FaChalkboardTeacher,
  FaComments,
  FaTools,
  FaShieldAlt,
  FaLayerGroup
} from 'react-icons/fa';

// 6 Core Pillars from Flyer
const corePillars = [
  {
    icon: <FaCode />,
    color: '#818cf8',
    bg: 'rgba(99, 102, 241, 0.15)',
    title: 'Block-Based Coding',
    desc: 'Intuitive drag-and-drop Scratch-compatible visual programming. Smooth transition from visual blocks to text-based Python and C++.',
    tags: ['Drag & Drop', 'Visual Logic', 'Python Export']
  },
  {
    icon: <FaBrain />,
    color: '#fb923c',
    bg: 'rgba(249, 115, 22, 0.15)',
    title: 'AI & ML Extensions',
    desc: 'Pre-trained Computer Vision, Natural Language Processing, and machine learning blocks accessible directly inside school projects.',
    tags: ['Face Tracking', 'Pose Detection', 'Speech & NLP']
  },
  {
    icon: <FaRobot />,
    color: '#2dd4bf',
    bg: 'rgba(45, 212, 191, 0.15)',
    title: 'IoT & Hardware Integration',
    desc: 'Direct WebUSB & Serial communication with live sensors, motors, servos, relays, and displays without installing complex drivers.',
    tags: ['WebUSB / Serial', 'Sensor Telemetry', 'Actuator Control']
  },
  {
    icon: <FaMicrochip />,
    color: '#f472b6',
    bg: 'rgba(244, 114, 182, 0.15)',
    title: 'Multiple Board Support',
    desc: 'Universal flashing and execution across Arduino Uno, Nano, Mega, Raspberry Pi Pico, and ESP32 with MicroPython runtime.',
    tags: ['Arduino', 'Raspberry Pi Pico', 'ESP32 MicroPython']
  },
  {
    icon: <FaGamepad />,
    color: '#4ade80',
    bg: 'rgba(74, 222, 128, 0.15)',
    title: 'Games & Animation',
    desc: 'Rich sprite libraries, physics engines, sound synthesizers, and multi-costume timelines to turn children’s creativity into playable games.',
    tags: ['Physics Engine', 'Costume Editor', 'Interactive Audio']
  },
  {
    icon: <FaCloud />,
    color: '#c084fc',
    bg: 'rgba(192, 132, 252, 0.15)',
    title: 'Cloud Projects & Sharing',
    desc: 'Autosave in the cloud, one-click shareable project URLs, student portfolio showcases, and collaborative remixing for classrooms.',
    tags: ['Instant Cloud Save', 'One-Click Share', 'Classroom Portfolios']
  }
];

// Powerful AI Extensions
const aiExtensions = [
  {
    icon: <FaEye />,
    color: '#38bdf8',
    title: 'Face Detection',
    desc: 'Real-time facial landmark tracking, emotion classification, and head orientation detection directly via laptop webcam.'
  },
  {
    icon: <FaCube />,
    color: '#c084fc',
    title: 'Human Body & Pose Detection',
    desc: '17-point skeletal pose estimation enabling gesture-controlled games, fitness trackers, and ergonomic monitors.'
  },
  {
    icon: <FaMicrophone />,
    color: '#f43f5e',
    title: 'Speech Recognition',
    desc: 'Voice command triggers, voice-to-text transcriptions, and speech synthesis in English and regional Indian languages.'
  },
  {
    icon: <FaLanguage />,
    color: '#3b82f6',
    title: 'Text Translate & Multilingual',
    desc: 'On-the-fly translation bridging English, Hindi, and Odia to make AI education completely native and accessible.'
  },
  {
    icon: <FaBrain />,
    color: '#10b981',
    title: 'Object & Image Recognition',
    desc: 'Pre-trained neural networks for identifying common everyday objects, animals, and custom image training sets.'
  },
  {
    icon: <FaComments />,
    color: '#fbbf24',
    title: 'Ask ATAT (AI Tutor Assistant)',
    desc: 'In-IDE smart assistant that helps students debug code, generates starter blocks, and answers STEM concepts step by step.'
  }
];

// Supported Hardware
const supportedHardware = [
  {
    name: 'Arduino Uno',
    desc: 'Standard educational microcontroller for introductory electronics, analog sensors, and servo motors.',
    badge: 'Beginner Friendly',
    connection: 'Direct WebUSB'
  },
  {
    name: 'Arduino Nano',
    desc: 'Compact breadboard-friendly board ideal for wearables, compact robotics rovers, and small chassis.',
    badge: 'Compact Form',
    connection: 'Serial / USB'
  },
  {
    name: 'Arduino Mega',
    desc: 'High pin-count board for complex multi-actuator robotics arms, 3D gantry models, and sensor arrays.',
    badge: 'High I/O Capacity',
    connection: 'High Pinout'
  },
  {
    name: 'Raspberry Pi Pico',
    desc: 'Dual-core ARM Cortex-M0+ running MicroPython with ultra-fast real-time processing and PIO pins.',
    badge: 'MicroPython Core',
    connection: 'UF2 / MicroPython'
  },
  {
    name: 'ESP32 (MicroPython)',
    desc: 'Built-in Wi-Fi & Bluetooth powerhouse for smart home IoT, cloud telemetry dashboards, and remote sensors.',
    badge: 'IoT & Wi-Fi Ready',
    connection: 'Wi-Fi & BLE'
  }
];

// Levelwise Learning Framework
const learningLevels = [
  {
    level: '01',
    stage: 'Level 1: Visual Foundations',
    title: 'Visual Code & Interactive Art',
    color: '#38bdf8',
    desc: 'Introduces primary learners to algorithmic thinking, sequences, loops, coordinates, and creative storytelling.',
    features: ['Drag-and-drop block coding', 'Animated sprites & sound FX', 'Foundational math & geometry']
  },
  {
    level: '02',
    stage: 'Level 2: Physical Computing',
    title: 'Sensors, Actuators & Microcontrollers',
    color: '#34d399',
    desc: 'Connecting digital code with physical electronics. Students read sensor pins, control LEDs, buzzers, and DC motors.',
    features: ['Breadboard circuits with Arduino', 'Ultrasonic distance & light sensors', 'Automated traffic & security alarms']
  },
  {
    level: '03',
    stage: 'Level 3: Connected IoT & Cloud',
    title: 'Smart Systems & MicroPython',
    color: '#fbbf24',
    desc: 'Building interconnected devices with ESP32 and Raspberry Pi Pico. Sending telemetry to live web dashboards.',
    features: ['Wi-Fi sensor nodes & weather telemetry', 'Smart agriculture automated pumps', 'MicroPython scripting switch']
  },
  {
    level: '04',
    stage: 'Level 4: Applied AI & Vision',
    title: 'Neural Networks & Robotics',
    color: '#c084fc',
    desc: 'High school and college level applications using face recognition, skeletal tracking, and autonomous obstacle navigation.',
    features: ['Webcam-based AI vision models', 'Gesture-driven robotic arms', 'Bilingual Odia/English AI assistants']
  }
];

// Curated Project Showcase for Prarambh Projects Page / Explorer
const initialProjects = [
  {
    id: 'ai-face-attendance',
    title: 'AI Smart Attendance with Face Detection',
    category: 'ai-vision',
    categoryLabel: 'AI & Vision',
    level: 'Intermediate',
    hardware: ['Webcam', 'ESP32 Status OLED', 'Buzzer'],
    aiTags: ['Face Detection', 'Emotion AI'],
    summary: 'A computer vision powered smart classroom attendance system that identifies registered students and logs them in real time.',
    fullDesc: 'This project integrates Prarambh\'s Face Detection extension with an ESP32 status board. When a student stands before the camera, the system detects facial landmarks, greets them by name, and triggers an audio-visual confirmation on the OLED screen.',
    blocksUsed: [
      'when green flag clicked',
      'turn video [on v]',
      'forever',
      '  if <(number of faces detected) > [0]> then',
      '    say (join [Welcome, ] (face name)) for [2] secs',
      '    send message [attendance_logged] to ESP32',
      '    play sound [ding v]',
      '  end',
      'end'
    ],
    bom: ['Laptop / USB Webcam', 'ESP32 NodeMCU Board', '0.96" I2C OLED Display', 'Active Piezo Buzzer', 'Jumper Wires'],
    codeUrl: 'https://prarambh.ai.pntservices.co.in'
  },
  {
    id: 'iot-smart-agriculture',
    title: 'IoT Smart Agriculture & Soil Monitor',
    category: 'iot-hardware',
    categoryLabel: 'IoT & Sensors',
    level: 'Beginner',
    hardware: ['ESP32', 'Capacitive Soil Sensor', 'Relay Module', '5V Water Pump'],
    aiTags: ['Telemetry AI', 'Threshold Predictor'],
    summary: 'Automated plant watering and weather station that monitors soil moisture and triggers micro-irrigation pumps automatically.',
    fullDesc: 'Using Prarambh\'s IoT block library, this system continuously samples moisture levels from an analog sensor. If moisture falls below a threshold, the ESP32 turns on a 5V relay to water the plant while streaming soil data to a web dashboard.',
    blocksUsed: [
      'when ESP32 starts',
      'connect to Wi-Fi [School_Lab] with password [••••••••]',
      'forever',
      '  set [moisture] to (read analog pin [A0])',
      '  if <(moisture) < [400]> then',
      '    set digital pin [D4] to [HIGH]',
      '    say [Watering plant automatically!] for [3] secs',
      '    wait [5] secs',
      '    set digital pin [D4] to [LOW]',
      '  end',
      '  wait [10] secs',
      'end'
    ],
    bom: ['ESP32 Dev Module', 'Capacitive Soil Moisture Sensor', '1-Channel 5V Relay', 'Submersible 5V Pump & Tubing', 'External 5V Power Supply'],
    codeUrl: 'https://prarambh.ai.pntservices.co.in'
  },
  {
    id: 'autonomous-obstacle-rover',
    title: 'Autonomous Obstacle-Avoiding Rover',
    category: 'robotics',
    categoryLabel: 'Robotics',
    level: 'Intermediate',
    hardware: ['Arduino Uno', 'HC-SR04 Ultrasonic', 'L298N Motor Driver', 'SG90 Servo'],
    aiTags: ['Spatial Navigation'],
    summary: 'A 2-wheel drive autonomous robot that scans ahead, calculates clear pathways, and navigates complex mazes without collisions.',
    fullDesc: 'Built with an Arduino Uno mounted on a chassis with a panning ultrasonic sensor on a micro-servo. When an obstacle is detected within 20cm, the robot halts, sweeps left and right, and turns in the direction with the maximum clearance.',
    blocksUsed: [
      'when Arduino starts',
      'forever',
      '  set [distance] to (read ultrasonic trig [9] echo [10])',
      '  if <(distance) > [20]> then',
      '    move rover [Forward v] at speed [180]',
      '  else',
      '    move rover [Stop v]',
      '    rotate servo [Pin 11] to [30] degrees',
      '    set [left_dist] to (read ultrasonic)',
      '    rotate servo [Pin 11] to [150] degrees',
      '    set [right_dist] to (read ultrasonic)',
      '    rotate servo [Pin 11] to [90] degrees',
      '    if <(left_dist) > (right_dist)> then',
      '      turn rover [Left v] for [0.5] secs',
      '    else',
      '      turn rover [Right v] for [0.5] secs',
      '    end',
      '  end',
      'end'
    ],
    bom: ['Arduino Uno R3', 'L298N Dual H-Bridge Motor Driver', 'HC-SR04 Ultrasonic Sensor', 'SG90 Micro Servo', '2WD Robot Chassis with DC Motors'],
    codeUrl: 'https://prarambh.ai.pntservices.co.in'
  },
  {
    id: 'odia-voice-assistant',
    title: 'Odia Multilingual AI Voice Assistant',
    category: 'regional-odia',
    categoryLabel: 'Regional & Odia',
    level: 'Intermediate',
    hardware: ['Laptop Mic', 'Web Audio Output', 'RGB LED Ring'],
    aiTags: ['Speech Recognition', 'Odia NLP', 'Text Translation'],
    summary: 'A voice-interactive assistant that understands conversational Odia voice commands, answers questions, and speaks back in Odia.',
    fullDesc: 'Bridging modern generative AI with regional native languages, this project enables students to speak commands in Odia ("ଲାଇଟ୍ ଅନ୍ କର" - Turn on the light). Prarambh recognizes the audio, translates if necessary, and controls actuators while responding audibly.',
    blocksUsed: [
      'when [Speech Recognized in Odia] with (command)',
      'if <(command) contains [ନମସ୍କାର]> then',
      '  speak [ନମସ୍କାର! ମୁଁ ଆପଣଙ୍କର ପ୍ରାରମ୍ଭ AI ସହାୟକ] in [Odia]',
      'end',
      'if <(command) contains [ଆଲୋକ ଜଳାଅ]> then',
      '  set digital pin [D2] on ESP32 to [HIGH]',
      '  speak [ଠିକ ଅଛି, ଆଲୋକ ଜଳାଗଲା] in [Odia]',
      'end'
    ],
    bom: ['Built-in or USB Microphone', 'Speaker / Headphones', 'ESP32 or Arduino Board (Optional physical relay)'],
    codeUrl: 'https://prarambh.ai.pntservices.co.in'
  },
  {
    id: 'ai-gesture-flappy-game',
    title: 'AI Pose & Gesture Controlled Flappy Bird',
    category: 'games',
    categoryLabel: 'Games & Fun',
    level: 'Beginner',
    hardware: ['Laptop Webcam'],
    aiTags: ['Body Pose Detection', '17-Keypoint Tracker'],
    summary: 'A fun physics game where players flap their real hands or tilt their head in front of the camera to make the on-screen character fly.',
    fullDesc: 'By reading the vertical coordinate of the user’s wrists or nose via Prarambh\'s Pose Detection extension, the bird sprite adjusts its vertical velocity in real time. Great introductory project to demonstrate computer vision physics interaction.',
    blocksUsed: [
      'when green flag clicked',
      'turn video [on v] with [0]% transparency',
      'forever',
      '  set y to ((pose [nose v] y position) * [1.2])',
      '  change x by (scroll_speed)',
      '  if <touching [Pipe v]?> then',
      '    broadcast [Game Over v]',
      '    stop [all v]',
      '  end',
      'end'
    ],
    bom: ['Standard PC / Laptop with Webcam (Zero hardware purchase required)'],
    codeUrl: 'https://prarambh.ai.pntservices.co.in'
  },
  {
    id: 'smart-traffic-radar',
    title: 'Smart City Adaptive Traffic Light',
    category: 'iot-hardware',
    categoryLabel: 'IoT & Sensors',
    level: 'Beginner',
    hardware: ['Arduino Mega', 'Ultrasonic Vehicle Sensor', 'RGB LED Modules', 'Buzzer'],
    aiTags: ['Traffic State Machine'],
    summary: 'An intelligent 4-way intersection controller that calculates traffic queue density and dynamically gives green signal to crowded lanes.',
    fullDesc: 'Replaces static timer traffic lights with smart real-time queue sensing. Ultrasonic detectors measure queue length on each road segment. The Arduino Mega dynamically prioritizes green time for denser lanes with audible pedestrian warnings.',
    blocksUsed: [
      'when Arduino starts',
      'forever',
      '  set [lane1_density] to (read ultrasonic [Sensor 1])',
      '  set [lane2_density] to (read ultrasonic [Sensor 2])',
      '  if <(lane1_density) < [15]> then',
      '    set traffic light [Lane 1] to [GREEN]',
      '    set traffic light [Lane 2] to [RED]',
      '    wait [10] secs',
      '  else',
      '    switch to normal round-robin cycle',
      '  end',
      'end'
    ],
    bom: ['Arduino Mega 2560', '4x HC-SR04 Ultrasonic Sensors', '4x Red/Yellow/Green Traffic LED Modules', 'Piezo Buzzer'],
    codeUrl: 'https://prarambh.ai.pntservices.co.in'
  }
];

// Engagement & Commercial Models (Exact From Flyer)
const engagementModels = [
  {
    letter: 'A',
    title: 'One-Time Purchase Model',
    amount: '₹12 Lakhs*',
    unit: 'for 10 Systems',
    featured: false,
    colorClass: styles.letterPurple,
    features: [
      'Hardware + Trainer Kit(s) included',
      'Prarambh & ATAT Software Full Suite',
      'All necessary sensors, boards & accessories',
      'Testimonial Booklet (Teachers & Students)',
      'Annual LLM, Support & Maintenance: ~20%'
    ],
    ctaText: 'Inquire for Lab Setup',
    note: 'Ideal for schools establishing dedicated AI & STEM Innovation Labs.'
  },
  {
    letter: 'B',
    title: 'Student Subscription',
    amount: '₹100 – ₹200',
    unit: 'per student / month',
    featured: true,
    colorClass: styles.letterOrange,
    features: [
      'Designed for school-wide classroom adoption',
      'Minimum 2-year institutional commitment',
      'Unlimited access to full platform features',
      'Regular curriculum upgrades & teacher support',
      'Cloud storage & personal student portfolios'
    ],
    ctaText: 'Start School Pilot',
    note: 'Most popular model for recurring digital learning across all grades.'
  },
  {
    letter: 'C',
    title: 'Custom Development Support',
    amount: '₹100 – ₹900',
    unit: 'per Man-Hour*',
    featured: false,
    colorClass: styles.letterCyan,
    features: [
      'For your own brand white-label SW development',
      'Delivered as per Master Project Plan (MPP)',
      'Custom block extensions & specialized boards',
      'Based on your exact institutional requirements',
      'Flexible engineering sprints & dedicated SLA'
    ],
    ctaText: 'Discuss Custom Scope',
    note: 'For EdTech companies, state boards & curriculum publishers.'
  }
];

export default function PrarambhPage() {
  // State for Project Hub filter & details modal
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [selectedModelForInquiry, setSelectedModelForInquiry] = useState('One-Time Purchase Model (₹12 Lakhs)');

  // Contact form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Filter projects
  const filteredProjects = selectedFilter === 'all'
    ? initialProjects
    : initialProjects.filter(p => p.category === selectedFilter);

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {/* Ambient background glows */}
      <div className={styles.bgGlowOrb1} />
      <div className={styles.bgGlowOrb2} />
      <div className={styles.bgGlowOrb3} />

      {/* ───────────────────────────────────────────────
          TOP BAR & BREADCRUMBS
          ─────────────────────────────────────────────── */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span>/</span>
            <Link href="/products" className={styles.breadcrumbLink}>Products</Link>
            <span>/</span>
            <span className={styles.breadcrumbCurrent}>Prarambh (Code • IoT • AI)</span>
          </div>

          <div className={styles.liveBadge}>
            <span className={styles.pulseDot}></span>
            <span>Cloud Web IDE Online • prarambh.ai.pntservices.co.in</span>
          </div>
        </div>
      </div>

      {/* Sticky In-Page Navigation Bar */}
      <div className={styles.subNavBar}>
        <div className={styles.subNavBarInner}>
          <a href="#overview" className={styles.subNavLink}>Overview</a>
          <a href="#simulator" className={styles.subNavLink}>Live Web IDE</a>
          <a href="#features" className={styles.subNavLink}>Core Pillars</a>
          <a href="#ai-hardware" className={styles.subNavLink}>AI & Hardware</a>
          <a href="#curriculum" className={styles.subNavLink}>Learning Levels</a>
          <a href="#projects" className={styles.subNavLink}>
            <strong>Project Hub</strong>
          </a>
          <a href="#pricing" className={styles.subNavLink}>Commercial Models</a>
          <a
            href="https://prarambh.ai.pntservices.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.subNavCta}
          >
            Launch Prarambh <FaExternalLinkAlt style={{ fontSize: '11px' }} />
          </a>
        </div>
      </div>

      {/* ───────────────────────────────────────────────
          HERO SECTION
          ─────────────────────────────────────────────── */}
      <section className={styles.heroSection} id="overview">
        {/* Real Brand Logo of Prarambh */}
        <div className={styles.heroBrandHeader}>
          <div className={styles.brandLogoWrapper}>
            <img
              src="/assets/Prarambh_logo.png"
              alt="Prarambh - CODE / IOT / AI"
              className={styles.realPrarambhLogo}
            />
          </div>

          <div className={styles.futureReadyBadge}>
            <span>✨ + AI-Powered + Future Ready Learning</span>
          </div>
        </div>

        <div className={styles.heroGrid}>
          {/* Left Text */}
          <div className={styles.heroTextContent}>
            <div className={styles.doodleTag}>
              <span>✏️ LEARN • BUILD • INNOVATE</span>
            </div>

            <h1 className={styles.heroHeading}>
              Where Ideas Code, <br />
              <span className={styles.gradientText}>Projects Come Alive!</span>
            </h1>

            <p className={styles.heroDescription}>
              <strong>Prarambh</strong> is an all-in-one, web-based platform for coding, AI, IoT &amp; Robotics—designed
              for learners, educators and innovators of tomorrow. Developed in Odisha by AI PNT Technologies to empower
              students with hands-on, bilingual technology literacy.
            </p>

            <div className={styles.noInstallBanner}>
              <FaGlobe className={styles.noInstallIcon} />
              <div className={styles.noInstallText}>
                <strong>No Installation — Just Open &amp; Start Creating!</strong>
                <span>Runs completely inside modern web browsers with instant WebUSB hardware flashing.</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.heroActions}>
              <a
                href="https://prarambh.ai.pntservices.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryLaunchBtn}
              >
                <FaLaptopCode /> Open Prarambh Web IDE <FaExternalLinkAlt style={{ fontSize: '13px' }} />
              </a>

              <a href="#projects" className={styles.secondaryProjectsBtn}>
                <FaRocket /> Explore Project Showcase
              </a>
            </div>

            {/* 6 Feature Pills from Flyer */}
            <div className={styles.heroPillsGrid}>
              <div className={styles.heroPill}>
                <FaCode className={styles.pillIcon} style={{ color: '#818cf8' }} />
                <span>Block-Based Coding</span>
              </div>
              <div className={styles.heroPill}>
                <FaBrain className={styles.pillIcon} style={{ color: '#fb923c' }} />
                <span>AI &amp; ML Extensions</span>
              </div>
              <div className={styles.heroPill}>
                <FaRobot className={styles.pillIcon} style={{ color: '#2dd4bf' }} />
                <span>IoT &amp; Hardware</span>
              </div>
              <div className={styles.heroPill}>
                <FaMicrochip className={styles.pillIcon} style={{ color: '#f472b6' }} />
                <span>Multiple Boards</span>
              </div>
              <div className={styles.heroPill}>
                <FaGamepad className={styles.pillIcon} style={{ color: '#4ade80' }} />
                <span>Games &amp; Animation</span>
              </div>
              <div className={styles.heroPill}>
                <FaCloud className={styles.pillIcon} style={{ color: '#c084fc' }} />
                <span>Cloud Projects</span>
              </div>
            </div>
          </div>

          {/* Right Visual / Laptop Photo */}
          <div className={styles.heroVisual}>
            <div className={styles.floatingCardLeft}>
              <div className={`${styles.cardIconCircle} ${styles.cardIconCyan}`}>
                <FaRobot />
              </div>
              <div className={styles.floatingCardText}>
                <strong>Arduino &amp; ESP32</strong>
                <span>Direct WebUSB Flash</span>
              </div>
            </div>

            <div className={styles.laptopFrame}>
              <img
                src="/assets/generated/prarambh_product.jpg"
                alt="Prarambh Web IDE Interface on Laptop"
                className={styles.laptopImg}
              />
            </div>

            <div className={styles.floatingCardRight}>
              <div className={`${styles.cardIconCircle} ${styles.cardIconPink}`}>
                <FaBrain />
              </div>
              <div className={styles.floatingCardText}>
                <strong>Ask ATAT AI Tutor</strong>
                <span>Real-time Code Generator</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          REAL PRARAMBH WEB IDE INTERFACE
          ─────────────────────────────────────────────── */}
      <section className={styles.simulatorSection} id="simulator">
        <div className={styles.simulatorContainer}>
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionBadge} ${styles.badgePurple}`}>LIVE WEB-BASED ENVIRONMENT</span>
            <h2 className={styles.sectionTitle}>The Prarambh Web-Based IDE</h2>
            <p className={styles.sectionSub}>
              A comprehensive coding, AI, and robotics laboratory running entirely inside your web browser.
              No complex installations or drivers—just open and start coding with instant hardware WebUSB flashing!
            </p>
          </div>

          <div className={styles.realIdeShowcase}>
            <div className={styles.realIdeTitleBar}>
              <div className={styles.realIdeWindowControls}>
                <span className={`${styles.winDot} ${styles.winDotRed}`}></span>
                <span className={`${styles.winDot} ${styles.winDotYellow}`}></span>
                <span className={`${styles.winDot} ${styles.winDotGreen}`}></span>
              </div>

              <div className={styles.realIdeUrlBar}>
                <FaGlobe style={{ color: '#10b981' }} />
                <span>https://prarambh.ai.pntservices.co.in</span>
              </div>

              <div className={styles.realIdeActions}>
                <a
                  href="https://prarambh.ai.pntservices.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ideLiveLaunchLink}
                >
                  <FaLaptopCode /> Open Web IDE Live <FaExternalLinkAlt style={{ fontSize: '10px' }} />
                </a>
              </div>
            </div>

            <div className={styles.realIdeImgContainer}>
              <img
                src="/assets/generated/Prarambh.png"
                alt="Prarambh Real Web IDE Interface"
                className={styles.realIdeImg}
              />
            </div>
          </div>

          {/* Key Interface Highlights */}
          <div className={styles.realIdeFeaturesGrid}>
            <div className={styles.realIdeFeatureCard}>
              <div className={styles.realIdeFeatureCardHeader}>
                <div style={{ color: '#818cf8', fontSize: '18px' }}><FaCode /></div>
                <strong>Scratch 3.0 Compatible</strong>
              </div>
              <p>Motion, looks, sound, events, loops, variables, and math operators in familiar visual blocks.</p>
            </div>

            <div className={styles.realIdeFeatureCard}>
              <div className={styles.realIdeFeatureCardHeader}>
                <div style={{ color: '#fb923c', fontSize: '18px' }}><FaBrain /></div>
                <strong>Ask ATAT AI Tutor</strong>
              </div>
              <p>Embedded AI assistant right in the top navigation bar for real-time debugging, ideas, and code generation.</p>
            </div>

            <div className={styles.realIdeFeatureCard}>
              <div className={styles.realIdeFeatureCardHeader}>
                <div style={{ color: '#34d399', fontSize: '18px' }}><FaMicrochip /></div>
                <strong>WebUSB Serial Monitor</strong>
              </div>
              <p>Direct hardware telemetry, baud rate selection, and serial data inspection at the bottom console.</p>
            </div>

            <div className={styles.realIdeFeatureCard}>
              <div className={styles.realIdeFeatureCardHeader}>
                <div style={{ color: '#f472b6', fontSize: '18px' }}><FaCloud /></div>
                <strong>Cloud Save &amp; Project Pages</strong>
              </div>
              <p>One-click project sharing, student portfolios, and classroom remixing directly from the web.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          6 CORE PILLARS SECTION (FROM FLYER)
          ─────────────────────────────────────────────── */}
      <section className={styles.pillarsSection} id="features">
        <div className={styles.sectionHeader}>
          <span className={`${styles.sectionBadge} ${styles.badgeCyan}`}>PLATFORM FOUNDATIONS</span>
          <h2 className={styles.sectionTitle}>Everything Learners Need in One Platform</h2>
          <p className={styles.sectionSub}>
            From visual block coding for primary classes to neural network computer vision and
            cloud IoT telemetry for high school and college students.
          </p>
        </div>

        <div className={styles.pillarsGrid}>
          {corePillars.map((pillar, i) => (
            <div key={i} className={styles.pillarCard}>
              <div
                className={styles.pillarIconBox}
                style={{ background: pillar.bg, color: pillar.color }}
              >
                {pillar.icon}
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
              <div className={styles.pillarTagList}>
                {pillar.tags.map((tag, t) => (
                  <span key={t} className={styles.pillarTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          POWERFUL AI EXTENSIONS & HARDWARE SHOWCASE
          ─────────────────────────────────────────────── */}
      <section className={styles.extensionsSection} id="ai-hardware">
        <div className={styles.extHardwareGrid}>
          {/* Left: AI Extensions */}
          <div className={styles.featureBox}>
            <div className={styles.featureBoxHeader}>
              <div>
                <span className={`${styles.sectionBadge} ${styles.badgeOrange}`}>EDGE AI &amp; VISION</span>
                <h3 className={styles.featureBoxTitle}>Powerful AI Extensions</h3>
              </div>
              <FaBrain style={{ fontSize: '28px', color: '#fb923c' }} />
            </div>

            <div className={styles.aiPillsGrid}>
              {aiExtensions.map((ext, idx) => (
                <div key={idx} className={styles.aiExtensionCard}>
                  <div className={styles.aiExtIcon} style={{ background: `${ext.color}22`, color: ext.color }}>
                    {ext.icon}
                  </div>
                  <div className={styles.aiExtInfo}>
                    <h4>{ext.title}</h4>
                    <p>{ext.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', fontSize: '13px', color: '#94a3b8' }}>
              ... and many more: OCR, Sentiment Analysis, Color Classification &amp; Teachable Machine imports!
            </div>
          </div>

          {/* Right: Works with Popular Hardware */}
          <div className={styles.featureBox}>
            <div className={styles.featureBoxHeader}>
              <div>
                <span className={`${styles.sectionBadge} ${styles.badgeGreen}`}>PHYSICAL COMPUTING</span>
                <h3 className={styles.featureBoxTitle}>Works with Popular Hardware</h3>
              </div>
              <FaMicrochip style={{ fontSize: '28px', color: '#34d399' }} />
            </div>

            <div className={styles.hardwareList}>
              {supportedHardware.map((hw, idx) => (
                <div key={idx} className={styles.hardwareItem}>
                  <div className={styles.hardwareLeft}>
                    <div className={styles.hwIconCircle}>
                      <FaMicrochip />
                    </div>
                    <div className={styles.hwDetails}>
                      <strong>{hw.name}</strong>
                      <span>{hw.desc}</span>
                    </div>
                  </div>
                  <span className={styles.hwBadge}>{hw.badge}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '20px', padding: '14px', background: 'rgba(56, 189, 248, 0.08)', borderRadius: '10px', fontSize: '13px', color: '#7dd3fc', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaCheckCircle style={{ color: '#38bdf8', flexShrink: 0 }} />
              <span>Includes plug-and-play USB flashing right inside Chrome and Edge browsers without installing external drivers!</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          LEVELWISE LEARNING PATHWAYS
          ─────────────────────────────────────────────── */}
      <section className={styles.learningSection} id="curriculum">
        <div className={styles.sectionHeader}>
          <span className={`${styles.sectionBadge} ${styles.badgePurple}`}>STEP-BY-STEP PROGRESSION</span>
          <h2 className={styles.sectionTitle}>Levelwise Structured Learning</h2>
          <p className={styles.sectionSub}>
            Carefully crafted curriculum aligned with NEP 2020 guidelines, evolving students
            from visual computational thinkers to advanced AI hardware innovators.
          </p>
        </div>

        <div className={styles.learningCardsGrid}>
          {learningLevels.map((lvl, idx) => (
            <div key={idx} className={styles.levelCard}>
              <span className={styles.levelNumberBadge}>{lvl.level}</span>
              <span className={styles.levelStageTag} style={{ color: lvl.color }}>{lvl.stage}</span>
              <h4>{lvl.title}</h4>
              <p>{lvl.desc}</p>
              <ul className={styles.levelFeaturesList}>
                {lvl.features.map((feat, f) => (
                  <li key={f}>
                    <FaCheck style={{ color: lvl.color, fontSize: '11px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 4 Learning Highlights from Flyer */}
        <div className={styles.learningHighlightsBar}>
          <div className={styles.learningHighlightItem}>
            <div className={styles.hlIcon}>
              <FaLaptopCode />
            </div>
            <div className={styles.hlText}>
              <strong>Interactive Tutorials</strong>
              <span>Step-by-step guided coding with animated hints</span>
            </div>
          </div>

          <div className={styles.learningHighlightItem}>
            <div className={styles.hlIcon}>
              <FaTools />
            </div>
            <div className={styles.hlText}>
              <strong>Hands-on Projects</strong>
              <span>Learn by building physical robots and IoT systems</span>
            </div>
          </div>

          <div className={styles.learningHighlightItem}>
            <div className={styles.hlIcon}>
              <FaBrain />
            </div>
            <div className={styles.hlText}>
              <strong>Real-time Feedback</strong>
              <span>Instant error detection and block auto-correction</span>
            </div>
          </div>

          <div className={styles.learningHighlightItem}>
            <div className={styles.hlIcon}>
              <FaGraduationCap />
            </div>
            <div className={styles.hlText}>
              <strong>Student Friendly UI</strong>
              <span>Gamified, multilingual interface in English &amp; Odia</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          DEDICATED PRARAMBH PROJECT HUB / PROJECT PAGE
          ─────────────────────────────────────────────── */}
      <section className={styles.projectHubSection} id="projects">
        <div className={styles.projectHubContainer}>
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionBadge} ${styles.badgeCyan}`}>PROJECT HUB &amp; SHOWCASE</span>
            <h2 className={styles.sectionTitle}>Explore Prarambh Projects</h2>
            <p className={styles.sectionSub}>
              Discover hands-on AI, IoT, and Robotics projects created by students and educators.
              Click any project to see the wiring schematics, block breakdown, or launch directly in the web IDE!
            </p>
          </div>

          {/* Filter Bar & Action */}
          <div className={styles.projectControlsBar}>
            <div className={styles.projectFilterTabs}>
              <button
                className={`${styles.filterTabBtn} ${selectedFilter === 'all' ? styles.filterTabBtnActive : ''}`}
                onClick={() => setSelectedFilter('all')}
              >
                All Projects ({initialProjects.length})
              </button>
              <button
                className={`${styles.filterTabBtn} ${selectedFilter === 'ai-vision' ? styles.filterTabBtnActive : ''}`}
                onClick={() => setSelectedFilter('ai-vision')}
              >
                AI &amp; Vision
              </button>
              <button
                className={`${styles.filterTabBtn} ${selectedFilter === 'iot-hardware' ? styles.filterTabBtnActive : ''}`}
                onClick={() => setSelectedFilter('iot-hardware')}
              >
                IoT &amp; Sensors
              </button>
              <button
                className={`${styles.filterTabBtn} ${selectedFilter === 'robotics' ? styles.filterTabBtnActive : ''}`}
                onClick={() => setSelectedFilter('robotics')}
              >
                Robotics &amp; Rovers
              </button>
              <button
                className={`${styles.filterTabBtn} ${selectedFilter === 'regional-odia' ? styles.filterTabBtnActive : ''}`}
                onClick={() => setSelectedFilter('regional-odia')}
              >
                Regional (Odia AI)
              </button>
              <button
                className={`${styles.filterTabBtn} ${selectedFilter === 'games' ? styles.filterTabBtnActive : ''}`}
                onClick={() => setSelectedFilter('games')}
              >
                Games &amp; Animation
              </button>
            </div>

            <div className={styles.projectActionBtns}>
              <button
                className={styles.btnNewProject}
                onClick={() => {
                  setSelectedModelForInquiry('Propose New Project / School Showcase');
                  setShowInquiryModal(true);
                }}
              >
                <FaRocket /> Submit Project Idea
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.projectCardVisual}>
                  <div
                    className={styles.projectCardVisualGradient}
                    style={{
                      background: project.category === 'ai-vision'
                        ? 'linear-gradient(135deg, #4f46e5, #06b6d4)'
                        : project.category === 'robotics'
                        ? 'linear-gradient(135deg, #059669, #10b981)'
                        : project.category === 'regional-odia'
                        ? 'linear-gradient(135deg, #d97706, #f59e0b)'
                        : project.category === 'games'
                        ? 'linear-gradient(135deg, #db2777, #ec4899)'
                        : 'linear-gradient(135deg, #2563eb, #38bdf8)'
                    }}
                  />

                  <div className={styles.projectCardIconBig}>
                    {project.category === 'ai-vision' && <FaBrain />}
                    {project.category === 'robotics' && <FaRobot />}
                    {project.category === 'regional-odia' && <FaLanguage />}
                    {project.category === 'games' && <FaGamepad />}
                    {project.category === 'iot-hardware' && <FaMicrochip />}
                  </div>

                  <div className={styles.projectCardBadges}>
                    <span className={styles.projectLevelTag}>{project.level}</span>
                    <span className={styles.projectCategoryTag}>{project.categoryLabel}</span>
                  </div>
                </div>

                <div className={styles.projectCardBody}>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>

                  <div className={styles.projectHardwarePills}>
                    {project.hardware.map((hw, h) => (
                      <span key={h} className={styles.projectHwPill}>
                        <FaMicrochip style={{ fontSize: '10px' }} /> {hw}
                      </span>
                    ))}
                    {project.aiTags.map((tag, t) => (
                      <span key={t} className={styles.projectAiPill}>
                        <FaBrain style={{ fontSize: '10px' }} /> {tag}
                      </span>
                    ))}
                  </div>

                  <div className={styles.projectCardActions}>
                    <button
                      className={styles.btnViewProject}
                      onClick={() => setActiveProjectModal(project)}
                    >
                      <FaFileCode /> See Inside
                    </button>

                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.btnOpenIde}
                    >
                      Open in IDE <FaExternalLinkAlt style={{ fontSize: '10px' }} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          FLEXIBLE ENGAGEMENT MODELS (PRICING TIERS)
          ─────────────────────────────────────────────── */}
      <section className={styles.pricingSection} id="pricing">
        <div className={styles.sectionHeader}>
          <span className={`${styles.sectionBadge} ${styles.badgeOrange}`}>INSTITUTIONAL PARTNERSHIPS</span>
          <h2 className={styles.sectionTitle}>Flexible Engagement Models</h2>
          <p className={styles.sectionSub}>
            Choose the model that works best for your school, college, or educational organization.
            Fully customizable lab hardware, teacher training, and institutional SLAs.
          </p>
        </div>

        <div className={styles.pricingGrid}>
          {engagementModels.map((model, idx) => (
            <div
              key={idx}
              className={`${styles.pricingCard} ${model.featured ? styles.pricingCardFeatured : ''}`}
            >
              {model.featured && (
                <div className={styles.featuredBadge}>⭐ MOST POPULAR FOR SCHOOLS</div>
              )}

              <div className={`${styles.modelLetterBadge} ${model.colorClass}`}>
                {model.letter}
              </div>

              <h3 className={styles.pricingModelTitle}>{model.title}</h3>

              <div className={styles.pricingFigureBox}>
                <div className={styles.pricingAmount}>{model.amount}</div>
                <span className={styles.pricingSubtext}>{model.unit}</span>
              </div>

              <ul className={styles.pricingFeaturesList}>
                {model.features.map((feat, f) => (
                  <li key={f}>
                    <FaCheckCircle className={styles.checkIcon} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '18px', fontStyle: 'italic' }}>
                {model.note}
              </div>

              <button
                className={`${styles.pricingCtaBtn} ${model.featured ? styles.btnSolidPricing : styles.btnOutlinePricing}`}
                onClick={() => {
                  setSelectedModelForInquiry(`${model.title} (${model.amount})`);
                  setShowInquiryModal(true);
                }}
              >
                {model.ctaText} <FaArrowRight style={{ fontSize: '12px' }} />
              </button>
            </div>
          ))}
        </div>

        <p className={styles.pricingDisclaimer}>
          * Indicative pricing. Final commercial terms may vary based on configuration, hardware quantities, and scope of school deployment.
        </p>
      </section>

      {/* ───────────────────────────────────────────────
          FOUR PILLARS BANNER (SPARK, BUILD, INNOVATE, BECOME)
          ─────────────────────────────────────────────── */}
      <div className={styles.fourPillarsStrip}>
        <div className={styles.fourPillarsContainer}>
          <div className={styles.fourPillarItem}>
            <FaRocket className={styles.fourPillarIcon} />
            <div className={styles.fourPillarText}>
              <strong>Spark Curiosity</strong>
              <span>Inspire wonder in young creators</span>
            </div>
          </div>

          <div className={styles.fourPillarItem}>
            <FaLightbulb className={styles.fourPillarIcon} />
            <div className={styles.fourPillarText}>
              <strong>Build Confidence</strong>
              <span>Hands-on triumphs through building</span>
            </div>
          </div>

          <div className={styles.fourPillarItem}>
            <FaCog className={styles.fourPillarIcon} />
            <div className={styles.fourPillarText}>
              <strong>Innovate Fearlessly</strong>
              <span>Experiment with AI and hardware</span>
            </div>
          </div>

          <div className={styles.fourPillarItem}>
            <FaTrophy className={styles.fourPillarIcon} />
            <div className={styles.fourPillarText}>
              <strong>Become Future Ready</strong>
              <span>Equipped for the AI century</span>
            </div>
          </div>
        </div>
      </div>

      {/* ───────────────────────────────────────────────
          READY TO CREATE / QR CODE CTA SECTION
          ─────────────────────────────────────────────── */}
      <section className={styles.readyCtaSection}>
        <div className={styles.readyCtaBox}>
          <div className={styles.readyCtaText}>
            <h2>Ready to Create Something Amazing?</h2>
            <p>
              Prarambh is revolutionizing how school students and educators interact with code,
              robotics, and artificial intelligence. Deploy in your classrooms today or explore the live platform right in your browser.
            </p>

            <div className={styles.readyActionRow}>
              <a
                href="https://prarambh.ai.pntservices.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnReadyLaunch}
              >
                <FaLaptopCode /> Open Prarambh Web IDE
              </a>

              <button
                className={styles.btnReadyContact}
                onClick={() => {
                  setSelectedModelForInquiry('General School Demo / Inquiry');
                  setShowInquiryModal(true);
                }}
              >
                <FaCalendarCheck /> Book School Demo
              </button>
            </div>
          </div>

          {/* QR Code Presentation */}
          <div className={styles.readyQrCard}>
            <div className={styles.qrSvgWrapper}>
              {/* Clean SVG QR code representation with direct URL */}
              <svg viewBox="0 0 100 100" width="100%" height="100%" shapeRendering="crispEdges">
                <rect width="100" height="100" fill="#ffffff" />
                {/* QR Pattern */}
                <path
                  d="M10,10 h24 v24 h-24 z M14,14 h16 v16 h-16 z M18,18 h8 v8 h-8 z M66,10 h24 v24 h-24 z M70,14 h16 v16 h-16 z M74,18 h8 v8 h-8 z M10,66 h24 v24 h-24 z M14,70 h16 v16 h-16 z M18,74 h8 v8 h-8 z M40,14 h6 v6 h-6 z M52,14 h6 v12 h-6 z M40,24 h6 v6 h-6 z M46,30 h8 v8 h-8 z M14,40 h6 v6 h-6 z M24,40 h12 v6 h-12 z M14,50 h8 v8 h-8 z M38,46 h8 v12 h-8 z M50,46 h12 v6 h-12 z M66,40 h8 v12 h-8 z M80,40 h10 v6 h-10 z M74,52 h12 v8 h-12 z M40,66 h6 v6 h-6 z M50,66 h12 v6 h-12 z M40,76 h8 v6 h-8 z M52,76 h8 v12 h-8 z M66,66 h8 v14 h-8 z M78,66 h12 v6 h-12 z M84,76 h6 v12 h-6 z M66,84 h12 v6 h-12 z"
                  fill="#1e1b4b"
                />
              </svg>
            </div>

            <strong>Scan to Explore Prarambh!</strong>
            <span>Direct Web Browser Access</span>
            <span className={styles.qrUrlPill}>prarambh.ai.pntservices.co.in</span>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          PROJECT DETAILS MODAL ("See Inside")
          ─────────────────────────────────────────────── */}
      {activeProjectModal && (
        <div className={styles.modalBackdrop} onClick={() => setActiveProjectModal(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderLeft}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                  <span className={styles.projectCategoryTag}>{activeProjectModal.categoryLabel}</span>
                  <span className={styles.projectLevelTag}>{activeProjectModal.level}</span>
                </div>
                <h3>{activeProjectModal.title}</h3>
              </div>

              <button
                className={styles.modalCloseBtn}
                onClick={() => setActiveProjectModal(null)}
              >
                <FaTimes />
              </button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalSection}>
                <h4>Overview &amp; Concept</h4>
                <p>{activeProjectModal.fullDesc}</p>
              </div>

              <div className={styles.modalSection}>
                <h4>
                  <FaFileCode style={{ color: '#38bdf8' }} /> Prarambh Block Code Breakdown
                </h4>
                <div className={styles.codeSnippetBlock}>
                  {activeProjectModal.blocksUsed.map((line, l) => (
                    <div key={l}>{line}</div>
                  ))}
                </div>
              </div>

              <div className={styles.modalSection}>
                <h4>
                  <FaMicrochip style={{ color: '#34d399' }} /> Bill of Materials (BOM) &amp; Hardware
                </h4>
                <div className={styles.bomList}>
                  {activeProjectModal.bom.map((item, b) => (
                    <div key={b} className={styles.bomItem}>
                      <FaCheckCircle style={{ color: '#10b981', flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button
                className={styles.btnViewProject}
                onClick={() => setActiveProjectModal(null)}
              >
                Close
              </button>

              <a
                href={activeProjectModal.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnOpenIde}
              >
                Open Project in Web IDE <FaExternalLinkAlt style={{ fontSize: '11px' }} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ───────────────────────────────────────────────
          INQUIRY & DEMO REQUEST MODAL
          ─────────────────────────────────────────────── */}
      {showInquiryModal && (
        <div className={styles.modalBackdrop} onClick={() => setShowInquiryModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderLeft}>
                <h3>Inquire About Prarambh</h3>
                <span style={{ fontSize: '13px', color: '#94a3b8' }}>
                  Model: <strong style={{ color: '#fbbf24' }}>{selectedModelForInquiry}</strong>
                </span>
              </div>

              <button
                className={styles.modalCloseBtn}
                onClick={() => setShowInquiryModal(false)}
              >
                <FaTimes />
              </button>
            </div>

            <div className={styles.modalBody}>
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '30px 20px' }}>
                  <FaCheckCircle style={{ fontSize: '48px', color: '#10b981', marginBottom: '16px' }} />
                  <h4 style={{ fontSize: '20px', color: '#ffffff', marginBottom: '8px' }}>Thank you for reaching out!</h4>
                  <p style={{ color: '#94a3b8', fontSize: '14px' }}>
                    Our educational engineering team at AI PNT will contact your institution within 24 hours with details,
                    live demonstration schedules, and custom lab proposals.
                  </p>
                  <button
                    className={styles.submitBtn}
                    style={{ marginTop: '20px', padding: '10px 24px' }}
                    onClick={() => {
                      setFormSubmitted(false);
                      setShowInquiryModal(false);
                    }}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                >
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Rajesh Mohanty"
                        className={styles.formInput}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>School / Institution Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. DPS Kalinga / Silicon Public School"
                        className={styles.formInput}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@school.edu.in"
                        className={styles.formInput}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className={styles.formInput}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Engagement Preference</label>
                    <select
                      value={selectedModelForInquiry}
                      onChange={(e) => setSelectedModelForInquiry(e.target.value)}
                      className={styles.formSelect}
                    >
                      <option>One-Time Purchase Model (₹12 Lakhs / 10 Systems)</option>
                      <option>Student Subscription (₹100–₹200/student/mo)</option>
                      <option>Custom Development Support (₹100–₹900/hr)</option>
                      <option>Propose New Project / School Showcase</option>
                      <option>General School Demo / Inquiry</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Tell us about your requirements or student strength</label>
                    <textarea
                      placeholder="Number of students, grade levels, current computer lab setup, or custom project ideas..."
                      className={styles.formTextarea}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Send Inquiry to AI PNT Team
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
