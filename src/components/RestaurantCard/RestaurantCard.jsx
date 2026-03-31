'use client'
import Link from 'next/link';
import '@/app/styles.css';
import styles from'./RestaurantCard.module.css'
//import '@/app/pages.module.css'
//import pages from '@/app/page.module.css';
import {restaurants} from '@/data/restaurants.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useState } from 'react';
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons"; 
//import { useContext } from 'react'; // <-- NOUVEL IMPORT
//import { FavoritesContext } from '@/context/FavoritesContext'; // <-- NOUVEL IMPORT


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
        //onrajoute un Lien 
    <Link key={restaurant.id} href={`/restaurant/${restaurant.slug}`}>
    <article  className={styles.card}>
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

         // onClick={() => upsertLike(restaurant.id)} ne suffit pas, ça ouvre la page à chaque fois
         className={styles.favoriteButton}
          onClick={(e) => {
          e.preventDefault();  // Stoppe le comportement par défaut
          e.stopPropagation(); // NOUVEAU : Empêche le clic de remonter jusqu'au <Link> 
          upsertLike(restaurant.id);
        }}
        >

{/* On crée le dégradé de façon invisible juste ici */}
          <svg width="0" height="0" style={{ position: 'absolute' }}>
            <linearGradient id="coeur-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF79DA" />
              <stop offset="100%" stopColor="#9356DC" />
            </linearGradient>
          </svg>

          <FontAwesomeIcon
            //icon={isLiked ? faHeartSolid : faHeart}
            icon={likedIds.includes(restaurant.id) ? faHeartSolid : faHeart}
            className= {likedIds.includes(restaurant.id) ? styles.Liked : styles.heartIcon}
          />
        </button>
      </div>
</article>
</Link>
      ))}
</>   
  );
};


export default RestaurantCard