import Card from "../components/card";

import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";


function Home() {

  return (
    <>
       <Navbar />
       <Card />
       
    </>
  );
}


export default Home