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
            <a href="https://amy-bcx.github.io/react-blog/">Home</a>
            <a href="https://amy-bcx.github.io/react-blog/about-us">About Me</a>
            <a href="https://amy-bcx.github.io/react-blog/contact-us">Contact Me</a>
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