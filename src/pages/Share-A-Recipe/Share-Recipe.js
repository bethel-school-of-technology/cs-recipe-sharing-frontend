import React, { useState } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router';
import './share-recipe.css';
import AuthService from '../../services/auth.service';

let currentUser = AuthService.getCurrentUser();
console.log("User Value: ", currentUser);

<<<<<<< HEAD
const ShareRecipe = withRouter(({ history }) => {
=======
    let currentUser = AuthService.getCurrentUser();

    let headers = {
        authorization: currentUser.authorization
    }
>>>>>>> 771acf3824d4affba6986319c39776f56c5f6d08

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
    const [directions, setDirections] = useState("");
<<<<<<< HEAD
    const [author, setAuthor] = useState("");

    const [selectedFile, setState] = useState([]);

    const url = "http://localhost:8080";

    let headers = {
        authorization: currentUser.authorization
    }

    const fileChangedHandler = (event) => {
        setState({selectedFile: event.target.files[0]})
        console.log(selectedFile);
        }
    const uploadHandler = async (e) => {
        e.preventDefault(); 
        const formData = new FormData();
        formData.append('file', selectedFile);
        console.log(formData, selectedFile);
        let response = await axios.post(`${url}/api/recipe/image`, formData, {headers: headers});
        if(response.status === 200){
            window.alert(response.statusText);
        }
        else{
            window.alert("Something went wrong." + response.statusText);
        }
     }
=======
    

    const url = "http://localhost:8080";

    const [selectedFile, setFile] = useState([]);

    const uploadPicture = async (e) => {
        e.preventDefault();
        console.log(selectedFile);
        let formData = new FormData();
        formData.append('imageFile', selectedFile);
        let response = await axios.post(`${url}/api/recipe/uploadImage`, formData, {headers: headers});
        if(response.status === 200){
            document.getElementById("imagePreview").src = response.data;
        }
        else{
            window.alert("Something went wrong. Try again.");
            console.log(response);
        }
    }
>>>>>>> 771acf3824d4affba6986319c39776f56c5f6d08


    const handleSubmit = async (e) => {
        e.preventDefault();
        let recipe = {
           title: title,
           description: description,
           servingSize: servingSize,
           cookTime: cookTime,
           difficulty: difficulty,
           ingredients: ingredients,
           image: document.getElementById("imagePreview").src,
           directions: directions,
           author: currentUser.user,
<<<<<<< HEAD
           authorId: 3
=======
           authorId: currentUser.id
>>>>>>> 771acf3824d4affba6986319c39776f56c5f6d08
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
<<<<<<< HEAD

                <form>
                     <div>
                      <input type="file" onChange={fileChangedHandler}/>
                          <button onClick={uploadHandler}>Upload!</button>
                    </div>
                </form>
=======
                <form onSubmit={uploadPicture} >
                    <div className="fileUpload">
                            <label>Upload a picture for your recipe!</label>
                                    <input type="file"  onChange={e => setFile(e.target.files[0])}  accept="image/x-png,image/gif,image/jpeg,image/jpg"/>
                                     <button>Upload</button>

                     </div>
                 </form>
>>>>>>> 771acf3824d4affba6986319c39776f56c5f6d08
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
                                <option value="Difficult">Difficult</option>
                            </select>                   
                            </div>
<<<<<<< HEAD
                            <div className="fileUpload">
                               <label>Upload a picture for your recipe!</label>
                            <input type="file"/>
=======
                            <div className="displayImage">
                                <img id="imagePreview" src={require(`../../assets/images/bacon-squash.jpg`)} />
>>>>>>> 771acf3824d4affba6986319c39776f56c5f6d08
                            </div>
                            </div>
                            <div className="row2">
                        <div className="bottomSection">
                        <input placeholder="Text Field" type="text" value={ingredients} onChange={e => setIngredients(e.target.value)} />
                        <input placeholder="Text Field" type="text" value={directions} onChange={e => setDirections(e.target.value)} />
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