import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './login.css'

class Login extends Component{
    constructor(){
        super()
        this.state={
            userName: '',
            passWord: ''
        }
    }
    render(){
        return(
            <div className="login-container">
                <div className="user-input">
                    <p className='user-name'>User Name</p>
                
                    <input />
                    <p className='user-name'>Password</p>
                    <input />
                    <button className='login-submit'>Login</button>
                </div>


            </div>
        )
    }
}
export default Login