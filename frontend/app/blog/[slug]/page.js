"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaWhatsapp, FaArrowLeft, FaCalendarAlt, FaClock, FaUser, FaLinkedin, FaTwitter, FaFacebook, FaBuilding, FaGraduationCap, FaQuoteLeft, FaShieldAlt, FaCheckCircle, FaLaptopCode } from 'react-icons/fa';
import styles from './page.module.css';

const articles = {
  'subcollector-office-khordha-ai-training': {
    title: 'Empowering Governance: AI PNT Conducts Executive AI & Cyber Safety Training with Sub-Collector Office, Khordha',
    category: 'Government Tech',
    image: '/assets/subcollector-office/subcollector-banner.jpg',
    date: 'September 26, 2026',
    readTime: '5 min read',
    author: 'AIPNT Public Sector Newsroom',
    excerpt: 'AIPNT Technologies, in active coordination with the Sub-Collector Office, Khordha, conducted a dedicated executive workshop on "Become AI Smart & Cyber Smart: Safe Practice" — empowering administrative officers with responsible AI tools, cybersecurity hygiene, and digital governance workflows.',
    gallery: [
      {
        src: '/assets/subcollector-office/subcollector-training-1.jpg',
        caption: 'Administrative officers, nodal heads, and department personnel attending the interactive AI training session in the Sub-Collectorate Conference Hall, Khordha.'
      },
      {
        src: '/assets/subcollector-office/subcollector-training-2.jpg',
        caption: 'AIPNT Lead Specialist presenting core Responsible AI tenets: hallucination awareness, eliminating algorithmic bias, and preserving human accountability.'
      },
      {
        src: '/assets/subcollector-office/subcollector-training-3.jpg',
        caption: 'Official address underlining the joint mission: "Smart Tools, Smart Practice, Stronger Impact" for digital district governance.'
      },
      {
        src: '/assets/subcollector-office/subcollector-training-4.jpg',
        caption: 'Hands-on practical walkthrough demonstrating intelligent data processing, automated correspondence drafting, and secure record keeping.'
      }
    ],
    content: [
      {
        type: 'paragraph',
        text: 'KHORDHA, ODISHA — In an era where digital public infrastructure and artificial intelligence are rapidly redefining administrative efficiency, AIPNT Technologies Private Limited, in formal coordination with the Sub-Collector Office, Khordha, conducted a high-impact executive workshop titled "Become AI Smart & Cyber Smart: Safe Practice". Held at the Sub-Collectorate Conference Hall, the session brought together administrative officers, section supervisors, and clerical staff for an intensive immersion into modern artificial intelligence and digital security hygiene.'
      },
      {
        type: 'quote',
        quote: 'Integrating Artificial Intelligence into governance requires an unwavering commitment to ethics and accountability. AI provides extraordinary leverage to process information and assist decision-making, but transparency, procedural compliance, and ultimate responsibility will always rest in the hands of the administrative officer.',
        author: 'Executive Leadership — Sub-Collector Office Khordha & AIPNT Joint Training Initiative'
      },
      {
        type: 'heading',
        text: 'Key Training Modules: "Smart Tools, Smart Practice, Stronger Impact"'
      },
      {
        type: 'paragraph',
        text: 'The workshop was structured into three targeted learning tracks designed specifically for civil service personnel and public sector administrative workflows:'
      },
      {
        type: 'dignitaries',
        list: [
          {
            name: 'Module 1: Responsible AI & Hallucination Awareness',
            role: 'Ethics & Procedural Compliance',
            desc: 'In-depth education on how large language models function, recognizing AI "hallucinations" (convincing yet factually inaccurate outputs), cross-referencing AI suggestions with official government rules, and preventing automated algorithmic bias.'
          },
          {
            name: 'Module 2: Cyber Smart & Safe Digital Practice',
            role: 'Information Security & Data Protection',
            desc: 'Practical guidelines on protecting sensitive citizen databases, recognizing sophisticated spear-phishing tactics, implementing multi-factor authentication, and ensuring non-disclosure of classified administrative memos.'
          },
          {
            name: 'Module 3: Administrative Automation & Productivity Tools',
            role: 'Public Delivery Efficiency',
            desc: 'Live interactive demonstrations using smart spreadsheet analysis, automated citizen grievance triage, multi-lingual translation between Odia and English, and fast-track official correspondence drafting.'
          }
        ]
      },
      {
        type: 'heading',
        text: 'Interactive Demonstration & Dialogue'
      },
      {
        type: 'paragraph',
        text: 'During the session, AIPNT technical specialists showcased real-time applications of modern AI engines tailored for government administration. Officers participated in live exercises evaluating when to deploy AI assistance and when strict manual verification is mandatory. Crucially, the training reinforced that sensitive government records, personally identifiable citizen information (PII), and confidential state files must never be fed into unvetted public cloud tools.'
      },
      {
        type: 'photoGrid',
        indices: [0, 1]
      },
      {
        type: 'heading',
        text: 'Institutional Guardrails: Core Rules of Engagement for Public Servants'
      },
      {
        type: 'paragraph',
        text: 'The keynote presentation placed special emphasis on practical guardrails for daily office operations:\n\n1. AI Can Make Mistakes: Large Language Models sound confident even when wrong or using outdated information. Every generated claim or statistic must be checked against statutory gazettes.\n2. Avoid Biased or Improper Use: Automated suggestions must never replace formal due process or override affirmative guidelines for citizen welfare.\n3. Maintain Unbroken Human Accountability: AI serves as a tireless co-pilot, but the approving officer bears full legal, administrative, and ethical ownership for every file signed.'
      },
      {
        type: 'photoGrid',
        indices: [2, 3]
      },
      {
        type: 'heading',
        text: 'Driving Grassroots Digital Transformation Across Odisha'
      },
      {
        type: 'paragraph',
        text: 'The executive training concluded with an engaging question-and-answer forum where officers shared firsthand workflow bottlenecks and explored how state-approved AI toolkits can help streamline grievance redressal and public file clearance.\n\nAIPNT Technologies remains committed to empowering public administration bodies across Odisha and eastern India with customized government tech programs, AI literacy drives, and secure digital infrastructure solutions that bolster governance transparency and citizen trust.'
      }
    ]
  },
  'aipnt-grand-inauguration-ceremony': {
    title: 'Grand Inauguration of AIPNT: Hon’ble MLA Prasanta Kumar Jagadev & Silicon University Leaders Launch AI & STEM Ecosystem',
    category: 'Company Milestone',
    image: '/assets/inauguration-collage-banner.jpg',
    date: 'August 3, 2026',
    readTime: '6 min read',
    author: 'AIPNT Newsroom',
    excerpt: 'Chief Guest Hon’ble MLA Prasanta Kumar Jagadev (Khurda), Prof. Sanjit Swain, and Prof. Dr. Mahendra Prasad Augsty inaugurate AIPNT’s next-generation AI, Robotics, and STEM learning center.',
    gallery: [
      { src: '/assets/inauguration/inauguration-1.jpg', caption: 'Keynote address by distinguished leadership during the inauguration' },
      { src: '/assets/inauguration/inauguration-2.jpg', caption: 'Official ribbon cutting ceremony marking the launch of AIPNT' },
      { src: '/assets/inauguration/inauguration-3.jpg', caption: 'Hon’ble MLA Prasanta Kumar Jagadev with academic delegates' },
      { src: '/assets/inauguration/inauguration-4.jpg', caption: 'Unveiling the state-of-the-art AI & STEM Innovation Labs' },
      { src: '/assets/inauguration/inauguration-5.jpg', caption: 'Interactive facility tour of the hardware & robotics setup' },
      { src: '/assets/inauguration/inauguration-6.jpg', caption: 'Felicitation of key mentors and ecosystem partners' },
      { src: '/assets/inauguration/inauguration-7.jpg', caption: 'Exchange of academic & enterprise partnership agreements' },
      { src: '/assets/inauguration/inauguration-8.jpg', caption: 'Team and dignitaries celebrating the successful launch' }
    ],
    content: [
      {
        type: 'paragraph',
        text: 'BHUBANESWAR, ODISHA — AIPNT officially inaugurated its state-of-the-art Artificial Intelligence, Robotics, and STEM training ecosystem at Switchtech Incubators, Silicon University. The landmark event gathered prominent state leaders, academic visionaries, enterprise executives, and young tech innovators to commemorate a new chapter in technology education and industry-aligned skill building.'
      },
      {
        type: 'quote',
        quote: 'Skill development in Artificial Intelligence and hands-on robotics is essential for empowering the youth of Odisha. AIPNT’s commitment to providing industry-level labs and practical STEM learning will create transformative career opportunities across our state.',
        author: 'Shri Prasanta Kumar Jagadev — Member of Legislative Assembly (MLA), Khurda (Khordha) Constituency'
      },
      {
        type: 'heading',
        text: 'Dignitaries & Chief Guests Spearheading Innovation'
      },
      {
        type: 'paragraph',
        text: 'The inauguration ceremony commenced with the lighting of the lamp and keynote addresses by honored dignitaries, highlighting the convergence of policy, academia, and startup incubation:'
      },
      {
        type: 'dignitaries',
        list: [
          {
            name: 'Shri Prasanta Kumar Jagadev',
            role: 'Chief Guest — Member of Legislative Assembly (MLA), Khurda Constituency, Odisha',
            desc: 'Emphasized the vital role of grassroots tech literacy, state-wide STEM scaling in government schools, and creating high-value technical employment for Odisha youth.'
          },
          {
            name: 'Prof. Dr. Sanjit Swain',
            role: 'Head, Industry Interface Cell — Silicon University',
            desc: 'Highlighted how AIPNT bridges the critical transition between theoretical engineering curriculum and real-world corporate software & AI demands.'
          },
          {
            name: 'Prof. Dr. Mahendra Prasad Augsty',
            role: 'Head, Switchtech Incubators — Silicon University',
            desc: 'Praised AIPNT’s rapid growth and incubation progress, affirming Switchtech’s ongoing support in nurturing high-impact technology ventures.'
          }
        ]
      },
      {
        type: 'heading',
        text: 'Unveiling Next-Gen Neural Network & Hardware Labs'
      },
      {
        type: 'paragraph',
        text: 'Following the ceremonial ribbon cutting, Chief Guest Shri Prasanta Kumar Jagadev alongside Prof. Sanjit Swain and Prof. Dr. Mahendra Prasad Augsty toured the newly commissioned AIPNT facilities. The delegation inspected live demonstrations of AI model fine-tuning, computer vision robotics kits, and IoT sensor arrays built by student interns.'
      },
      {
        type: 'photoGrid',
        indices: [0, 1, 2, 3]
      },
      {
        type: 'heading',
        text: 'Empowering Corporate Enterprises, Schools, and College Students'
      },
      {
        type: 'paragraph',
        text: 'With the formal launch complete, AIPNT is actively deploying four flagship training tracks:'
      },
      {
        type: 'paragraph',
        text: '1. Corporate Upskilling: Specialized LLM, Deep Learning, and automation tracks for engineering teams.\n2. College Internships: Mentor-led product development sprints focusing on LLMs, Computer Vision, and IoT.\n3. School STEM Labs: Custom hardware kits and AI literacy frameworks for K-12 classrooms.\n4. Government School Transformation: State-wide scalable deployment with regional language support and teacher capacity building.'
      },
      {
        type: 'photoGrid',
        indices: [4, 5, 6, 7]
      }
    ]
  },
  'generative-ai-corporate-upskilling': {
    title: 'How Generative AI is Reshaping Corporate Engineering Teams in 2026',
    category: 'Enterprise AI',
    image: '/assets/corporate-delivery.png',
    date: 'August 4, 2026',
    readTime: '5 min read',
    author: 'AIPNT Research',
    excerpt: 'Explore how top enterprises are integrating custom LLM pipelines, prompt engineering certification, and neural network labs into their core workforce roadmaps.',
    content: [
      {
        type: 'paragraph',
        text: 'As artificial intelligence matures into a foundational pillar of modern software engineering and enterprise operations, companies are moving beyond simple API wrappers to build proprietary domain-adapted models and multi-agent workflows.'
      },
      {
        type: 'paragraph',
        text: 'At AIPNT, our enterprise training cohorts focus on hands-on neural network implementation, fine-tuning open-weights models like Llama 3 and Mistral, and constructing resilient RAG architectures tailored for high-security enterprise environments.'
      }
    ]
  },
  'hands-on-stem-ai-robotics-labs': {
    title: 'Transforming School Classrooms with Hands-on STEM & AI Robotics Labs',
    category: 'STEM Education',
    image: '/assets/stem-lab-setup.png',
    date: 'July 28, 2026',
    readTime: '4 min read',
    author: 'Dr. R. K. Mishra',
    excerpt: 'Building age-appropriate AI literacy and hardware kits that bridge theoretical learning with practical robotics innovation across 200+ partner schools.',
    content: [
      {
        type: 'paragraph',
        text: 'Early exposure to artificial intelligence and hardware design fosters critical thinking, algorithmic reasoning, and creative problem-solving in young learners.'
      },
      {
        type: 'paragraph',
        text: 'Through AIPNT’s School STEM initiative, we deploy modular robotics kits, block-based AI vision tools, and teacher capacity building frameworks directly into K-12 classrooms.'
      }
    ]
  },
  'mentored-internships-ai-career': {
    title: 'From College Student to AI Engineer: Mentored Internships That Count',
    category: 'Career & Internships',
    image: '/assets/internship-demo-day.png',
    date: 'July 15, 2026',
    readTime: '6 min read',
    author: 'Tech Internship Lead',
    excerpt: 'Discover how mentor-led sprints on Computer Vision, LLM fine-tuning, and IoT enable students to build real product portfolios before demo day.',
    content: [
      {
        type: 'paragraph',
        text: 'Bridging the gap between academic theory and industry engineering demands is at the heart of the AIPNT Summer Internship Program.'
      },
      {
        type: 'paragraph',
        text: 'Interns work under the direct mentorship of senior AI developers to build end-to-end applications in computer vision, autonomous IoT systems, and full-stack machine learning deployments.'
      }
    ]
  },
  'scaling-government-school-tech': {
    title: 'Scaling Government School Tech Infrastructure with AI-Powered Ecosystems',
    category: 'Government Tech',
    image: '/assets/government-scale.png',
    date: 'June 30, 2026',
    readTime: '5 min read',
    author: 'Government Initiatives Team',
    excerpt: 'Empowering state-wide public schools with regional language support, teacher capacity building, and custom hardware kits.',
    content: [
      {
        type: 'paragraph',
        text: 'Digital transformation in public education requires solutions built for scale, regional diversity, and low-bandwidth environments.'
      }
    ]
  },
  'hardware-iot-medical-devices': {
    title: 'Building Medical Devices & AI-Driven IoT Prototypes: A Practical Guide',
    category: 'Hardware & IoT',
    image: '/assets/hardware_iot.png',
    date: 'June 18, 2026',
    readTime: '7 min read',
    author: 'Embedded Systems Lab',
    excerpt: 'Key design patterns for interfacing microcontrollers with machine learning inference engines in health-tech and industrial automation.',
    content: [
      {
        type: 'paragraph',
        text: 'Edge AI enables real-time sensor processing and low-latency inference without relying on constant cloud connectivity.'
      }
    ]
  }
};

// Dynamic slug aliases for quick linking
articles['subcollector-office-training'] = articles['subcollector-office-khordha-ai-training'];
articles['subcollector-office'] = articles['subcollector-office-khordha-ai-training'];
articles['subcollector-office-ai-training'] = articles['subcollector-office-khordha-ai-training'];

export default function ArticlePage({ params }) {
  const routerParams = useParams();
  const slug = routerParams?.slug || params?.slug;
  const article = articles[slug] || articles['subcollector-office-khordha-ai-training'] || articles['aipnt-grand-inauguration-ceremony'];

  return (
    <>
      <Navbar />

      <article className={styles.articleWrapper}>
        {/* Header Hero */}
        <header className={styles.articleHeader}>
          <div className={styles.headerContainer}>
            <Link href="/blog" className={styles.backBtn}>
              <FaArrowLeft /> Back to All Articles
            </Link>

            <span className={styles.categoryBadge}>{article.category}</span>

            <h1>{article.title}</h1>

            <div className={styles.metaRow}>
              <span><FaUser /> {article.author}</span>
              <span>•</span>
              <span><FaCalendarAlt /> {article.date}</span>
              <span>•</span>
              <span><FaClock /> {article.readTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Banner Image */}
        <div className={styles.imageContainer}>
          <img src={article.image} alt={article.title} />
        </div>

        {/* Article Content Body */}
        <main className={styles.articleBody}>
          <p className={styles.leadParagraph}>{article.excerpt}</p>

          <div className={styles.contentSection}>
            {article.content.map((item, idx) => {
              if (item.type === 'paragraph') {
                return <p key={idx} className={styles.bodyParagraph}>{item.text}</p>;
              }

              if (item.type === 'quote') {
                return (
                  <blockquote key={idx} className={styles.quoteBlock}>
                    <FaQuoteLeft className={styles.quoteIcon} />
                    <p>{item.quote}</p>
                    <cite>— {item.author}</cite>
                  </blockquote>
                );
              }

              if (item.type === 'heading') {
                return <h2 key={idx} className={styles.sectionHeading}>{item.text}</h2>;
              }

              if (item.type === 'dignitaries') {
                return (
                  <div key={idx} className={styles.dignitariesGrid}>
                    {item.list.map((dignitary, dIdx) => (
                      <div key={dIdx} className={styles.dignitaryCard}>
                        <div className={styles.dignitaryBadge}>
                          <FaGraduationCap />
                        </div>
                        <h3>{dignitary.name}</h3>
                        <p className={styles.dignitaryRole}>{dignitary.role}</p>
                        <p className={styles.dignitaryDesc}>{dignitary.desc}</p>
                      </div>
                    ))}
                  </div>
                );
              }

              if (item.type === 'photoGrid' && article.gallery) {
                return (
                  <div key={idx} className={styles.photoGrid}>
                    {item.indices.map((photoIdx) => (
                      <div key={photoIdx} className={styles.photoItem}>
                        <img
                          src={article.gallery[photoIdx].src}
                          alt={article.gallery[photoIdx].caption}
                          loading="lazy"
                        />
                        <span className={styles.photoCaption}>
                          {article.gallery[photoIdx].caption}
                        </span>
                      </div>
                    ))}
                  </div>
                );
              }

              return null;
            })}
          </div>

          {/* Social Sharing */}
          <div className={styles.shareBar}>
            <span>Share this news article:</span>
            <div className={styles.shareIcons}>
              <a href="#" aria-label="Share on LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Share on Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Share on Facebook"><FaFacebook /></a>
            </div>
          </div>
        </main>
      </article>

      <Footer />

      <a
        href="https://api.whatsapp.com/send?phone=917788016666"
        className="phone-button"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}
