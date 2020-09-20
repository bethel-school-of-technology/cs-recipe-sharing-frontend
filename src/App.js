import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Recipes</li>
          <li>Share Recipe</li>
          <li>My Recipes</li>
          <li>About</li>          
          <li>Login/Sign Up</li>  
        </ul>
        {this.props.children}
      </div>
    );
  }
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
