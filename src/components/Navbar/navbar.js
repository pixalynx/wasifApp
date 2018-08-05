import React, { Component } from 'react';
import './navbar.css';



class Navbar extends Component {  

  constructor(){
    super();    
  }

  

  render() {   

    return (
         
      <div className="nav">
        <div> 
         <h3 style={{margin:0}}>{this.props.logo}</h3>
        </div>
      </div>
    );
  }
}

export default Navbar;

