"use client";

import Link from 'next/link';
import { FaArrowRight, FaCalendarAlt, FaClock, FaUser, FaBookmark } from 'react-icons/fa';

export const blogPosts = [
  {
    id: 'subcollector-office-khordha-ai-training',
    title: 'AI PNT Conducts Executive AI & Cyber Safety Training with Sub-Collector Office, Khordha',
    slug: 'subcollector-office-khordha-ai-training',
    category: 'Government Tech',
    image: '/assets/subcollector-office/subcollector-banner.jpg',
    date: 'September 26, 2026',
    readTime: '5 min read',
    author: 'AIPNT Public Sector Newsroom',
    excerpt: 'AIPNT Technologies partnered with the Sub-Collector Office, Khordha, to conduct a comprehensive executive training on "Become AI Smart & Cyber Smart" for administrative officers.',
    featured: true
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
    excerpt: 'Chief Guest Hon’ble MLA Prasanta Kumar Jagadev (Khurda), Prof. Sanjit Swain, and Prof. Dr. Mahendra Prasad Augsty inaugurate AIPNT’s next-gen AI & STEM training facility.',
    featured: false
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        {/* Section Header */}
        <div className="blog-header">
          <div className="blog-badge-pill">
            <FaBookmark className="blog-badge-icon" />
            <span>INSIGHTS & NEWS</span>
          </div>
          <h2>Latest News & Industry Insights</h2>
          <p className="blog-subtitle">
            Stay updated with AIPNT milestone announcements, AI research, STEM education initiatives, and enterprise technology trends.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image-wrapper">
                <img src={post.image} alt={post.title} loading="lazy" />
                <span className="blog-category-tag">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>
                    <FaCalendarAlt /> {post.date}
                  </span>
                  <span className="meta-dot">•</span>
                  <span>
                    <FaClock /> {post.readTime}
                  </span>
                </div>

                <h3 className="blog-title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="blog-excerpt">{post.excerpt}</p>

                <div className="blog-footer">
                  <span className="blog-author">
                    <FaUser /> {post.author}
                  </span>
                  <Link href={`/blog/${post.slug}`} className="blog-read-more">
                    <span>Read Article</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="blog-cta-wrapper">
          <Link href="/blog" className="blog-view-all-btn">
            Explore All Blog Articles
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
