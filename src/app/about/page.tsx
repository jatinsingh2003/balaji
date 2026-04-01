import styles from './page.module.css';

export default function About() {
  const values = [
    { title: "Clinical Rigor", desc: "Evidence-based practice at every step.", icon: "🔬" },
    { title: "Restorative Focus", desc: "Restoring function and performance.", icon: "🌱" },
    { title: "Curated Wisdom", desc: "Expert selection of treatments.", icon: "📚" },
  ];

  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <h1 className={styles.visionTitle}>Where Clinical Precision Meets Human Grace</h1>
              <p className={styles.heroSubtitle}>
                Clinical Curator is a premium clinic dedicated to providing integrated care through AI-precision recovery and human expertise.
              </p>
              <div className={styles.statCard}>
                <div className={styles.statValue}>98%</div>
                <div className={styles.statLabel}>Patient recovery success rate</div>
              </div>
            </div>
            <div className={styles.heroRight}>
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop" 
                alt="Clinic Interior" 
                className={styles.heroImg}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.container}>
        <div className={styles.visionSection}>
          <div className={styles.visionCard}>
            <h2 className={styles.visionTitle}>Our Vision</h2>
            <p>To be the global benchmark for curated physiotherapy, where every patient experiences a masterfully designed path to recovery.</p>
          </div>
          <div className={styles.visionCard}>
            <h2 className={styles.visionTitle}>Our Mission</h2>
            <p>Empowering individuals through evidence-based practice and empathetic curation, ensuring that precision recovery is accessible to all.</p>
          </div>
        </div>
      </section>

      <section className={styles.container}>
        <div className={styles.valuesGrid}>
          {values.map((v, i) => (
            <div key={i} className={styles.valueCard}>
              <div className={styles.valueIcon}>{v.icon}</div>
              <h3 className={styles.featureTitle}>{v.title}</h3>
              <p className={styles.featureDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
