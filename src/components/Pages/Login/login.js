import React, { Component } from 'react';

import '../page.css';
import axios from 'axios';
import qs from 'qs';



class Login extends Component {  

  constructor(){
    super();

    this.state = {
      email : "",
      password : "",
      token : ""
    };
  }

  handleLogin = async event => {
     axios.post('http://localhost:5000/api/users/login',qs.stringify({'email':this.state.email,'password':this.state.password}))
    .then(response => {
      console.log(response.data.result);
      this.setState({token : response.data.result.token});
      console.log(this.state.token);
      axios.defaults.headers.common['Authorization'] = this.state.token;      
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
       <h1 className="login-header">Welcome !</h1>
       <p className="login-subheader">Sign in by entering the information below</p>
       <input className="login" type="text" name="email" placeholder="Enter email" onChange={this.emailChange} value={this.state.email}></input>
       <br/>
       <input className="login" type="password" name="password" placeholder="Enter password" onChange={this.passwordChange} value={this.state.password}></input> 
       <br/>
       <button className="login" type="submit" onClick={this.handleLogin}>Continue</button>
       <br/>
       <button className="login" type="submit" onClick={this.handleAuth}>Auth</button>
       <p className="login-subheader">Don't have an account? <a href="/signup">Register here</a></p>
      </div>
    );
  }
}

export default Login;

