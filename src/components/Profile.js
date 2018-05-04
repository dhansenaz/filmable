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
      userList: [],
      user: 0,
    };
  }
  
  componentDidMount(){
      if(this.props.location.state.newlist ){
          this.setState({userList: this.props.location.state.newlist })
      }
      axios.post('/api/finduser', {email: this.props.location.state.userlist}).then(res => {
        //   console.log(res)
          this.setState({
              user: res.data.id
          })
          axios.get(`/api/getuserlist/${this.state.user}`).then((r) => {
              console.log(r)
              this.setState({userList: r.data})
          })
      })
  }

  onSave(){
      console.log(this.state.user)
      if(this.state.user === undefined){
          console.log('hey')
          window.location = '/login'
      } else {
     const festivalId = this.state.userList.map((fest) => {
            return fest.id
     })
     const {user} = this.state;
     const details = [user, festivalId]
      axios.post('/api/addfestivalstodb', {details}).then((r) => {
          console.log(r)
      })
    console.log(festivalId)
    }
  }

  render() {
    // console.log(this.state)
    console.log(this.props)
    return (
      <div>
        <div className="profile-festivals-container">
          {this.state.userList ? this.state.userList.map(e => {
            return (
              <div className="profile-festivals">
                <Festival festival={e} />
              </div>
            );
          }): null}
        </div>
        <div className="save-button-container">
        <Link to={{pathname: "/myaccount" }}>
            <button
              className="save-to-account"
              onClick={this.onSave.bind(this)}
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
