import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import "./share-recipe.css";
import AuthService from "../../services/auth.service";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

let currentUser = AuthService.getCurrentUser();

const ShareRecipe = withRouter(({ history }) => {

  const [recipeId, setID] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [servingSize, setServing] = useState();
  const [cookTime, setCookTime] = useState();
  const [ingredients, setIngredients] = useState([
    { name: "", amount: 0, measurement: "Select" },
  ]);
  const [difficulty, setDifficulty] = useState("Medium");
  const [directions, setDirections] = useState("");

  const url = "http://localhost:8080";

  const uploadPicture = async (file) => {
    let headers = {
        authorization: currentUser.authorization,
      };
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    console.log(file);
    let formData = new FormData();
    formData.append("imageFile", file);
    let response = await axios
      .post(`${url}/api/recipe/uploadImage`, formData, { headers: headers })
      .then((res) => {
        return res;
      });
    if (response.status === 200) {
      await delay(2000);
      document.getElementById("imagePreview").src = response.data;
    } else {
      window.alert("Something went wrong. Try again.");
      console.log(response);
    }
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...ingredients];
    list[index][name] = value;
    setIngredients(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...ingredients];
    list.splice(index, 1);
    setIngredients(list);
  };
  const handleAddClick = () => {
    setIngredients([...ingredients, { name: "", amount: 0, measurement: "" }]);
  };

  //handling the edit functions for a user
  if(history.location.pathname.includes("edit") && recipeId < 1){
    console.log("The edit is running");
  let editId = history.location.pathname.replace("/edit/", "");
  axios.get(url + "/api/recipe/" + editId).then( res => {
      if(res.status === 200) {
        if(res.data.authorId === currentUser.id) {

      if(res.data.id) {setID(res.data.id)};
      if(res.data.title) {setTitle(res.data.title)};
      if(res.data.description) {setDescription(res.data.description)};
      if(res.data.servingSize) {setServing(res.data.servingSize)};
     if(res.data.cookTime) {setCookTime(res.data.cookTime)};
     if(res.data.difficulty) {setDifficulty(res.data.difficulty)};
     if(res.data.ingredients) {setIngredients(res.data.ingredients)};
     if(res.data.image) {document.getElementById("imagePreview").src = res.data.image};
          if(res.data.directions) {setDirections(res.data.directions)};
        }
        else {
          alert("You don't have permission to edit this!");
        }
      }
      else {
        alert("Can't find your recipe!");
        history.push("/share-recipe");
      }
    })
  };
  
  //reset the component if a user clicks on share-a-recipe from the menu while on the edit page.
  if(history.location.pathname.includes("share-recipe") && recipeId > 0) {
    window.location.reload();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let headers = {
        authorization: currentUser.authorization,
      };
    let imgSrc = "" + document.getElementById("imagePreview").src + "";
    if (!imgSrc.includes("pictureholder")) { 
      let recipe = {};
      if(recipeId > 0) {
        recipe = {
          id: recipeId,
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
          };
          let response = await axios.put(`${url}/api/recipe/update`, recipe, {
            headers: headers,
          });
          if (response.status === 200) {
            window.alert("Your Update Was Successful!");
            history.push("/");
          } else {
            window.alert("Something went wrong. Try again.");
            }
            console.log(recipe);
      }
      else {
      recipe = {
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
        };
        let response = await axios.post(`${url}/api/recipe/add/`, recipe, {
          headers: headers,
        });
        if (response.status === 200) {
          window.alert("Thanks for sharing!");
          history.push("/");
        } else {
          window.alert("Something went wrong. Try again.");
          }
          console.log(recipe);
        } 
      
      }
      else {
      window.alert("You haven't selected a photo!");
    }
  };


  const deleteRecipe = () => {
    const URL = 'http://localhost:8080/api/recipe/delete/'
    const TOKEN = currentUser.authorization;
    if(window.confirm("Delete this post?")){
        axios({
            url: URL + recipeId,
            method: "DELETE",
            headers: {
                Authorization: TOKEN
            }
        }).then(response => {
                // Delete request is OK!
                if(response.status === 200){
                    history.push("/");
                }
                
            }
        )
        
    }
    else {
        return;
    }
    
};


  if (currentUser === null) {
    return (
      <div>
        <h1>Not Authorized!</h1>
      </div>
    );
  } else if (currentUser) {
    return (
      <div className="page-container">
        <div>
          <div className="title">
          {recipeId > 0 ?
        <h1>Edit Your Recipe!</h1> :
        <h1>Share Your Recipe!</h1>
         }
          </div>
          <form>
            <div className="recipeFormContainer">
              <div className="row1">
                <div className="recipeFormLeft">
                  <h3>1. Let's Get the Basics:</h3>
                  <input
                    placeholder="Recipe Name"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <input
                    placeholder="Recipe Description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <div className="sideBy">
                    <input
                      placeholder="Serving Size"
                      type="number"
                      value={servingSize}
                      onChange={(e) => setServing(e.target.value)}
                    />
                    <label> servings per batch</label>
                  </div>
                  <div className="sideBy">
                    <input
                      placeholder="Cook Time (in Minutes)"
                      type="number"
                      value={cookTime}
                      onChange={(e) => setCookTime(e.target.value)}
                    />
                    <label> minutes</label>
                  </div>
                  <div className="sideBy">
                    <select
                      placeholder="Difficulty"
                      type="text"
                      value={difficulty}
                      onChange={(e) => setDifficulty(e.target.value)}
                    >
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Difficult">Difficult</option>
                    </select>
                    <label> for the average cook</label>
                  </div>
                </div>
                <div className="displayImage">
                  <div className="fileUpload">
                    <label>
                      <h3>2. Upload a Picture for Your Recipe:</h3>
                      <br />
                      <img
                        id="imagePreview"
                        alt="recipe"
                        src={require(`../../assets/images/pictureholder.jpg`)}
                      />
                      <input
                        type="file"
                        onChange={(e) => uploadPicture(e.target.files[0])}
                        accept="image/tiff, image/png,image/gif,image/jpeg,image/jpg"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row2">
                <div className="bottomSection">
                  <h3>3. List What Goes In It:</h3>
                  {ingredients.map((x, i) => {
                    return (
                      <div className="ingList" key={i}>
                        <div>
                          <label>Ingredient Name:</label>
                          <label>Amount:</label>
                          <label>Measurement Type:</label>
                        </div>

                        <div>
                          <input
                            placeholder="Ingredient"
                            type="text"
                            name="name"
                            value={x.name}
                            onChange={(e) => handleInputChange(e, i)}
                          />
                          <input
                            placeholder="Amount"
                            type="number"
                            name="amount"
                            value={x.amount}
                            onChange={(e) => handleInputChange(e, i)}
                          />
                          <select 
                          placeholder="Measurement"
                            type="text"
                            name="measurement"
                            value={x.measurment}
                            onChange={(e) => handleInputChange(e, i)}
                            >
                            <option value="Select">Select</option>
                          <option value="Teaspoon(s)">Teaspoon(s)</option>
                          <option value="Tablespoon(s)">Tablespoons(s)</option>
                          <option value="Ounce(s)">Ounce(s)</option>
                          <option value="Cup(s)">Cup(s)</option>
                          <option value="Pint(s)">Pint(s)</option>
                          <option value="Quart(s)">Quart(s)</option>
                          <option value="Gallon(s)">Gallon(s)</option>
                        
                       </select>
                        </div>
                        <div className="addRemoveButtons">
                          {ingredients.length - 1 === i && (
                            <button
                              className="addRemove"
                              onClick={handleAddClick}
                            >
                              Add Another Ingredient
                            </button>
                          )}
                          {ingredients.length !== 1 && (
                            <button
                              className="addRemove"
                              onClick={() => handleRemoveClick(i)}
                            >
                              Remove This Ingredient
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <h2>4. Tell Us How to Make the Magic:</h2>
                  <div>
                  <ReactQuill theme="snow" value={directions} onChange={setDirections}/>
                  </div>
                </div>
                <button id="shareRecipeButton" type="submit" onClick={handleSubmit}>
                  {recipeId > 0 ?
                  "Update Your Recipe!" :
                  "Share Your Recipe!"
                  }
                </button>
                {recipeId > 0 ?
        <button id="deleteRecipeButton" onClick={deleteRecipe}>
       DELETE YOUR RECIPE FOREVER
      </button>
        : ""  
        }
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
});
export default withRouter(ShareRecipe);
