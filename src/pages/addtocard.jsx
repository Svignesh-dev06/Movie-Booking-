import Navbar from "../components/navbar";
import demo from "../assets/poster.jpeg"

function Addtocard() {
    const title = "Movie Name."
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

             <hr />
        </div>
       </div>

        </>
    );
}

export default Addtocard;