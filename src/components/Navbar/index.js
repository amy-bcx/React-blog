import React, {useState, useEffect, Component} from 'react';
import ReactDOM from "react-dom";
import{NavLink}from 'react-router-dom';
import './style.css';
import SearchBar from '../SearchBar/index.js';
import Information from '../SearchBar/info-json';
import { render } from '@testing-library/react';
import Sidebar from '../Sidebar';

/**
* @author
* @function Navbar
**/

const Navbar=(props)=>{

 
    const [search,setSearch]=useState(false);

    const submitSearch = (e) => {
        e.preventDefault();
        alert('Searched');

    }

    const openSearch = () => {
        setSearch(true);
    }


    const searchClass = search ? 'searchInput active' : 'searchInput';

    
  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-us">About Us</NavLink></li>
            <li><NavLink to="/post">Posts</NavLink></li>
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
         </ul>
         <div className="search">
             <form onSubmit={submitSearch}>
                <SearchBar img onClick={openSearch} input type="text" className={searchClass} placeholder="Search"  style={{transition: 'width 0.3s ease-in', cursor: 'pointer'}}/>  
            </form>
             </div>
             
             
         </div>
   )
   
                
 }

export default Navbar