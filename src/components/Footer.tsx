import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.brandCol}>
            <div className={styles.logoWrapper}>
              <img src="/logo-balaji.png" alt="Balaji PhysioCity" className={styles.logoImg} />
            </div>
            <p className={styles.description}>
              New-age physio care delivering high-quality personalized treatments by seamlessly integrating clinic, home & tele-rehab.
            </p>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon}>f</a>
              <a href="#" className={styles.socialIcon}>t</a>
              <a href="#" className={styles.socialIcon}>in</a>
              <a href="#" className={styles.socialIcon}>ig</a>
            </div>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Support</h4>
            <ul className={styles.linkList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/therapies">Therapies</Link></li>
              <li><Link href="/services">Services</Link></li>
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Contact</h4>
            <div className={styles.contactItem}>
              <span>✉️</span>
              <a href="mailto:help@balajiphysiocity.in">help@balajiphysiocity.in</a>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            Copyright 2026 Balaji PhysioCity. All Rights Reserved.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/terms">Terms And Conditions</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
