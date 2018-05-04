import React, { Component } from "react";
import "./createyourown.css";
import Nav from "./Nav";
import axios from "axios";
import { Link } from "react-router-dom";
import NewList from "./CreateYourOwn";
import Festival from './Festival'

class CreateYourOwn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genres: [],
      selected: [],
      showGenres: false,
      fiction: false,
      documentary: false,
      short: false,
      long: false,
      allFestivals: []
    };
  }
  componentDidMount() {
    axios.get("/api/genres").then(response => {
      // console.log(response);
      this.setState({ genres: response.data });
    });
    axios.get("/api/ourfestivals").then(response => {
      this.setState({ allFestivals: response.data });
      // console.log(response.data);
    });
  }

  // clickFiction() {
  //   this.setState({ fiction: !this.state.fiction });
  // }

  // clickDocumentary() {
  //   this.setState({ documentary: !this.state.documentary });
  // }
  // clickShort() {
  //   this.setState({ short: !this.state.short });
  // }
  // clickFeature() {
  //   this.setState({ long: !this.state.long });
  // }
  matchFestivalGenres(genre) {
    let genres = this.state.genres.slice();
    let gi = genres.findIndex(el => {
      return el.id === genre.id;

    });
    genres[gi].isClicked = !genres[gi].isClicked;
    // console.log(genres[gi])
    // console.log('before set state....................',this.state.genres)
    
    this.setState({ genres: genres }, () => {
      // console.log('after set state..............',this.state.genres)
      let arr = [];
      this.state.genres.forEach(el => {
        el.isClicked ? arr.push(el) : null;
      });
      // console.log('array.....................',arr)
      
      const queryString = arr
        .map(e => {
          return `genre_id=${e.id}`;
        })
        .join("&");
      // console.log(queryString)
      axios.get(`/api/queryresults?${queryString}`).then(response => {
        console.log('response data...................',response.data)
        this.setState({ selected: response.data });
      });
      //  console.log(this.state.selected)
    });
  }

  render() {
    // console.log("props..........................",this.props)
    return (
      <div className="main">
        <div className="center-create-your-own">
          <p className="click-all">
            Tell us about your film. Click the Show Genres button. Simply click
            on all the categories that apply. When you're ready click Submit
          </p>
          {/* <div className="button-container-fiction">
            <button onClick={this.clickFiction.bind(this)} >fiction</button>
            <button onClick={this.clickDocumentary.bind(this)}>documentary</button>
            <button onClick={this.clickShort.bind(this)}>short</button>
            <button onClick={this.clickFeature.bind(this)}>feature</button>
            
            
           { console.log(this.state) }
          </div> */}
          <div className="create-your-own-button-container">
            {/* show genres button.  */}
            <button
              onClick={() =>
                this.setState({ showGenres: !this.state.showGenres })
              }
              className="show-genres"
            >
              Show Genres
            </button>
            {/* submit button */}
            <Link
              to={{
                pathname: "/profile",
              state: { newlist: this.state.selected /* user: */ }
              }}
            >
              {" "}
              <button
                onClick={() => {
                  return <div>{this.state.selected}</div>;
                }}
                className="submit"
              >
                Submit
              </button>
            </Link>
          </div>
        </div>
        <div className="genrelist">
          {this.state.showGenres ? (
            <div className="genre-container">
              {/* mapping over genres  */}
              {this.state.genres.map(element => {
                console.log(element);
                return (
                  //checking truthy falsey to change color if clicked
                  <div
                    style={
                      element.isClicked ? { backgroundColor: "", borderRadius: '5px', padding: '1px',opacity:'.8', boxShadow: '.5px 1px 11px 1px #F9E093' } : null
                    }
                    onClick={() => {
                      this.matchFestivalGenres(element);
                    }}
                    className="genrelist"
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
        <div className="selected-festivals-container">
        {/* map over this.state.selected and return the festival component */}
        {this.state.selected.map((el) => {
          return(
            <div className='selected-festivals'>
               <Festival festival = {el} />
            </div>
          )
        })}
        </div>
      </div>
    );
  }
}
export default CreateYourOwn;
