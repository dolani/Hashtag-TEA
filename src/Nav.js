import React from "react";
import logo from "./logo.png";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faHome,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { TwitterShareButton } from "react-share";

export default function Nav() {
  const shareUrl = "https://victoria-lo.github.io/Hashtag-TEA";
  const hashtag = [
    "PWA",
    "WebDevelopment",
    "Javascript",
    "React",
    "API",
    "Tea",
  ];
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="tag">A simple PWA for Tea Lovers~</p>
      <span className="icons">
        <Link to="/Hashtag-TEA/">
          <i>
            <FontAwesomeIcon icon={faHome} />
          </i>
        </Link>
        <Link to="/Hashtag-TEA/about">
          <i>
            <FontAwesomeIcon icon={faInfoCircle} />
          </i>
        </Link>
        <i>
          <TwitterShareButton
            title="Here's a cool PWA I found made by @lo_victoria2666!"
            hashtags={hashtag}
            url={shareUrl}
          >
            <FontAwesomeIcon icon={faShare} />
          </TwitterShareButton>
        </i>
      </span>
    </header>
  );
}
