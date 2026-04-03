import Link from 'next/link';
import styles from './about.module.css';

export default function About() {
  const pillars = [
    {
      title: "+ 500 Practitioners",
      icon: "👨‍⚕️",
      desc: "Balaji PhysioCity has a strong network of over 500 physiotherapists and chiropractors enrolled through a structured clinical empanelment process."
    },
    {
      title: "Integrated Approach",
      icon: "🧪",
      desc: "Our multi-therapy approach enables us to take a holistic view of patient needs and provide outcome-based treatments for faster recovery."
    },
    {
      title: "Treatment Scheduling",
      icon: "📅",
      desc: "Instant confirmation of clinic appointments and home visits confirmed within 30 mins. We ensure practitioner consistency throughout your care."
    },
    {
      title: "Always Listening",
      icon: "💬",
      desc: "Continuous monitoring of treatment progress with feedback calls and proactive grievance redressal to ensure a smooth path to recovery."
    },
    {
      title: "Payments",
      icon: "💳",
      desc: "Honest pricing with friendly packages for long-term treatments. Support for cash, card, and insurance-friendly digital billing."
    },
    {
      title: "12*7 Support",
      iconImg: "/logo.png",
      desc: "Help is just a text away. Enjoy 12*7 dedicated support on WhatsApp for any query regarding new or ongoing physiotherapy treatments."
    }
  ];

  const journeySteps = [
    {
      label: "ASSESS (Root Cause)",
      title: "Clinical Precision",
      desc: "Our experts uncover the root cause of your problem through advanced physical assessments for long-lasting relief."
    },
    {
      label: "PLAN (SMART Goals)",
      title: "Personalized Roadmap",
      desc: "Your recovery mapped around SMART Goals & Milestones. You'll know exactly what progress to expect, and when."
    },
    {
      label: "TRACK (Progress)",
      title: "Proof of Recovery",
      desc: "A data-driven system that measures progress at every milestone—optimizing treatment and keeping you motivated."
    },
    {
      label: "ADVANCE (Relapse Prevention)",
      title: "Care Beyond Clinic",
      desc: "With guided exercise programs and expert follow-ups, you can maintain progress and prevent pain from returning."
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>About Balaji PhysioCity</h1>
          <p className={styles.subtitle}>
            India's fastest growing delivery network of premium physiotherapy and chiropractic services.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.introContent}>
            <div className={styles.introText}>
              <span className={styles.sectionLabel}>Clinical Excellence</span>
              <h2 className={styles.sectionTitle}>We Are The Best For Physiotherapy</h2>
              <p className={styles.description}>
                Balaji PhysioCity is committed to increasing access to quality physio care through ultra-modern clinics and high-skilled practitioners. Our integrated / multi-therapy approach helps keep a strong focus on patient needs and deliver the highest level of patient-centric care with better outcomes.
              </p>
              <p className={styles.description}>
                We serve a wide range of patients offering treatment at clinics as well as the comfort of their homes. We make sure that our clinics are not only equipped with the latest technology but also provide clean, energetic and uplifting atmospheres for better healing.
              </p>
            </div>
            <div className={styles.introImage}>
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
                alt="Balaji PhysioCity Clinic"
                className={styles.cardImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6 Pillars - "Why Choose Us" alignment */}
      <section className={styles.section} style={{ background: '#fcfdfd' }}>
        <div className="container">
          <div className={styles.header} style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className={styles.sectionLabel}>Treatment That Blends Competence With Compassion</span>
            <h2 className={styles.sectionTitle}>Why Choose <span style={{ color: '#62948b' }}>Balaji PhysioCity</span></h2>
          </div>
          <div className={styles.pillarGrid}>
            {pillars.map((p, i) => (
              <div key={i} className={styles.pillarCard}>
                <div className={styles.iconBox}>
                  {p.iconImg ? (
                    <img src={p.iconImg} alt="" style={{ height: '32px', width: 'auto', filter: 'brightness(0) saturate(100%) invert(35%) sepia(35%) saturate(769%) hue-rotate(124deg) brightness(97%) contrast(83%)' }} />
                  ) : p.icon}
                </div>
                <h4 className={styles.pillarTitle}>{p.title}</h4>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.header} style={{ textAlign: 'center' }}>
            <span className={styles.sectionLabel}>Leadership</span>
            <h2 className={styles.sectionTitle}>Our Visionaries</h2>
          </div>
          <div className={styles.leaderCard}>
            <div style={{ 
              width: '240px', 
              height: '240px', 
              background: 'white', 
              borderRadius: '50%', 
              margin: '0 auto', 
              border: '8px solid #f0f7f5', 
              boxShadow: '0 10px 30px rgba(17, 115, 102, 0.15)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="/director.jpeg" 
                alt="Dr. Vivek Kumar Singh" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <h3 className={styles.leaderName}>Dr. Vivek Kumar Singh</h3>
            <p className={styles.leaderTitle}>Founder & Director</p>
          </div>
        </div>
      </section>

      {/* Path to Recovery (The 4 Steps) */}
      <section className={styles.section} style={{ background: '#0F3B3B', color: 'white' }}>
        <div className="container">
          <div className={styles.header} style={{ textAlign: 'center' }}>
            <span className={styles.sectionLabel} style={{ color: '#4CAF50' }}>Methodology</span>
            <h2 className={styles.sectionTitle} style={{ color: 'white' }}>Your Path to Recovery</h2>
          </div>
          <div className={styles.journeyGrid}>
            {journeySteps.map((step, i) => (
              <div key={i} className={styles.stepCard} style={{ background: 'rgba(255,255,255,0.05)' }}>
                <span className={styles.stepLabel} style={{ color: '#4CAF50' }}>{step.label}</span>
                <h4 className={styles.stepTitle} style={{ color: 'white' }}>{step.title}</h4>
                <p className={styles.pillarDesc} style={{ color: 'rgba(255,255,255,0.7)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.section} style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Ready to start your journey?</h2>
          <p className={styles.description}>Connect with a specialist today and experience professional Clinical Excellence.</p>
          <div style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://wa.me/919452791291" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary" 
              style={{ padding: '16px 36px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <img src="/logo.png" alt="" style={{ height: '20px', filter: 'brightness(0) invert(1)' }} />
              WhatsApp Consult
            </a>
            <a 
              href="tel:+919452791291" 
              className="btn-secondary" 
              style={{ padding: '14px 34px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <img src="/phone-call.png" alt="" style={{ height: '20px', filter: 'brightness(0) saturate(100%) invert(35%) sepia(35%) saturate(769%) hue-rotate(124deg) brightness(97%) contrast(83%)' }} />
              Call Specialist
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
