'use client';
import { useState } from 'react';
import styles from './FAQ.module.css';

const faqData = [
  {
    question: "What Is Precision Care For Pain-Free Mobility?",
    answer: "Precision Care for Pain-Free Mobility is Balaji PhysioCity's clinical-led approach to physiotherapy treatment. It uses advanced physical assessments and personalized rehabilitation plans to deliver targeted pain relief and improve mobility. Whether you're visiting one of our advanced physiotherapy clinics, opting for home physiotherapy or using our tele-rehabilitation services, this approach ensures effective, expert-led care tailored to your specific needs."
  },
  {
    question: "What Are The Services Offered By Balaji PhysioCity In India?",
    answer: "We offer a comprehensive range of services including Sports Physiotherapy, Pediatric Physiotherapy, Home Care, Neurological Rehabilitation, Pre and Post Surgery Rehab, and specialized treatments like Chiropractor adjustments and Tape Stripping."
  },
  {
    question: "Do You Offer Remote Physiotherapy / Virtual Physiotherapy To Overseas Patients?",
    answer: "Yes, we provide advanced tele-rehabilitation services. Our digital platform allows patients anywhere in the world to connect with our senior physiotherapists for virtual assessments, exercise guidance, and progress monitoring."
  },
  {
    question: "How Do I Book An Appointment For Clinic Or Home Physiotherapy Services?",
    answer: "Booking is simple. You can call us directly at +91 94527 91291, message us on WhatsApp, or use the 'Book Appointment' button on our website to schedule a slot that fits your convenience."
  },
  {
    question: "What Conditions Do You Treat At Balaji PhysioCity?",
    answer: "We treat a wide variety of musculoskeletal and neurological conditions, including back and neck pain, sports injuries, arthritis, PIVD (Prolapsed Disc), stroke recovery, and post-surgical rehabilitation."
  },
  {
    question: "Are Your Physiotherapists Certified And Experienced?",
    answer: "Absolutely. All our physiotherapists are thoroughly vetted, highly certified professionals with extensive clinical experience. They undergo continuous training in our 'Clinical Excellence' methodology to ensure they provide the highest standard of evidence-based treatment."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>FAQ</h2>
          <p className={styles.subtitle}>
            Some frequently asked questions regarding physiotherapy / chiropractor services. For more FAQ's
          </p>
        </div>

        <div className={styles.accordion}>
          {faqData.map((item, index) => (
            <div key={index} className={styles.item} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              <div className={styles.questionRow}>
                <h3 className={styles.question}>{item.question}</h3>
                <span className={`${styles.icon} ${openIndex === index ? styles.rotate : ''}`}>
                  {openIndex === index ? '↓' : '→'}
                </span>
              </div>
              <div className={`${styles.answerWrapper} ${openIndex === index ? styles.open : ''}`}>
                <div className={styles.answer}>
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
