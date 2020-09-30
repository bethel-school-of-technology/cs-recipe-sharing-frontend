import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './navbar/Navbar';
import AboutPageView from './pages/About/About';
import login from './pages/Login/login';
import RecipeHomePageView from './pages/Recipes/Recipes';
import ShareRecipe from './pages/Share-A-Recipe/Share-Recipe';


function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
        {/* <Route path="/" component={RecipeHomePageView} /> */}
        <Route path="/share-recipe" component={ShareRecipe} />
        <Route path="/about" component={AboutPageView} />
        <Route path="/login" component={login}/>
        {/* <Route path="/Recipes" component={RecipeHomePageView}/> */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;
