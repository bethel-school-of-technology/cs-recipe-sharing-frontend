import React from 'react';
import  './style.css';
import FA from 'react-fontawesome';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';


const SearchBarComponent = ({handleSearch}) => {
    return(
        <div className="search-bar">
            
            Search for Recipe: &nbsp;<input onChange={handleSearch} type="text" style={{fontSize: "14px"}} />
            <FA className="search-icon" name="search" />
        </div>
    )
}

const RecipesSharedTitle = ({numberOfRecipes}) => {
    return(
        <div className="recipe-number">Recipes Shared ({numberOfRecipes})</div>
    )
}

const Recipe = ({recipe}) => {
    let recipeId = recipe.id;
    return(
        <Link to={{
            pathname: `/recipe/${recipe.id}`,
            state: {recipe}
        }}>
            <Card className="mx-4 my-4 col card-hover" style={{ width: "18rem", padding: "0px" }}>
                <Card.Img variant="top" src={recipe.image} height="160px" />
                <Card.Body>
                    <Card.Title style={{textAlign:"center"}}>{recipe.title}</Card.Title>
                    <Card.Text className="">
                        <div className="cook-time">Cook Time: {recipe.cookTime}min</div>
                        <div className="serving-size">Serving Size: {recipe.servingSize}</div>
                    </Card.Text>
                </Card.Body> 
            </Card>
        </Link>
    )
}

const ViewRecipeCardsComponent = ({recipes}) => {
    if(recipes.length === 0){
        return(
            <h1 className="no-matches">No Matches</h1>
        )
    }
    else{
        return(
            recipes.map((recipe, index) => {
                return ( 
                        <Recipe key={index} recipe={recipe} />
                )
            }) 
        )
    }
}

class RecipeHomePageView extends React.Component {
    constructor(props){
        super();
        this.state = {
            recipes: [],
            filtered_recipes: [],
            search_filter: "",
            isLoading: true,
        }
    }
    async componentDidMount(){
        let url = "http://localhost:8080/api/recipe/";
        const response = await axios ({
            url: url,
            method: "GET"
        })
        console.log(response.data)
        this.setState({
            recipes: response.data,
            filtered_recipes: response.data,
            isLoading: false
        })
    }

    handleSearch(e){
        let searchInput = e.target.value;
        searchInput = searchInput.toLowerCase();
        let recipes_data = this.state.recipes;
        let newRecipes = [];
        if(searchInput === ""){
            this.setState({
                filtered_recipes: this.state.recipes
            })
        }
        else if(searchInput !== ""){
            newRecipes = recipes_data.filter(recipe => {
                let recipe_title = recipe.title.toLowerCase();
                if(recipe_title.includes(`${searchInput}`)){
                    return recipe
                }
            })
            this.setState({
                filtered_recipes: newRecipes
            })
        }
    }

    render(){
        let howManyRecipes = this.state.recipes.length;
        if(this.state.isLoading === true){
            return(
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        }
        return(
            <div className="main-body">
                <div className="header">
                        <RecipesSharedTitle numberOfRecipes={howManyRecipes} />
                        <SearchBarComponent handleSearch={this.handleSearch.bind(this)} />
                </div>
                <div className="flex-center">
                    <div className="recipes-container">
                        <ViewRecipeCardsComponent recipes={this.state.filtered_recipes} />
                    </div>
                </div>
            </div>
        )
    }
}
    
export default RecipeHomePageView;