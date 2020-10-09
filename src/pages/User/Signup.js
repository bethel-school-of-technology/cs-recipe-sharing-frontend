import React, { useState } from 'react';
import AuthService from '../../services/auth.service';
import { withRouter } from 'react-router';
import './signup.css';

const Signup = () => {
    const [registerUsername, setRegisterUserName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const handleSubmitRegisterUser = (e) => {
        e.preventDefault();

        AuthService.register(registerUsername, registerEmail, registerPassword)
            .then(response => {
                console.log(response)
            })

    }
    return (
        <div className="container mt-4">
            <div className="sign-up-form">
                <form onSubmit={handleSubmitRegisterUser}>
                    <h1>Sign-Up</h1>
                    <div className="register-user">
                        <input type="text" placeholder="Enter a Username" value={registerUsername} onChange={e => setRegisterUserName(e.target.value)} />
                    </div>
                    <br />
                    <div className="register-email">
                        <input type="text" id="registerEmail" placeholder="Enter an Email Address" onChange={e => setRegisterEmail(e.target.value)} />
                    </div>
                    <br />
                    <div className="register-password">
                        <input placeholder="Enter password" type="password" value={registerPassword} onChange={e => setRegisterPassword(e.target.value)} />
                        <i className="fa fa-eye" aria-hidden="true"></i>
                    </div>
                    <br />
                    <button>Register</button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Signup);