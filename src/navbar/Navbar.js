import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../services/auth.service';
import './style.css';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser: undefined
        }
    }
    componentDidMount() {
        const user = AuthService.getCurrentUser();
        if(user) {
            this.setState({
                currentUser: user.user,
            })
        }
    }
    logOutUser() {
        AuthService.logout();
        window.location.reload();
    }

    render(){
       const {currentUser} = this.state;
        return(
            <div>
                <nav className="navbar navbar-expand navbar-light">
                    <Link to={"/"} className="navbar-brand logo">
                        &lt;CodeChefs &#47;&gt;
                    </Link>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link">Recipes</Link>
                        </li>
                            {currentUser && (
                                <li className="nav-item">
                                    <Link to={"/share-recipe"} className="nav-link">Share A Recipe</Link>
                                </li>    
                            )}
                            {currentUser && (
                                <li className="nav-item">
                                    <Link to={"/my-recipes"} className="nav-link">My Recipes</Link>
                                </li>    
                            )}
                    </div>
                    
                        {
                            currentUser === undefined ? (
                                <div className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link to={"/login"} className="nav-link">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/signup"} className="nav-link">Sign Up</Link>
                                    </li>
                                </div>
                            ) : 
                            (
                                <div className="navbar-nav ml-auto">
                                {/*TODO: Create a Profile Link to Profile Page*/}
                                <li className="nav-item"><Link to={"/my-recipes"} className="nav-link nav-user">Hello, {currentUser}!</Link></li>
                                <li className="nav-item">
                                        <Link to={"/login"} className="nav-link" onClick={this.logOutUser}>Logout</Link>
                                    </li>
                                </div>
                            )
                        }
                </nav>
            </div>
        )
    }
}

export default Navbar;