import React from 'react';
import './nav.css'
import {Link} from 'react-router-dom'


export default function Nav () {

    return (
        <div className="nav-container">
             <div className="logo"><Link className="link"to="/">filmable</Link></div>
             <div className='login'><Link className='link'to="/login">login</Link></div>
              <div className='signup'><Link className='link'to="/signup">sign up</Link></div>
             
        </div>

    )

}