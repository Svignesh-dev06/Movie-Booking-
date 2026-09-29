import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Card() {

  const [moives, setmoives] = useState([]);

  useEffect(() => {

    axios.get("https://backend-crud-one.vercel.app/product")
    .then((response) =>{
      setmoives(response.data)
    })

  },[])
  return(
    <>
    <div className="cards">
      {moives.map((moive) =>(
        <div className="card" key={moive.id}>
          <img src={moive.image} alt={moive.title} />
          <h3>{moive.name}</h3>

          <p>{moive.director}</p>
          <p>{moive.releasedate}</p>
          <p>₹{moive.ticketprice}</p>

          <button>Book Now</button>
          <Link to={`/details/${moive._id}`} className="details-btn">Details</Link>
        </div>
      ))}   
    </div>
    
    </>
  );

}

export default Card;