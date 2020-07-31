import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <div class = "footer">
      Made with <FontAwesomeIcon icon= {faHeart}/> by Victoria Lo.
    </div>
  );
}