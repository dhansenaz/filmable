import React from 'react';
import './nav.css'
import {Link} from 'react-router-dom'


export default function Nav () {

    return (
        <div className="nav-container">
             <div className="logo"><Link className="link"to="/">filmable</Link></div>
                <div className='menu'>
                    menu
                </div>
        </div>

    )

}