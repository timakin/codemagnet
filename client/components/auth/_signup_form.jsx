'use strict';

import React from 'react';
import {Navigation} from 'react-router';
import request from 'superagent';

const signupForm = React.createClass({
  mixins: [Navigation],

  getDefaultProps() {
    return {
      action: '/auth/signup/local',
      method: 'POST'
    }
  },
  getInitialState() {
    return {username: '', password: ''}
  },
  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  },
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  },
  handleSubmit(e) {
    e.preventDefault();
    var self = this;
    request
        .post(this.props.action)
        .send({
          username: this.state.username,
          password: this.state.password
        })
        .end(function(err, res){
          if (!err) {
            self.transitionTo('/');
          }
        });
  },

  render() {
    return (
        <form action={this.props.action} method={this.props.method} onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="Username" onChange={this.handleUsernameChange} />
          <input type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange}/>
          <button>Submit</button>
        </form>
    );
  }
});

export default signupForm;
