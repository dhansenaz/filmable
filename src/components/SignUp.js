import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './signup.css'

class SignUp extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className='signup-container' >
                <div className="login-input">
                    <p className='user-name'>Email</p>
                
                    <input />
                    <p className='user-name'>Password</p>
                    <input />
                    <button className="login-submit" >Sign Up</button>
                </div>




            </div>
        )
    }
}
export default SignUp
