import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import Login from "./pages/login";
import Register from "./pages/register";
import CreatePost from "./pages/createPost";
import Posts from "./pages/posts";
import UserProfile from "./pages/userProfile";

import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/create-post" exact component={CreatePost} />
        <Route path="/user-profile" exact component={UserProfile} />
      </Switch>
    </Router>
  );
}

export default App;
