import React, { Component } from 'react';
import './searchResults.css';



class SearchResults extends Component {  

  constructor(){
    super();   
     
       
  }

  

  render() {   

    return (
         
      <div className="container">
        <div className="searchResults-container"> 
        <div className="searchResults-title">{this.props.title}</div>
        <div className="searchResults-desc">{this.props.desc}</div>                
        </div>
      </div>
    );
  }
}

export default SearchResults;