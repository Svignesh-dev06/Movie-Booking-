import Navbar from "../components/navbar";
import demo from "../assets/poster.jpeg"
import { useState } from "react";

function Addtocard() {
    const title = "Movie Name."
    const [count , setcount] = useState(0);

    return(
        <>
       <Navbar />
       <div className="addtocard-allcontainer">
        <div className="addtocard-container">
            <img src={demo} alt="" />
             <div className="about-moive">
                <h3>{title}</h3>
                <p> 299</p>
            
             </div>
             <div className="count-container">
                <button>+</button>
                <span>{count}</span>
                <button>-</button>
             </div>

             <hr />
             <h1>Total Amout : {}</h1>
        </div>
       </div>

        </>
    );
}

export default Addtocard;