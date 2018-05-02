import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './profile.css'
import GetYourList from './GetYourList'
import Festival from './Festival'


class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            userList: this.props.location.state.newlist || null

        }
    }
    render(){
        console.log(this.state)
        console.log(this.props)
        return(
            <div>
                <div className="my-profile">My List</div>
                
                <div className="profile-container">
                    
                    <div className="profile">
                            {this.state.userList.map((e) => {
                                return(
                                    <Festival>
                                        {e}
                                    </Festival>
                                )
                            })}
                    </div>

                </div>
            </div>
        )
    }
}
export default Profile