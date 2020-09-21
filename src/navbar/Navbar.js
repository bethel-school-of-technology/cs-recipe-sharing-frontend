import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    return(
        <div className="navbar">
            <div className='logo'>CodeChefs</div>
            <div className="col-1-3">
                <div className="nav-links">
                    <div className="link"><Link to="/">Recipes</Link></div>
                    <div className="link"><Link to="/about">About</Link></div>
                </div>
            </div>
            <div className="col-3-3"><div className="link login"><Link to="/signin-signup">Sign Up / Sign In</Link></div></div>
            
        </div>
    )
}

export default Navbar;