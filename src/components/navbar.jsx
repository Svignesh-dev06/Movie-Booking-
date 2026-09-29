import { Link } from 'react-router-dom';
import navimg from "../assets/nav-image.jpeg"

function Navbar({ cartCount = 0 }) {
    return(
        <div className="navbar">
            <div className="nav-1">
            <img src={navimg} alt="" />
            <span>Ticket New</span>
            </div>
           <div className="nav-2">
            <Link to="/" className='login-link'> <button className="login"> <i className="fa-solid fa-user"></i>Log Out</button></Link>
            <Link to="/addtocard">    <div className="cart-wrapper">
                <i className="fa-solid fa-cart-shopping shop"></i>
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </div></Link>
            <Link to="/home" className='home-btn'>Home</Link>
           </div>
        </div>
    );
}

export default Navbar