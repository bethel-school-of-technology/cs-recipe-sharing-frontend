import React, { useState } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router'



const Login = withRouter(({ history }) => {
    
    const [email, setEmailname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const url = "http://localhost:8080"
    const handleSubmit = async (e) => {
        e.preventDefault();
        let user = {
            email:email,
            username: username,
            password: password
        };
          

        let response = await axios.post(`${url}/login`, user);
        if(response.status === 200){
            // Need to store jwt in localstorage
            localStorage.setItem('logininfo', response.headers.authorization);
            localStorage.setItem('user', user.username);
            window.alert("You're logged in!");
            
        }
        else{
            window.alert("Something went wrong. Try again.");
           
        }
    };
    return (
        <div>
            <h3>Please Login</h3>
            <form onSubmit={handleSubmit}>
                <input placeholder="Enter email" type="text" value={email} onChange={e => setEmailname(e.target.value)} /> 
                <input placeholder="Enter username" type="text" value={username} onChange={e => setUsername(e.target.value)} />
                <input placeholder="Enter password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
              <button className="btn" >Login</button>
            </form>
        </div>
    )
})
export default withRouter(Login);