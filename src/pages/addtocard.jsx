import Navbar from "../components/navbar";
import demo from "../assets/poster.jpeg"
import { useState } from "react";

function Addtocard() {
    const title = "Movie Name."
    const [count , setcount] = useState(0);
    const [totalamount , settotalamount] = useState()

    return(
        <>
       <Navbar />
       <div className="addtocard-allcontainer">
        <div className="addtocard-container">
            <img src={demo} alt="" />
             <div className="about-moive">
                <h3>{title}</h3>
                <p> 299</p>
                <p>release date</p>
            
             </div>
             <div className="count-container">
                <button>+</button>
                <span>{count}</span>
                <button>-</button>
             </div>

             
             
        </div>
        <hr />
        <h1>Total Amount : {}</h1>
       </div>

        </>
    );
}

export default Addtocard;