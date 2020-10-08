import React, { useState } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router';
import './share-recipe.css';
import AuthService from '../../services/auth.service';

let currentUser = AuthService.getCurrentUser();
console.log("User Value: ", currentUser);

const ShareRecipe = withRouter(({ history }) => {
    let currentUser = AuthService.getCurrentUser();

    let headers = {
        authorization: currentUser.authorization
    }

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [servingSize, setServing] = useState();
    const [cookTime, setCookTime] = useState();
    const [ingredients, setIngredients] = useState([{name:"", amount: 0, measurement: ""}]);
    const [difficulty, setDifficulty] = useState("Medium");
    const [directions, setDirections] = useState(""); 

    const url = "http://localhost:8080";

    const uploadPicture = async (file) => {
        const delay = ms => new Promise(res => setTimeout(res, ms));
        console.log(file);
        let formData = new FormData();
        formData.append('imageFile', file);
        let response = await axios.post(`${url}/api/recipe/uploadImage`, formData, {headers: headers}).then(res => {
            return res;
        });
        if(response.status === 200){
            await delay(2000);
            document.getElementById("imagePreview").src = response.data;
        }
        else{
            window.alert("Something went wrong. Try again.");
            console.log(response);
        }
    }

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...ingredients];
        list[index][name] = value;
        setIngredients(list);
    };
   
  const handleRemoveClick = index => {
    const list = [...ingredients];
    list.splice(index, 1);
    setIngredients(list);
  };
  const handleAddClick = () => {
    setIngredients([...ingredients, {name:"", amount: 0, measurement: ""}]);
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let imgSrc = "" + document.getElementById("imagePreview").src + "";
        if(!imgSrc.includes("pictureholder")) {
        let recipe = {
           title: title,
           description: description,
           servingSize: parseInt(servingSize),
           cookTime: parseInt(cookTime),
           difficulty: difficulty,
           ingredients: ingredients,
           image: document.getElementById("imagePreview").src,
           directions: directions,
           author: currentUser.user,
           authorId: currentUser.id
        }
        console.log(recipe, ingredients);
        //need to format the ingredients
        let response = await axios.post(`${url}/api/recipe/add/`, recipe, {headers: headers});
        if(response.status === 200){
            window.alert("Thanks for sharing!");
            history.push("/");
        }
        else{
            window.alert("Something went wrong. Try again.");
        }
      }
      else {
          window.alert("You haven't selected a photo!")
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
              <h1>Share Your Favorite Recipe!</h1>
                <form >
                    <div className="recipeFormContainer">
                        <div className="row1">
                            <div className="recipeFormLeft">
                            <h3>Let's Get the Basics:</h3>
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
                            <div className="displayImage">
                                        <div className="fileUpload">
                                                <label><h3>Upload a picture for your recipe!</h3><br />
                                                <img id="imagePreview" src={require(`../../assets/images/pictureholder.jpg`)} />
                                                <input type="file"  onChange={e => uploadPicture(e.target.files[0])}  accept="image/tiff, image/png,image/gif,image/jpeg,image/jpg"/>
                                                </label> 
                                              
                                        </div>
                            </div>
                            </div>
                            <div className="row2">
                        <div className="bottomSection">
                        <h3>Let's list all of your ingredients!</h3>   
                        <div className="ingList">
                                    <div><label>Ingredient Name:</label><label>Amount:</label><label>Measurement Type:</label></div>                   
                            {ingredients.map((x, i) => {
                             return(
                                  <div>
                                    <div>
                                    <input placeholder="Ingredient" type="text" name="name" value={x.name} onChange={e => handleInputChange(e, i)} />
                                    <input placeholder="Amount" type="number" name="amount" value={x.amount} onChange={e => handleInputChange(e, i)} />
                                    <input placeholder="Measurement" type="text" name="measurement" value={x.measurment} onChange={e => handleInputChange(e, i)} />
                                    </div>
                                    <div className="addRemoveButtons">
                                        {ingredients.length - 1 === i && <button  className="addRemove" onClick={handleAddClick}>Add Another Ingredient</button>}
                                        {ingredients.length !== 1 && <button className="addRemove" onClick={() => handleRemoveClick(i)}>Remove This Ingredient</button>}
                                    </div>
                                </div>
                            );
                            })}
                             </div> 
                        </div>
                        <div>
                        <textarea placeholder="Text Field" type="textarea" value={directions} onChange={e => setDirections(e.target.value)} ></textarea>
                        </div>
                    <button type="submit" onClick={handleSubmit} >Submit</button>
                    </div>
                    </div>
                    
                    </form>
            </div>
        )
    }
})
export default withRouter(ShareRecipe);