import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../Context/Cardcontext";
import { useContext } from "react";
function Card() {
  const {addtoCart} = useContext(cartContext)
  const [moives, setmoives] = useState([]);
  const [loading , setLoading] = useState(true)
  useEffect(() => {
    axios
      .get("https://backend-crud-one.vercel.app/product")
      .then((response) => {
        setmoives(response.data);
      })
      .catch((error) =>{
        console.log("Error Fetching Movie" , error)
      })
      .finally(() =>{
        setLoading(false)
      })
  }, []);

  if(loading){
    return(
      <div id="movies" className="container-loading" role="status" aria-busy="true">
        <span className="hero-loader" aria-hidden="true" />
      
      </div>
    )
  }
  return (
    <>
      <div id="movies" className="cards">
        {moives.map((moive) => (
          <div className="card" key={moive._id || moive.id}>
            <img src={moive.image} alt={moive.title} />
            <h3>{moive.name}</h3>

            <p>{moive.director}</p>
            <p>{moive.releasedate}</p>
            <p>₹{moive.ticketprice}</p>

            <button onClick={() => addtoCart(moive)}>Add to Cart</button>
            <Link to={`/details/${moive._id}`} className="details-btn">Details</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;