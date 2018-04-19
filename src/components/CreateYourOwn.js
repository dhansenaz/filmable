import React, { Component } from "react";
import "./createyourown.css";
import Nav from "./Nav";
import Footer from "./Footer";

class CreateYourOwn extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div className="main">
        <div className="center">
          <select className="select1">
            <option value="Film Type">Fiction</option>
            <option value="Film Type">Non-Fiction</option>
          </select>
          <select className="select2">
            <option value="Film Genre">Documentary</option>
            <option value="Film Type">Horror</option>
            <option value="Film Type">Sci-Fi</option>
            <option value="Film Type">Animation</option>
            <option value="Film Type">Drama</option>
            <option value="Film Type">Suspense</option>
            <option value="Film Type">Comedy</option>
            <option value="Film Type">Family</option>
            <option value="Film Type">Music</option>
          </select>

          <button className="new-list">Get Your New List</button>
        </div>
      </div>
    );
  }
}
export default CreateYourOwn;
