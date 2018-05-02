import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './login.css'

class Login extends Component{
    constructor(){
        super()
        this.state={
            email: '',
            password: '',
            user: []
        }
    }
    login(){
        const {email, password} = this.state
        // console.log(email, password)
        axios.post('/api/finduser', {email, password}).then( response => {
            this.setState({user: response.data})

            console.log(response.data)
        })
    }
    render(){
        return(
            <div className="login-container">
                <div className="user-input">
                    <p className='user-name'>Email</p>
                
                    <input onChange={ (e) => this.setState({email: e.target.value})}/>
                    <p className='user-name'>Password</p>
                    <input onChange={ (e) => this.setState({password: e.target.value})}/>
                    <Link to="/profile"><button onClick={this.login.bind(this)} className='login-submit'>Login</button></Link>
                </div>


            </div>
        )
    }
}
export default Login