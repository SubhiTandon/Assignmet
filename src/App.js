import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Task from "./Task";
import Login from "./Login";
import User from "./User";
// import { useEffect } from "react";
import { auth } from "./firebase";
import ChangePassword from "./ChangePassword";

// user detection 
function App() {
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is ", authUser);

      if (authUser) {
        //login
      } else {
        //logout
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/changepassword">
            <Header />
            <ChangePassword />
          </Route>
          <Route path="/user">
            <Header />
            <User />
          </Route>
          <Route path="/task">
            <Header />
            <Task />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
