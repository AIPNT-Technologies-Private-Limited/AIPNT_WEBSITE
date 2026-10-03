"use client";

import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './page.module.css';
import {
  FaBrain,
  FaRobot,
  FaArrowRight,
  FaExternalLinkAlt,
  FaUsers,
  FaFileAlt,
  FaGavel,
  FaClipboardCheck,
  FaFileSignature,
  FaFileInvoice,
  FaSearch,
  FaEnvelope,
  FaHeadset,
  FaChartLine,
  FaBullseye,
  FaUserFriends,
  FaDatabase,
  FaUserCheck,
  FaFileContract,
  FaCogs,
  FaShieldAlt,
  FaFileInvoiceDollar,
  FaCheckCircle,
  FaBug,
  FaCode,
  FaLock,
  FaServer,
  FaNetworkWired
} from 'react-icons/fa';

// The 20 Enterprise AI Micro-SaaS products grouped into 4 functional enterprise divisions
const enterpriseCategories = [
  {
    id: "productivity",
    categoryTitle: "Productivity, Legal & Communication",
    icon: <FaUsers />,
    count: "05 Tools",
    products: [
      {
        id: "ENT-01",
        title: "AI MeetingCopilot",
        desc: "Autonomous meeting intelligence extracting structured action items, decisions, and CRM summaries in real-time.",
        icon: <FaUsers />,
        // PASTE TARGET LINK HERE:
        link: "/products#enterprise"
      },
      {
        id: "ENT-02",
        title: "AI ProposalGen",
        desc: "Automated business proposal builder tailoring case studies, pricing tables, and compliance clauses per prospect.",
        icon: <FaFileAlt />,
        // PASTE TARGET LINK HERE:
        link: "/products#enterprise"
      },
      {
        id: "ENT-03",
        title: "AI TenderAssist",
        desc: "Govt & commercial tender document analyzer parsing bid qualification criteria and flagging SLA risks.",
        icon: <FaGavel />,
        // PASTE TARGET LINK HERE:
        link: "/products#enterprise"
      },
      {
        id: "ENT-04",
        title: "AI RFPResponse",
        desc: "Autonomous RFP response generator cross-referencing past enterprise submissions and engineering specs.",
        icon: <FaClipboardCheck />,
        // PASTE TARGET LINK HERE:
        link: "/products#enterprise"
      },
      {
        id: "ENT-05",
        title: "AI ContractReader",
        desc: "Legal clause intelligence extracting liability caps, indemnity risks, and renewal triggers in multi-page MSAs.",
        icon: <FaFileSignature />,
        // PASTE TARGET LINK HERE:
        link: "/products#enterprise"
      }
    ]
  },
  {
    id: "operations",
    categoryTitle: "Business Operations, Knowledge & Support",
    icon: <FaFileInvoice />,
    count: "05 Tools",
    products: [
      {
        id: "ENT-06",
        title: "AI DocumentQA",
        desc: "Enterprise semantic RAG search across PDFs, Confluence, Google Drive, and internal ERP knowledge bases.",
        icon: <FaSearch />,
        // PASTE TARGET LINK HERE:
        link: "/products#enterprise"
      },
      {
        id: "ENT-07",
        title: "AI EmailCopilot",
        desc: "High-volume corporate inbox assistant drafting contextual replies, priority escalations, and sentiment tags.",
        icon: <FaEnvelope />,
        // PASTE TARGET LINK HERE:
        link: "/products#enterprise"
      },
      {
        id: "ENT-08",
        title: "AI SupportDesk",
        desc: "Tier-1 autonomous IT & customer service ticket resolution engine reducing escalation queues by 70%.",
        icon: <FaHeadset />,
        // PASTE TARGET LINK HERE:
        link: "/products#enterprise"
      },
      {
        id: "ENT-09",
        title: "AI SalesCopilot",
        desc: "Real-time deal guidance, objection handling prompts, and automated account briefing sheets for SDRs.",
        icon: <FaChartLine />,
        // PASTE TARGET LINK HERE:
        link: "/products#enterprise"
      },
      {
        id: "ENT-10",
        title: "AI LeadQualifier",
        desc: "Multi-parameter lead intent scoring and enriched firmographic validation integrated with inbound pipelines.",
        icon: <FaBullseye />,
        // PASTE TARGET LINK HERE:
        link: "/products#enterprise"
      }
    ]
  },
  {
    id: "crm-hr",
    categoryTitle: "Sales, CRM & Human Resources",
    icon: <FaUserFriends />,
    count: "05 Tools",
    products: [
      {
        id: "ENT-11",
        title: "AI CRMUpdater",
        desc: "Zero-data-entry sync reading emails, transcripts, and messages to auto-update Salesforce/HubSpot fields.",
        icon: <FaDatabase />,
        // PASTE TARGET LINK HERE:
        link: "/products#enterprise"
      },
      {
        id: "ENT-12",
        title: "AI HRRecruiter",
        desc: "Fair resume parsing, candidate skill vector matching, and automated interview scheduling agent.",
        icon: <FaUserCheck />,
        // PASTE TARGET LINK HERE:
        link: "/products#enterprise"
      },
      {
        id: "ENT-13",
        title: "AI JDGenerator",
        desc: "Role-specific job description creator aligning compensation benchmarks, skill requirements, and DEI guidelines.",
        icon: <FaFileContract />,
        // PASTE TARGET LINK HERE:
        link: "/products#enterprise"
      },
      {
        id: "ENT-14",
        title: "AI SOPBuilder",
        desc: "Transforms screen recordings and raw interview transcripts into structured, audit-ready operational SOPs.",
        icon: <FaCogs />,
        // PASTE TARGET LINK HERE:
        link: "/products#enterprise"
      },
      {
        id: "ENT-15",
        title: "AI ComplianceDesk",
        desc: "Continuous internal policy monitoring, regulatory audit tracking, and automated ISO/SOC2 check-ins.",
        icon: <FaShieldAlt />,
        // PASTE TARGET LINK HERE:
        link: "/products#enterprise"
      }
    ]
  },
  {
    id: "engineering",
    categoryTitle: "Finance, Engineering & Autonomous Agents",
    icon: <FaBullseye />,
    count: "05 Tools",
    products: [
      {
        id: "ENT-16",
        title: "AI InvoiceExtractor",
        desc: "Multi-lingual intelligent document processing extracting GL line items, tax numbers, and bank details.",
        icon: <FaFileInvoiceDollar />,
        // PASTE TARGET LINK HERE:
        link: "/products#enterprise"
      },
      {
        id: "ENT-17",
        title: "AI QACopilot",
        desc: "Autonomous software testing assistant converting product user stories into regression test cases and Cypress scripts.",
        icon: <FaCheckCircle />,
        // PASTE TARGET LINK HERE:
        link: "/products#enterprise"
      },
      {
        id: "ENT-18",
        title: "AI BugAnalyzer",
        desc: "Deep stack trace root-cause diagnosis, log anomaly clustering, and suggested GitHub pull request patches.",
        icon: <FaBug />,
        // PASTE TARGET LINK HERE:
        link: "/products#enterprise"
      },
      {
        id: "ENT-19",
        title: "AI CodeReviewBot",
        desc: "Automated security vulnerability scanner detecting OWASP Top 10 vulnerabilities and stylistic code drift.",
        icon: <FaCode />,
        // PASTE TARGET LINK HERE:
        link: "/products#enterprise"
      },
      {
        id: "ENT-20",
        title: "AI AgentBuilder",
        desc: "Low-code enterprise framework for building, evaluating, and deploying multi-agent autonomous workflows.",
        icon: <FaRobot />,
        // PASTE TARGET LINK HERE:
        link: "/products#enterprise"
      }
    ]
  }
];

export default function EnterpriseAIPage() {
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
            <span className={styles.breadcrumbCurrent}>Enterprise AI</span>
          </div>

          <div className={styles.complianceBadge}>
            <span className={styles.pulseDot} />
            <span>Air-Gapped Private VPC Ready • SOC2 &amp; ISO Aligned • Zero Training on Customer Data</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.domainBadge}>
            <FaBrain /> Enterprise Intelligence Domain
          </div>

          <h1 className={styles.heroTitle}>
            AI systems built around <span className={styles.highlightPurple}>your organisation.</span>
          </h1>

          <p className={styles.heroLead}>
            Enterprise copilots, RAG platforms, AI agents, document intelligence, automation and private AI deployments.
            We build secure, custom intelligence systems designed for complex organizational workflows with strict data privacy guarantees, zero cloud lock-in, and sub-second reasoning latency.
          </p>

          <div className={styles.heroActions}>
            <Link href="#flagship" className={styles.btnMain}>
              Explore Enterprise Core <FaArrowRight />
            </Link>
            <Link href="#catalog" className={styles.btnGhost}>
              View All 20 Micro-SaaS Agents
            </Link>
          </div>
        </div>

        {/* Quick Domain Metrics Grid */}
        <div className={styles.heroMetricsGrid}>
          <div className={styles.metricTile}>
            <span className={`${styles.metricValue} ${styles.metricValueAccent}`}>100%</span>
            <span className={styles.metricLabel}>Private sovereign cloud or air-gapped on-premise execution</span>
          </div>
          <div className={styles.metricTile}>
            <span className={styles.metricValue}>&lt; 800ms</span>
            <span className={styles.metricLabel}>Sub-second enterprise RAG retrieval and synthesis speed</span>
          </div>
          <div className={styles.metricTile}>
            <span className={styles.metricValue}>20+</span>
            <span className={styles.metricLabel}>Ready-to-deploy modular workstream autonomous copilots</span>
          </div>
          <div className={styles.metricTile}>
            <span className={`${styles.metricValue} ${styles.metricValueAccent}`}>0%</span>
            <span className={styles.metricLabel}>Zero leakage: Your enterprise IP is never used for public training</span>
          </div>
        </div>
      </section>

      {/* Flagship Enterprise AI Spotlight */}
      <section className={styles.section} id="flagship">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionCategory}>FLAGSHIP ENTERPRISE ARCHITECTURE</span>
          <h2 className={styles.sectionTitle}>Custom Enterprise Copilots &amp; RAG Systems</h2>
          <p className={styles.sectionLead}>
            Move beyond generic chatbots. Deploy enterprise-grade autonomous reasoning systems deeply integrated with your ERPs, databases, and compliance frameworks.
          </p>
        </div>

        <div className={styles.flagshipCard}>
          <div className={styles.flagshipContent}>
            <div className={styles.flagshipBadge}>Enterprise Flagship</div>
            <h3 className={styles.flagshipTitle}>AiPNT Enterprise Intelligence Suite</h3>
            <p className={styles.flagshipTagline}>
              High-throughput AI agents tailored to your corporate taxonomy, security clearance, and business processes.
            </p>
            <p className={styles.flagshipDesc}>
              We architect secure private AI deployments that connect to proprietary enterprise knowledge bases (SQL, SAP, SharePoint, Salesforce) with verifiable citation grounding. Designed with robust guardrails to eliminate hallucination and enforce strict role-based access control (RBAC).
            </p>

            <div className={styles.flagshipPills}>
              <span className={styles.pillItem}>Hybrid Cloud &amp; On-Prem</span>
              <span className={styles.pillItem}>Semantic Vector Caching</span>
              <span className={styles.pillItem}>Role-Based Access Control</span>
              <span className={styles.pillItem}>Agentic Workflow Orchestration</span>
              <span className={styles.pillItem}>Zero Data Retention Guarantee</span>
              <span className={styles.pillItem}>Custom LLM Fine-Tuning</span>
            </div>

            <div className={styles.flagshipActions}>
              {/* TARGET LINK TO PASTE / EDIT */}
              <Link href="/products#enterprise" className={styles.btnMain}>
                Explore Enterprise Solutions <FaArrowRight />
              </Link>
              <Link href="/contact" className={styles.btnGhost}>
                Request Architecture Briefing
              </Link>
            </div>
          </div>

          <div className={styles.flagshipImageContainer}>
            <img src="/assets/generated/enterprise_ai_domain.jpg" alt="Enterprise AI System Architecture" />
          </div>
        </div>

        {/* 3 Core Enterprise Capabilities */}
        <div className={styles.pillarsGrid}>
          <div className={styles.pillarCard}>
            <div className={styles.pillarIconWrap}>
              <FaRobot />
            </div>
            <h4>Autonomous Workstream Copilots</h4>
            <p>Specialized agents that monitor shared team channels, execute multi-step database queries, and automate repetitive administrative deliverables.</p>
            <div className={styles.productActionRow}>
              <span className={styles.statusIndicator}><span className={styles.statusDot} /> Production Ready</span>
              {/* PASTE TARGET LINK HERE */}
              <Link href="/products#enterprise" className={styles.pasteLinkBtn}>
                Learn More <FaExternalLinkAlt style={{ fontSize: '11px' }} />
              </Link>
            </div>
          </div>

          <div className={styles.pillarCard}>
            <div className={styles.pillarIconWrap}>
              <FaDatabase />
            </div>
            <h4>Grounded Enterprise RAG</h4>
            <p>Multi-modal retrieval-augmented generation engine supporting million-token context across technical schematics, contracts, and financial audits.</p>
            <div className={styles.productActionRow}>
              <span className={styles.statusIndicator}><span className={styles.statusDot} /> High Throughput</span>
              {/* PASTE TARGET LINK HERE */}
              <Link href="/products#enterprise" className={styles.pasteLinkBtn}>
                Learn More <FaExternalLinkAlt style={{ fontSize: '11px' }} />
              </Link>
            </div>
          </div>

          <div className={styles.pillarCard}>
            <div className={styles.pillarIconWrap}>
              <FaLock />
            </div>
            <h4>Private &amp; Sovereign AI</h4>
            <p>Air-gapped on-premise clusters or dedicated virtual private clouds ensuring full legal data sovereignty with no third-party API exposure.</p>
            <div className={styles.productActionRow}>
              <span className={styles.statusIndicator}><span className={styles.statusDot} /> Air-Gapped Ready</span>
              {/* PASTE TARGET LINK HERE */}
              <Link href="/products#enterprise" className={styles.pasteLinkBtn}>
                Learn More <FaExternalLinkAlt style={{ fontSize: '11px' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The 20 Enterprise AI Micro-SaaS Product Catalog */}
      <section className={styles.section} id="catalog">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionCategory}>SPECIALIZED AGENT ECOSYSTEM</span>
          <h2 className={styles.sectionTitle}>Explore All 20 Enterprise AI Products</h2>
          <p className={styles.sectionLead}>
            Plug-and-play autonomous agents and predictive workflow services purpose-built for immediate departmental deployment.
          </p>
        </div>

        {enterpriseCategories.map((group) => (
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
                      <span className={styles.statusDot} /> Active Agent
                    </span>

                    {/* TARGET LINK TO PASTE / EDIT */}
                    <Link
                      href={item.link}
                      className={styles.pasteLinkBtn}
                      title={`Open ${item.title}`}
                    >
                      Deploy Agent <FaExternalLinkAlt style={{ fontSize: '11px' }} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Enterprise Security & Infrastructure Stack */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionCategory}>SECURITY &amp; INFRASTRUCTURE</span>
          <h2 className={styles.sectionTitle}>Enterprise-Grade Defense-in-Depth</h2>
        </div>

        <div className={styles.architectureStrip}>
          <div className={styles.archFeature}>
            <h5>Granular RBAC Security</h5>
            <p>Every response inherits employee authorization privileges. AI will never reveal data above a user's clearance level.</p>
          </div>
          <div className={styles.archFeature}>
            <h5>Semantic Vector Caching</h5>
            <p>Distributed vector indexing reducing compute costs by up to 60% while accelerating recurrent query latency.</p>
          </div>
          <div className={styles.archFeature}>
            <h5>Zero-Hallucination Guardrails</h5>
            <p>Multi-stage verification models ensuring every claim is strictly backed by verifiable document citations.</p>
          </div>
          <div className={styles.archFeature}>
            <h5>Any-Cloud Infrastructure</h5>
            <p>Deploy on AWS, Azure, GCP, or your own bare-metal GPU clusters with automated Kubernetes orchestration.</p>
          </div>
        </div>
      </section>

      {/* Domain Consultation Call to Action */}
      <section className={styles.section}>
        <div className={styles.domainCtaCard}>
          <h3>Architect Your Custom Enterprise AI Strategy</h3>
          <p>
            Consult with our AI engineering directors to evaluate RAG architectures, model fine-tuning feasibility, and security compliance for your organization.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            {/* TARGET CONTACT / INQUIRY LINK */}
            <Link href="/contact" className={styles.btnMain}>
              Schedule Enterprise Briefing <FaArrowRight />
            </Link>
            <Link href="/products" className={styles.btnGhost}>
              Explore Full Product Suite
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
