import React from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/UI/Card'
import './style.css';

/**
* @author
* @function AboutUs
**/

const AboutUs = (props) => {
  console.log(props);
  return(
    <div style={props.style}>
    
     <Card style={{textAlign:'center'}, {padding:"10px"}, {marginBottom:'20px'}}> 

     <div className="ImageContact">
                    <img src={require("../../Data/Desk13.jpeg")} alt="Desk image" />
        </div></Card>
        <Card style={{textAlign:'center'}}>
          <h2>
            <i>About Us </i> 
          </h2>
        </Card>
        <Card>Description about our Blockchain Dev6 Project</Card>
     
     
      </div>
   )
  }

export default AboutUs