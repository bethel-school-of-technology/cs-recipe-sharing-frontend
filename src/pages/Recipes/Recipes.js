import React from 'react';
import  './style.css';
import FA from 'react-fontawesome';
import axios from 'axios';


const SearchBarComponent = ({handleSearch}) => {
    return(
        <div className="search-bar">
            
            Search for Recipe: &nbsp;<input onChange={handleSearch} type="text" />
            <FA className="search-icon" name="search" />
        </div>
    )
}

const RecipesSharedTitle = ({numberOfRecipes}) => {
    return(
        <div className="title">Recipes Shared ({numberOfRecipes})</div>
    )
}

const Recipe = ({recipe}) => {
    return(
        <div className="recipe-card">
            <div className="recipe-image">
                <img src={require(`../../assets/images/bacon-squash.jpg`)} />
                {/**<img alt="recipe" src={require(`../../${recipe.image}`)} /> */}
            </div>
            <div className="recipe-body">
                <div className="recipe-title">{recipe.title}</div>
                <div className="recipe-author">By: {recipe.author}</div>
                <div className="recipe-stats">
                    <div className="cook-time">Cook Time: {recipe.cookTime}</div>
                    <div className="difficulty">Difficulty: {recipe.difficulty}</div>
                </div>
            </div>
        </div>
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
                    <div className="recipes-container"></div>
                        <ViewRecipeCardsComponent recipes={this.state.filtered_recipes} />
                    </div>
                </div>
            </div>
        )
    }
}
    
export default RecipeHomePageView;