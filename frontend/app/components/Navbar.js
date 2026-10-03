"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaCaretDown } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="logo">
        <Link href="/">
          <img src="/assets/logo.png" height="58" alt="AIPNT logo" />
        </Link>
      </div>
      <button
        className="nav-toggle"
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((current) => !current)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
        <ul>
          <li>
            <Link href="/" onClick={closeMenu}>Home</Link>
          </li>
          <li className="dropdown">
            <span className="dropbtn">Solutions <FaCaretDown className="caret" /></span>
            <div className="dropdown-content">
              <Link href="/corporate-training" onClick={closeMenu}>Corporate Training</Link>
              <Link href="/summer-internship" onClick={closeMenu}>College Training Programs</Link>
              <Link href="/school-stem" onClick={closeMenu}>School STEM</Link>
              <Link href="/government" onClick={closeMenu}>Government Programs</Link>
            </div>
          </li>
          <li className="dropdown">
            <span className="dropbtn">Our Products <FaCaretDown className="caret" /></span>
            <div className="dropdown-content">
              <Link href="/products/prarambh" onClick={closeMenu}>Prarambh (Code • IoT • AI)</Link>
              <Link href="/products/digiswasth" onClick={closeMenu}>DigiSwasth (AI Healthcare)</Link>
              <Link href="/products/atat" onClick={closeMenu}>ATAT (AI Teaching Assistant)</Link>
              <Link href="/products/constituency-intelligence" onClick={closeMenu}>Grievance Redressal System</Link>
              <Link href="/products" onClick={closeMenu}>All Products Overview</Link>
            </div>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu}>About Us</Link>
          </li>
          <li>
            <Link href="/blog" onClick={closeMenu}>Blog</Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu}>Contact Us</Link>
          </li>
          <li>
            <Link href="/shop" onClick={closeMenu}>Shop</Link>
          </li>
        </ul>
      </nav>
      <div className="auth">
        <button className="login" type="button">Login</button>
        <button className="signup" type="button">Book Consultation</button>
      </div>
    </header>
  );
}
