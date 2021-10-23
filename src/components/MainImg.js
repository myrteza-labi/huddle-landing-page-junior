import React from 'react'; 
import './MainImg.css'; 
import image from '../images/illustration-mockups.svg'; 

function MainImg(props){
    return(
        <div className="MainImg" >
            <img className="imgMainImg" src={image} alt="representation du responsive design sur ordinateure t tablette"/>
        </div>
    )
}

export default MainImg; 