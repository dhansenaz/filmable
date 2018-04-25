import React, { Component } from "react";
import router from "./routes.js";
import { Link } from "react-router-dom";
import "./app.css";
import "./components/Lafilmfestival.jpg";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        {router}

      </div>
    );
  }
}

export default App;
