import Link from 'next/link';
import styles from '../page.module.css';

export default function Therapies() {
  const therapies = [
    { name: "Sports Injury Rehabilitation", img: "https://images.unsplash.com/photo-1576091160550-217359f48a1c?q=80&w=400&auto=format&fit=crop" },
    { name: "Sports Physiotherapy", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop" },
    { name: "Knee Care", img: "https://images.unsplash.com/photo-1629909613654-28a3a7c4abd4?q=80&w=400&auto=format&fit=crop" },
    { name: "PIVD (Prolapsed Disc)", img: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=400&auto=format&fit=crop" },
    { name: "Knee Pain Physiotherapy", img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=400&auto=format&fit=crop" },
    { name: "Rheumatoid Arthritis", img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=400&auto=format&fit=crop" },
    { name: "Orthopaedic Physiotherapy", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400&auto=format&fit=crop" },
    { name: "Sports Massage Therapy", img: "https://images.unsplash.com/photo-1559839734-2b71f1e3c77d?q=80&w=400&auto=format&fit=crop" },
  ];

  return (
    <div>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.badge}>Our Expertise</span>
            <h1 className={styles.sectionTitle}>Precision Recovery & Clinical Grace</h1>
            <p className={styles.heroSubtitle}>Balaji Physio City Clinic offers 8 specialized therapy categories for optimized rehabilitation.</p>
          </div>
          <div className={styles.grid}>
            {therapies.map((t, i) => (
              <div key={i} className={styles.featureCard}>
                <div className={styles.imgThumbnail}>
                  <img src={t.img} alt={t.name} className={styles.cardImg} />
                </div>
                <h3 className={styles.featureTitle} style={{marginTop: '16px'}}>{t.name}</h3>
                <p className={styles.featureDesc}>Expert clinical management for targeted relief and long-term restoration.</p>
                <Link href="#" className="link" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '14px' }}>
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} section-alt`} style={{ background: 'var(--primary)', color: 'white' }}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} style={{ color: 'white' }}>Can't find what you're looking for?</h2>
            <p style={{ opacity: 0.8 }}>Contact Balaji Physio City Clinic experts directly for a personalized consultation.</p>
            <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:08460525224" className="btn-secondary">Call 08460525224</a>
              <a href="https://wa.me/918460525224" className="btn-secondary" style={{ background: '#25D366', color: 'white' }}>WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
