import React, { useState } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router';
import './share-recipe.css';
import AuthService from '../../services/auth.service';

const ShareRecipe = withRouter(({ history }) => {

    let currentUser = AuthService.getCurrentUser();
    console.log("User Value: ", currentUser)

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [servingSize, setServing] = useState(8);
    const [cookTime, setCookTime] = useState(30);
    const [ingredients, setIngredients] = useState([{
        name: 'Salt',
        amount: 3,
        measurement: "spoons"
    }]);
    const [difficulty, setDifficulty] = useState("Medium");
    const [image, setImage] = useState({
        name: '',
        surname: '',
        cv: ''
    });
    const [directions, setDirections] = useState("");
    const [author, setAuthor] = useState("");
    const [authorId, setAuthorId] = useState(2);
      
    
    const url = "http://localhost:8080";
    const handleSubmit = async (e) => {
        e.preventDefault();
        /*const formData = new FormData()
        formData.append(
                'This is a name',
                this.image.name,
                this.image
                
        );
        axios.post('../../assets/images/uploads/', formData);*/
        let recipe = {
           title: title,
           description: description,
           servingSize: servingSize,
           cookTime: cookTime,
           difficulty: difficulty,
           ingredients: ingredients,
           image: "../../assets/images/uploads",
           directions: directions,
           author: author,
           authorId: authorId
        }
        //need to add the token
        let headers = {
            authorization: `Bearer ${localStorage.getItem('logininfo')}`
        }
        //need to format the ingredients
        let response = await axios.post(`${url}/api/recipe/add/`, recipe, {headers: headers});
        if(response.status === 200){
            window.alert("Thanks for sharing!");
        }
        else{
            window.alert("Something went wrong. Try again.");
        }
    };
    if(currentUser === null) {
        return(
            <div><h1>Not Authorized!</h1></div>
        )
    }
    else if (currentUser){
    return (
        <div className="page-container">
                <div className="title">Share Your Favorite Recipe</div>
                <form onSubmit={handleSubmit}>
                    <div className="recipeFormContainer">
                        <div className="row1">
                            <div className="recipeFormLeft">
                    
                            <input placeholder="Recipe Name" type="text" value={title} onChange={e => setTitle(e.target.value)} /> 

                            <input placeholder="Recipe Description" type="text" value={description} onChange={e => setDescription(e.target.value)} />

                            <input placeholder="Serving Size" type="number" value={servingSize} onChange={e => setServing(e.target.value)} />

                            <input placeholder="Cook Time" type="text" value={cookTime} onChange={e => setCookTime(e.target.value)} />

                            <select placeholder="Difficulty" type="text" value={difficulty} onChange={e => setDifficulty(e.target.value)} >
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>                   
                            </div>
                            <div className="fileUpload">
                                <label>Upload a picture for your recipe!</label>
                            <input type="file" onChange={e => setImage(e.target.files[0])} />
                            </div>
                            </div>
                            <div className="row2">
                        <div className="bottomSection">
                        <input placeholder="Text Field" type="text" value={ingredients} onChange={e => setIngredients(e.target.value)} />
                        <input placeholder="Text Field" type="text" value={directions} onChange={e => setDirections(e.target.value)} />
                        <input placeholder="Text Field" type="text" value={author} onChange={e => setAuthor(e.target.value)} />
                        </div>
                    <button>Submit</button>
                    </div>
                    </div>
                    
                    </form>
            </div>
        )
    }
})
export default withRouter(ShareRecipe);