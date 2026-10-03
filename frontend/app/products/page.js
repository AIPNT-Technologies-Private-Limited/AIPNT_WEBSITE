"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './page.module.css';
import { 
  FaArrowRight, FaLaptopCode, FaExternalLinkAlt, FaBrain, FaHeartbeat, FaLandmark, FaShieldAlt,
  FaUsers, FaFileAlt, FaGavel, FaClipboardCheck, FaFileSignature,
  FaFileInvoice, FaSearch, FaEnvelope, FaHeadset, FaChartLine, FaBullseye,
  FaUserFriends, FaDatabase, FaUserCheck, FaFileContract, FaCogs,
  FaFileInvoiceDollar, FaCheckCircle, FaBug, FaCode, FaRobot,
  FaUserMd, FaCalendarCheck, FaMicrophone, FaPills, FaBed, FaBriefcaseMedical, FaHistory,
  FaCapsules, FaCommentDots, FaUserTie, FaClinicMedical, FaShareAlt, FaFlask, FaConciergeBell, FaHospital,
  FaShoppingCart, FaCube, FaSyncAlt, FaTags, FaPercentage, FaLayerGroup, FaRupeeSign,
  FaWhatsapp, FaClipboardList, FaReceipt, FaChartBar, FaCalendarAlt, FaShoppingBag, FaStore
} from 'react-icons/fa';

// 1. Enterprise AI Micro-SaaS Products (20 products)
const enterpriseCategories = [
  {
    id: 1,
    colNumber: 1,
    title: "Productivity & Communication",
    subtitle: "Work Smarter. Save Time.",
    theme: "colBlue",
    icon: <FaUsers />,
    products: [
      { id: 1, title: "AI MeetingCopilot", description: "Intelligent meeting assistant for notes, actions & follow-ups.", icon: <FaUsers /> },
      { id: 2, title: "AI ProposalGen", description: "AI-powered proposal creation and management.", icon: <FaFileAlt /> },
      { id: 3, title: "AI TenderAssist", description: "Tender document assistant for faster response.", icon: <FaGavel /> },
      { id: 4, title: "AI RFPResponse", description: "RFP response automation with AI.", icon: <FaClipboardCheck /> },
      { id: 5, title: "AI ContractReader", description: "Contract intelligence and key clause extraction.", icon: <FaFileSignature /> }
    ]
  },
  {
    id: 2,
    colNumber: 2,
    title: "Business Operations & HR",
    subtitle: "Simplify Processes. Empower People.",
    theme: "colGreen",
    icon: <FaFileInvoice />,
    products: [
      { id: 6, title: "AI DocumentQA", description: "Enterprise document Q&A and knowledge search.", icon: <FaSearch /> },
      { id: 7, title: "AI EmailCopilot", description: "AI email productivity and response assistant.", icon: <FaEnvelope /> },
      { id: 8, title: "AI SupportDesk", description: "AI customer support and ticket management.", icon: <FaHeadset /> },
      { id: 9, title: "AI SalesCopilot", description: "Sales productivity and follow-up management.", icon: <FaChartLine /> },
      { id: 10, title: "AI LeadQualifier", description: "Intelligent lead qualification and scoring.", icon: <FaBullseye /> }
    ]
  },
  {
    id: 3,
    colNumber: 3,
    title: "Sales, Marketing & CRM",
    subtitle: "Build Relationships. Drive Revenue.",
    theme: "colPurple",
    icon: <FaUserFriends />,
    products: [
      { id: 11, title: "AI CRMUpdater", description: "Automated CRM data update and enrichment.", icon: <FaDatabase /> },
      { id: 12, title: "AI HRRecruiter", description: "AI recruitment assistant and candidate screening.", icon: <FaUserCheck /> },
      { id: 13, title: "AI JDGenerator", description: "Job description automation and role mapping.", icon: <FaFileContract /> },
      { id: 14, title: "AI SOPBuilder", description: "SOP generation and documentation platform.", icon: <FaCogs /> },
      { id: 15, title: "AI ComplianceDesk", description: "Compliance monitoring and policy tracking.", icon: <FaShieldAlt /> }
    ]
  },
  {
    id: 4,
    colNumber: 4,
    title: "Finance, Development & Security",
    subtitle: "Accuracy. Quality. Innovation.",
    theme: "colOrange",
    icon: <FaBullseye />,
    products: [
      { id: 16, title: "AI InvoiceExtractor", description: "Intelligent document extraction and invoice processing.", icon: <FaFileInvoiceDollar /> },
      { id: 17, title: "AI QACopilot", description: "Software QA assistant and test case generation.", icon: <FaCheckCircle /> },
      { id: 18, title: "AI BugAnalyzer", description: "AI software debugging and issue analysis.", icon: <FaBug /> },
      { id: 19, title: "AI CodeReviewBot", description: "Code analysis and security suggestions.", icon: <FaCode /> },
      { id: 20, title: "AI AgentBuilder", description: "Enterprise AI-agent platform and workflow automation.", icon: <FaRobot /> }
    ]
  }
];

// 2. HealthTech / Clinical AI Micro-SaaS Products (20 products)
const healthCategories = [
  {
    id: 1,
    colNumber: "01–05",
    title: "Patient Experience & Access",
    subtitle: "Smart Appointments & Check-in",
    theme: "colBlue",
    icon: <FaUserMd />,
    products: [
      { id: "01", title: "AppointmentAI", description: "Smart appointment booking for patients.", icon: <FaCalendarCheck /> },
      { id: "02", title: "QueueAI", description: "Intelligent OPD queue management.", icon: <FaUsers /> },
      { id: "03", title: "CheckIn", description: "Digital patient check-in.", icon: <FaClipboardCheck /> },
      { id: "04", title: "PatientBot", description: "AI patient assistance.", icon: <FaRobot /> },
      { id: "05", title: "DoctorCopilot", description: "AI doctor productivity assistant.", icon: <FaUserMd /> }
    ]
  },
  {
    id: 2,
    colNumber: "06–10",
    title: "Clinical Documentation",
    subtitle: "Records, Notes & Discharge Flow",
    theme: "colCyan",
    icon: <FaBriefcaseMedical />,
    products: [
      { id: "06", title: "VoiceNote", description: "Voice-based medical notes and documentation.", icon: <FaMicrophone /> },
      { id: "07", title: "PrescriptionAI", description: "Smart prescription documentation.", icon: <FaPills /> },
      { id: "08", title: "DischargeAI", description: "Discharge summary and instructions.", icon: <FaBed /> },
      { id: "09", title: "MedicalRecordAI", description: "Integrated medical record management.", icon: <FaBriefcaseMedical /> },
      { id: "10", title: "FollowUpAI", description: "Patient follow-up management.", icon: <FaHistory /> }
    ]
  },
  {
    id: 3,
    colNumber: "11–15",
    title: "Care Support & Analytics",
    subtitle: "Adherence, Insights & Pharmacy",
    theme: "colPurple",
    icon: <FaClinicMedical />,
    products: [
      { id: "11", title: "MedicineReminder", description: "Medication reminder service.", icon: <FaCapsules /> },
      { id: "12", title: "FeedbackAI", description: "Patient feedback intelligence.", icon: <FaCommentDots /> },
      { id: "13", title: "OPDAnalytics", description: "OPD performance analytics.", icon: <FaChartLine /> },
      { id: "14", title: "DoctorAnalytics", description: "Doctor/ service analytics.", icon: <FaUserTie /> },
      { id: "15", title: "PharmacyAI", description: "Pharmacy workflow assistant.", icon: <FaClinicMedical /> }
    ]
  },
  {
    id: 4,
    colNumber: "16–20",
    title: "Hospital Operations & Diagnostics",
    subtitle: "Lab, Insurance & Enterprise Care",
    theme: "colTeal",
    icon: <FaHospital />,
    products: [
      { id: "16", title: "ReferralAI", description: "Referral coordination and tracking.", icon: <FaShareAlt /> },
      { id: "17", title: "LabReportAI", description: "Lab report interpretation.", icon: <FaFlask /> },
      { id: "18", title: "InsuranceDesk", description: "Insurance workflow assistant.", icon: <FaShieldAlt /> },
      { id: "19", title: "ReceptionAI", description: "Front desk assistant for hospital operations.", icon: <FaConciergeBell /> },
      { id: "20", title: "HospitalCopilot", description: "Operational insights and dashboards.", icon: <FaHospital /> }
    ]
  }
];

// 3. DigiTech Micro-SaaS Products (21 products)
const digiTechCoreLeft = [
  { id: 1, title: "DigiShop CatalogAI", description: "AI-powered product catalog and smart search.", icon: <FaShoppingCart />, color: "#0284c7" },
  { id: 2, title: "DigiShop StockAI", description: "Inventory intelligence and stock optimization.", icon: <FaCube />, color: "#ea580c" },
  { id: 3, title: "DigiShop DemandAI", description: "Demand forecasting and trend analysis.", icon: <FaBullseye />, color: "#e11d48" },
  { id: 4, title: "DigiShop ReorderAI", description: "Automated reorder and supply chain planning.", icon: <FaSyncAlt />, color: "#10b981" },
  { id: 5, title: "DigiShop PriceAI", description: "Dynamic pricing and margin optimization.", icon: <FaTags />, color: "#059669" },
  { id: 6, title: "DigiShop OfferAI", description: "Personalized offers and discount management.", icon: <FaPercentage />, color: "#65a30d" }
];

const digiTechCoreRight = [
  { id: 7, title: "DigiShop ProductAI", description: "Intelligent product information and recommendations.", icon: <FaLayerGroup />, color: "#8b5cf6" },
  { id: 8, title: "DigiShop DemandAI", description: "Demand forecasting and trend analysis.", icon: <FaChartLine />, color: "#f43f5e" },
  { id: 9, title: "DigiShop PriceAI", description: "Dynamic pricing and margin chain planning.", icon: <FaRupeeSign />, color: "#0284c7" },
  { id: 10, title: "DigiShop WhatsAppSeller", description: "WhatsApp-based sales and customer support.", icon: <FaWhatsapp />, color: "#2563eb" },
  { id: 11, title: "DigiShop CustomerBot", description: "AI chatbot for customer engagement and support.", icon: <FaRobot />, color: "#7c3aed" },
  { id: 12, title: "DigiShop OrderAI", description: "Smart order processing and fulfillment.", icon: <FaClipboardList />, color: "#1d4ed8" }
];

const digiTechAdditional = [
  { id: 13, title: "DigiShop InvoicerAI", description: "Automated invoicing and GST compliance.", icon: <FaFileInvoice />, color: "#059669" },
  { id: 14, title: "DigiShop GSTDesk", description: "GST returns, filing and advisory assistant.", icon: <FaReceipt />, color: "#0d9488" },
  { id: 15, title: "DigiShop SalesAI", description: "Sales intelligence and performance tracking.", icon: <FaChartBar />, color: "#2563eb" },
  { id: 16, title: "DigiShop RetailCopilot", description: "AI assistant for retail operations and customer service.", icon: <FaCogs />, color: "#8b5cf6" },
  { id: 17, title: "DigiShop ExpiryAI", description: "Expiry and shelf-life management.", icon: <FaCalendarAlt />, color: "#ec4899" },
  { id: 18, title: "DigiShop PurchaseAI", description: "Smart purchase planning and vendor management.", icon: <FaShoppingCart />, color: "#0284c7" },
  { id: 19, title: "DigiShop PurchaseAI", description: "Purchase order automation and cost control.", icon: <FaShoppingBag />, color: "#e11d48" },
  { id: 20, title: "DigiShop FranchiseAI", description: "Franchise management and multi-location support.", icon: <FaStore />, color: "#1d4ed8" },
  { id: 21, title: "DigiShop LifeAI", description: "Lifestyle and wellness product recommendations.", icon: <FaShareAlt />, color: "#16a34a" }
];

// Flat list for live search across all 61 products
const allProductsCombined = [
  ...enterpriseCategories.flatMap(c => c.products.map(p => ({ ...p, category: "Enterprise AI", colTitle: c.title, theme: c.theme }))),
  ...healthCategories.flatMap(c => c.products.map(p => ({ ...p, category: "Healthcare & Clinical", colTitle: c.title, theme: c.theme }))),
  ...digiTechCoreLeft.map(p => ({ ...p, category: "DigiTech Commerce", colTitle: "Retail Core", theme: "colBlue" })),
  ...digiTechCoreRight.map(p => ({ ...p, category: "DigiTech Commerce", colTitle: "Operations Core", theme: "colPurple" })),
  ...digiTechAdditional.map(p => ({ ...p, category: "DigiTech Commerce", colTitle: "Additional Solutions", theme: "colGreen" }))
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Live search filtering
  const matchingProducts = searchQuery.trim() === '' 
    ? [] 
    : allProductsCombined.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.colTitle.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      <section className={styles.hero}>
        <span className={styles.badge}>INTELLIGENT SYSTEMS</span>
        <h1>
          From Ideas to <br />
          <span className={styles.gradientText}>Intelligent Products</span>
        </h1>
        <p>
          We engineer and deploy real-world products that solve critical problems
          in Education, Healthcare, Public Governance, and Enterprise Intelligence.
        </p>
      </section>

      {/* Flagship Highlight: Prarambh */}
      <section className={styles.featuredSection}>
        <div className={styles.featuredCard}>
          <div className={styles.featuredContent}>
            <div className={styles.featuredBadgeTop}>
              <span>⭐ FLAGSHIP STEM &amp; AI LEARNING PLATFORM</span>
            </div>
            <h2>Prarambh (Code • IoT • AI)</h2>
            <p>
              An all-in-one, web-based platform for coding, AI, IoT &amp; Robotics—designed
              for school learners, educators, and innovators of tomorrow. Zero installation,
              browser-based WebUSB flashing, Odia language voice support, and the Ask ATAT AI tutor.
            </p>

            <div className={styles.featuredPills}>
              <span className={styles.featuredPill}>Block Coding</span>
              <span className={styles.featuredPill}>AI Computer Vision</span>
              <span className={styles.featuredPill}>Arduino &amp; ESP32</span>
              <span className={styles.featuredPill}>MicroPython</span>
              <span className={styles.featuredPill}>Odia Voice Support</span>
              <span className={styles.featuredPill}>Cloud Project Hub</span>
            </div>

            <div className={styles.featuredActions}>
              <Link href="/products/prarambh" className={styles.btnPrimary}>
                Explore Prarambh Platform <FaArrowRight />
              </Link>
              <a
                href="https://prarambh.ai.pntservices.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnOutline}
              >
                <FaLaptopCode /> Launch Web IDE <FaExternalLinkAlt style={{ fontSize: '11px' }} />
              </a>
            </div>
          </div>

          <div className={styles.featuredImgWrapper}>
            <img src="/assets/generated/prarambh_product.jpg" alt="Prarambh Platform" />
          </div>
        </div>
      </section>

      {/* Full Products Grid */}
      <section className={styles.productsSection}>
        <h2 className={styles.sectionHeading}>Product Ecosystem</h2>

        <div className={styles.grid}>
          {/* DigiSwasth */}
          <div className={styles.productCard}>
            <div className={styles.cardImgWrapper}>
              <img src="/assets/generated/digiswasth_product.jpg" alt="DigiSwasth" />
            </div>
            <div className={styles.cardBody}>
              <span className={`${styles.tag} ${styles.tagMed}`}>MEDTECH</span>
              <h3>DigiSwasth</h3>
              <p>AI-powered digital healthcare ecosystem connecting diagnostic devices, tele-consultation, and hospital PMS.</p>
              <div className={styles.cardPills}>
                <span>AI Consultation</span>
                <span>Hospital PMS</span>
                <span>Medical IoT</span>
              </div>
              <Link href="/products/digiswasth" className={styles.cardLink}>
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* ATAT */}
          <div className={styles.productCard}>
            <div className={styles.cardImgWrapper}>
              <img src="/assets/atat/atat product image.jpeg" alt="ATAT AI Teaching Assistant" />
            </div>
            <div className={styles.cardBody}>
              <span className={`${styles.tag} ${styles.tagEdu}`}>EDUTECH</span>
              <h3>ATAT (AI Teaching Assistant)</h3>
              <p>Your AI Teacher. Always Ready. Dual Student &amp; Teacher modes, PPT-based discussions, and secure face authentication.</p>
              <div className={styles.cardPills}>
                <span>Dual Mode</span>
                <span>PPT Learning</span>
                <span>Face Login</span>
                <span>Socratic AI</span>
              </div>
              <Link href="/products/atat" className={styles.cardLink}>
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* Constituency Intelligence */}
          <div className={styles.productCard}>
            <div className={styles.cardImgWrapper}>
              <img src="/assets/generated/constituency_product.jpg" alt="Constituency Intelligence" />
            </div>
            <div className={styles.cardBody}>
              <span className={`${styles.tag} ${styles.tagGov}`}>GOVTECH</span>
              <h3>Grievance Redressal System</h3>
              <p>AI-enabled constituency operations, development fund tracking, and citizen grievance resolution.</p>
              <div className={styles.cardPills}>
                <span>Grievance AI</span>
                <span>Constituency GIS</span>
                <span>Public Tracking</span>
              </div>
              <Link href="/products/constituency-intelligence" className={styles.cardLink}>
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          Interactive Micro-SaaS Showcase (Redesigned & Premium)
          ============================================================ */}
      <section className={styles.microSaasMasterSection}>
        {/* Showcase Header */}
        <div className={styles.showcaseIntro}>
          <span className={styles.showcasePillBadge}>MODULAR INTELLIGENCE ECOSYSTEM</span>
          <h2 className={styles.showcaseTitle}>
            Specialized <span className={styles.gradientText}>AI Micro-SaaS</span> Solutions
          </h2>
          <p className={styles.showcaseDescription}>
            Choose from 61 plug-and-play autonomous agents, predictive copilots, and intelligent workflow micro-services purpose-built for enterprise velocity.
          </p>

          {/* Metrics bar */}
          <div className={styles.showcaseMetrics}>
            <div className={styles.metricItem}>
              <span className={styles.metricNum}>61+</span>
              <span className={styles.metricLabel}>Micro-SaaS Tools</span>
            </div>
            <div className={styles.metricDivider}></div>
            <div className={styles.metricItem}>
              <span className={styles.metricNum}>3</span>
              <span className={styles.metricLabel}>Specialized Suites</span>
            </div>
            <div className={styles.metricDivider}></div>
            <div className={styles.metricItem}>
              <span className={styles.metricNum}>100%</span>
              <span className={styles.metricLabel}>API &amp; Cloud Ready</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Control Hub */}
        <div className={styles.controlHub}>
          {/* Live Search Input */}
          <div className={styles.searchBar}>
            <FaSearch className={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Search by product name, capability, or industry (e.g. invoice, meeting, whatsapp, doctor)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                type="button" 
                className={styles.clearSearchBtn}
                onClick={() => setSearchQuery('')}
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Navigation Tabs */}
          <div className={styles.filterTabsWrapper}>
            <button 
              type="button"
              className={`${styles.filterTab} ${activeFilter === 'all' && !searchQuery ? styles.filterTabActive : ''}`}
              onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
            >
              All Micro-SaaS Suites <span className={styles.tabBadge}>61</span>
            </button>
            <button 
              type="button"
              className={`${styles.filterTab} ${activeFilter === 'enterprise' && !searchQuery ? styles.filterTabActive : ''}`}
              onClick={() => { setActiveFilter('enterprise'); setSearchQuery(''); }}
            >
              Enterprise AI <span className={styles.tabBadge}>20</span>
            </button>
            <button 
              type="button"
              className={`${styles.filterTab} ${activeFilter === 'digitech' && !searchQuery ? styles.filterTabActive : ''}`}
              onClick={() => { setActiveFilter('digitech'); setSearchQuery(''); }}
            >
              DigiTech Commerce <span className={styles.tabBadge}>21</span>
            </button>
            <button 
              type="button"
              className={`${styles.filterTab} ${activeFilter === 'health' && !searchQuery ? styles.filterTabActive : ''}`}
              onClick={() => { setActiveFilter('health'); setSearchQuery(''); }}
            >
              Healthcare &amp; Clinical <span className={styles.tabBadge}>20</span>
            </button>
          </div>
        </div>

        {/* Live Search Results View (If searching) */}
        {searchQuery.trim() !== '' ? (
          <div className={styles.searchResultsSection}>
            <div className={styles.searchHeader}>
              <h3>Showing results for <span className={styles.searchKeyword}>"{searchQuery}"</span></h3>
              <span className={styles.matchCount}>{matchingProducts.length} tools matched</span>
            </div>

            {matchingProducts.length === 0 ? (
              <div className={styles.noResultsBox}>
                <p>No Micro-SaaS tools matched your search. Try searching for "sales", "document", "queue", or "order".</p>
                <button type="button" onClick={() => setSearchQuery('')} className={styles.resetBtn}>Reset Search</button>
              </div>
            ) : (
              <div className={styles.searchResultGrid}>
                {matchingProducts.map((item, idx) => (
                  <div key={idx} className={styles.searchResultCard}>
                    <div className={styles.searchCardTop}>
                      <span className={styles.searchCategoryBadge}>{item.category}</span>
                      <span className={styles.searchColBadge}>{item.colTitle}</span>
                    </div>
                    <div className={styles.searchCardBody}>
                      <div className={styles.itemIconBadge} style={{ background: item.color || undefined }}>
                        {item.icon}
                      </div>
                      <div className={styles.itemInfo}>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            {/* 1. ENTERPRISE AI MICRO-SAAS PRODUCTS */}
            {(activeFilter === 'all' || activeFilter === 'enterprise') && (
              <div className={styles.microSaasSection}>
                <div className={styles.microSaasHeaderWrapper}>
                  <div className={styles.microSaasRibbon}>
                    <h2>Enterprise AI Micro-SaaS Products</h2>
                  </div>
                  <p className={styles.microSaasSubtitle}>
                    Modular, high-impact intelligent agents and workflow automation tools engineered for immediate deployment across enterprise operations.
                  </p>
                </div>

                <div className={styles.microSaasGrid}>
                  {enterpriseCategories.map((category) => (
                    <div key={category.id} className={`${styles.microSaasColumn} ${styles[category.theme]}`}>
                      <div className={styles.columnHeader}>
                        <div className={styles.columnBadgeWrapper}>
                          <span className={styles.colNumberBadge}>{category.colNumber}</span>
                          <span className={styles.colIconBadge}>{category.icon}</span>
                        </div>
                        <div className={styles.colHeaderText}>
                          <h3>{category.title}</h3>
                          <p>{category.subtitle}</p>
                        </div>
                      </div>

                      <div className={styles.columnList}>
                        {category.products.map((item) => (
                          <div key={item.id} className={styles.productItem}>
                            <div className={styles.itemNumberBadge}>{item.id}</div>
                            <div className={styles.itemIconBadge}>{item.icon}</div>
                            <div className={styles.itemInfo}>
                              <h4>{item.title}</h4>
                              <p>{item.description}</p>
                            </div>
                            <FaArrowRight className={styles.itemHoverArrow} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. OUR DIGITECH MICRO-SAAS PRODUCTS */}
            {(activeFilter === 'all' || activeFilter === 'digitech') && (
              <div className={`${styles.microSaasSection} ${styles.digiTechSectionWrap}`}>
                <div className={styles.microSaasHeaderWrapper}>
                  <div className={`${styles.microSaasRibbon} ${styles.digiTechRibbon}`}>
                    <h2>Our DigiTech Micro-SaaS Products</h2>
                  </div>
                  <p className={styles.microSaasSubtitle}>
                    Choose from a suite of AI-powered micro-SaaS solutions or get a custom solution built for your business needs.
                  </p>
                </div>

                <div className={styles.digiTechContainer}>
                  {/* Left / Core Commerce Card */}
                  <div className={styles.digiTechCoreCard}>
                    <div className={styles.digiTechCardHeader}>
                      <span className={styles.commerceHeaderBadge}>🛍️ CORE RETAIL &amp; COMMERCE SUITE</span>
                      <span className={styles.commerceCountBadge}>12 Micro-Services</span>
                    </div>
                    <div className={styles.digiTechSubgrid}>
                      {/* Sub-column 1 */}
                      <div className={styles.digiTechCol}>
                        {digiTechCoreLeft.map((item) => (
                          <div key={item.id} className={styles.digiTechItem}>
                            <div className={styles.digiTechIconWrap} style={{ background: item.color }}>
                              {item.icon}
                            </div>
                            <div className={styles.digiTechText}>
                              <h4>{item.title}</h4>
                              <p>{item.description}</p>
                            </div>
                            <FaArrowRight className={styles.itemHoverArrow} />
                          </div>
                        ))}
                      </div>

                      {/* Sub-column 2 */}
                      <div className={styles.digiTechCol}>
                        {digiTechCoreRight.map((item) => (
                          <div key={item.id} className={styles.digiTechItem}>
                            <div className={styles.digiTechIconWrap} style={{ background: item.color }}>
                              {item.icon}
                            </div>
                            <div className={styles.digiTechText}>
                              <h4>{item.title}</h4>
                              <p>{item.description}</p>
                            </div>
                            <FaArrowRight className={styles.itemHoverArrow} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right / Additional Business Solutions Card */}
                  <div className={styles.digiTechSideCard}>
                    <div className={styles.additionalBadge}>
                      <span className={styles.greenDot}>✦</span> Additional Business Solutions
                      <span className={styles.additionalCountBadge}>9 Tools</span>
                    </div>
                    <div className={styles.digiTechSideList}>
                      {digiTechAdditional.map((item) => (
                        <div key={item.id} className={styles.digiTechItem}>
                          <div className={styles.digiTechIconWrap} style={{ background: item.color }}>
                            {item.icon}
                          </div>
                          <div className={styles.digiTechText}>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                          </div>
                          <FaArrowRight className={styles.itemHoverArrow} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. HEALTHCARE & CLINICAL AI MICRO-SAAS PRODUCTS */}
            {(activeFilter === 'all' || activeFilter === 'health') && (
              <div className={`${styles.microSaasSection} ${styles.healthSectionWrap}`}>
                <div className={styles.microSaasHeaderWrapper}>
                  <div className={`${styles.microSaasRibbon} ${styles.healthRibbon}`}>
                    <h2>Healthcare &amp; Clinical AI Micro-SaaS Products</h2>
                  </div>
                  <p className={styles.microSaasSubtitle}>
                    End-to-end intelligent automation for hospitals, clinics, diagnostic centers, and healthcare providers.
                  </p>
                </div>

                <div className={styles.microSaasGrid}>
                  {healthCategories.map((category) => (
                    <div key={category.id} className={`${styles.microSaasColumn} ${styles[category.theme]}`}>
                      <div className={styles.columnHeader}>
                        <div className={styles.columnBadgeWrapper}>
                          <span className={styles.colNumberBadge}>{category.colNumber}</span>
                          <span className={styles.colIconBadge}>{category.icon}</span>
                        </div>
                        <div className={styles.colHeaderText}>
                          <h3>{category.title}</h3>
                          <p>{category.subtitle}</p>
                        </div>
                      </div>

                      <div className={styles.columnList}>
                        {category.products.map((item) => (
                          <div key={item.id} className={styles.productItem}>
                            <div className={styles.itemNumberBadge}>{item.id}</div>
                            <div className={styles.itemIconBadge}>{item.icon}</div>
                            <div className={styles.itemInfo}>
                              <h4>{item.title}</h4>
                              <p>{item.description}</p>
                            </div>
                            <FaArrowRight className={styles.itemHoverArrow} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </section>

      <Footer />
    </div>
  );
}
