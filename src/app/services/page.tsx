import Link from 'next/link';
import styles from './page.module.css';

export default function Services() {
  const services = [
    { 
      name: "Chiropractor Treatment", 
      badge: "Chiropractor Treatment",
      img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop",
      desc: "A chiropractic adjustment, also called spinal manipulation, is a procedure done by a chiropractor using the hands or small instruments..."
    },
    { 
      name: "Sports Physiotherapy", 
      badge: "Sports Physiotherapy",
      img: "https://images.unsplash.com/photo-1576091160550-217359f48a1c?q=80&w=400&auto=format&fit=crop",
      desc: "Sports physiotherapy is a branch of physical therapy that is geared towards both athletes and casual players who have suffered..."
    },
    { 
      name: "Pediatric Physiotherapy", 
      badge: "Pediatric Physiotherapy",
      img: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=400&auto=format&fit=crop",
      desc: "Pediatric physiotherapy is effective in the management of perinatal conditions, conditions diagnosed in early childhood..."
    },
    { 
      name: "Home Care Physiotherapy", 
      badge: "Home Care",
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400&auto=format&fit=crop",
      desc: "Our home care physiotherapy services bring expert clinical care to the comfort of your own home, ensuring continuous recovery..."
    },
    { 
      name: "Neuro Physiotherapy", 
      badge: "Neurological",
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
      desc: "Neurological physiotherapy focuses on the treatment of individuals with movement and function disorders that have originated from..."
    },
    { 
      name: "Post Surgery Rehab", 
      badge: "Pre And Post Surgery",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop",
      desc: "Pre and post-surgery rehabilitation is crucial for ensuring a full recovery and restoring function after orthopedic procedures..."
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Services We Offer</h1>
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link> / <span>Services We Offer</span>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.searchContainer}>
            <input 
              type="text" 
              placeholder="Type to search ..." 
              className={styles.searchInput}
            />
          </div>

          <div className={styles.grid}>
            {services.map((s, i) => (
              <div key={i} className={styles.serviceCard}>
                <div className={styles.imgWrapper}>
                  <img src={s.img} alt={s.name} className={styles.cardImg} />
                  <div className={styles.badgeOverlay}>{s.badge}</div>
                </div>
                <div className={styles.content}>
                  <h3 className={s.cardTitle}>{s.name}</h3>
                  <p className={styles.cardDesc}>{s.desc}</p>
                  <Link href="#" className={styles.readMore}>
                    Read More <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
