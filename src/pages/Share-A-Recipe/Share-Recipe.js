import React, { useState } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router';

const ShareRecipe = withRouter(({ history }) => {
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [servingSize, setServing] = useState("");
    const [cookTime, setCookTime] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [image, setImage] = useState("");
    const [directions, setDirections] = useState("");
    const [author, setAuthor] = useState("");
    const [authorId, setAuthorId] = useState("");
    
    const url = "http://localhost:8080";
    const handleSubmit = async (e) => {
        e.preventDefault();
        let recipe = {
           title: title,
           description: description,
           servingSize: servingSize,
           cookTime: cookTime,
           ingredients: ingredients,
           difficulty: difficulty,
           image: image,
           directions: directions,
           author: author,
           authorId: authorId
        }
        //need to add the token
        //need to format the ingredients
        let response = await axios.post(`${url}/api/recipe/add/`, recipe);
        if(response.status === 200){
            window.alert("Thanks for sharing!");
        }
        else{
            window.alert("Something went wrong. Try again.");
        }
    };
    return (
        <div className="page-container">
                <div className="title">Share Your Favorite Recipe</div>
    
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Text Field" type="text" value={title} onChange={e => setTitle(e.target.value)} /> 

                        <input placeholder="Text Field" type="text" value={description} onChange={e => setDescription(e.target.value)} />

                        <input placeholder="Text Field" type="text" value={servingSize} onChange={e => setServing(e.target.value)} />

                        <input placeholder="Text Field" type="text" value={cookTime} onChange={e => setCookTime(e.target.value)} />

                        <input placeholder="Text Field" type="text" value={ingredients} onChange={e => setIngredients(e.target.value)} />

                        <input placeholder="Text Field" type="text" value={difficulty} onChange={e => setDifficulty(e.target.value)} />

                        <input placeholder="Text Field" type="text" value={image} onChange={e => setImage(e.target.value)} />

                        <input placeholder="Text Field" type="text" value={directions} onChange={e => setDirections(e.target.value)} />

                        <input placeholder="Text Field" type="text" value={author} onChange={e => setAuthor(e.target.value)} />

                    <button>Submit</button>
                    
                    </form>
            </div>
        )
})
export default withRouter(ShareRecipe);