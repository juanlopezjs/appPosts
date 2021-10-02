import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import Navbar from "../Component/Navbar";
//import Counter from "../Component/Counter";
import Posts from "./Post";
import Footer from "../Component/Footer";

const Main = () => {
  return (
    <BrowserRouter basename={window.location.pathname}>
      <header className="mb-5">
        <Navbar />
      </header>

      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
        {/* <Route exact path="/">
          <Counter />
        </Route> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Main;
