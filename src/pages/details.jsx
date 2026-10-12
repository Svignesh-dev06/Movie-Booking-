import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { cartContext } from "../Context/Cardcontext";

function Details(){

   const {_id} = useParams();

  const [moive, setmoive] = useState({});

  const {addtoCart} = useContext(cartContext)
  
  const [loading , setLoading] = useState(true)

  useEffect(() =>{

    axios.get(`https://backend-crud-one.vercel.app/product/${_id}`)
    .then((response) =>{
    setmoive(response.data)
    })
    .catch((error) =>{
      console.log("Fetch Error Movie" , error)
    })
    .finally(()=>{
      setLoading(false)
    })

  }, [_id])
    if(loading){
    return(
      <div className="container-loading" role="status" aria-busy="true">
        <span className="hero-loader" aria-hidden="true" />
        <span>Loading movie details...</span>
      </div>
    )
    }

    return(
     <>
      <Navbar />
      <div className="detail-container">
      <img src={moive.image} alt={moive.title} className="details-img"/>
     <div className="details-container">
          <h1>{moive.name}</h1>
          <span>{moive.director}</span>
          <span>₹{moive.ticketprice}</span>
          <span>{moive.budget}</span>
          <span>{moive.description}</span>
          <div className="details-btn-container">
            <button className="book-now-btn">Book Now</button>
             <button className="addtocard-details" onClick={()=> addtoCart(moive)}>Add to Cart</button>
          </div>
       </div>
      </div>
     </>
    )
}

export default Details