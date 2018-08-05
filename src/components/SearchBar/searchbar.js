import React, { Component } from 'react';
import './searchbar.css';
import SearchbarResults from '../SearchResults/searchResults';



class SearchBar extends Component {  

  constructor(){
    super();
    this.state ={
      people : ''
    }    
       
  }

  

  render() {   

    return (
         
      <div className="container">
        <div> 
        <label for="search_bar">Search</label>
        <input className="search_bar"
        name="search_bar"
        type="search"
        placeholder={this.props.searchTerm} 
        onChange={this.props.onChange}          
        />       
             
        {
          
          this.props.searchObject.map(person =>
           
              <div key={person.id}>
              <SearchbarResults title={person.name} desc={person.email}/>
              </div> 
          
          )
        }
          
        </div>
      </div>
    );
  }
}

export default SearchBar;