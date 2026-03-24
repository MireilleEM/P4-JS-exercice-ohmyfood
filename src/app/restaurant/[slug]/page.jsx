import RestaurantHeader from '@/components/RestaurantHeader/RestaurantHeader';
import styles from './restaurant.module.css';
import MenuItem from '@/components/MenuItem/MenuItem';
import { restaurants } from '@/data/restaurants.json';

export default async function RestaurantPage({ params }) {
  // On extrait le 'slug' de l'URL (ex: 'la-palette-du-gout')
    const { slug } = await params;
    const pageRestaurant = restaurants.find((resto) => resto.slug === slug); 
    const nom = pageRestaurant.name;
    const location = pageRestaurant.location;
    const image = pageRestaurant.image;
    const isNew = pageRestaurant.isNew;
   

    return (
   
    <div className={styles.container}>
      {/* 2. Bannière Image */}
      <div className='heroImage'>
         <img  
         src= {image}
        alt={`photo du restaurant ${nom}`}
        className='image' />
      </div>
     
    </div> 
     
  );
}
  