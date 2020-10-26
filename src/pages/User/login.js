import React, { useState } from 'react';
import AuthService from '../../services/auth.service';
import { withRouter } from 'react-router';
import './login.css';




const Login = withRouter(({ history }) => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

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
    

    const handleSubmitLoginUser = async (e) => {
        e.preventDefault();
        AuthService.login(username, password)
            .then(response => {
                console.log(response);
                if(response.status !== 200){
                    // Throw login error
                    alert("Invalid Username or Password")
                }
                else if (response.status === 200) {          
                    window.location ="http://localhost:3000/"
                }
        })
    };
    return (
        <div className="container d-flex justify-content-center">
            <form onSubmit={handleSubmitLoginUser}>
                    <div className="card login">
                        <div className="text-center intro"> <i className="fa fa-user-astronaut fa-10x"></i></div>
                        <div className="mt-4 text-center">
                            <div className="mt-3 inputbox"> <input className='form-control' placeholder="Username" type="text" value={username} onChange={e => setUserName(e.target.value)} />  <i className="fa fa-user user-icon"></i> </div>
                            <div className="inputbox">  <input className='form-control pass' placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} /><i onClick={showPassword} className="fas fa-eye pass-eye"></i><i className="fa fa-lock pass-icon"></i> </div>
                        </div>
                        <div className="mt-2"> <button className="btn btn-primary btn-block">LOGIN <i className="fas fa-sign-in-alt"></i></button> </div>
                    </div>
            </form>
        </div>
    )
})
export default withRouter(Login);