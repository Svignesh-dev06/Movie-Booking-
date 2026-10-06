import Navbar from "../components/navbar";

import { useState } from "react";

function Addtocard() {
    const title = "Movie Name."
    const [count , setcount] = useState(0);

    return(
        <>
       <Navbar />
       <div className="addtocard-allcontainer">
        <div className="addtocard-container">
            <img src="" alt="" />
             <div className="about-moive">
                <h3>{title}</h3>
                <p> 299</p>
             </div>
             <div className="count-container">
                <button onClick={() => setcount(count + 1)}>+</button>
                <span>{count}</span>
                <button onClick={() => setcount(count - 1)}>-</button>
             </div>

             <hr />
             <h1>Total Amount : {count * 299}</h1>
        </div>
       </div>

        </>
    );
}

export default Addtocard;