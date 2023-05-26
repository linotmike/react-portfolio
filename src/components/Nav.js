import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link}from 'react-router-dom'

export default function Nav() {
    return (

       <nav>
        <div>
            <h2>Birhan </h2>

        </div>
        <div>
            <ul>
                <li><Link to={{pathname:"/"}}>About </Link></li>
                <li><Link to={{pathname:"/portfolio"}}>portfolio </Link></li>
                <li><Link to={{pathname:"/contact"}}>contact </Link></li>
                <li><Link to={{pathname:"/resume"}}>resume </Link></li>
                
            </ul>
        </div>
       </nav>
    )


}