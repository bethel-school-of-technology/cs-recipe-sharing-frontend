import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
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
            currentUser: {},
            savedRecipes: null,
            userPostedRecipes: null
        }
    }

    deleteRecipe(id) {
        const URL = ' localhost:8080/api/recipe/'
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
                    console.log(response)
                }
            )
        }
        else {
            return;
        }
        
    }


    async componentDidMount(){
        AuthService.saveDetails();
        const currentUser = JSON.parse(localStorage.getItem('user'));
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
        savedRecipes.map(id => {
            RECIPES.filter(recipe => {
                if(recipe.id === id){
                    myRecipes.push(recipe)
                }
            })
        })

        // Get the User ID
        const userID = currentUser.id
        // Find All Recipes that match the Author ID
        let userPostedRecipes = [];
        userPostedRecipes = RECIPES.filter(recipe => {
            if(recipe.authorId === userID){
                return recipe
            }
        })

        this.setState({
            isLoading: false,
            currentUser: JSON.parse(localStorage.getItem('user')),
            savedRecipes: myRecipes,
            userPostedRecipes: userPostedRecipes
        })
    }
    componentDidUpdate(){
    }

    render(){
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
                                        description = description.substring(0, 55) + '<br /><span class="readmore">Read More ...</span>';
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
                                            <div id={`pop-${index}`} className="pop-view">View Recipe</div>
                                        </Link>
                                    ) 
                                })
                            )
                        }
                    </div>
                    <h2>Recipes I've Shared: </h2>
                    <hr></hr>
                    {
                        this.state.userPostedRecipes.map(recipe => {
                            return (
                                <Card id={`posted-recipe-${recipe.id}`} className="mx-4 my-4 col post-card" style={{ width: "18rem", padding: "0px" }}>
                                    <Card.Img variant="top" src={recipe.image} />
                                    <div className="user-options">
                                        <button>Edit</button> <br />
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

export default withRouter(profilePage);