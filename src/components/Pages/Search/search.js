import React, { Component } from 'react';

import '../page.css';
import axios from 'axios';
import qs from 'qs';
import navbar from '../../Navbar/navbar';
import Navbar from '../../Navbar/navbar';
import SearchBar from '../../SearchBar/searchbar';

const people = [
    
  ]

class Search extends Component {  

  constructor(){
    super();

    this.state = {
      searchValue:"",
      people : []
    };
  }

  onChange = async event => {
   
    this.setState({searchValue : event.target.value});
    console.log(this.state.searchValue);
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        this.setState({people : response.data})
        console.log(this.state.people);
    })
    .catch(err => {
        console.log(err);
    })
  }

  render() {   

    return (
         
      <div className="Main">
       {/* <Navbar logo="pixalynx"/> */}
       <div className="searchContainer">
       <SearchBar searchTerm="Type here to start search"
       onChange={this.onChange}  
       searchObject={this.state.people}         
       />
    </div>
      </div>
    );
  }
}

export default Search;

