import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './navbar/Navbar';
import AboutPageView from './pages/About/About';
import login from './pages/Login/login';
import RecipeHomePageView from './pages/Recipes/Recipes';


function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={RecipeHomePageView} />
        <Route path="/about" component={AboutPageView} />
        <Route path="/login" component={login}/>
        <Route path="/Recipes" component={RecipeHomePageView}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

class Recipes extends Component {
  render() {
    return (
      <div>
        <h1>Recipes</h1>
      </div>
    )
  } 
}

export default Recipes;

class ShareRecipe extends Component {
  render(){
    return (
      <div>
        <h1>Share Recipe</h1>
      </div>
    )
  }
}

export default ShareRecipe;

class MyRecipes extends Component {
  render() {
    return (
      <div>
        <h1>My Recipes</h1>
      </div>
    )
  }
}

export default MyRecipes;

class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    )
  }
}

export default About;

class LoginSignUp extends Component {
  render() {
    return (
      <div>
        <h1>Login / Sign Up</h1>
      </div>
    )
  }
}

export default LoginSignUp;

ReactDOM.render((
  <Router history = {browserHistory}>
    <Route path = "/" component = {App}>
      <IndexRout component = {Recipes} />
      <Route path = "recipes" component = {Recipes} />
      <Route path = "sharerecipe" component = {ShareRecipe} />
      <Route path = "myrecipes" component = {MyRecipes} />
      <Route path = "about" component = {About} />
      <Route path = "loginsignup" component = {LoginSignup} />
     </Route>
  </Router>
), document.getElementById('app'))

export default App;
