import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Details(){

   const {_id} = useParams();

  const [moive, setmoive] = useState({});

  useEffect(() =>{

    axios.get(`https://backend-crud-one.vercel.app/product/${_id}`)
    .then((response) =>{
    setmoive(response.data)
    })

  },[])
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
          <button className="book-now-btn">Book Now</button>
       </div>
            </div>


         
     </>
    )
}

export default Details