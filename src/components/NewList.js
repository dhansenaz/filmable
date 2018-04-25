import React, { Component } from "react";
import axios from "axios";
import CreateYourOwn from "./CreateYourOwn";
import "./newlist.css";
import {Link} from 'react-router-dom'

class NewList extends Component {
  constructor(props) {
    super(props);
  }
// getYourList(){
//     axios.get('/')
// }
  render() {
    return (
    <div className="center-newlist">
        <p className="p-newlist">Here are the categories you selected.  Click the <strong className="underline">Get Your List</strong> button to see your currated list.</p>
      <div className="newlist">
        {this.props.location.state.newlist.map(element => {
          return (
            <div className="newlist-container">
              {element.genre}

            
            </div>
          );
        })}
      </div>
      <Link to={{pathname: '/getyourlist', state: { newlist:this.props.location.state}}}><button className="getyourlist">Get Your List</button></Link>
      
      </div>
    );
  }
}
export default NewList;
