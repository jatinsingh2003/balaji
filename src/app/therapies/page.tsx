import Link from 'next/link';
import styles from './therapies.module.css';

export default function Therapies() {
  const therapies = [
    {
      name: "Interferential Therapy",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK4PsUKcyOs6Gkhm2r9MW7vAr3Hawmcb27AD0CtpHrGubE0wd_bkEG_QKdWPsdeLju5TJaTtwd7kJ-y4N4Fjw_IQTDmIdFX4Fv53AsGeEEhyP1e4PNOIOi2JCkvGwxB9Cpi2anPnJ-Nclrgl2ZuFJcGI_lP95lHl2W2ig713ksD9dgqiT5pHPRu3UQd8oZAyTCG_Ty6i0ZZan6bRWtTBCLTcnIegDU-xg7yfLXIXruCSS5EGzzfza7RbHcirlXAJAN2eD8Alh1e8zc",
      desc: "Advanced mid-frequency electrical stimulation used to reduce deep-seated pain and promote local tissue healing."
    },
    {
      name: "Chiropractic Therapy",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDddC9YO4rg_nuN2kA0OyYHQ1Qji998Z6k2g_5bIfw-qqPtSuF5K27cj4Txjg1GxyA5fpHJrYiXnFB44xwVEmCIgRD7EIU0EC6vcSMfW-xtxRISymW5BzEyuSd0KBgakLwHMnSz9BNF8VTCSTYG2V4kG1gqXOhmk4Dzbd-B0cZ2qCcB3X2jpiHR3ee9CC9G0mRxXGeBOCx9-Ffp08G94kHzdj-GUhNyXlj2YgAnENa28_Kbc-VOwuzav8lCIHWGeinW8py-KgGvM2eL",
      desc: "Specialized manual adjustments focusing on spinal alignment to restore optimal nervous system function."
    },
    {
      name: "Ultrasound Therapy",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiDUFXLrw6q6gHmA6UnxgMKZ4bLtpq2pYXK-RDwy0I131qDaw2OJN8BQzuAOJkLSdavkS4MS29h5LphmjlaYuDD4By1yVZZrPhSeSXccSivZ7keciSdNKI4ixh7yygZPaEkQ_MaiN7ppt9IUtvmVZcA0DHoD6NGymg_NEXKNBpKtn9ykbdgnHiJ9xzhmKE8jA1WuYk0szKPRTxpZOMiK8yPccKHKUcMMwgLfd55A6nG9Ge-yGJfBFIJ7ZHPzVw7IJxNKFkXWHl24cz",
      desc: "Utilization of high-frequency sound waves to treat soft tissue injuries and accelerate cellular repair processes."
    },
    {
      name: "Laser Therapy",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRSdcwwpD5v61NC3xFmzYn-qZ8GTSm92n0rI5RfmUDDr36Evsaw5EHkQKuHL936aiVJJdgvGeRCJPy0L7G3ypA4q42iCJ5kwKzR5JkyFBXumiPPuIflHUhbasp5ca0gCyv3pGksi1T1PfIl8PxqqQx96iZxXVtFUGM0xLCwzOytwGKOv0J89yjllUcWXFaJexXMPM5672bqhqLHfZ1wp7LzRMwDnyWn3I5q7yMv7qlUzT6z61HSgQU6orxR801B64UCbwRTslfg7bN",
      desc: "Photobiomodulation technology that reduces inflammation and pain while promoting rapid tissue regeneration."
    },
    {
      name: "Cupping Therapy",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBdOz7DPyjPW4hvYEQM1MW_m2BYdrAoxtIblV_noumaHudLEC5Esteq4z6Ja8tr3OIPGepP2L1tIS7RgpDMrOUnKLiwYfu0HVhL3Ax75Mn8wL7-pk3SmkCnAwbmjSIhsc7S_DAtkJ9xhuJTK9O0JucHz5tciEZysJU1BM0DxnXEr6ljpMkJVC3t-pwN6sTqfXL3YzX3gpGkMI6upmQSGPIF5ZlJ-n6wunO9mStls5dJHDHTDM7pFSUDpw01edwkXsVmgdxKxH3twRo",
      desc: "An ancient technique modernised to improve blood flow, relieve muscle tension, and facilitate deep tissue massage."
    },
    {
      name: "Wax Therapy",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCe2YYFR6fdh5BesmzoAzThX1FerxwLyH5oqq91pBe2_Vt3SNzmJvjTau8baUfPhanXSDWBr3q0-KQcM4hWwNwk6w95yghy65Bmq7B1xtcfUm-MJMZBLFrDYdikehQRa5oARPIrM5cFJqsiFtGEYCoXfyki7M0m5MDf9QF7DPLSHjINBwPf1hvfXh2YjiOpxcOL_mQtayhRjm_OBZ0fa9CyionBOs3I4b4b2ilFYX593cFCLVpm3bJFHu2qnnkuepc9-EU_mYOzNWX8",
      desc: "Paraffin wax treatments used to deliver soothing deep heat to stiff joints and muscles in the hands and feet."
    },
    {
      name: "Kinesio Taping",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhQvbgq61vbZNSG_5ha66fZtI2Dz_7jV0L9V4crD7an8MWnHx0Y2HE9wH9huGnNLTnBXAk_7WCdNeFzbsqHa-cccEdhIyt_EBnYJnmRNcPx2Ro2GzPTJBjjK9-MYwtmiPrVwdL4cb-4Su61MBbNUbeC3nzw4PVdYjZKZFLbe64rVQYYEGuMroCS0VDSOaZJ0IdjZD8ayllpjPNeI9SfRaKH0ez6nGd5uzQWDACT-AJeDf2C3Y2Eum97UPov-ZUBEAP_lEmrYSCTRMk",
      desc: "Elastic therapeutic tape applied strategically to support muscles and joints while allowing full range of motion."
    },
    {
      name: "Dry Needling",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrbGdE3W12h2Zb2HMN0ndVf7-H75JW6pjGFRYQBh4sDu0omntKZOkAnAeluWp18Y3kYCJDxTg1qDMNn2M9iOhOP1HVL4CS4mqZPd34tp9bSLCAB5SauMlr8esu0HgY91oGXfS0GnSyCHVD62VqWQMGidvsLnotTPNkfvw7-oLKFeK7unQNkcHYd9r_DlD_QjBoLGwFdy9IdCqKh4Fa2b4qauoGMZhQ4DvoWdwxnZTm5T7yok4AUaUL1SFnVAJqNLzfIcJ6YEO1Dtcx",
      desc: "Precise insertion of fine needles into myofascial trigger points to release muscle knots and chronic tension."
    },
      {
        name: "Lymphatic Drainage",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBASYO710JS-HmfnCiSk96AmX4HLXJP8o3KyM0GEJQjMZvpHCchrYF_LRbPvCcfaQKLuQSUl5wKI0aLh1aqgyPDMfPczDZ2fx7S7HoD0jYJ7YXh6IIRUX6IKxdmXzPtfqCcZsv_4t6KBqWyk_gwzxyteo4ItCZKPLa7EDmYXo1ySkvjMs8Rps-FzAUbmRVPBQVpKlf7UdMsdbtztTIJ38pcd8EjMwhli4ydxjmo29skXDUZh4gvVq2J-mtSPKmZA6C--ybIq2Cz9hS1",
        desc: "Specialized manual therapy designed to encourage the natural drainage of the lymph to reduce post-surgical swelling."
      },
      {
        name: "Electrotherapy",
        img: "/Electrotherapy.png",
        desc: "Advanced clinical use of electrical stimulation to modulate pain, reduce edema, and restore muscle function and strength."
      },
      {
        name: "Exercise Therapy",
        img: "/Exercise Therapy.png",
        desc: "Customized therapeutic exercise programs designed to improve mobility, strength, and overall functional performance."
      },
      {
        name: "Massage Therapy",
        img: "/Massage.png",
        desc: "Therapeutic manipulation of soft tissues to alleviate muscle tension, improve circulation, and accelerate recovery from strain."
      },
      {
        name: "PEMF Therapy",
        img: "/Pulsing Electromagnetic Field Therapy.png",
        desc: "Non-invasive pulsing electromagnetic fields used to stimulate cellular repair, reduce inflammation, and promote bone healing."
      },
      {
        name: "Cold Therapy",
        img: "/cold therapy.png",
        desc: "Targeted application of cold (Cryotherapy) to reduce acute inflammation, manage pain, and decrease swelling after injury."
      },
      {
        name: "Heat Therapy",
        img: "/heat therapy.png",
        desc: "Therapeutic application of heat to increase blood flow, relax stiff muscles, and enhance joint range of motion."
      },
      {
        name: "Hydrotherapy",
        img: "/hydrotherapy.png",
        desc: "Utilizing water's unique physical properties to provide low-impact rehabilitation, support joints, and facilitate movement."
      },
    ];

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.badge}>Our Expertise</span>
          <h1 className={styles.heroTitle}>Precision Recovery <br />& Clinical Excellence.</h1>
          <p className={styles.heroSubtitle}>
            Experience world-class physiotherapy through our curated suite of advanced clinical treatments,
            blending technology with restorative expertise.
          </p>
        </div>
      </section>

      {/* Therapy Grid */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {therapies.map((therapy, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.imgWrapper}>
                  <img src={therapy.img} alt={therapy.name} className={styles.cardImg} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{therapy.name}</h3>
                  <p className={styles.cardDesc}>{therapy.desc}</p>
                  <Link href={`/services/${therapy.name.toLowerCase().replace(/\s+/g, '-')}`} className={styles.readMore}>
                    Read More <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informational Hero Section */}
      <section className={styles.container} style={{ marginBottom: '100px' }}>
        <div className={styles.expertSection}>
          <div className={styles.container}>
            <div className={styles.expertGrid}>
              <div className={styles.expertInfo}>
                <h2 className={styles.expertTitle}>Can't find what you're looking for?</h2>
                <p className={styles.expertDesc}>
                  Our clinical experts are constantly updating our treatment protocols with the latest technology.
                  Contact us for a personalized consultation to see how we can assist your recovery journey.
                </p>
                <div className={styles.ctaGroup}>
                  <a 
                    href="https://wa.me/919452791291" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.primaryCta}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                  >
                    <img src="/logo.png" alt="" style={{ height: '20px', filter: 'brightness(0) invert(1)' }} />
                    WhatsApp
                  </a>
                  <a 
                    href="tel:+919452791291" 
                    className={styles.secondaryCta}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                  >
                    <img src="/phone-call.png" alt="" style={{ height: '20px', filter: 'brightness(0) invert(1)' }} />
                    Call Us Now
                  </a>
                </div>
              </div>
              <div className={styles.expertImgContainer}>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuArfr9WKsps_2DMDG2anAtikqwrg2cTETywArWWA9JCsxfOcH2LTK-GGKRIc-eiYgSVo5m_Jf4dYmD7hwkf1S-L3le4AfcKwf80bKx4UNRuMpT-H-B3fW8qOlrNrt8oIDsuaXHUag_8KW5laI-RvrfFelqoiAJKhhLNavIYePLaCxtJ3P277A9uEIi_3OENu2xFDqwU1D-6p_UIsIyQHnmTGwERn7d72aSRxUmGuzhg0nGBpuBvDnxVdMMl1RnWeCBRKGpzhmxqZr1n"
                  alt="Clinical Experts"
                  className={styles.expertImg}
                />
                <div className={styles.expBadge}>
                  <span className={styles.expNumber}>9+</span>
                  <span className={styles.expText}>Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
