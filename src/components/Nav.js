import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink as Link}from 'react-router-dom'
// import { Button } from 'react-bootstrap';

export default function Nav() {
    return (

       <nav className='nav-main'>
        
        <div>
            <h2 style={{color:'white'}}>Birhan

            </h2>
            <ul  className='nav-bar'>
                {/* <li className='link' ><Link to={{pathname:"/"}} activeClassName="active">Home </Link></li> */}
                <li className='link' ><Link to={{pathname:"/"}}activeClassName="active">About </Link></li>
                <li className='link' ><Link to={{pathname:"/portfolio"}}activeClassName="active">portfolio </Link></li>
                <li className='link' ><Link to={{pathname:"/contact"}}activeClassName="active">contact </Link></li>
                <li className='link' ><Link to={{pathname:"/resume"}}activeClassName="active">resume </Link></li>
             
                
            </ul>
            {/* <div>
            <h2 style={{color:'white'}}>Birhan </h2>

        </div> */}
        </div>
        <br/>
       
       </nav>
    )


}