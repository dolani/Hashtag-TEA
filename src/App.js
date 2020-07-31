import React from 'react';
import logo from './logo.png';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faHome, faShare } from '@fortawesome/free-solid-svg-icons'
import Home from './Home'
import Footer from './Footer'

export default function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input className="search-bar" placeholder="Search"/>
        <span className="icons">
           <i><FontAwesomeIcon icon={faHome} /></i>
           <i><FontAwesomeIcon icon={faClock} /></i>
           <i><FontAwesomeIcon icon={faShare} /></i>
        </span>
      </header>
      <Home/>
      <Footer/>
    </div>
  );
}
