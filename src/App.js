import React from "react";
import "./App.css";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Nav from "./Nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/Hashtag-TEA/" exact component={Home} />
          <Route path="/Hashtag-TEA/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
