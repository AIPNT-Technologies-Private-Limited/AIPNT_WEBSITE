"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaRobot,
  FaUserCheck,
  FaFilePowerpoint,
  FaComments,
  FaLightbulb,
  FaArrowRight,
  FaCheckCircle,
  FaPlay,
  FaPause,
  FaBookOpen,
  FaLock,
  FaLaptopCode,
  FaChartLine,
  FaUsers,
  FaCalendarCheck,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaMicrochip,
  FaExternalLinkAlt,
  FaExpand
} from 'react-icons/fa';

// Slide Topics for PPT Simulator
const slideTopics = {
  photosynthesis: {
    id: 'photosynthesis',
    subject: 'Science • Class 8',
    title: 'Photosynthesis Process',
    slideText:
      'Photosynthesis is the fundamental bio-chemical process by which green plants synthesize glucose using sunlight, water, and carbon dioxide while releasing life-sustaining oxygen.',
    steps: [
      '1. Absorption of solar photons by Chlorophyll pigments',
      '2. Conversion of light energy into chemical energy (ATP/NADPH)',
      '3. Splitting of water molecules into Hydrogen and Oxygen',
      '4. Reduction of Carbon Dioxide into Carbohydrates (Glucose)'
    ],
    avatarSpeech:
      'Hello class! Look at the green leaf on this slide. Can you see how sunlight and carbon dioxide enter the stomata while fresh oxygen is released? Plants use this glucose for their own energy and growth. Ask me anything about this slide!',
    questions: [
      {
        q: 'Why are leaves green?',
        a: 'Leaves are green because chlorophyll pigments absorb red and blue light wavelengths while reflecting green light back to our eyes!'
      },
      {
        q: 'What happens to photosynthesis at night?',
        a: 'At night without sunlight, the light-dependent reactions stop. Plants take in small amounts of oxygen and release CO2 through cellular respiration.'
      },
      {
        q: 'Can you summarize this into 2 key exam bullet points?',
        a: 'Exam Summary: (1) Equation: 6CO2 + 6H2O + Sunlight -> C6H12O6 + 6O2. (2) Site: Occurs inside chloroplasts in leaf cells.'
      }
    ]
  },
  quadratic: {
    id: 'quadratic',
    subject: 'Mathematics • Class 10',
    title: 'Quadratic Equations & Parabolas',
    slideText:
      'A quadratic equation has the standard algebraic form ax² + bx + c = 0 (where a ≠ 0). The geometric graph forms a symmetrical curved parabola whose roots represent x-intercepts.',
    steps: [
      '1. Standard Form: ax² + bx + c = 0',
      '2. Discriminant D = b² - 4ac determines real or complex roots',
      '3. Quadratic Formula: x = (-b ± √D) / 2a',
      '4. Parabola opens upward when a > 0, downward when a < 0'
    ],
    avatarSpeech:
      'Welcome to Mathematics! Whenever you kick a soccer ball or see a suspension bridge, you are looking at a parabola. Today let us explore how the discriminant b² - 4ac tells us if the curve touches the ground twice, once, or never!',
    questions: [
      {
        q: 'What does D = 0 mean geometrically?',
        a: 'When D = 0, the parabola touches the x-axis at exactly one point (the vertex), meaning the equation has two identical real roots.'
      },
      {
        q: 'How do I quickly find the vertex of a parabola?',
        a: 'The vertex x-coordinate is always located at x = -b / (2a). Substitute that x back into the equation to find the peak or trough height y.'
      },
      {
        q: 'Give me a real-world example of quadratic curves.',
        a: 'Satellite dish receivers, flashlight reflectors, fountain water arcs, and basketball free-throw trajectories all follow quadratic curves.'
      }
    ]
  },
  solar: {
    id: 'solar',
    subject: 'Geography & Physics • Class 6',
    title: 'Solar System & Planetary Orbits',
    slideText:
      'Our Solar System comprises the Sun, 8 planets, dwarf planets, and millions of asteroids and comets bound in elliptical orbits governed by gravitational mechanics.',
    steps: [
      '1. Terrestrial Rocky Planets: Mercury, Venus, Earth, Mars',
      '2. The Asteroid Belt separating inner and outer worlds',
      '3. Gas & Ice Giants: Jupiter, Saturn, Uranus, Neptune',
      '4. Keplerian Elliptical Orbits driven by Solar Gravity'
    ],
    avatarSpeech:
      'Fasten your seatbelts, young astronomers! We are orbiting our Sun. Did you know that Jupiter has over 90 moons and is so massive that more than 1,300 Earths could fit inside it? Ask me any space mystery!',
    questions: [
      {
        q: 'Why do planets orbit in ellipses instead of perfect circles?',
        a: 'As Johannes Kepler discovered, gravitational pull speeds planets up when they are closer to the Sun and slows them down when further away, creating an ellipse.'
      },
      {
        q: 'Which is the hottest planet in the Solar System?',
        a: 'Venus! Even though Mercury is closer to the Sun, Venus has a thick carbon dioxide atmosphere that traps heat in an extreme runaway greenhouse effect.'
      },
      {
        q: 'What is the Kuiper Belt?',
        a: 'The Kuiper Belt is a vast frozen ring of icy bodies and dwarf planets like Pluto extending beyond the orbit of Neptune.'
      }
    ]
  }
};

// FAQs for Schools & Educators
const faqs = [
  {
    q: 'How does ATAT integrate with our school’s existing smart boards and interactive displays?',
    a: 'ATAT runs seamlessly on all modern interactive touch whiteboards, Windows interactive panels, Android smart displays, Chromebooks, and school lab PCs. It requires zero custom hardware drivers and works directly via browser or standalone desktop client.'
  },
  {
    q: 'Can ATAT work with our state curriculum or custom textbooks?',
    a: 'Yes! ATAT features open RAG (Retrieval-Augmented Generation) document indexing. Teachers can upload their NCERT, CBSE, ICSE, or State Board syllabi, presentation PPTs, and PDFs. ATAT’s answers remain strictly grounded in your approved school materials without hallucination.'
  },
  {
    q: 'How does Face Authentication protect student privacy?',
    a: 'Student biometric face embeddings are stored in localized encrypted vectors and are never sold or shared with external third parties. Face authentication ensures fast, zero-password login for young children without the risk of forgotten passwords.'
  },
  {
    q: 'What is the difference between Student Mode and Teacher Mode?',
    a: 'Student Mode acts as a friendly, Socratic 1-on-1 personal tutor that guides students through lessons, clarifies doubts, and tests comprehension. Teacher Mode is an educator cockpit that auto-generates lesson slides, creates adaptive question banks, and provides real-time class comprehension analytics.'
  },
  {
    q: 'Can schools customize ATAT under their own school institutional brand?',
    a: 'Yes. Through Model C (Custom Development Support), AIPNT provides white-label deployments where ATAT is customized with the school’s branding, mascot avatar, uniform colors, and institutional LMS integration.'
  }
];

export default function ATATPage() {
  // Dual Mode State
  const [activeMode, setActiveMode] = useState('student'); // 'student' | 'teacher'

  // PPT Simulator State
  const [activeTopic, setActiveTopic] = useState('photosynthesis');
  const [avatarVoiceActive, setAvatarVoiceActive] = useState(false);
  const [displayedSpeech, setDisplayedSpeech] = useState('');
  const [activeAnswer, setActiveAnswer] = useState(null);

  // Pricing Estimator State
  const [estStudents, setEstStudents] = useState(600);
  const [estSystems, setEstSystems] = useState(10);

  // FAQ State
  const [openFaq, setOpenFaq] = useState(0);

  // Modals
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [infographicOpen, setInfographicOpen] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: '',
    contactName: '',
    email: '',
    phone: '',
    board: 'CBSE',
    students: '500 - 1500 Students',
    city: ''
  });

  const topicData = slideTopics[activeTopic];

  // Speech streaming effect
  useEffect(() => {
    let timer;
    if (avatarVoiceActive) {
      const fullText = topicData.avatarSpeech;
      let idx = 0;
      setDisplayedSpeech('');
      timer = setInterval(() => {
        if (idx < fullText.length) {
          setDisplayedSpeech(fullText.slice(0, idx + 2));
          idx += 2;
        } else {
          clearInterval(timer);
          setAvatarVoiceActive(false);
        }
      }, 35);
    } else {
      setDisplayedSpeech(topicData.avatarSpeech);
    }
    return () => clearInterval(timer);
  }, [avatarVoiceActive, activeTopic]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setModalSubmitted(true);
  };

  // ROI Estimations
  const monthlyCostPerStudent = estStudents > 1000 ? 120 : estStudents > 500 ? 150 : 180;
  const teacherHoursSavedPerWeek = Math.round((estStudents / 60) * 4);
  const totalAnnualInvestment = ((estStudents * monthlyCostPerStudent * 12) / 100000).toFixed(1);

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {/* Ambient EdTech Glow Orbs */}
      <div className={styles.bgGlowOrb1} />
      <div className={styles.bgGlowOrb2} />
      <div className={styles.bgGlowOrb3} />
      <div className={styles.bgGlowOrb4} />

      {/* Top Bar with Breadcrumbs & Live Status */}
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
            <span className={styles.breadcrumbCurrent}>ATAT</span>
          </div>

          <div className={styles.liveBadge}>
            <span className={styles.pulseDot} />
            <span>✨ AI-Powered • 💬 Interactive • 🛡️ Secure</span>
          </div>

          <div className={styles.quickNav}>
            <a href="#dual-mode" className={styles.quickNavBtn}>
              Dual Mode
            </a>
            <a href="#simulator" className={styles.quickNavBtn}>
              PPT Simulator
            </a>
            <a href="#capabilities" className={styles.quickNavBtn}>
              Capabilities
            </a>
            <a href="#workflow" className={styles.quickNavBtn}>
              How It Works
            </a>
            <a href="#pricing" className={styles.quickNavBtn}>
              Pricing Models
            </a>
            <a href="#infographic" className={styles.quickNavBtn}>
              Full Infographic
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroLogoWrap}>
          <img src="/assets/atat/atat_logo.png" alt="ATAT Logo" className={styles.heroLogo} />
        </div>

        <div className={styles.heroTag}>
          <FaRobot /> AI TEACHING ASSISTANT
        </div>

        <h1 className={styles.heroTitle}>
          Your AI Teacher. <br />
          <span className={styles.gradientPurple}>Always Ready.</span>
        </h1>

        <p className={styles.heroSubtitle}>
          ATAT is an intelligent AI teaching assistant that helps students learn better and enables teachers to create
          engaging lessons effortlessly. Socratic Q&amp;A, presentation-based discussions, biometric face authentication,
          and dual student/teacher modes.
        </p>

        <div className={styles.heroMotto}>
          <span>LEARN • BUILD • GROW TOGETHER</span>
          <span>•</span>
          <span>SAME CLASSROOM, BRIGHTER TOMORROW</span>
        </div>

        <div className={styles.heroActions}>
          <button className={styles.btnPrimary} onClick={() => setModalOpen(true)}>
            Schedule School Pilot <FaArrowRight />
          </button>
          <a href="#simulator" className={styles.btnSecondary}>
            <FaFilePowerpoint /> Try PPT Lesson Demo
          </a>
          <button className={styles.btnOutline} onClick={() => setInfographicOpen(true)}>
            <FaExpand /> View Full Infographic
          </button>
        </div>

        {/* 4 Key Highlights Row from Infographic */}
        <div className={styles.heroHighlightsRow}>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIconWrap} style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#c084fc' }}>
              <FaUsers />
            </div>
            <div className={styles.highlightTitle}>Dual Mode</div>
            <div className={styles.highlightDesc}>Dedicated Student &amp; Teacher specialized interfaces in one ecosystem</div>
          </div>

          <div className={styles.highlightCard}>
            <div className={styles.highlightIconWrap} style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>
              <FaUserCheck />
            </div>
            <div className={styles.highlightTitle}>Secure Access</div>
            <div className={styles.highlightDesc}>Sub-1s face recognition for safe, passwordless, and private student login</div>
          </div>

          <div className={styles.highlightCard}>
            <div className={styles.highlightIconWrap} style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#f472b6' }}>
              <FaComments />
            </div>
            <div className={styles.highlightTitle}>Interactive Learning</div>
            <div className={styles.highlightDesc}>Conversational AI that chats naturally about uploaded slides and textbooks</div>
          </div>

          <div className={styles.highlightCard}>
            <div className={styles.highlightIconWrap} style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#22d3ee' }}>
              <FaChartLine />
            </div>
            <div className={styles.highlightTitle}>Smart Teaching</div>
            <div className={styles.highlightDesc}>Automated quiz generation, curriculum alignment &amp; student comprehension analytics</div>
          </div>
        </div>

        {/* Master Classroom Showcase Banner */}
        <div className={styles.heroBannerWrap}>
          <img
            src="/assets/generated/ai_teacher_product.jpg"
            alt="ATAT Smart Classroom in Action"
            className={styles.heroBannerImg}
          />
          <div className={styles.heroBannerOverlay}>
            <div className={styles.heroBannerCaption}>
              <h4>ATAT Active in Modern Classrooms</h4>
              <p>Smart interactive whiteboards, synchronized student tablets, and Prarambh STEM lab integration.</p>
            </div>
            <div className={styles.heroBannerPills}>
              <span className={styles.heroBannerPill}>NEP 2020 Aligned</span>
              <span className={styles.heroBannerPill}>CBSE / ICSE / State</span>
              <span className={styles.heroBannerPill}>Bilingual Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Dual Mode Switcher (Student Mode vs Teacher Mode) */}
      <section className={styles.section} id="dual-mode">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>TAILORED EXPERIENCES</span>
          <h2 className={styles.sectionTitle}>Two Distinct Modes for the Modern Classroom</h2>
          <p className={styles.sectionDesc}>
            Whether an educator is orchestrating a 45-minute lesson or a student is exploring complex science concepts,
            ATAT adapts its interface and intelligence to match the exact context.
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className={styles.modeTabs}>
          <button
            className={`${styles.modeTabBtn} ${activeMode === 'student' ? styles.modeTabBtnActive : ''}`}
            onClick={() => setActiveMode('student')}
          >
            <FaGraduationCap style={{ fontSize: '20px' }} />
            <span>Student Mode — &quot;Learn, Ask, Explore&quot;</span>
          </button>
          <button
            className={`${styles.modeTabBtn} ${activeMode === 'teacher' ? styles.modeTabBtnActive : ''}`}
            onClick={() => setActiveMode('teacher')}
          >
            <FaChalkboardTeacher style={{ fontSize: '20px' }} />
            <span>Teacher Mode — &quot;Create, Manage, Teach&quot;</span>
          </button>
        </div>

        {/* Active Mode Card */}
        <div className={styles.modeShowcaseCard}>
          <div>
            <div
              className={styles.modeBadge}
              style={{
                background: activeMode === 'student' ? 'rgba(139, 92, 246, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                color: activeMode === 'student' ? '#c084fc' : '#34d399'
              }}
            >
              {activeMode === 'student' ? '🎓 FOR LEARNERS OF ALL AGES' : '📖 FOR EDUCATORS & INSTRUCTORS'}
            </div>

            <h3 className={styles.modeTitle}>
              {activeMode === 'student' ? 'Personalized Socratic AI Tutoring' : 'The Educator Co-Pilot That Saves Hours'}
            </h3>

            <div className={styles.modeSubtitle}>
              {activeMode === 'student'
                ? 'Patience that never runs out. Answers adapted to your learning speed.'
                : 'Automated lesson plans, formative quiz creation, and real-time comprehension telemetry.'}
            </div>

            <p className={styles.modeDesc}>
              {activeMode === 'student'
                ? 'Students can ask questions in natural language, break down tough math equations into step-by-step logic, and receive instant positive reinforcement without fear of judgment.'
                : 'Teachers upload their presentation slides or chapter PDF, and ATAT automatically extracts key concepts, generates multiple-choice quizzes, and identifies which students need extra attention.'}
            </p>

            <div className={styles.modeFeatureList}>
              {activeMode === 'student' ? (
                <>
                  <div className={styles.modeFeatureItem}>
                    <FaCheckCircle className={styles.modeFeatureIcon} />
                    <span>
                      <strong>Interactive PPT Explanations: </strong> Click any diagram or formula on the slide to get a plain-English explanation.
                    </span>
                  </div>
                  <div className={styles.modeFeatureItem}>
                    <FaCheckCircle className={styles.modeFeatureIcon} />
                    <span>
                      <strong>Socratic Guidance: </strong> ATAT asks guiding questions rather than just handing out answers, fostering critical thinking.
                    </span>
                  </div>
                  <div className={styles.modeFeatureItem}>
                    <FaCheckCircle className={styles.modeFeatureIcon} />
                    <span>
                      <strong>24/7 Homework Companion: </strong> Available during evening revision to clear doubts before morning exams.
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.modeFeatureItem}>
                    <FaCheckCircle className={styles.modeFeatureIcon} />
                    <span>
                      <strong>Instant PPT to Interactive Lesson: </strong> Turn static slide decks into engaging classroom discussions in seconds.
                    </span>
                  </div>
                  <div className={styles.modeFeatureItem}>
                    <FaCheckCircle className={styles.modeFeatureIcon} />
                    <span>
                      <strong>Formative Quiz Generator: </strong> Generates Bloom&apos;s Taxonomy-aligned MCQs, short answers, and HOTS questions.
                    </span>
                  </div>
                  <div className={styles.modeFeatureItem}>
                    <FaCheckCircle className={styles.modeFeatureIcon} />
                    <span>
                      <strong>Classroom Analytics Dashboard: </strong> Track which concepts confused students most and focus lecture time effectively.
                    </span>
                  </div>
                </>
              )}
            </div>

            <button className={styles.btnPrimary} onClick={() => setModalOpen(true)}>
              Schedule On-Campus Demo <FaArrowRight />
            </button>
          </div>

          <div className={styles.modeVisualWrap}>
            <img
              src="/assets/atat/atat_interactive_ui.jpg"
              alt="ATAT Interactive UI"
              className={styles.modeVisualImg}
            />
          </div>
        </div>
      </section>

      {/* Section 2: Interactive PPT-Based Learning Simulator */}
      <section className={styles.section} id="simulator">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>LIVE INTERACTIVE DEMO</span>
          <h2 className={styles.sectionTitle}>Experience PPT-Based Conversational Learning</h2>
          <p className={styles.sectionDesc}>
            See how ATAT transforms static presentation slides into an engaging discussion. Select a subject topic,
            listen to the AI Teacher Avatar, and click follow-up questions to explore deeper!
          </p>
        </div>

        <div className={styles.simulatorCard}>
          {/* Topic Navigation */}
          <div className={styles.simTopicsNav}>
            <button
              className={`${styles.simTopicBtn} ${activeTopic === 'photosynthesis' ? styles.simTopicBtnActive : ''}`}
              onClick={() => {
                setActiveTopic('photosynthesis');
                setActiveAnswer(null);
                setAvatarVoiceActive(false);
              }}
            >
              🌿 Science: Photosynthesis (Class 8)
            </button>
            <button
              className={`${styles.simTopicBtn} ${activeTopic === 'quadratic' ? styles.simTopicBtnActive : ''}`}
              onClick={() => {
                setActiveTopic('quadratic');
                setActiveAnswer(null);
                setAvatarVoiceActive(false);
              }}
            >
              📐 Math: Quadratic Curves (Class 10)
            </button>
            <button
              className={`${styles.simTopicBtn} ${activeTopic === 'solar' ? styles.simTopicBtnActive : ''}`}
              onClick={() => {
                setActiveTopic('solar');
                setActiveAnswer(null);
                setAvatarVoiceActive(false);
              }}
            >
              🪐 Geography: Solar System (Class 6)
            </button>
          </div>

          <div className={styles.simWorkspace}>
            {/* Left: Presentation Slide */}
            <div className={styles.slideBox}>
              <div className={styles.slideTopBar}>
                <span>SLIDE 03 OF 12 • ATAT PRESENTATION VIEWER</span>
                <span style={{ color: '#22d3ee' }}>Interactive Mode</span>
              </div>

              <div className={styles.slideInnerContent}>
                <span className={styles.slideSubjectTag}>{topicData.subject}</span>
                <h3 className={styles.slideHeading}>{topicData.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#94a3b8', marginBottom: '20px' }}>
                  {topicData.slideText}
                </p>

                <div className={styles.slideDiagramCard}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#38bdf8', marginBottom: '10px' }}>
                    KEY PROCESS MILESTONES:
                  </div>
                  <div className={styles.slideStepsList}>
                    {topicData.steps.map((st, i) => (
                      <div key={i} className={styles.slideStepItem}>
                        <span className={styles.slideStepBullet} />
                        <span>{st}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>Upload custom PPT or PDF slides anytime</span>
                  <button
                    className={styles.btnOutline}
                    style={{ padding: '8px 16px', fontSize: '13px' }}
                    onClick={() => setAvatarVoiceActive(!avatarVoiceActive)}
                  >
                    {avatarVoiceActive ? (
                      <>
                        <FaPause /> Pause Voice
                      </>
                    ) : (
                      <>
                        <FaPlay /> Read Aloud with ATAT
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right: AI Teacher Avatar & Socratic Discussion */}
            <div className={styles.avatarChatPane}>
              <div className={styles.avatarHeader}>
                <div className={styles.avatarImgWrap}>
                  <FaRobot />
                </div>
                <div>
                  <div className={styles.avatarName}>ATAT AI Teaching Assistant</div>
                  <div className={styles.avatarStatus}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399' }} />
                    {avatarVoiceActive ? 'Speaking Lesson Notes...' : 'Ready to Answer Questions'}
                  </div>
                </div>
              </div>

              {/* Sound wave visualizer */}
              {avatarVoiceActive && (
                <div className={styles.voiceAudioWave}>
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className={styles.soundBar}
                      style={{
                        animationDuration: `${0.4 + (i % 5) * 0.15}s`
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Avatar Speech Bubble */}
              <div className={styles.speechBubble}>
                &quot;{displayedSpeech}&quot;
              </div>

              {/* Follow-up question chips */}
              <div className={styles.suggestedQuestionsLabel}>
                Try Asking ATAT a Follow-Up Question:
              </div>

              <div className={styles.suggestedQuestionsList}>
                {topicData.questions.map((item, idx) => (
                  <button
                    key={idx}
                    className={styles.questionChip}
                    onClick={() => setActiveAnswer(item)}
                  >
                    <span>💬 {item.q}</span>
                    <FaArrowRight style={{ fontSize: '11px', color: '#a78bfa' }} />
                  </button>
                ))}
              </div>

              {/* Active Answer Display */}
              {activeAnswer && (
                <div
                  style={{
                    marginTop: '16px',
                    padding: '16px',
                    borderRadius: '10px',
                    background: 'rgba(124, 58, 237, 0.18)',
                    border: '1px solid rgba(167, 139, 250, 0.4)',
                    fontSize: '13px',
                    lineHeight: '1.6',
                    color: '#f8fafc'
                  }}
                >
                  <strong style={{ color: '#c084fc', display: 'block', marginBottom: '6px' }}>
                    ATAT&apos;s Answer to &quot;{activeAnswer.q}&quot;:
                  </strong>
                  {activeAnswer.a}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What ATAT Can Do (4 Core Capabilities) */}
      <section className={styles.section} id="capabilities">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>WHAT ATAT CAN DO</span>
          <h2 className={styles.sectionTitle}>Empowering Every Learner in Every Classroom</h2>
          <p className={styles.sectionDesc}>
            Built on advanced educational NLP, computer vision, and cognitive pedagogical principles to ensure safe,
            inclusive, and engaging learning for all students.
          </p>
        </div>

        <div className={styles.pillarsGrid}>
          {/* Pillar 1 */}
          <div className={styles.pillarCard}>
            <div className={styles.pillarIconWrap} style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#c084fc' }}>
              <FaComments />
            </div>
            <h3 className={styles.pillarTitle}>Intelligent Conversations</h3>
            <p className={styles.pillarDesc}>
              Ask anything, get clear and helpful answers. Conversational Socratic tutoring that encourages curiosity and
              builds conceptual depth.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className={styles.pillarCard}>
            <div className={styles.pillarIconWrap} style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#f472b6' }}>
              <FaFilePowerpoint />
            </div>
            <h3 className={styles.pillarTitle}>PPT-Based Learning</h3>
            <p className={styles.pillarDesc}>
              Understand your presentations through interactive discussions. Upload PPT or PDF slides and ATAT analyzes
              each visual and formula.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className={styles.pillarCard}>
            <div className={styles.pillarIconWrap} style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>
              <FaUserCheck />
            </div>
            <h3 className={styles.pillarTitle}>Face Authentication</h3>
            <p className={styles.pillarDesc}>
              Secure login using facial recognition. No passwords to remember or forget. Safe, private, and instant for
              young learners.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className={styles.pillarCard}>
            <div className={styles.pillarIconWrap} style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#22d3ee' }}>
              <FaLightbulb />
            </div>
            <h3 className={styles.pillarTitle}>Smart Learning Support</h3>
            <p className={styles.pillarDesc}>
              Personalized help tailored to your unique learning needs, pacing, and curriculum. Never leaves any student
              behind.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works (4-Step Workflow) */}
      <section className={styles.section} id="workflow">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>SIMPLE 4-STEP WORKFLOW</span>
          <h2 className={styles.sectionTitle}>How ATAT Works in the Classroom</h2>
          <p className={styles.sectionDesc}>
            Designed with frictionless onboarding so any student or teacher can start learning in under 10 seconds.
          </p>
        </div>

        <div className={styles.workflowGrid}>
          <div className={styles.workflowStepCard}>
            <div className={styles.workflowStepNumber}>1</div>
            <div className={styles.workflowStepIcon}>
              <FaUserCheck />
            </div>
            <h3 className={styles.workflowStepTitle}>Face Login</h3>
            <p className={styles.workflowStepDesc}>
              Stand in front of the classroom camera for instant biometric authentication.
            </p>
          </div>

          <div className={styles.workflowStepCard}>
            <div className={styles.workflowStepNumber}>2</div>
            <div className={styles.workflowStepIcon}>
              <FaUsers />
            </div>
            <h3 className={styles.workflowStepTitle}>Choose Mode</h3>
            <p className={styles.workflowStepDesc}>
              Select Student Mode for guided learning or Teacher Mode for lesson planning.
            </p>
          </div>

          <div className={styles.workflowStepCard}>
            <div className={styles.workflowStepNumber}>3</div>
            <div className={styles.workflowStepIcon}>
              <FaFilePowerpoint />
            </div>
            <h3 className={styles.workflowStepTitle}>Upload / Select</h3>
            <p className={styles.workflowStepDesc}>
              Upload PowerPoint slides, PDF textbook chapters, or pick from pre-loaded courses.
            </p>
          </div>

          <div className={styles.workflowStepCard}>
            <div className={styles.workflowStepNumber}>4</div>
            <div className={styles.workflowStepIcon}>
              <FaComments />
            </div>
            <h3 className={styles.workflowStepTitle}>Start Conversation</h3>
            <p className={styles.workflowStepDesc}>
              Ask questions, test comprehension, and learn interactively with your AI Teacher.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '36px', fontStyle: 'italic', color: '#94a3b8' }}>
          &quot;Technology that makes learning human again.&quot;
        </div>
      </section>

      {/* Section 5: Flexible Engagement Models & Pricing */}
      <section className={styles.section} id="pricing">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>FLEXIBLE ENGAGEMENT MODELS</span>
          <h2 className={styles.sectionTitle}>Choose the Model That Fits Your School</h2>
          <p className={styles.sectionDesc}>
            Transparent, institutional options designed for independent schools, educational trusts, and state-wide
            government programs.
          </p>
        </div>

        <div className={styles.pricingGrid}>
          {/* Model A: One-Time Purchase */}
          <div className={styles.pricingCard}>
            <div
              className={styles.pricingModelBadge}
              style={{ background: 'rgba(139, 92, 246, 0.2)', color: '#c084fc' }}
            >
              A
            </div>
            <h3 className={styles.pricingModelName}>One-Time Purchase Model</h3>
            <div className={styles.pricingPriceLarge}>₹12 Lakhs*</div>
            <div className={styles.pricingPriceSubtitle}>For 10 Complete Turnkey Systems</div>

            <div className={styles.pricingFeaturesList}>
              <div className={styles.pricingFeatureItem}>
                <FaCheckCircle className={styles.pricingCheckIcon} />
                <span>Dedicated Hardware + Master Trainer Kit(s)</span>
              </div>
              <div className={styles.pricingFeatureItem}>
                <FaCheckCircle className={styles.pricingCheckIcon} />
                <span>Prarambh &amp; ATAT Software Lifetime License</span>
              </div>
              <div className={styles.pricingFeatureItem}>
                <FaCheckCircle className={styles.pricingCheckIcon} />
                <span>All Required Accessories, Sensors &amp; Peripherals</span>
              </div>
              <div className={styles.pricingFeatureItem}>
                <FaCheckCircle className={styles.pricingCheckIcon} />
                <span>Teacher &amp; Student Testimonial Booklet</span>
              </div>
              <div className={styles.pricingFeatureItem}>
                <FaCheckCircle className={styles.pricingCheckIcon} />
                <span>Annual LLM Cloud, Support &amp; Maintenance: ~20%</span>
              </div>
            </div>

            <button className={styles.btnSecondary} onClick={() => setModalOpen(true)}>
              Choose Model A <FaArrowRight />
            </button>
          </div>

          {/* Model B: Student Subscription (Featured) */}
          <div className={`${styles.pricingCard} ${styles.pricingCardFeatured}`}>
            <div
              className={styles.pricingModelBadge}
              style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34d399' }}
            >
              B
            </div>
            <h3 className={styles.pricingModelName}>Student Subscription Model</h3>
            <div className={styles.pricingPriceLarge}>₹100 – ₹200</div>
            <div className={styles.pricingPriceSubtitle}>Per Student / Month (School-Wide Adoption)</div>

            <div className={styles.pricingFeaturesList}>
              <div className={styles.pricingFeatureItem}>
                <FaCheckCircle className={styles.pricingCheckIcon} />
                <span>Ideal for whole-school or district-wide rollout</span>
              </div>
              <div className={styles.pricingFeatureItem}>
                <FaCheckCircle className={styles.pricingCheckIcon} />
                <span>Minimum 2-year institutional commitment</span>
              </div>
              <div className={styles.pricingFeatureItem}>
                <FaCheckCircle className={styles.pricingCheckIcon} />
                <span>Full access to all Student &amp; Teacher platform features</span>
              </div>
              <div className={styles.pricingFeatureItem}>
                <FaCheckCircle className={styles.pricingCheckIcon} />
                <span>Regular curriculum updates &amp; dedicated pedagogical support</span>
              </div>
              <div className={styles.pricingFeatureItem}>
                <FaCheckCircle className={styles.pricingCheckIcon} />
                <span>Zero upfront hardware capital expenditure option</span>
              </div>
            </div>

            <button className={styles.btnPrimary} onClick={() => setModalOpen(true)}>
              Choose Model B <FaArrowRight />
            </button>
          </div>

          {/* Model C: Custom Development Support */}
          <div className={styles.pricingCard}>
            <div
              className={styles.pricingModelBadge}
              style={{ background: 'rgba(6, 182, 212, 0.2)', color: '#22d3ee' }}
            >
              C
            </div>
            <h3 className={styles.pricingModelName}>Custom Development Support</h3>
            <div className={styles.pricingPriceLarge}>₹100 – ₹900</div>
            <div className={styles.pricingPriceSubtitle}>Per Man-Hour* (Tailored Software Engineering)</div>

            <div className={styles.pricingFeaturesList}>
              <div className={styles.pricingFeatureItem}>
                <FaCheckCircle className={styles.pricingCheckIcon} />
                <span>For your own brand custom EdTech software</span>
              </div>
              <div className={styles.pricingFeatureItem}>
                <FaCheckCircle className={styles.pricingCheckIcon} />
                <span>Built as per Master Project Plan (MPP) milestones</span>
              </div>
              <div className={styles.pricingFeatureItem}>
                <FaCheckCircle className={styles.pricingCheckIcon} />
                <span>Based on your exact institutional &amp; state requirements</span>
              </div>
              <div className={styles.pricingFeatureItem}>
                <FaCheckCircle className={styles.pricingCheckIcon} />
                <span>Custom mascot avatar, local language models &amp; LMS APIs</span>
              </div>
              <div className={styles.pricingFeatureItem}>
                <FaCheckCircle className={styles.pricingCheckIcon} />
                <span>Flexible agile sprint engagement and continuous SLA support</span>
              </div>
            </div>

            <button className={styles.btnSecondary} onClick={() => setModalOpen(true)}>
              Choose Model C <FaArrowRight />
            </button>
          </div>
        </div>

        <div style={{ textAlign: 'center', fontSize: '12px', color: '#64748b', marginTop: '20px' }}>
          *Indicative pricing. Final commercial terms may vary based on configuration, system count, and deployment scope.
        </div>
      </section>

      {/* Section 6: Interactive School ROI & Adoption Estimator */}
      <section className={styles.section} id="calculator">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>INSTITUTIONAL ESTIMATOR</span>
          <h2 className={styles.sectionTitle}>Calculate School-Wide Impact &amp; Investment</h2>
          <p className={styles.sectionDesc}>
            Adjust student count and classroom capacity to estimate teacher hours saved and subscription budgets.
          </p>
        </div>

        <div className={styles.estimatorCard}>
          <div>
            <div className={styles.sliderGroup}>
              <div className={styles.sliderHeader}>
                <span className={styles.sliderLabel}>Total Enrolled Students</span>
                <span className={styles.sliderValue}>{estStudents.toLocaleString()} Students</span>
              </div>
              <input
                type="range"
                min="100"
                max="3000"
                step="50"
                value={estStudents}
                onChange={(e) => setEstStudents(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>

            <div className={styles.sliderGroup}>
              <div className={styles.sliderHeader}>
                <span className={styles.sliderLabel}>Smart Classrooms / Labs</span>
                <span className={styles.sliderValue}>{estSystems} Classrooms</span>
              </div>
              <input
                type="range"
                min="2"
                max="40"
                step="1"
                value={estSystems}
                onChange={(e) => setEstSystems(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>

            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
              Based on empirical school pilot data: teachers save an average of 4 hours per week on slide prep and
              quiz evaluation, while student homework completion rates increase by 38%.
            </p>
          </div>

          <div className={styles.estimatorResultsBox}>
            <div className={styles.estimatorResultsTitle}>Projected Annual School Budget</div>
            <div className={styles.estimatorMainMetric}>₹{totalAnnualInvestment} Lakhs</div>
            <div className={styles.estimatorMainLabel}>
              Estimated Annual Investment (~₹{monthlyCostPerStudent}/student/month)
            </div>

            <div className={styles.estimatorSubGrid}>
              <div>
                <div className={styles.estimatorSubVal}>{teacherHoursSavedPerWeek} hrs</div>
                <div className={styles.estimatorSubLabel}>Teacher Prep Time Saved Weekly</div>
              </div>
              <div>
                <div className={styles.estimatorSubVal}>+38%</div>
                <div className={styles.estimatorSubLabel}>Student Subject Comprehension Gain</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Master Infographic Showcase */}
      <section className={styles.section} id="infographic">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>OFFICIAL OVERVIEW</span>
          <h2 className={styles.sectionTitle}>The Complete ATAT Ecosystem at a Glance</h2>
          <p className={styles.sectionDesc}>
            Click on the master infographic below to view high-resolution specifications, classroom architectures, and
            deployment models.
          </p>
        </div>

        <div className={styles.infographicCard}>
          <div className={styles.infographicImgWrap} onClick={() => setInfographicOpen(true)}>
            <img
              src="/assets/atat/atat_infographic.jpg"
              alt="ATAT Master Infographic"
              className={styles.infographicImg}
            />
          </div>
          <button className={styles.btnSecondary} onClick={() => setInfographicOpen(true)}>
            <FaExpand /> Open Fullscreen High-Res Infographic
          </button>
        </div>
      </section>

      {/* Section 8: FAQ Accordion */}
      <section className={styles.section} id="faq">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>FREQUENTLY ASKED QUESTIONS</span>
          <h2 className={styles.sectionTitle}>Answers for School Leaders &amp; Educators</h2>
          <p className={styles.sectionDesc}>
            Key information regarding hardware compatibility, privacy protocols, and curriculum alignment.
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
                  {isOpen ? <FaChevronUp style={{ color: '#c084fc' }} /> : <FaChevronDown />}
                </button>
                {isOpen && <div className={styles.faqAnswer}>{faq.a}</div>}
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 9: Bottom CTA & Pilot Modal */}
      <section className={styles.section}>
        <div className={styles.bottomCta}>
          <h2 className={styles.bottomCtaTitle}>Bring ATAT to Your School Today</h2>
          <p className={styles.bottomCtaDesc}>
            Experience how the AI Teaching Assistant empowers your faculty, inspires your students, and transforms your
            smart classrooms. Request a 14-day on-campus pilot.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button className={styles.btnPrimary} onClick={() => setModalOpen(true)}>
              Schedule an On-Campus Pilot <FaArrowRight />
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=917788016666"
              className={styles.btnSecondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with Education Lead on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Fullscreen Infographic Modal */}
      {infographicOpen && (
        <div className={styles.modalBackdrop} onClick={() => setInfographicOpen(false)}>
          <div
            className={styles.modalContent}
            style={{ maxWidth: '1100px', padding: '16px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.modalClose} onClick={() => setInfographicOpen(false)}>
              <FaTimes />
            </button>
            <img
              src="/assets/atat/atat_infographic.jpg"
              alt="ATAT Full Infographic"
              style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }}
            />
          </div>
        </div>
      )}

      {/* School Pilot Request Modal */}
      {modalOpen && (
        <div className={styles.modalBackdrop} onClick={() => setModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setModalOpen(false)}>
              <FaTimes />
            </button>

            {!modalSubmitted ? (
              <>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>
                  Request ATAT School Pilot
                </h3>
                <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '20px' }}>
                  Our EdTech deployment specialists will coordinate an on-campus classroom demonstration and setup.
                </p>

                <form onSubmit={handleFormSubmit}>
                  <div className={styles.simFormGroup}>
                    <label className={styles.simLabel}>School / Institution Name *</label>
                    <input
                      type="text"
                      required
                      className={styles.simInput}
                      value={formData.schoolName}
                      onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                      placeholder="e.g. Delhi Public School / DAV Public School"
                    />
                  </div>

                  <div className={styles.simFormGroup}>
                    <label className={styles.simLabel}>Contact Person &amp; Designation *</label>
                    <input
                      type="text"
                      required
                      className={styles.simInput}
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="e.g. Principal Anita Sharma"
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
                        placeholder="principal@school.edu.in"
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
                      <label className={styles.simLabel}>Curriculum Board</label>
                      <select
                        className={styles.simSelect}
                        value={formData.board}
                        onChange={(e) => setFormData({ ...formData, board: e.target.value })}
                      >
                        <option value="CBSE">CBSE</option>
                        <option value="ICSE">ICSE / ISC</option>
                        <option value="State Board">State Board</option>
                        <option value="IB / Cambridge">IB / Cambridge</option>
                      </select>
                    </div>

                    <div className={styles.simFormGroup}>
                      <label className={styles.simLabel}>Student Strength</label>
                      <select
                        className={styles.simSelect}
                        value={formData.students}
                        onChange={(e) => setFormData({ ...formData, students: e.target.value })}
                      >
                        <option value="Under 500 Students">Under 500 Students</option>
                        <option value="500 - 1500 Students">500 - 1,500 Students</option>
                        <option value="1500 - 3000 Students">1,500 - 3,000 Students</option>
                        <option value="3000+ Students">3,000+ Students</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.simFormGroup}>
                    <label className={styles.simLabel}>City &amp; State *</label>
                    <input
                      type="text"
                      required
                      className={styles.simInput}
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Bhubaneswar, Odisha"
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles.btnPrimary}
                    style={{ width: '100%', marginTop: '12px', justifyContent: 'center' }}
                  >
                    Submit School Pilot Request <FaArrowRight />
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
                  Thank you, <strong>{formData.contactName}</strong>. Our Education Lead will connect with{' '}
                  <strong>{formData.schoolName}</strong> within 4 business hours to arrange the ATAT classroom pilot.
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
