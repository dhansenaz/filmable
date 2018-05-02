import React, { Component } from "react";
import "./createyourown.css";
import Nav from "./Nav";
import axios from "axios";
import {Link} from 'react-router-dom'
import NewList from './CreateYourOwn'

class CreateYourOwn extends Component {
  constructor() {
    super();

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
      console.log(response)
      this.setState({ genres: response.data });

    });
    axios.get('/api/ourfestivals').then((response) => {
      this.setState({ allFestivals: response.data})
      console.log(response.data)
    })
    
  }

  clickFiction(){
    this.setState({fiction: !this.state.fiction})
  }
  
  clickDocumentary(){
    this.setState({documentary: !this.state.documentary})
  }
  clickShort(){
   this.setState({short: !this.state.short})
 }
  clickFeature(){
   this.setState({long: !this.state.long})
 }
 matchFestivalGenres(genre){
  let array = this.state.selected;
  
  let newElement = {
   genre: genre.genre,
   id: genre.id
  }
  array.push(newElement)
  console.log(array)

  const queryString = array.map((e) => {
    return `genre_id=${e.id}`

  }).join('&')
  // console.log(queryString)
  axios.get(`/api/queryresults?${queryString}`).then((response) => {
      
    this.setState({ selected: response.data })
        
  })
  //  console.log(this.state.selected)
 }

  render() {
    return (
      <div className="main">
        <div className="center-create-your-own">
          <p className="click-all">
            Tell us about your film. Click any that apply. 
            Then, click the Show Genres button. Simply click on all the categories
            that apply. When you're ready click Submit
          </p>
          <div className="button-container-fiction">
            <button onClick={this.clickFiction.bind(this)} >fiction</button>
            <button onClick={this.clickDocumentary.bind(this)}>documentary</button>
            <button onClick={this.clickShort.bind(this)}>short</button>
            <button onClick={this.clickFeature.bind(this)}>feature</button>
            
            
           { console.log(this.state) }
          </div>
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
           <Link to={{pathname: '/profile', state: { newlist:this.state.selected}}}> <button
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
            {/* mapping over  */}
              {this.state.genres.map(element => {
                console.log(element)
                return (
                  //checking truthy flasey to change color if clicked
                  <div style={ element.isClicked ? { backgroundColor:"red"} :  null  }
                    onClick={() => {
                      this.matchFestivalGenres(element);
                      !element.isClicked ? element.isClicked = true : element.isClicked = false

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
      </div>
    );
  }
}
export default CreateYourOwn;
