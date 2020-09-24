import React from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="http://localhost:3000/">Home</a>
            <a href="http://localhost:3000/about-us">About Us</a>
            <a href="http://localhost:3000/contact-us">Contact Us</a>
        </nav>
        <div>
            
            <a href="https://www.linkedin.com/in/bontoux-amandine-243b99195/"><img className="ContactIcon" src={require('../../assets/icons/linkedin.png')} alt="SocialMedia"/></a>
            <a href="https://www.instagram.com/amybcx.amadev/?hl=en"><img className="ContactIcon" src={require('../../assets/icons/instagram.png')} alt="SocialMedia"/></a>
            <a href=""><img className="ContactIcon" src={require('../../assets/icons/facebook.png')} alt="SocialMedia"/></a>


        </div>
    </header>
   )

 }

export default Header