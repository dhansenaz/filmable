import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './signup.css'

class SignUp extends Component{
    constructor(){
        super()
        this.state = {
            email:'',
            password:''
        }
    }
    newUser(){
        const {email, password} = this.state
        
        axios.post('/api/newuser', {email, password}).then(response => {
            console.log(response)
        })
    }

    render(){
        console.log(this.state)
        return(
            <div className='signup-container' >
                <div className="login-input">
                    <p className='user-name'>Email</p>
                
                    <input onChange={ (e) => this.setState({email: e.target.value}) } />
                    <p className='user-name'>Password</p>
                    <input onChange={ (e) => this.setState({password: e.target.value})} type="password"/>
                    <button onClick={this.newUser.bind(this)}className="signup-submit" >Sign Up</button>
                </div>

            </div>
        )
    }
}
export default SignUp
