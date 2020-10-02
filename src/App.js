import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './navbar/Navbar';
import AboutPageView from './pages/About/About';
import login from './pages/Login/login';
import RecipeHomePageView from './pages/Recipes/Recipes';
<<<<<<< HEAD
import ShareRecipe from './pages/Share-A-Recipe/Share-Recipe';

=======
import User from './pages/User/login';
>>>>>>> 56e9f21a9d56cf24e884591c4ec9733fcc20272e

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
<<<<<<< HEAD
        {/* <Route path="/" component={RecipeHomePageView} /> */}
        <Route path="/share-recipe" component={ShareRecipe} />
        <Route path="/about" component={AboutPageView} />
        <Route path="/login" component={login}/>
        {/* <Route path="/Recipes" component={RecipeHomePageView}/> */}
=======
        <Route path="/" component={RecipeHomePageView} exact />
        <Route path="/about" component={AboutPageView} />
        <Route path="/user" component={User} />
>>>>>>> 56e9f21a9d56cf24e884591c4ec9733fcc20272e
      </Switch>
    </div>
    </Router>
  );
}

export default App;
