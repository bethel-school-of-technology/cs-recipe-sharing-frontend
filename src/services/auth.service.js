import axios from "axios";

const URL = "http://localhost:8080/";

class AuthService {

    // Login Service
    login(username, password){
        
        // Create User
        let user = {
            username: username,
            password: password
        }
        // Stringify User object => Backend only accepts JSON
        user = JSON.stringify(user);
        
        // Content Type must be set to "app/json"
        let headers = {
            'Content-Type': 'application/json',
        }

        return axios.post(URL + "login", user, {headers: headers})
                .then(response => {
                    if(response.headers.authorization){
                        user = JSON.parse(user);
                        let user_data = {
                            authorization: response.headers.authorization,
                            user: user.username
                        }
                        localStorage.setItem("user", JSON.stringify(user_data))
                    }
                    return response;
                })
    }

    // Logout Method => Logs user out, removes local storage
    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        let user = {
            username: username,
            email: email,
            password: password
        }
        user = JSON.stringify(user);

        let headers = {
            'Content-Type': 'application/json'
        }
        
        return axios.post(URL + "api/user/register", user, {headers: headers})
                .then(response => {
                    user = JSON.parse(user);
                    let registration_data = {
                        username: user.username,
                        message: "Registration Successful!"
                    }
                    if(response.status === 200){
                        return registration_data
                    }
                    
                })
    }

    // Get the user info from Local Storage
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();