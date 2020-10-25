import React, { useState } from 'react';
import AuthService from '../../services/auth.service';
import { withRouter } from 'react-router';
import './signup.css';

const Signup = () => {
    const [registerUsername, setRegisterUserName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const showPassword = () => {
        let input = document.querySelector('.pass');
        if(input.type === "text"){
            input.type = "password";
            document.querySelector('.pass-eye').classList.remove('fa-eye-slash');
            document.querySelector('.pass-eye').classList.add('fa-eye');
        }
        else {
            input.type = "text"
            document.querySelector('.pass-eye').classList.remove('fa-eye')
            document.querySelector('.pass-eye').classList.add('fa-eye-slash');
        }
    }
    const showPasswordConfirm = () => {
        let input = document.querySelector('.pass-conf');
        if(input.type === "text"){
            input.type = "password";
            document.querySelector('.pass-eye-confirm').classList.remove('fa-eye-slash');
            document.querySelector('.pass-eye-confirm').classList.add('fa-eye');
        }
        else {
            input.type = "text"
            document.querySelector('.pass-eye-confirm').classList.remove('fa-eye')
            document.querySelector('.pass-eye-confirm').classList.add('fa-eye-slash');
        }
    }

    const handleSubmitRegisterUser = (e) => {
        e.preventDefault();
        if(confirmPassword === registerPassword){
            AuthService.register(registerUsername, registerEmail, registerPassword)
            .then(response => {
                console.log(response)
                if(response === false) {
                    alert ("Could not Register User!");
                }
                else if (response){
                    alert ("User Successfuly Registered!");
                    window.location = "http://localhost:3000/login"
                }
            })
        }
        else if(confirmPassword !== registerPassword){
            alert("Passwords do not match!")
        }

    }
    return (
        <div className="container d-flex justify-content-center" style={{marginBottom:"100px"}}>
            <form onSubmit={handleSubmitRegisterUser}>
                <div className="card signup">
                    <div className="text-center intro"> <i className="fas fa-user-circle fa-10x"></i></div>
                    <div className="mt-4 text-center">
                        <div className="mt-3 inputbox"> <input className='form-control' type="text" placeholder="Username" value={registerUsername} onChange={e => setRegisterUserName(e.target.value)} />  <i className="fa fa-user user-icon"></i> </div>
                        <div className="inputbox">  <input className='form-control' type="text" id="registerEmail" placeholder="Email Address" onChange={e => setRegisterEmail(e.target.value)} /> <i className="fas fa-envelope email-icon"></i> </div>
                        <div className="inputbox">  <input className='form-control pass' placeholder="Password" type="password" value={registerPassword} onChange={e => setRegisterPassword(e.target.value)} /><i onClick={showPassword} className="fas fa-eye pass-eye"></i><i className="fa fa-lock pass-icon"></i> </div>
                        <div className="inputbox">  <input className='form-control pass-conf' placeholder="Confirm password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} /><i onClick={showPasswordConfirm} className="fas fa-eye pass-eye-confirm"></i><i className="fa fa-lock pass-icon"></i> </div>
                    </div>
                    <div className="mt-2"> <button className="btn btn-primary btn-block">Sign Up!</button> </div>
                </div>
            </form>
        </div>
    )
}

export default withRouter(Signup);