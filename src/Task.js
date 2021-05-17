import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "./Task.css";

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        console.log(items),
        (
          <div className="tasks">
            <ol>
              {items.map((item) => (
                <li className="task__list" key={item.id}>
                  {item.title}
                  <button
                    className="delete__tasks"
                    onClick={() => {
                      items.splice(items.id, 1);
                      this.setState({ items: items });
                    }}
                  >
                    {" "}
                    Delete
                  </button>
                  <hr className="horizontal__line" />
                </li>
              ))}
              ;
            </ol>
            <label>Add task</label>
            <input
              onClick={(e) => {
                items.title = e.target.value;
              }}
            ></input>
            <button className="Addtask">Add Task</button>
          </div>
        )
      );
    }
  }
}
