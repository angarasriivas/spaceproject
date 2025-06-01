import React from 'react';
import styles from './ClientsReviews.module.css';

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    text: "Lorem ipsum, dolor sit amet consectetur adipiscing elit. Eligendi animi alias consequuntur sint doloribus illo vitae mollitia, iusto excepturi nobis.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "John Doe",
    rating: 5,
    text: "Lorem ipsum, dolor sit amet consectetur adipiscing elit. Eligendi animi alias consequuntur sint doloribus illo vitae mollitia, iusto excepturi nobis.",
    image: "https://via.placeholder.com/50",
    highlighted: true,
  },
  {
    name: "John Doe",
    rating: 5,
    text: "Lorem ipsum, dolor sit amet consectetur adipiscing elit. Eligendi animi alias consequuntur sint doloribus illo vitae mollitia, iusto excepturi nobis.",
    image: "https://via.placeholder.com/50",
  },
];

const ClientsReviews = () => (
  <div className={styles.reviewsSection}>
    <h2 className={styles.sectionTitle}>
      Clients <span className={styles.titleHighlight}>Reviews</span>
    </h2>
    <div className={styles.reviewsGrid}>
      {reviews.map((review, index) => (
        <div
          key={index}
          className={`${styles.reviewCard} ${review.highlighted ? styles.highlighted : ''}`}
          style={{ '--index': index }}
        >
          <div className={styles.stars}>
            {[...Array(review.rating)].map((_, i) => (
              <span key={i} className={styles.star}>★</span>
            ))}
          </div>
          <p className={styles.reviewText}>{review.text}</p>
          <div className={styles.userInfo}>
            <img src={review.image} alt={review.name} className={styles.userImage} />
            <span className={styles.userName}>{review.name}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ClientsReviews;