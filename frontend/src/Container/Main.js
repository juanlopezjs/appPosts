import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Components
import Navbar from "../Component/Navbar";
import Posts from "./Post";
import Footer from "../Component/Footer";
import Login from "../Component/Login";
import AuthRoute from "../Component/AuthRoute";
import PostDetails from "../Component/PostDetails";
import CreatePost from "../Component/CreatePost";
import CreateComment from "../Component/CreateComment";

const Main = () => (
  <BrowserRouter basename="/">
    <header className="mb-5">
      <Navbar />
    </header>
    <div className="container p-5">
      <Switch>
        <AuthRoute exact path="/">
          <Posts />
        </AuthRoute>
        <AuthRoute exact path="/post/:id">
          <PostDetails />
        </AuthRoute>
        <AuthRoute exact path="/create/post">
          <CreatePost />
        </AuthRoute>
        <AuthRoute exact path="/create/comment">
          <CreateComment />
        </AuthRoute>
        <Route exact path="/login">
          <Login />
        </Route>
        <Redirect to="/login" />
      </Switch>
    </div>
    <Footer />
  </BrowserRouter>
);

export default Main;
