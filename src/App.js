import React, { Component } from "react";
import router from "./routes.js";
import { Link } from "react-router-dom";
import "./app.css";
import "./components/Lafilmfestival.jpg";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        {router}

        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
