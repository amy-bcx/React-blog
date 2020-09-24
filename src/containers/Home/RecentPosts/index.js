import React, {Component, useState} from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/


const RecentPosts = (props) => {

    const [readMore,setReadMore]=useState(false);
    const extraContent=<Card  style={{marginBottom:'20px'}}>
        
        <p className="extra-content" >
        Indeed, many task with one sole goal: becoming a Blockchain Developper.
        This is the result of a task: a blog.
        In this blog you will find several articles in French as well as in English and I hope in the future in Japanese as well.
      </p>
    
        </Card>

    const extraContent2=<Card  style={{marginBottom:'20px'}}>
        
    <p className="extra-content2" >
    In this blog, I'll try to explain how from an unexperimented person it can be possible to aim for becomaing a Blockchain Dev based on my personnal experience.
  </p>

    </Card>
    
     
const linkName=readMore?'Read Less << ':'Read More >> '
return (
    <div style={props.style}>
    <Card style={{marginBottom:'20px'}} className="App">
         
      <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}} style={{textAlign:'center'}}>
          <h2>
          <Card>
        <div className="postImageWrapper">
        <img src={require("../../../blogPostimages/Desk0.jpeg")} alt="Desk images"/>
        </div>
            
            <span>Main Article</span>
            <h2>Welcome to my very first blog</h2>
            <h5>It's my pleasure and honour to show you my first personnal blog.</h5>
            <h5>You may wonder what the theme is, well, <i>Blockchain!</i></h5>
            <span><p>As a member of the <i>Blockchain Dev Quad 6</i> we are given tasks to fullfill...</p></span>
            <h6>{linkName}</h6>
            

            
            
            
          </Card>
          </h2></a>
          
      {readMore && extraContent}
    </Card>
    <Card style={{marginBottom:'20px'}} className="App">
         
      <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}} style={{textAlign:'center'}}>
          <h2><Card>
        <div className="postImageWrapper">
                    <img src={require("../../../blogPostimages/Desk2.jpeg")} alt="Desk images"/>
        </div>

        <span>Blockchain Le Beaba</span>
            <h2>My Publish0x Articles </h2>
            <h3>Feel free to check-out my articles on Publish0x and to <i>tip</i>.</h3>
            <span><p>So far there's 3 articles explaining simply what Blockchain is, who is it's founder, and it's utility.</p></span>
            <h6>{linkName}</h6>
          </Card></h2></a>
          
      {readMore && extraContent2}
    </Card>
    </div>
  );
  

 }

 




export default RecentPosts