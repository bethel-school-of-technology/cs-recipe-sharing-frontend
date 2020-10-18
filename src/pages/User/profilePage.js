import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import AuthService from '../../services/auth.service';
import axios from 'axios';
import './profilePage.css';

const IsLoading = () => {
    return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
    )
}
class profilePage extends React.Component {
    constructor(){
        super();
        this.state = {
            isLoading: true,
            currentUser: null,
            savedRecipes: null,
            userPostedRecipes: null
        }
    }

    deleteRecipe(id) {
        const URL = 'http://localhost:8080/api/recipe/delete/'
        const currentUser = AuthService.getCurrentUser();
        const TOKEN = currentUser.authorization;
        if(window.confirm("Delete this post?")){
            axios({
                url: URL + id,
                method: "DELETE",
                headers: {
                    Authorization: TOKEN
                }
            }).then(response => {
                    // Delete request is OK!
                    if(response.status === 200){
                        document.getElementById(`posted-recipe-${id}`).remove();
                    }
                    
                }
            )
            
        }
        else {
            return;
        }
        
    }

    editRecipe(id) {
        if (id) {
            window.location.replace("/edit/" + id);
        }
    }

    async componentDidMount(){
        if(AuthService.getCurrentUser()){
        AuthService.saveDetails();
        // Get Saved Recipe Id's
        const savedRecipes = await AuthService.getSavedRecipes();
        
        // Get All of the Recipes
        const URL = "http://localhost:8080/api/recipe/";
        const RECIPES = await axios ({
                url: URL,
                method: "GET"
            }).then(response => {
                return response.data
            })
        // Filter the Recipes and get the Saved Saved Recipes
        let myRecipes = [];
        // Find All Recipes that match the Author ID
        let userPostedRecipes = [];
        for(var i = 0; i < RECIPES.length; i++) {
            if(RECIPES[i].authorId === JSON.parse(localStorage.getItem("user")).id){
                userPostedRecipes.push(RECIPES[i]);
            }
            if (savedRecipes) {
                if(savedRecipes.includes(RECIPES[i].id)){
                    myRecipes.push(RECIPES[i]);
                }
            }
        }
        this.setState({
            isLoading: false,
            currentUser: JSON.parse(localStorage.getItem('user')),
            savedRecipes: myRecipes,
            userPostedRecipes: userPostedRecipes
        })
    }
    }
    componentDidUpdate(){
    }

    render(){
        if (this.state.currentUser === null) {
            return (
              <div className="container">
                <h1>Not Authorized to view this page!</h1>
              </div>
            );
          } else if (this.state.currentUser) {
            if(this.state.isLoading){
                return(
                    <IsLoading />
                )
            }
            else if(this.state.isLoading === false) {
                return(
                    <div className="container my-recipes">
                        <h2>My Saved Recipes: </h2>
                        <hr></hr>
                        <div className="row">
                            {
                                this.state.savedRecipes === null ? 
                                (
                                    <h2>No Saved Recipes!</h2>
                                ) 
                                : 
                                (
                                    this.state.savedRecipes.map((recipe, index) => {
                                        let description = recipe.description;
    
                                        if(description.length > 55){
                                            description = description.substring(0, 55) + '<br /><span className="readmore">Read More ...</span>';
                                        }
    
                                        return (
                                            <Link to={{
                                                        pathname: `/recipe/${recipe.id}`,
                                                        state: {recipe}
                                                    }}>
                                                <Card className="mx-4 my-4 col card-hover" style={{ width: "18rem", padding: "0px" }}>
                                                    <Card.Img variant="top" src={recipe.image} />
                                                    <Card.Body>
                                                        <Card.Title>{recipe.title}</Card.Title>
                                                        <Card.Text>
                                                            <div dangerouslySetInnerHTML={{
                                                                __html: description
                                                            }}></div>
                                                        </Card.Text>
                                                    </Card.Body> 
                                                </Card>
                                            </Link>
                                        ) 
                                    })
                                )
                            }
                        </div>
                        <h2>My Shared Recipes: </h2>
                        <hr></hr>
                        {
                            this.state.userPostedRecipes.map(recipe => {
                                return (
                                    <Card id={`posted-recipe-${recipe.id}`} className="mx-4 my-4 col post-card" style={{ width: "18rem", padding: "0px" }}>
                                        <Card.Img variant="top" src={recipe.image} />
                                        <div className="user-options">
                                            <button onClick={() => this.editRecipe(recipe.id)}>Edit</button> <br />
                                            <button onClick={() => this.deleteRecipe(recipe.id)}>Delete</button>
                                        </div>
                                        <Card.Body>
                                            <Card.Title>{recipe.title}</Card.Title>
                                            <Card.Text>
                                                <div dangerouslySetInnerHTML={{
                                                    __html: recipe.description
                                                }}></div>
                                            </Card.Text>
                                            
                                        </Card.Body>
                                    </Card>
                                   
                                )
                            })
                        }
                        
                    </div>
                )
            }
          }
        
        
    }
    
}

export default withRouter(profilePage);