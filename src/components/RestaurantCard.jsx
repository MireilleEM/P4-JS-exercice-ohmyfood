
import '@/app/styles.css';
import '../styles/RestaurantCard.css'


  const RestaurantCard = () => {
  const nom = "La palette du goût"
  const location = "Ménilmontant"
 

  return (
    <div  className = 'restaurantCard'>
      <div className='imgContent'>
      <img className='image' 
        src="/images/restaurants/jay-wennington-N_Y88TWmGwA-unsplash.jpg"
        alt="photo du restaurant La palette du goût" 
      /></div>
      <h3>{nom}</h3>
      <p>{location}</p>
    </div>
  )
}

export default RestaurantCard