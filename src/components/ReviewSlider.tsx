'use client';
import styles from './ReviewSlider.module.css';

const reviews = [
  { name: "Mohit Singh", initial: "M", text: "Dr Vivek Singh and Balaji Physio City is very good for all patients like Pain, Physio management. Thank you Balaji Physio City." },
  { name: "JSR GAMING", initial: "J", text: "Balaji Physio City Clinic is excellent! The staff follow safe practices. They use sterilized equipment. The facilities are clean and comfortable. Highly recommend!" },
  { name: "Avisek", initial: "A", text: "I had an excellent experience at Balaji Physio City Clinic. The service was fast, and I did not wait long. The staff were very attentive and helped me with everything." },
  { name: "Gyanu", initial: "G", text: "My experience was exceptional! The staff provided outstanding customer service. The physiotherapists were highly skilled, attentive, and took the time to understand my needs." },
  { name: "Manavendra", initial: "M", text: "Balaji Physio City and doctor V K Singh do very well Physio. I got relief in a very short time. Overall well done Balaji Physio." },
  { name: "Omkar Kumar Gautam", initial: "O", text: "बालाजी फिजियो मरीज का पूरा ख्याल रखते हैं. (Balaji Physio takes full care of the patient.)" },
];

export default function ReviewSlider() {
  // Duplicate reviews for infinite look
  const doubledReviews = [...reviews, ...reviews];

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderTrack}>
        {doubledReviews.map((review, i) => (
          <div key={i} className={styles.reviewCard}>
            <p className={styles.reviewText}>"{review.text}"</p>
            <div className={styles.authorContainer}>
              <div className={styles.authorInitial}>{review.initial}</div>
              <div>
                <span className={styles.authorName}>{review.name}</span>
                <br />
                <span className={styles.justdialBadge}>Verified Justdial Review</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
