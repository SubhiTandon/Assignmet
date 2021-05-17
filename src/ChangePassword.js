import React from "react";
import { Link } from "react-router-dom";

function ChangePassword() {
  return (
    <div>
      <div className="password__change">
        <form type="POST">
          <h3>Username :</h3>

          <label>
            New Password:{" "}
            <input type="password" placeholder="New password"></input>
          </label>
        </form>
      </div>
      <div>
        <Link to="/">
          <button>Save Password</button>
        </Link>
        <Link to="/">
          <button>Logout</button>
        </Link>
      </div>
    </div>
  );
}

export default ChangePassword;
