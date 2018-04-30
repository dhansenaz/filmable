import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './profile.css'
import GetYourList from './GetYourList'


class Profile extends Component{
    render(){
        return(
            <div>
                <h4 className="my-profile">My Profile</h4>
                <div className="profile-container">
                    
                    <div className="profile">
                        <GetYourList />
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile