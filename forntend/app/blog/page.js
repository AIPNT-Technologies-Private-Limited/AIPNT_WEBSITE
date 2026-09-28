"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaWhatsapp, FaSearch, FaCalendarAlt, FaClock, FaUser, FaArrowRight } from 'react-icons/fa';
import styles from './page.module.css';

const allBlogPosts = [
  {
    id: 'subcollector-office-khordha-ai-training',
    title: 'AI PNT Conducts Executive AI & Cyber Safety Training with Sub-Collector Office, Khordha',
    slug: 'subcollector-office-khordha-ai-training',
    category: 'Government Tech',
    image: '/assets/subcollector-office/subcollector-banner.jpg',
    date: 'August 29, 2026',
    readTime: '5 min read',
    author: 'AIPNT Public Sector Newsroom',
    excerpt: 'AIPNT Technologies, in active coordination with the Sub-Collector Office, Khordha, conducted a dedicated executive workshop on "Become AI Smart & Cyber Smart: Safe Practice" — empowering administrative officers with responsible AI tools, cybersecurity hygiene, and digital governance workflows.'
  },
  {
    id: 'aipnt-grand-inauguration-ceremony',
    title: 'Grand Inauguration of AIPNT: Hon’ble MLA Prasanta Kumar Jagadev & Silicon University Leaders Launch AI Ecosystem',
    slug: 'aipnt-grand-inauguration-ceremony',
    category: 'Company Milestone',
    image: '/assets/inauguration-collage-banner.jpg',
    date: 'August 3, 2026',
    readTime: '6 min read',
    author: 'AIPNT Newsroom',
    excerpt: 'Chief Guest Hon’ble MLA Prasanta Kumar Jagadev (Khurda), Prof. Sanjit Swain, and Prof. Dr. Mahendra Prasad Augsty inaugurate AIPNT’s next-gen AI & STEM training facility.'
  }
];

const categories = ['All', 'Company Milestone', 'Enterprise AI', 'STEM Education', 'Career & Internships', 'Government Tech', 'Hardware & IoT'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = allBlogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.badge}>AIPNT NEWS & BLOG</span>
          <h1>Empowering Ideas, AI Research & Technology Trends</h1>
          <p>
            Milestone announcements, technical insights, and perspectives from AIPNT’s AI engineers, academic leaders, and mentors.
          </p>

          {/* Search Bar */}
          <div className={styles.searchBox}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search articles by title or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className={styles.mainSection}>
        <main className={styles.mainContainer}>
          {/* Category Filters */}
          <div className={styles.categoryBar}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.catBtn} ${selectedCategory === cat ? styles.catBtnActive : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <section className={styles.blogGridSection}>
            {filteredPosts.length > 0 ? (
              <div className={styles.blogGrid}>
                {filteredPosts.map((post) => (
                  <article key={post.id} className={styles.blogCard}>
                    <div className={styles.imageWrapper}>
                      <img src={post.image} alt={post.title} loading="lazy" />
                      <span className={styles.categoryBadge}>{post.category}</span>
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.metaRow}>
                        <span>
                          <FaCalendarAlt /> {post.date}
                        </span>
                        <span>•</span>
                        <span>
                          <FaClock /> {post.readTime}
                        </span>
                      </div>
                      <h2 className={styles.cardTitle}>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className={styles.cardExcerpt}>{post.excerpt}</p>
                      <div className={styles.cardFooter}>
                        <span className={styles.author}>
                          <FaUser /> {post.author}
                        </span>
                        <Link href={`/blog/${post.slug}`} className={styles.readMoreBtn}>
                          Read More <FaArrowRight />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className={styles.noResults}>
                <h3>No articles found</h3>
                <p>Try searching for a different keyword or select another category.</p>
              </div>
            )}
          </section>
        </main>
      </div>

      <Footer />

      <a
        href="https://api.whatsapp.com/send?phone=917788016666"
        className="phone-button"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
