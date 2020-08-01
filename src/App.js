import React from 'react';
import './App.css';
import Home from './Home'
import Footer from './Footer'
import Timer from './Timer'
import Nav from './Nav'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/timer" component={Timer}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}
