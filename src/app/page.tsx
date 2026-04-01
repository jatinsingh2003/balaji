import Link from 'next/link';
import styles from './page.module.css';
import ReviewSlider from '@/components/ReviewSlider';
import FAQ from '@/components/FAQ';

export default function Home() {
  const features = [
    { title: "Clinical Assessment", desc: "In-depth biomechanical evaluation by senior physiotherapists.", icon: "📋" },
    { title: "Expert-Led Protocols", desc: "Evidence-based treatment pathways tailored to your recovery goals.", icon: "👨‍⚕️" },
    { title: "Continuous Care", desc: "Ongoing support and progress monitoring from clinic to home.", icon: "🤝" },
    { title: "Personalized Recovery", desc: "Custom exercise and rehabilitation plans for lasting results.", icon: "🎯" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Integrated Care with Clinical Excellence</h1>
            <p className={styles.heroSubtitle}>
              Clinically guided care for pain relief, functional recovery, and long-term everyday performance.
            </p>
            <div className={styles.heroCtas}>
              <a href="tel:+919452791291" className={`${styles.ctaBtn} ${styles.ctaPrimary}`} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="/phone-call.png" alt="" style={{ height: '20px', filter: 'brightness(0) invert(1)' }} />
                Call Now
              </a>
              <a 
                href="https://wa.me/919452791291" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${styles.ctaBtn} ${styles.ctaSecondary}`} 
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <img src="/logo.png" alt="" style={{ height: '20px', filter: 'brightness(0) invert(1)' }} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Slider Section */}
      <section className={styles.section} style={{ paddingBottom: 0 }}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Patient Success Stories</h2>
            <p className={styles.heroSubtitle} style={{ color: '#666' }}>Real feedback from our patients on Justdial.</p>
          </div>
        </div>
        <ReviewSlider />
      </section>

      {/* Person Incharge Section */}
      <section className={styles.inchargeSection}>
        <div className={styles.container}>
          <div className={styles.inchargeContent}>
            <div className={styles.inchargeImageContainer}>
              <div className={styles.inchargePlaceholder}>
                <p style={{ fontSize: '14px', opacity: 0.5 }}>IMAGE PLACEHOLDER</p>
                <p style={{ fontWeight: 600 }}>Person Incharge</p>
              </div>
            </div>
            <div className={styles.inchargeInfo}>
              <span className={styles.inchargeLabel}>Clinical Leadership</span>
              <h2 className={styles.inchargeName}>Expert Guidance</h2>
              <p className={styles.inchargeBio}>
                Our clinic is led by top-tier clinical experts dedicated to restoring your vitality. 
                With years of experience in advanced physiotherapy and sports rehabilitation, we provide 
                curated care plans that prioritize your long-term health and performance.
              </p>
              <div style={{ marginTop: '32px' }}>
                <Link href="/about" className="btn-primary" style={{ padding: '16px 36px', borderRadius: '50px' }}>
                  Read More About Our Approach
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Framework Section */}
      <section className={`${styles.section} ${styles.altSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Precision Recovery Framework</h2>
            <p className={styles.heroSubtitle} style={{ color: '#666' }}>Personalized clinical protocols for faster, safer outcomes.</p>
          </div>
          <div className={styles.grid}>
            {features.map((f, i) => (
              <div key={i} className={styles.featureCard}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
