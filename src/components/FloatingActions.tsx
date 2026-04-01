'use client';
import styles from './FloatingActions.module.css';

export default function FloatingActions() {
  return (
    <div className={styles.floatingContainer}>
      <a href="tel:+919452791291" className={styles.actionIcon} style={{ background: '#0F3B3B' }}>
        <img src="/phone-call.png" alt="Call" className={styles.fabIcon} style={{ filter: 'brightness(0) invert(1)' }} />
      </a>
      <a 
        href="https://wa.me/919452791291" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.actionIcon} 
        style={{ background: '#25D366' }}
      >
        <img src="/logo.png" alt="WhatsApp" className={styles.fabIcon} style={{ filter: 'brightness(0) invert(1)' }} />
      </a>
    </div>
  );
}
