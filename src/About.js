import React from 'react';
import './App.css';

export default function About() {
  return (
    <div className="about-container">
      <h1>Welcome to #TEA!</h1>
      <p>This is a simple PWA showcasing how the <a href="https://tea-api-vic-lo.herokuapp.com">Tea API</a> can be used.<br/>
      <br/>For more information, visit  <a href="https://lo-victoria.com">my blog</a> for tutorials on how to make a Node.js REST API <br/>for beginners and how to make this PWA using your own API.<br/>
      <br/>Thanks for visiting! Feel free to browse the tea, post a nice comment about it and share this <br/>simple PWA with your friends. Hope you love tea~</p>
    </div>
  );
}
