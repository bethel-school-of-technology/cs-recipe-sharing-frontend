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
        <Route path="/about" component={AboutPageView} />
        <Route path="/login" component={login}/>
        <Route path="/Recipes" component={RecipeHomePageView}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
