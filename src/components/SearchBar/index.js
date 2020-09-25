import React, { Component, useState, useEffect } from 'react';
import './style.css';
import Information from './info-json.js';
import reactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Card from '../UI/Card';
import{NavLink}from 'react-router-dom';
import { Transition, animated, interpolate } from 'react-spring/renderprops';




/**
* @author
* @function SearchBar

**/

class SearchBar extends React.Component {
    
    constructor() {
        
        super();
        this.state = {
              search:null,
              };
         }
     
  
    searchSpace=(event)=>{
      let keyword = event.target.value;
      this.setState({search:keyword})
    }
   
    
      
    render() {
              
      const searchClass = this.searchSpace ? 'searchInput active' : 'searchInput';     
         const items = Information.filter((data)=>{
            if(this.state.search == null)
                return null
            else if(data.blogTitle.toLowerCase().includes(this.state.search.toLowerCase()) || data.postedOn.toLowerCase().includes(this.state.search.toLowerCase()) || data.author.toLowerCase().includes(this.state.search.toLowerCase())){
                return data
            }
          }).map(data=>{
            return(
            <div className="inBar">
              <ul>
                <li ><NavLink key={data.id} to={`/post/${data.slug}`}><span >{data.blogTitle}</span></NavLink></li>
                <li><span >{data.postedOn}</span></li>
                <li><span >{data.author}</span></li>  
              </ul>
            </div>
            )
          })
      
          return (
            <div className="search" style={{position: 'relative', transition: 'width 0.3s ease-in-out'} }>
              
            <input type="text" placeholder="Search" onChange={(e)=>this.searchSpace(e)} />
            
            <div ><img onClick={(e)=>this.searchSpace(e)} className="searchIcon" src={require('../../assets/icons/search.png')} placeholder="Search" alt="Search"/></div>
            
            <Card className="searchCard" >
            <Transition
              
              items={items} keys={item => item.key}
              from={{ transform: 'translate3d(0,-40px,0)' }}
              enter={{ transform: 'translate3d(0,0px,0)' }}
              leave={{ transform: 'translate3d(0,-40px,0)' }}>
             {item => props => <div style={props}>{items}</div>}
            
            </Transition>
              </Card>
            
            </div>
          );
          
        }
      }

export default SearchBar
