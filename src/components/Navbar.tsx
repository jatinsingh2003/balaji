'use client';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          BALAJI PHYSIO
        </Link>
        <div className={styles.navLinks}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/therapies" className={styles.link}>Therapies</Link>
          <Link href="/services" className={styles.link}>Services</Link>
          <div className={styles.contactGroup}>
            <a href="tel:08460525224" className={styles.phoneLink}>
              📞 08460525224
            </a>
            <a 
              href="https://wa.me/918460525224" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.cta}
              style={{ background: '#25D366' }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
