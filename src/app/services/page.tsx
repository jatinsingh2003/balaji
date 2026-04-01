import styles from '../page.module.css';
import serviceStyles from './page.module.css';

export default function Services() {
  const sections = [
    {
      title: "Treatments",
      items: [
        { name: "Sports Injury Treatment", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop" },
      ]
    },
    {
      title: "Procedures",
      items: [
        { name: "Tape Stripping", img: "https://images.unsplash.com/photo-1576091160550-217359f48a1c?q=80&w=400&auto=format&fit=crop" },
      ]
    },
    {
      title: "Services",
      items: [
        { name: "Sports Fracture Rehabilitation", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop" },
      ]
    }
  ];

  return (
    <div>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>Balaji Physio Services Catalog</h1>
            <p className={styles.heroSubtitle}>Specialized clinical management across treatments, procedures, and rehabilitation.</p>
          </div>

          {sections.map((section, idx) => (
            <div key={idx} style={{ marginBottom: '60px' }}>
              <h2 className={styles.featureTitle} style={{ fontSize: '24px', borderLeft: '4px solid var(--primary)', paddingLeft: '16px', marginBottom: '32px' }}>
                {section.title}
              </h2>
              <div className={styles.grid}>
                {section.items.map((s, i) => (
                  <div key={i} className={styles.featureCard}>
                    <div className={styles.imgThumbnail}>
                      <img src={s.img} alt={s.name} className={styles.cardImg} />
                    </div>
                    <h3 className={styles.featureTitle} style={{marginTop: '16px'}}>{s.name}</h3>
                    <p className={styles.featureDesc}>Comprehensive clinical management for optimal physical outcomes.</p>
                    <div style={{ marginTop: '24px' }}>
                      <a href="tel:08460525224" className="btn-secondary" style={{ padding: '8px 16px', fontSize: '13px' }}>Book Now</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
