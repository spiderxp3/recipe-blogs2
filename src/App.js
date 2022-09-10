import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import DefaultPage from "./components/pages/DefaultPage";
import Recipes from "./components/pages/Recipes";
import RecipeDetails from "./components/pages/RecipeDetails";
import SignIn from "./components/pages/SignIn";
import Add from "../src/components/pages/addrecipe";
import Blogs from "../src/components/pages/addedrecipe"
import { useState } from "react";

function App() {

  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home } />
          <Route exact path="/sign" component={SignIn}/>
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/recipes/:recipe_id" component={RecipeDetails} />
          <Route exact path="/addrecipe" component={Add} />
          <Route exact path="/addedrecipe" component={Blogs} />

          <Route component={DefaultPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
