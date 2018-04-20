import React, { Component } from "react";
import "./createyourown.css";
import Nav from "./Nav";
import Footer from "./Footer";
import axios from "axios";
import {Link} from 'react-router-dom'
import NewList from './CreateYourOwn'

class CreateYourOwn extends Component {
  constructor() {
    super();

    this.state = {
      genres: [],
      selected: [],
      showGenres: false
    };
    // this.mapGenres = this.mapGenres.bind(this);
  }
  componentDidMount() {
    axios.get("/api/genres").then(response => {
      this.setState({ genres: response.data });
      console.log(response.data);
    });
  }

  // mapGenres() {
  //   let displayGenres = null;
  //   if (this.state.genres.length) {
  //     displayGenres = this.state.genres.map(element => {
  //       return <div className="genre-container">{element.genre}</div>;
  //     });
  //   }
  //   return displayGenres;
  // }

  render() {
    console.log(this.state.selected)
    return (
      <div className="main">
        <div className="center-create-your-own">
          <p className="click-all">
            Click the Show Genres button. Simply click on all the categories
            that apply. When you're ready click Submit
          </p>
          <div className="create-your-own-button-container">
            <button
              onClick={() =>
                this.setState({ showGenres: !this.state.showGenres })
              }
              className="show-genres"
            >
              Show Genres
            </button>
           <Link to={{pathname: '/newlist', state: { newlist:this.state.selected}}}> <button
              onClick={() => {
                return <div>{this.state.selected}</div>;
              }}
              className="submit"
            >
              Submit
            </button></Link>
          </div>
        </div>
        <div className="genrelist">
          {this.state.showGenres ? (
            <div className="genre-container">
              {this.state.genres.map(element => {
                return (
                  <div
                    onClick={() => {
                     let array = this.state.selected;
                     array.push(element.genre)

                      this.setState({ selected: array })
                      console.log(this.state.selected)
                    }
                  }className="genrelist"
                  >
                  {element.genre}
                  </div>
                );
              })}
            </div>
          ) : (
            <div />
          )}
        </div>
        {/* <NewList  foo  = {this.state.selected} /> */}
      </div>
    );
  }
}
export default CreateYourOwn;
