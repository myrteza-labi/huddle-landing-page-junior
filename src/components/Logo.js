import React from 'react'; 
import './Logo.css';
import logo from '../images/logo.svg' ; 

function Logo(props){
    return(
        <div className="Logo" >
            <img className="imglogo" src={logo} alt="logo Huddle"/>
        </div>
    )
}

export default Logo; 