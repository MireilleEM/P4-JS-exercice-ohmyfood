'use client'
import '@/app/styles.css';
import styles from'./RestaurantCard.module.css'
//import '@/app/pages.module.css'
//import pages from '@/app/page.module.css';
import {restaurants} from '@/data/restaurants.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useState } from 'react';
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons"; 


//export default function RestaurantCard({ name, slug, location, image, isNew = false }) {
 

  const RestaurantCard = () => {
   
   //const [isLiked, setIsLiked] = useState(0);
   const [likedIds, setLikedIds] = useState([]);

   const upsertLike = (id) => {
  if (likedIds.includes(id)) {
    setLikedIds(likedIds.filter(likedId => likedId !== id)); // retire
  } else {
    setLikedIds([...likedIds, id]); // ajoute
  }
};


  return (
    <>
      {restaurants.map((restaurant) => (
  
    <article key={restaurant.id} className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src= {restaurant.image}
        alt={`photo du restaurant ${restaurant.name}`}
          className={styles.cardImage}
        />
        {/*<span className={styles.newBadge}>Nouveau</span>*/}
        {restaurant.isNew && <span className={styles.newBadge}>Nouveau</span>}
      </div>
  

      {/* PARTIE TEXTE + CŒUR */}
      <div className={styles.content}>
        <div className={styles.cardText}>
          <h3 className={styles.name}>{restaurant.name}</h3>
          <p className={styles.location}>{restaurant.location}</p>
        </div>
        <button 
          //onClick={() => setIsLiked(!isLiked)}
          //className={isLiked ? styles.favoriteButton : styles.notFavoriteButton}
          onClick={() => upsertLike(restaurant.id)}
          className={styles.favoriteButton}
        >
          <FontAwesomeIcon
            //icon={isLiked ? faHeartSolid : faHeart}
            icon={likedIds.includes(restaurant.id) ? faHeartSolid : faHeart}
            className={styles.heartIcon} 
          />
        </button>
      </div>
</article>
      ))}
   </>
  );
};


export default RestaurantCard
