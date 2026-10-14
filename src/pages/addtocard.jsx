import React from 'react'
import Navbar from '../components/navbar'
import { useContext } from 'react'
import { cartContext } from '../Context/Cardcontext'

function addtocard() {

  const { cart } = useContext(cartContext)


    const totalAmount = cart.reduce((total, movie) => {
    return total + Number(movie.ticketprice) * movie.quantity
  }, 0)

  return (
  <>
  <Navbar />
  {cart.length > 0 && (<span className="total-amount">Total Amount: ₹{totalAmount}</span>)}
{cart.length === 0 ? (<h2 className='empty'>Cart is Empty..</h2>) :
(cart.map((movie) => (
   <div className="addtocard-allcontainer">
     <div className='addtocard-container' key={movie._id}>
      
      <img src={movie.image} alt={movie.name} />

      <div className="movie-details">
        <h3>{movie.name}</h3>
        <p>{movie.releasedate}</p>
      <p>₹{movie.ticketprice}</p>
      <p>Quantity: {movie.quantity}</p>
      </div>
      <span className='remove'>Remove</span>
    </div>
    <hr />
   </div>
  ))
)}
</>
  )
}

export default addtocard