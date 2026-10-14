import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from '../Context/Cardcontext';

import navimg from "../assets/nav-image.jpeg"

function Navbar() {

    const { cart } = useContext(cartContext)
 
    return(
        <div
            className="navbar"
            style={{
                position: 'sticky',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                boxSizing: 'border-box'
            }}
        >
            <div className="nav-1">
            <img src={navimg} alt="" />
            <span>Ticket New</span>
            </div>
           <div className="nav-2">
               <Link to="/home" className='home-btn'>Home</Link>
                       <Link to="/addtocard">
                    <div className="cart-wrapper">
                        <i className="fa-solid fa-cart-shopping shop"></i>
                    {cart.length > 0 &&<span className="cart-count">{cart.length}</span>}
                    </div>
                </Link>
            <Link to="/" className='login-link'> <button className="login"> <i className="fa-solid fa-user"></i>Log Out</button></Link>
            

           </div>
        </div>
    );
}

export default Navbar