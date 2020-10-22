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
    saveDetails(){
        let user = this.getCurrentUser();
        let headers = {
            authorization: user.authorization,
            username: user.user
        }
        return axios.get(URL + "api/user/", { headers: headers }).then(res => {
               let userDetails = {
                   authorization:  user.authorization,
                   user: user.user,
                   email: res.data.email,
                   id: res.data.id,
                   savedRecipes: res.data.savedRecipes
               }
               localStorage.setItem("user", JSON.stringify(userDetails));
               return res;
           });
       }
    // Logout Method => Logs user out, removes local storage
    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        let user = {
            username: username,
            email: email,
            password: password,
            savedRecipes: [0]
        }
        user = JSON.stringify(user);

        let headers = {
            'Content-Type': 'application/json'
        }
        
        return axios.post(URL + "api/user/register", user, {headers: headers})
                .then(response => {
                    user = JSON.parse(user);
                    if(response.status === 200) {
                        return true
                    }
                    else if(response.status !== 200) {
                        return false;
                    }
                    
                })
    }

    // Get the user info from Local Storage
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    getSavedRecipes() {
        let user = this.getCurrentUser();
        let headers = {
            authorization: user.authorization,
            username: user.user
        }
        return axios.get(URL + "api/user/", { headers: headers })
            .then(response => {
                return response.data.savedRecipes
            })
        
    }
}

export default new AuthService();