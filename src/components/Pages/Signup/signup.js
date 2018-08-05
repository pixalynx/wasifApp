import React, { Component } from 'react';

import '../page.css';
import axios from 'axios';
import qs from 'qs';



class Login extends Component {  

  constructor(){
    super();

    this.state = {
      email : "",
      name :"",
      password : ""     
    };
  }

  handleLogin = async event => {
     axios.post('http://localhost:5000/api/users/register',qs.stringify({'name':this.state.name,'email':this.state.email,'password':this.state.password}))
    .then(response => {
      console.log(response.data.result);    
           
    })
    .catch(err => {
      console.log(err);
    })
  };


  handleAuth = async event => {
    axios.get('http://localhost:5000/api/users/current')
      .then(response => {
        console.log(response.data)
      })
      .catch(err => { 
        console.log(err)
      });
  }

  nameChange = event => {
      this.setState({name:event.target.value});      
  }

  emailChange = event => {
    this.setState({email : event.target.value});
    console.log(this.state.email);
  }

  passwordChange = event => {
    this.setState({password : event.target.value});
    console.log(this.state.password);
  }

  render() {   

    return (
         
      <div className="Container">
       <h1 className="login-header">Register</h1>
       <p className="login-subheader">Please enter a valid username and password</p>
       <input className="login" type="text" name="email" placeholder="Enter email" onChange={this.emailChange} value={this.state.email}></input>
       <br/>
       <input className="login" type="text" name="name" placeholder="Enter name" onChange={this.nameChange} value={this.state.name}></input>
       <br/>
       <input className="login" type="password" name="password" placeholder="Enter password" onChange={this.passwordChange} value={this.state.password}></input> 
       <br/>
       
       <button className="login" type="submit" onClick={this.handleLogin}>Signup</button>
       <br/>
       {/* <button className="login" type="submit" onClick={this.handleAuth}>Auth</button> */}
       <p className="login-subheader">Already have an account? <a href="/login">Login here</a></p>
      </div>
    );
  }
}

export default Login;

