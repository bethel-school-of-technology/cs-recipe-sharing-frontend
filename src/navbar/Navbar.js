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
                    <div className="link"><Link to="/share-recipe">Share A Recipe</Link></div>
                    <div className="link"><Link to="/about">About</Link></div>
                </div>
            </div>
<<<<<<< HEAD
            <div className="col-3-3"><div className="link login"><Link to="/Login">Sign Up / Sign In</Link></div></div>
=======
            <div className="col-3-3"><div className="link login"><Link to="/user">Sign Up / Sign In</Link></div></div>
>>>>>>> 56e9f21a9d56cf24e884591c4ec9733fcc20272e
            
        </div>
    )
}

export default Navbar;