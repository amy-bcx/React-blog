import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';


/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
      <React.Fragment>
          <div className="container">
        {props.children}
        <Sidebar />
    </div>
    <div> 
        <footer className="footer">
          <nav className="footerMenu">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amykamo.bx@gmail.com&su=SUBJECT&body=Hi AmanDev"><img className="ContactIcon" src={require('../../assets/icons/gmail.png')} alt="SocialMedia"/></a>  To Contact Me 
        <a href="https://www.publish0x.com/blockchain-le-beaba"><img className="ContactIcon" src={require('../../assets/icons/bitcoin.png')}></img></a> To read more articles
        </nav>
        <div>
        <p>© 2020 by AmaDev alias Amy-bcx</p>
          </div>
        </footer>
    </div>
      </React.Fragment>

   )

 }

export default Layout 