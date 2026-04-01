'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logoWrapper}>
          <img src="/logo-balaji.png" alt="Balaji PhysioCity" className={styles.logoImg} />
        </Link>

        {/* Hamburger Menu Icon */}
        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle Menu">
          <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Navigation Links - Collapsible on Mobile */}
        <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
          <Link href="/" className={styles.link} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/about" className={styles.link} onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/therapies" className={styles.link} onClick={() => setIsMenuOpen(false)}>Therapies</Link>
          <Link href="/services" className={styles.link} onClick={() => setIsMenuOpen(false)}>Services</Link>
          
          <div className={styles.contactGroup}>
            <a href="tel:+919452791291" className={styles.phoneLink}>
              <img src="/phone-call.png" alt="Call" className={styles.navIcon} />
              +91 94527 91291
            </a>
            <a
              href="https://wa.me/919452791291"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
              style={{ background: '#25D366', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <img src="/logo.png" alt="WhatsApp" className={styles.navIcon} style={{ filter: 'brightness(0) invert(1)' }} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
