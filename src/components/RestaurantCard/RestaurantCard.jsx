import '@/app/styles.css';
//import styles from '@/app/RestaurantCard.module.css';
import styles from './RestaurantCard.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

 const RestaurantCard = () => {
  const nom = "La palette du goût"
  const location = "Ménilmontant"
  
  return (
    
    <article className={styles.card}>
      <div className={styles.imageContainer}>
    
        <img
          src="/images/restaurants/jay-wennington-N_Y88TWmGwA-unsplash.jpg"
        alt={`photo du restaurant ${nom}`}
          className={styles.cardImage}
        />      
        <span className={styles.newBadge}>Nouveau</span>
      </div>

      {/* PARTIE TEXTE + CŒUR */}
      <div className={styles.content}>
        <div className={styles.cardText}>
          <h3 className={styles.name}>{nom}</h3>
          <p className={styles.location}>{location}</p>
        </div>
        <button
          className={styles.favoriteButton}
        >
          <FontAwesomeIcon
            icon={faHeart}
            className={styles.heartIcon}
          />
        </button>
      </div>

    </article>
  );
}

export default RestaurantCard
