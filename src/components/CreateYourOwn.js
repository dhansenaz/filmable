import React, { Component } from "react";
import "./createyourown.css";
import Nav from "./Nav";
import Footer from "./Footer";
import axios from "axios";

class CreateYourOwn extends Component {
  constructor() {
    super();

    this.state = {
      genres: [],
      selected: [],
      showGenres: false
    };
    this.mapGenres = this.mapGenres.bind(this);
  }
  componentDidMount() {
    axios.get("/api/genres").then(response => {
      this.setState({ genres: response.data });
      console.log(response.data);
    });
  }

  mapGenres() {
    let displayGenres = null;
    if (this.state.genres.length) {
      displayGenres = this.state.genres.map(element => {
        return <div className="genre-container">{element.genre}</div>;
      });
    }
    return displayGenres;
  }

  render() {
    return (
      <div className="main">
        <div className="center">
        <p className="click-all">Click the Show Genres button. Simply click on all the categories that apply. When you're ready click Submit</p>
          <button
            onClick={() =>
              this.setState({ showGenres: !this.state.showGenres })
            }
            className="show-genres"
          >
            Show Genres
          </button>
        <button className="submit">Submit</button>
          
        </div>
        <div className="genrelist">
          {this.state.showGenres ? <div className="genre-container">{
            this.state.genres.map(element => {
              return <div className="genrelist">{element.genre}</div>;
            })
          }</div> : <div />}
        </div>
      </div>
    );
  }
}
export default CreateYourOwn;
