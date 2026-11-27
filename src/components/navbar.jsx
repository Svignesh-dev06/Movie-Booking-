import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../Context/Cardcontext';

import navimg from "../assets/nav-image.jpeg"

function Navbar() {

    const { cart, cartNotice, setCartNotice } = useContext(cartContext)
    const navigate = useNavigate()
    const isGuest = localStorage.getItem('authMode') === 'guest'

    function leaveSession() {
        localStorage.removeItem('authMode')
        localStorage.removeItem('isLoggedIn')
        navigate('/')
    }
 
    return(
        <>
            <div className="navbar">
                <div className="nav-1">
                    <img src={navimg} alt="" />
                    <span>Ticket New</span>
                </div>
                <div className="nav-2">
                    <Link to="/home" className='home-btn'>Home</Link>
                    <Link to="/addtocard">
                        <div className="cart-wrapper">
                            <i className="fa-solid fa-cart-shopping shop"></i>
                            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
                        </div>
                    </Link>
                    {isGuest && <span className="guest-badge">Guest mode</span>}
                    <button className="login" onClick={leaveSession}>
                        <i className="fa-solid fa-user"></i>
                        {isGuest ? 'Sign In' : 'Log Out'}
                    </button>
                </div>
            </div>
            {cartNotice && (
                <div className="cart-alert" role="status">
                    <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
                    <span>{cartNotice} added to cart.</span>
                    <button
                        type="button"
                        aria-label="Dismiss cart notification"
                        onClick={() => setCartNotice("")}
                    >
                        &times;
                    </button>
                </div>
            )}
        </>
    );
}

export default Navbar