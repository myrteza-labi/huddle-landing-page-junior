import React from 'react'; 
import './Footer.css'; 
import Icon from './Icon'; 
import facebook from '../images/icon-facebook.svg'; 
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'; 


function Footer(props){
    return(
        <footer className="Footer" >
            <Icon src={facebook} alt="logo facebook "/>
            <Icon src={twitter} alt="logo twitter"/>
            <Icon src={instagram} alt="logo instagram"/>
        </footer>
    )
}

export default Footer; 