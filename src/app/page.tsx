import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const features = [
    { title: "Movement Intelligence", desc: "AI-powered biomechanical analysis for personalized recovery.", icon: "🧠" },
    { title: "Predictive Outcomes", desc: "Data-driven insights to forecast your rehabilitation timeline.", icon: "📈" },
    { title: "24/7 Digital Twin", desc: "A virtual counterpart tracking your progress around the clock.", icon: "👥" },
    { title: "Automated Tracking", desc: "Effortless monitoring of your exercises and milestones.", icon: "⚙️" },
  ];

  const specialties = [
    { title: "Chiropractor", desc: "Precise adjustments for skeletal health.", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format&fit=crop" },
    { title: "Ergonomics", desc: "Optimizing your environment for efficiency.", img: "https://images.unsplash.com/photo-1576091160550-217359f48a1c?q=80&w=600&auto=format&fit=crop" },
    { title: "Functional Strength", desc: "Building resilience for everyday life.", img: "https://images.unsplash.com/photo-1629909613654-28a3a7c4abd4?q=80&w=600&auto=format&fit=crop" },
  ];

  const team = [
    { name: "Dr. Sarah Chen", role: "Chief Clinical Officer", img: "https://images.unsplash.com/photo-1559839734-2b71f1e3c77d?q=80&w=400&auto=format&fit=crop" },
    { name: "Marcus Thorne", role: "Senior Physiotherapist", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop" },
    { name: "Elena Rodriguez", role: "Chiropractor", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop" },
    { name: "Dr. James Wilson", role: "Orthopedic Specialist", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Next-Gen Rehabilitation</span>
            <h1 className={styles.heroTitle}>Integrated Care with AI Precision.</h1>
            <p className={styles.heroSubtitle}>
              Experience the future of rehabilitation where clinical expertise meets algorithmic accuracy.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/book" className="btn-primary">Book Appointment</Link>
              <Link href="/callback" className="btn-secondary">Request Callback</Link>
            </div>
            {/* Added a Hero Image */}
            <div className={styles.heroImageContainer}>
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop" 
                alt="Modern Clinic" 
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Precision Recovery Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>AI Precision Recovery</h2>
            <p className={styles.heroSubtitle}>Advanced algorithmic tracking for faster, safer outcomes.</p>
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

      {/* Specialties Section */}
      <section className={`${styles.section} section-alt`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Specialties</h2>
          </div>
          <div className={styles.grid}>
            {specialties.map((s, i) => (
              <div key={i} className={styles.featureCard}>
                <div className={styles.imgThumbnail}>
                  <img src={s.img} alt={s.title} className={styles.cardImg} />
                </div>
                <h3 className={styles.featureTitle} style={{marginTop: '16px'}}>{s.title}</h3>
                <p className={styles.featureDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Thoroughly Vetted Experts</h2>
            <p className={styles.heroSubtitle}>Led by scientific experts with decades of clinical experience.</p>
          </div>
          <div className={styles.teamGrid}>
            {team.map((m, i) => (
              <div key={i} className={styles.teamMember}>
                <div className={styles.imgCircle}>
                  <img src={m.img} alt={m.name} className={styles.circleImg} />
                </div>
                <h3 className={styles.memberName}>{m.name}</h3>
                <p className={styles.memberRole}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
