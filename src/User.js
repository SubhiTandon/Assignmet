import React from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import "./User.css";

function User() {
  return (
    <div className="user">
      <div className="user__details">
        <h1>Username : {auth.email}</h1>
        <h1>Password : {auth.password}</h1>
        <Link to="/">
          <button className="User__logout">Logout</button>
        </Link>
        <Link to="/changepassword">
          <button className="User__password">Change Password</button>
        </Link>
      </div>
    </div>
  );
}

export default User;
