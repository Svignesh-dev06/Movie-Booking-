import Card from "../components/card";

import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";


function Home() {
  const isGuest = localStorage.getItem("authMode") === "guest";

  return (
    <>
       <Navbar />
       {isGuest && (
         <div className="guest-notice">
           <span>You’re browsing as a guest. Explore movies and add tickets to your cart.</span>
           <Link to="/" className="guest-signin-link">Sign in</Link>
         </div>
       )}
       <Hero />
       <Card />
    </>
  );
}


export default Home