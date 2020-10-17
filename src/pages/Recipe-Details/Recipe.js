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
        AuthService.saveDetails()
        let user = JSON.parse(localStorage.getItem('user'));

        // TODO: only show save a recipe if user is logged in
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
        console.log(headers)
        
        axios({
            url: URL,
            method: "PUT",
            headers:headers
        }).then(response => {
            if(response.status === 200){
                alert("Saved Recipe!")
            }
            else {
                alert("Recipe could not be saved - error!")
            }
        })
    }

    render(){
        return(
            <div>
                <div className="container recipe-details">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="page-header">
                                <h1>{this.state.recipe.title}</h1>
                                <hr />
                            </div>
                            
                            <div className="recipe-description">
                                {this.state.recipe.description}
                            </div>
                            <hr />
                            <div className="recipe-stats">
                                <h3>Serving Size: <span className="badge badge-primary">{this.state.recipe.servingSize}</span></h3>
                                <h3>Cook Time: <span className="badge badge-primary">{this.state.recipe.cookTime} min</span></h3>
                                <h3 >Difficulty:<span className="badge badge-primary">{this.state.recipe.difficulty}</span></h3>
                            
                            
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="image">
                                <img className="rounded" alt="" src={this.state.recipe.image} />
                                {this.state.user && (
                                <button className="save-recipe" onClick={() => this.saveRecipe()}>Save Recipe</button>
                            )}
                            </div>
                            
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-md-4">
                            <div className="ingredients">
                                <h3>Ingredients:</h3>
                                <ul className="list-group list-group-flush">
                                {
                                        this.state.ingredients.map(item => {
                                            return <li className="list-group-item" key={item.name}>{item.name} amount: {item.amount} {item.measurement}</li>
                                        })
                                }
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                            <h3>Method:</h3>    
                            <div
                            dangerouslySetInnerHTML={{
                                __html: this.state.recipe.directions
                            }}></div>
                        </div>    
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewRecipeDetails;