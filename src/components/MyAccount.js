import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './myaccount.css'
import Festival from './Festival'


class MyAccount extends Component{



render(){
    console.log('my account............',this.props)
    return(
        <div>
            <div className='inputaccount'>
                <p> Welcome </p>
                <div className="my-button-container">
                <button className="my-list">My List</button>

                </div>
                {this.props.user.email}
            </div>
            
       
        </div>
    )
}
}
export default MyAccount