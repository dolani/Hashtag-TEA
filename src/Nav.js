import React from 'react';
import logo from './logo.png';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faHome, faShare } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input className="search-bar" placeholder="Search"/>
          <span className="icons">
            <Link to='/'><i><FontAwesomeIcon icon={faHome} /></i></Link>
            <Link to='/about'><i><FontAwesomeIcon icon={faInfoCircle} /></i></Link>
            <Link><i><FontAwesomeIcon icon={faShare} /></i></Link>
          </span>
        </header>  
    );
  }
  