import React, {Component} from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import{BrowserRouter as Router, Route} from 'react-router-dom';
import ContactUs from './containers/ContactUs';
import Post from './containers/Post';
import AboutUs from './containers/AboutUs';
import Posts from './containers/Posts';
import SearchBar from './components/SearchBar/index';
import Information from './components/SearchBar/info-json';
import Layout from './components/Layout';
import reactDOM from 'react-dom';

class App extends Component  {
  render(){
  return (

    <Router>
      <div className="App">
      <Header />
     <Hero />
     
     <Route path="/" exact component={Home}/>
     <Route path="/contact-us" component={ContactUs}/>
     <Route path="/post/:slug" component={Post}/>
     <Route path="/post" component={Posts}/>
     <Route path="/about-us" component={AboutUs}/>
     <Route path="/search" exact component={SearchBar}/>
       
      </div>
    </Router>
    
  );
}}

export default App;
