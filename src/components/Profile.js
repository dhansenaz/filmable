import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./profile.css";
import GetYourList from "./GetYourList";
import Festival from "./Festival";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: []
    };
  }
  saveFestivals() {
    axios.put("/api/savefestivals", {}).then(response => {
      console.log(response);
    });
  }
  componentDidMount(){
      if(this.props.location.state.newlist ){
          this.setState({userList: this.props.location.state.newlist })
          console.log(this.state.userList)
      }
  }
  render() {
    // console.log(this.state)
    // console.log(this.props)
    return (
      <div>
        <div className="profile-festivals-container">
          {this.state.userList.map(e => {
            return (
              <div className="profile-festivals">
                <Festival festival={e} />
              </div>
            );
          })}
        </div>
        <div className="save-button-container">
          <Link to="/myaccount">
            <button
              className="save-to-account"
              onClick={this.saveFestivals.bind(this)}
            >
              Save to Account
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Profile;
