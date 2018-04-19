import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="center">
        <h2>Find the Perfect Festival....</h2>

        <div className="button-container">
          <Link to="/createyourown">
            <button className="create-your-own">Create Your Own </button>
          </Link>
          <Link to="/ourlist">
            <button className="see-our-list">See Our List</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
