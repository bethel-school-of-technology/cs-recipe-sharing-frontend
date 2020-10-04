import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './navbar/Navbar';
import AboutPageView from './pages/About/About';
import RecipeHomePageView from './pages/Recipes/Recipes';
import ShareRecipe from './pages/Share-A-Recipe/Share-Recipe';
import User from './pages/User/login';


function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={RecipeHomePageView} exact />
        <Route path="/share-recipe" component={ShareRecipe} />
        <Route path="/about" component={AboutPageView} />
        <Route path="/user" component={User} />
      </Switch>
    </div>
    </Router>
  );
}

export {App};

class Recipes extends Component {
  render() {
    return (
      <div>
        <h1>Recipes</h1>
      </div>
    )
  } 
}

export {Recipes};

class ShareRecipe extends Component {
  render(){
    return (
      <div>
        <h1>Share Recipe</h1>
      </div>
    )
  }
}

export {ShareRecipe};

class MyRecipes extends Component {
  render() {
    return (
      <div>
        <h1>My Recipes</h1>
      </div>
    )
  }
}

export {MyRecipes};

class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    )
  }
}

export {About};

class LoginSignUp extends Component {
  render() {
    return (
      <div>
        <h1>Login / Sign Up</h1>
      </div>
    )
  }
}

export {LoginSignUp};

ReactDOM.render((
  <Router history = {browserHistory}>
    <Route path = "/" component = {App}>
      <IndexRout component = {Recipes} />
      <Route path = "recipes" component = {Recipes} />
      <Route path = "share-recipe" component = {ShareRecipe} />
      <Route path = "my-recipes" component = {MyRecipes} />
      <Route path = "about" component = {About} />
      <Route path = "loginsignup" component = {LoginSignup} />
     </Route>
  </Router>
), document.getElementById('app'))

export default App