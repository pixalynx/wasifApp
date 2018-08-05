import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Login from './components/Pages/Login/login';
import Signup from './components/Pages/Signup/signup';
import Dashboard from './components/Pages/Dashboard/dashboard';
import Search from './components/Pages/Search/search';



class App extends Component {  

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
      <BrowserRouter>
      <Switch>
      <Route path="/login" component={Login} exact />      
      <Route path="/signup" component={Signup} exact />    
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/search" component={Search} exact />
      </Switch>
      </BrowserRouter>         
      
    );
  }
}

export default App;

