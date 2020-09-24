import React, {Component, useState} from 'react';
import Card from '../../components/UI/Card';
import './style.css';

/**
* @author
* @function ContactUs
**/

const ContactUs = (props) => {
  console.log(props);

  return(
    <div style={props.style}>
    
     <Card style={{textAlign:'center'}, {padding:"10px"}, {marginBottom:'20px'}}> 

     <div className="ImageContact">
                    <img src={require("../../Data/Desk14.jpeg")} alt="Desk image" />
        </div></Card>
        <Card style={{textAlign:'center'}}>
          <h2>
            You can Email me @ <i>amykamo.bx@gmail.com</i> 
          </h2>
     </Card>
     
     
      </div>
   )

 }

export default ContactUs