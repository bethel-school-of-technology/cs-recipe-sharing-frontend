import React from 'react';
import './style.css';
import axios from 'axios';
import AuthService from '../../services/auth.service';


class ViewRecipeDetails extends React.Component {
    constructor(){
        super();
        this.state = {
            user: null,
            recipe: {},
            ingredients: [],
        }
    }
    componentDidMount(){
        const { recipe } = this.props.location.state;
        const user = AuthService.getCurrentUser();

        // TODO: only show save a recipe if user is logged in
        console.log(user)
        this.setState({
            user: user,
            recipe: recipe,
            ingredients: recipe.ingredients
        })
    }
    componentDidUpdate(){
    }

    saveRecipe() {
        const URL = "http://localhost:8080/api/user/my-recipe";
        const headers = {
            Authorization: this.state.user.authorization,
            userId: this.state.user.id,
            recipeId: this.state.recipe.id,
        }
        
        axios.put(URL, {},{ headers: headers}).
            then(response => {
                console.log(response)
            })
    }

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <div className="image"><img src={this.state.recipe.image} height="300px" width="300px" /></div>    
                        </div>
                        <div className="col-7">
                            <div className="recipe-name">
                                <h2>{this.state.recipe.title}</h2>
                            </div>     
                            <div className="recipe-info">
                                <p>{this.state.recipe.description}</p>
                            </div>
                            <div className="serv-level-time">
                                <h6>Serving Size: {this.state.recipe.servingSize} | Cooking Time: {this.state.recipe.cookTime} | Difficulty: {this.state.recipe.difficulty}</h6>
                            </div>
                        </div>
                    </div>  
                    <div className="row">
                        <div className="col-4">
                            <div className="ingredients">
                                <h5>Ingredients:</h5>
                                <ul>
                                    {
                                        this.state.ingredients.map(item => {
                                            return <li key={item.name}>ingredient: {item.name} amount: {item.amount} {item.measurement}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-8">    
                            <div className="method">
                                <h5>Method:</h5>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: this.state.recipe.directions
                                    }}></div>
                            </div>
                        </div>    
                    </div>
                </div>
                <br />
                {this.state.user && (
                    <button onClick={() => this.saveRecipe()}>Save Recipe</button>
                )}
            </div>
        )
    }
}

export default ViewRecipeDetails;