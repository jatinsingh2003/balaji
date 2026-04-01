import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.topSection}>
          <h2 className={styles.title}>Ready to Start Your Precise Recovery?</h2>
          <p className={styles.subtitle}>
            Experience the future of rehabilitation where clinical expertise meets algorithmic accuracy.
          </p>
          <Link href="/book" className={styles.cta}>
            Book Your Consultation
          </Link>
        </div>
        <div className={styles.divider} />
        <div className={styles.bottomSection}>
          <Link href="/" className={styles.logo}>
            CLINICAL CURATOR
          </Link>
          <div className={styles.footerLinks}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/therapies" className={styles.link}>Therapies</Link>
            <Link href="/services" className={styles.link}>Services</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </div>
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Clinical Curator Physiotherapy & Wellness. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
