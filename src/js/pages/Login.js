import React from 'react';
import Home from './Home.js';
import Users from './Users.js';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the login page</h1>
        <Router history={hashHistory}>
          <Route path="/" component={Home}/>
          <Route path="/users" component={Users}/>
        </Router>
      </div>
    );
  }
}
