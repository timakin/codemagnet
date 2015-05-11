'use strict';

var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    Route = Router.Route,
    request = require('superagent');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      action: '/auth/signup/local',
      method: 'POST'
    }
  },
  getInitialState: function() {
    return {username: '', password: ''}
  },
  handleUsernameChange: function(e) {
    this.setState({username: e.target.value});
  },
  handlePasswordChange: function(e) {
    this.setState({password: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    console.log(this.state);
    request
        .post(this.props.action)
        .send({
          username: this.state.username,
          password: this.state.password
        })
        .end(function(err, res){
          console.log("Request was sent.");
        });
  },

  render : function() {
    return (
        <form action={this.props.action} method={this.props.method} onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="Username" onChange={this.handleUsernameChange} />
          <input type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange}/>
          <button>Submit</button>
        </form>
    );
  }
});
