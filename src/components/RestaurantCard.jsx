import '../styles/RestaurantCard.css'

  const Cart = () => {
  const monstera = 8
  const lierre = 10
  const bouquet = 15

  return (
    <div className= 'cart'>
      <h2>Panier</h2>
      <ul>
        <li>Monstera : {monstera}€</li>
        <li>Lierre : {lierre}€</li>
        <li>Bouquet de fleurs : {bouquet}€</li>
      </ul>
      <p>Total : {monstera + lierre + bouquet}€</p>
    </div>
  )
}

export default RestaurantCard