import React, { useState } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router';
import './login.css';






const Login = withRouter(({ history }) => {
    
    const [email, setEmailname] = useState("");
    const [password, setPassword] = useState("");
    
    const url = "http://localhost:8080"
    const handleSubmit = async (e) => {
        e.preventDefault();
        let user = {
            email:email,
            password: password
        };
          

        let response = await axios.post(`${url}/login`, user);
        if(response.status === 200){
            // Need to store jwt in localstorage
            localStorage.setItem('logininfo', response.headers.authorization);
            localStorage.setItem('email', user.emailName);
            window.alert("You're logged in!");
            
        }
        else{
            window.alert("Something went wrong. Try again.");
           
        }
    };
    return (
        <div class="login-div">
        <div class="title">Please Login</div>
              <br/>
              <br/>

            <form onSubmit={handleSubmit}>
               <div class= "emailInput">
                <input placeholder="Enter email" type="text" value={email} onChange={e => setEmailname(e.target.value)} /> 
                </div>
            <br/>
               <div class="passwordInput">
                <input placeholder="Enter password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
             </div>
             <br/>
             <br/>
             <br/>
             <button onClick={handleSubmit}>Submit</button>
             </form>
        </div>

    )
})
export default withRouter(Login);