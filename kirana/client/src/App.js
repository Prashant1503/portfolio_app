import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,Form,Button  } from 'react-bootstrap';

import {Route,Switch, } from 'react-router-dom';
import SignUp from './containers/signup/SignUp';
import SignIn from './containers/signin/signin';
import Home from './containers/Home/Home';
import Layout from './components/Layout';


export default class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <Layout />
       */}
          <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>
      
          </Switch>
       
     
       
      </div>
    )
  }
}
