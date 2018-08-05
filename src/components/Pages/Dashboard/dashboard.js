import React, { Component } from 'react';

import '../page.css';
import axios from 'axios';
import qs from 'qs';
import navbar from '../../Navbar/navbar';
import Navbar from '../../Navbar/navbar';



class Dashboard extends Component {  

  constructor(){
    super();

    this.state = {
      email : "",
      password : "",
      token : ""
    };
  }

  

  render() {   

    return (
         
      <div className="Main">
       <Navbar logo="pixalynx"/>
      </div>
    );
  }
}

export default Dashboard;

