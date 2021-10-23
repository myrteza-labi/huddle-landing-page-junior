import React from 'react'; 
import './HuddleApp.css'; 
import Logo from './Logo'; 
import MainImg from './MainImg'; 
import TextPresentation from './TextPresentation'; 
import Button from './Button'; 
import Icon from './Icon'; 
import Footer from './Footer'

function HuddleApp(props){
    return(
        <div className="HuddleApp" >

            <div className="firstPart" >
            <Logo/>
            <MainImg/>
            </div>

            <div className="secondPart" >
                <TextPresentation/>
                <Button/>
                <Footer/>
            </div>
            
        </div>
    )
}

export default HuddleApp; 