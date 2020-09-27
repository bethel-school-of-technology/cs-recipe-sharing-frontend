import React from 'react';
import styles from './style.css';

const SearchBarComponent = ({handleSearch}) => {
    return(
        <div className="search-bar">
            Search: <input onChange={handleSearch} type="text" />
        </div>
    )
}

const RecipesSharedTitle = ({numberOfRecipes}) => {
    return(
        <h1 className="title">Recipes Shared ({numberOfRecipes})</h1>
    )
}

const Recipe = ({recipe}) => {
    return(
        <div className="recipe-card">
            <div className="recipe-image">
                <img alt="recipe" src={require(`../../${recipe.image_url}`)} />
            </div>
            <div className="recipe-body">
                <div className="recipe-title">{recipe.title}</div>
                <div className="recipe-author">By: {recipe.author}</div>
                <div className="recipe-stats">
                    <div className="cook-time">Cook Time: {recipe.cookTime}</div>
                    <div className="difficulty">Difficulty: {recipe.difficulty}</div>
                </div>
            </div>
            {/*<img src={require(`../../${recipe.image_url}`)} />*/}
        </div>
    )
}

const ViewRecipeCardsComponent = ({recipes}) => {
    if(recipes.length === 0){
        return(
            <h1>No Matches</h1>
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
        let url = "http://localhost:3001/recipes";
        try {
            const response = await fetch(url);
            const recipe_data = await response.json();
            this.setState({
                recipes: this.state.recipes.concat(recipe_data),
                filtered_recipes: this.state.filtered_recipes.concat(recipe_data),
                isLoading: false
            })
        }
        catch(error){
            console.log(error)
        }
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
                    <div className="col-1-2">
                        <RecipesSharedTitle numberOfRecipes={howManyRecipes} />
                    </div>
                    <div className="col-1-2">
                        <SearchBarComponent handleSearch={this.handleSearch.bind(this)} />
                    </div>
                </div>
                
                <div className="recipes-container">
                    <ViewRecipeCardsComponent recipes={this.state.filtered_recipes} />
                </div>
            </div>
        )
    }
}
    
export default RecipeHomePageView;