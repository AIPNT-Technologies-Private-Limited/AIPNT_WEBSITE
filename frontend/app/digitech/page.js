"use client";

import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './page.module.css';
import {
  FaLandmark,
  FaGlobe,
  FaArrowRight,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaShoppingCart,
  FaCube,
  FaBullseye,
  FaSyncAlt,
  FaTags,
  FaPercentage,
  FaLayerGroup,
  FaChartLine,
  FaRupeeSign,
  FaWhatsapp,
  FaRobot,
  FaClipboardList,
  FaFileInvoice,
  FaReceipt,
  FaChartBar,
  FaCogs,
  FaCalendarAlt,
  FaShoppingBag,
  FaStore,
  FaShareAlt,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaMobileAlt,
  FaSearchLocation
} from 'react-icons/fa';

// The 21 DigiTech & Commerce Micro-SaaS products grouped into 3 operational clusters
const digiTechCategories = [
  {
    id: "core-commerce",
    categoryTitle: "Core Retail, Catalog & Inventory Suite",
    icon: <FaShoppingCart />,
    count: "06 Tools",
    products: [
      {
        id: "DIGI-01",
        title: "DigiShop CatalogAI",
        desc: "AI-driven product catalog digitization, automated photo enhancement, and multi-language search.",
        icon: <FaShoppingCart />,
        // PASTE TARGET LINK HERE:
        link: "/products#digitech"
      },
      {
        id: "DIGI-02",
        title: "DigiShop StockAI",
        desc: "Autonomous inventory tracking, low-stock alerts, and warehouse shelf-space optimization.",
        icon: <FaCube />,
        // PASTE TARGET LINK HERE:
        link: "/products#digitech"
      },
      {
        id: "DIGI-03",
        title: "DigiShop DemandAI",
        desc: "Predictive demand forecasting analyzing seasonal footfalls, local festivals, and purchasing trends.",
        icon: <FaBullseye />,
        // PASTE TARGET LINK HERE:
        link: "/products#digitech"
      },
      {
        id: "DIGI-04",
        title: "DigiShop ReorderAI",
        desc: "Automated vendor reorder cycles, PO generation, and supply chain lead-time mitigation.",
        icon: <FaSyncAlt />,
        // PASTE TARGET LINK HERE:
        link: "/products#digitech"
      },
      {
        id: "DIGI-05",
        title: "DigiShop PriceAI",
        desc: "Dynamic margin optimization, competitor price crawling, and localized discounting models.",
        icon: <FaTags />,
        // PASTE TARGET LINK HERE:
        link: "/products#digitech"
      },
      {
        id: "DIGI-06",
        title: "DigiShop OfferAI",
        desc: "Personalized cart offers, customer retention coupons, and loyalty reward automation.",
        icon: <FaPercentage />,
        // PASTE TARGET LINK HERE:
        link: "/products#digitech"
      }
    ]
  },
  {
    id: "omnichannel",
    categoryTitle: "Omnichannel Engagement & WhatsApp Commerce",
    icon: <FaWhatsapp />,
    count: "06 Tools",
    products: [
      {
        id: "DIGI-07",
        title: "DigiShop ProductAI",
        desc: "Intelligent attribute tagging, automated bullet points, and SEO-optimized e-commerce descriptions.",
        icon: <FaLayerGroup />,
        // PASTE TARGET LINK HERE:
        link: "/products#digitech"
      },
      {
        id: "DIGI-08",
        title: "DigiShop WhatsAppSeller",
        desc: "Direct-to-consumer conversational storefront over WhatsApp with native catalog & UPI payment links.",
        icon: <FaWhatsapp />,
        // PASTE TARGET LINK HERE:
        link: "/products#digitech"
      },
      {
        id: "DIGI-09",
        title: "DigiShop CustomerBot",
        desc: "24/7 autonomous support assistant resolving order tracking, returns, and FAQs across languages.",
        icon: <FaRobot />,
        // PASTE TARGET LINK HERE:
        link: "/products#digitech"
      },
      {
        id: "DIGI-10",
        title: "DigiShop OrderAI",
        desc: "Real-time multi-channel order synchronization, dispatch routing, and courier SLA monitoring.",
        icon: <FaClipboardList />,
        // PASTE TARGET LINK HERE:
        link: "/products#digitech"
      },
      {
        id: "DIGI-11",
        title: "DigiShop MarginAI",
        desc: "Real-time net margin recalculation factoring in shipping surcharges, returns, and payment fees.",
        icon: <FaRupeeSign />,
        // PASTE TARGET LINK HERE:
        link: "/products#digitech"
      },
      {
        id: "DIGI-12",
        title: "DigiShop TrendPulse",
        desc: "Social media and regional search trend radar to identify breakout consumer demand early.",
        icon: <FaChartLine />,
        // PASTE TARGET LINK HERE:
        link: "/products#digitech"
      }
    ]
  },
  {
    id: "operations",
    categoryTitle: "Enterprise Compliance & Operational Scale",
    icon: <FaCogs />,
    count: "09 Tools",
    products: [
      {
        id: "DIGI-13",
        title: "DigiShop InvoicerAI",
        desc: "Automated B2B/B2C invoice generation, e-way bill reconciliation, and accounting sync.",
        icon: <FaFileInvoice />,
        // PASTE TARGET LINK HERE:
        link: "/products#digitech"
      },
      {
        id: "DIGI-14",
        title: "DigiShop GSTDesk",
        desc: "Instant GST tax classification, monthly return compilation, and discrepancy mitigation assistant.",
        icon: <FaReceipt />,
        // PASTE TARGET LINK HERE:
        link: "/products#digitech"
      },
      {
        id: "DIGI-15",
        title: "DigiShop SalesAI",
        desc: "Branch-wise sales intelligence, counter productivity dashboards, and real-time revenue targets.",
        icon: <FaChartBar />,
        // PASTE TARGET LINK HERE:
        link: "/products#digitech"
      },
      {
        id: "DIGI-16",
        title: "DigiShop RetailCopilot",
        desc: "Field assistant for store managers guiding stock replenishment, shift rosters, and promotions.",
        icon: <FaCogs />,
        // PASTE TARGET LINK HERE:
        link: "/products#digitech"
      },
      {
        id: "DIGI-17",
        title: "DigiShop ExpiryAI",
        desc: "Perishable item batch expiry tracking, markdown algorithms, and zero-waste disposal alerts.",
        icon: <FaCalendarAlt />,
        // PASTE TARGET LINK HERE:
        link: "/products#digitech"
      },
      {
        id: "DIGI-18",
        title: "DigiShop PurchaseAI",
        desc: "Smart vendor negotiation intelligence, price variance audits, and bulk purchase discount models.",
        icon: <FaShoppingBag />,
        // PASTE TARGET LINK HERE:
        link: "/products#digitech"
      },
      {
        id: "DIGI-19",
        title: "DigiShop ProcurementBot",
        desc: "Procurement requisition workflow engine with multi-tier managerial approval thresholds.",
        icon: <FaShoppingCart />,
        // PASTE TARGET LINK HERE:
        link: "/products#digitech"
      },
      {
        id: "DIGI-20",
        title: "DigiShop FranchiseAI",
        desc: "Multi-outlet governance platform standardizing pricing, inventory distribution, and brand compliance.",
        icon: <FaStore />,
        // PASTE TARGET LINK HERE:
        link: "/products#digitech"
      },
      {
        id: "DIGI-21",
        title: "DigiShop LifeAI",
        desc: "Wellness and customer persona recommendation engine enhancing repeat lifetime value.",
        icon: <FaShareAlt />,
        // PASTE TARGET LINK HERE:
        link: "/products#digitech"
      }
    ]
  }
];

export default function DigiTechPage() {
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
            <span className={styles.breadcrumbCurrent}>DigiTech</span>
          </div>

          <div className={styles.complianceBadge}>
            <span className={styles.pulseDot} />
            <span>Digital Governance • Smart City GIS • GST &amp; Aadhaar Interoperable</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.domainBadge}>
            <FaLandmark /> Digital Transformation Domain
          </div>

          <h1 className={styles.heroTitle}>
            Digitising how organisations and <span className={styles.highlightEmerald}>communities operate.</span>
          </h1>

          <p className={styles.heroLead}>
            Digital governance, citizen platforms, workflow automation, IoT and large-scale digital transformation.
            We engineer public-scale technology architectures that eliminate bureaucratic gridlock, empower elected representatives with real-time constituency GIS, and drive autonomous commerce for businesses.
          </p>

          <div className={styles.heroActions}>
            <Link href="#flagship" className={styles.btnMain}>
              Explore GovTech Platform <FaArrowRight />
            </Link>
            <Link href="#commerce" className={styles.btnGhost}>
              View 21 Commerce &amp; Ops Tools
            </Link>
          </div>
        </div>

        {/* Quick Domain Metrics Grid */}
        <div className={styles.heroMetricsGrid}>
          <div className={styles.metricTile}>
            <span className={`${styles.metricValue} ${styles.metricValueAccent}`}>96.3%</span>
            <span className={styles.metricLabel}>Automated Citizen Grievance Resolution SLA</span>
          </div>
          <div className={styles.metricTile}>
            <span className={styles.metricValue}>100%</span>
            <span className={styles.metricLabel}>Ward-level GIS fund &amp; infrastructure tracking</span>
          </div>
          <div className={styles.metricTile}>
            <span className={styles.metricValue}>21+</span>
            <span className={styles.metricLabel}>Modular DigiShop Commerce &amp; Ops micro-services</span>
          </div>
          <div className={styles.metricTile}>
            <span className={`${styles.metricValue} ${styles.metricValueAccent}`}>24/7</span>
            <span className={styles.metricLabel}>WhatsApp &amp; Trilingual voice citizen intake</span>
          </div>
        </div>
      </section>

      {/* Flagship GovTech Product Spotlight: Constituency Intelligence */}
      <section className={styles.section} id="flagship">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionCategory}>FLAGSHIP PUBLIC GOVERNANCE ECOSYSTEM</span>
          <h2 className={styles.sectionTitle}>Constituency Intelligence &amp; Grievance Redressal</h2>
          <p className={styles.sectionLead}>
            AI-enabled public grievance resolution, development fund expenditure mapping, and ward-level GIS cockpits for elected leaders and municipal corporations.
          </p>
        </div>

        <div className={styles.flagshipCard}>
          <div className={styles.flagshipContent}>
            <div className={styles.flagshipBadge}>Flagship Solution</div>
            <h3 className={styles.flagshipTitle}>Constituency Intelligence System</h3>
            <p className={styles.flagshipTagline}>
              Empowering MPs, MLAs, District Magistrates, and Municipal Commissioners with verified ground truth.
            </p>
            <p className={styles.flagshipDesc}>
              A comprehensive civic intelligence platform that collects citizen issues across WhatsApp voice notes, smart kiosks, and mobile portals in regional dialects. AI automatically transcribes complaints, pinpoints geo-coordinates, assigns nodal officers with automated SLAs, and links issues to active public development funds (AMRUT, Smart Cities, MPLAD).
            </p>

            <div className={styles.flagshipPills}>
              <span className={styles.pillItem}>WhatsApp Voice Grievances</span>
              <span className={styles.pillItem}>Ward GIS Heatmaps</span>
              <span className={styles.pillItem}>SLA Escalation Engine</span>
              <span className={styles.pillItem}>MPLAD Fund Audit</span>
              <span className={styles.pillItem}>Hindi, Odia &amp; Dialect NLP</span>
              <span className={styles.pillItem}>Civic Smart Kiosks</span>
            </div>

            <div className={styles.flagshipActions}>
              {/* TARGET LINK TO PASTE / EDIT */}
              <Link href="/products/constituency-intelligence" className={styles.btnMain}>
                Explore Constituency Intelligence <FaArrowRight />
              </Link>
              <Link href="/products/constituency-intelligence#simulator" className={styles.btnGhost}>
                Try Live Grievance Simulator
              </Link>
            </div>
          </div>

          <div className={styles.flagshipImageContainer}>
            <img src="/assets/generated/constituency_product.jpg" alt="Constituency Intelligence Platform" />
          </div>
        </div>

        {/* 3 GovTech Pillars */}
        <div className={styles.pillarsGrid}>
          <div className={styles.pillarCard}>
            <div className={styles.pillarIconWrap}>
              <FaMapMarkedAlt />
            </div>
            <h4>Ward GIS &amp; Spatial Heatmaps</h4>
            <p>Real-time color-coded mapping identifying infrastructure dark-zones, water leaks, and road craters before public dissatisfaction escalates.</p>
            <div className={styles.productActionRow}>
              <span className={styles.statusIndicator}><span className={styles.statusDot} /> GIS Active</span>
              {/* PASTE TARGET LINK HERE */}
              <Link href="/products/constituency-intelligence#gis" className={styles.pasteLinkBtn}>
                Explore GIS Layer <FaExternalLinkAlt style={{ fontSize: '11px' }} />
              </Link>
            </div>
          </div>

          <div className={styles.pillarCard}>
            <div className={styles.pillarIconWrap}>
              <FaShieldAlt />
            </div>
            <h4>Leadership Executive Cockpit</h4>
            <p>Single-pane dashboard for leadership to audit department closure speeds, fund utilization vs impact, and citizen satisfaction ratings.</p>
            <div className={styles.productActionRow}>
              <span className={styles.statusIndicator}><span className={styles.statusDot} /> Cockpit Ready</span>
              {/* PASTE TARGET LINK HERE */}
              <Link href="/products/constituency-intelligence#cockpit" className={styles.pasteLinkBtn}>
                View Cockpits <FaExternalLinkAlt style={{ fontSize: '11px' }} />
              </Link>
            </div>
          </div>

          <div className={styles.pillarCard}>
            <div className={styles.pillarIconWrap}>
              <FaMobileAlt />
            </div>
            <h4>Omnichannel Citizen Intake</h4>
            <p>Bilingual WhatsApp bots and street-corner smart kiosks with Aadhaar verification ensuring every citizen voice is registered transparently.</p>
            <div className={styles.productActionRow}>
              <span className={styles.statusIndicator}><span className={styles.statusDot} /> Multi-Channel</span>
              {/* PASTE TARGET LINK HERE */}
              <Link href="/products/constituency-intelligence" className={styles.pasteLinkBtn}>
                Intake Channels <FaExternalLinkAlt style={{ fontSize: '11px' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The 21 DigiShop Commerce & Business Transformation Catalog */}
      <section className={styles.section} id="commerce">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionCategory}>MODULAR BUSINESS &amp; COMMERCE SUITE</span>
          <h2 className={styles.sectionTitle}>DigiShop Micro-SaaS &amp; Business Solutions</h2>
          <p className={styles.sectionLead}>
            21 high-velocity AI micro-services purpose-built for retail chains, e-commerce brands, and enterprise distribution networks.
          </p>
        </div>

        {digiTechCategories.map((group) => (
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
                      <span className={styles.statusDot} /> Deployable
                    </span>

                    {/* TARGET LINK TO PASTE / EDIT */}
                    <Link
                      href={item.link}
                      className={styles.pasteLinkBtn}
                      title={`Open ${item.title}`}
                    >
                      Explore Tool <FaExternalLinkAlt style={{ fontSize: '11px' }} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Digital Infrastructure Standards */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionCategory}>PUBLIC &amp; ENTERPRISE STACK</span>
          <h2 className={styles.sectionTitle}>Scalable, Secure Digital Transformation</h2>
        </div>

        <div className={styles.architectureStrip}>
          <div className={styles.archFeature}>
            <h5>Aadhaar &amp; DigiLocker Aligned</h5>
            <p>Instant verifiable identity proof and document retrieval for public services and KYC compliance.</p>
          </div>
          <div className={styles.archFeature}>
            <h5>Geo-Spatial GIS Integration</h5>
            <p>High-resolution municipal polygon mapping compatible with standard open GIS frameworks and satellite feeds.</p>
          </div>
          <div className={styles.archFeature}>
            <h5>Automated GST Invoicing</h5>
            <p>Direct JSON integration with national tax portals for instantaneous e-way bill and GST compliance generation.</p>
          </div>
          <div className={styles.archFeature}>
            <h5>Low-Bandwidth Resilience</h5>
            <p>Lightweight field agent applications designed for uninterrupted operation in rural and peri-urban areas.</p>
          </div>
        </div>
      </section>

      {/* Domain Consultation Call to Action */}
      <section className={styles.section}>
        <div className={styles.domainCtaCard}>
          <h3>Transform Your Governance or Enterprise Operations</h3>
          <p>
            Connect with our GovTech and digital transformation architects to blueprint constituency platforms, citizen grievance networks, or enterprise commerce automation.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            {/* TARGET CONTACT / INQUIRY LINK */}
            <Link href="/contact" className={styles.btnMain}>
              Schedule Consultation <FaArrowRight />
            </Link>
            <Link href="/products/constituency-intelligence" className={styles.btnGhost}>
              View GovTech Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
