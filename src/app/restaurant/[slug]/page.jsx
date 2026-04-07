import RestaurantHeader from '@/components/RestaurantHeader/RestaurantHeader';
import styles from './restaurant.module.css';
import MenuItem from '@/components/MenuItem/MenuItem';
import { restaurants } from '@/data/restaurants.json';
import { notFound } from 'next/navigation';


export default async function RestaurantPage({ params }) {
  // On extrait le 'slug' de l'URL (ex: 'la-palette-du-gout')
    const { slug } = await params;
  const pageRestaurant = restaurants.find((resto) => resto.slug === slug); 

  if (!pageRestaurant) {
    notFound(); // Interrompt le rendu et redirige vers not-found.jsx
  }

  const nom = pageRestaurant.name;
  const location = pageRestaurant.location;
  const image = pageRestaurant.image;
  const isNew = pageRestaurant.isNew;
  // On extrait les listes de plats depuis le "menu" de chaque resto
  const entrees = pageRestaurant.menu.entrées; // accent dans le JSON
  const plats = pageRestaurant.menu.plats;
  const desserts = pageRestaurant.menu.desserts;
  //on peut aussi écrire : const { entrées, plats, desserts } = pageRestaurant.menu; pour faire du destructuring
 // 2. La condition demandée si le restaurant n'existe pas
  
 
    return (
   
    <div className={styles.container}>
      {/* 2. Bannière Image */}
      <div className='heroImage'>
         <img  
         src= {image}
        alt={`photo du restaurant ${nom}`}
        className='image' />
      </div>
      <div className='mainWrapper'>
        {/* 3. Informations générles du restaurant */}
        <RestaurantHeader name={nom}/>
        {/* 3. Partie menu */}   
        <div className='contentWrapper'>
          <h2 className='sectionTitle'>ENTRÉES</h2>     
          
          {/* AFFICHAGE (On utilise le composant) */}
          {entrees.map((plat, index) => (
            <MenuItem className ='contentWrapper'
              key={index} 
              item={plat}   /* On donne l'information d'un plat au composant */
              index={index} 
            />
            
          ))}
        
        </div>
        <div className='contentWrapper'>
          <h2 className='sectionTitle'>PLATS</h2>     
          
          {/* AFFICHAGE (On utilise le composant) */}
          {plats.map((plat, index) => (
            <MenuItem className ='contentWrapper'
              key={index} 
              item={plat}   /* On donne l'information d'un plat au composant */
              index={index} 
            />
            
          ))}
        
        </div>
        <div className='contentWrapper'>
          <h2 className='sectionTitle'>DESSERTS</h2>     
          
          {/* AFFICHAGE (On utilise le composant) */}
          {desserts.map((plat, index) => (
            <MenuItem className ='contentWrapper'
              key={index} 
              item={plat}   /* On donne l'information d'un plat au composant */
              index={index} 
            />
            
          ))}
        
        </div>
      
     
      <button className='orderButton'>Commander</button>
      </div>
     
    </div> 
     
  );
}
  