import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/home">
        <img className="header__logo" src="./images.png" alt="LOGO" />
      </Link>
      <div className="header__nav">
        <div className="header__option">
          <Link to="/home">
            <span className="header__optionOne">Home</span>
          </Link>
        </div>
        <div className="header__option">
          <Link to="/task">
            <span className="header__optionOne">Tasks</span>
          </Link>
        </div>
        <div className="header__option">
          <Link to="/user">
            <span className="header__optionOne">User</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
