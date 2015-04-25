var React = require('react');
var Router = require('react-router');
var Link = Router.Link,
    Route = Router.Route;

module.exports = React.createClass({
  getInitialState: function() {
    return {email: '', password: ''}
  },
  handleNameChange: function(e) {
     this.setState({name: e.target.value});
  },
  handleEmailChange: function(e) {
     this.setState({email: e.target.value});
  },
  handlePasswordChange: function(e) {
     this.setState({password: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
  },
  handleLogin: function() {
    console.log("Name: " + this.state.name);
    console.log("EMail: " + this.state.email);
    console.log("Password: " + this.state.password);
  },
  render : function() {
    return (
      <form>
        <input type="text" name="name" placeholder="Name" onChange={this.handleNameChange} />
        <input type="text" name="email" placeholder="Email" onChange={this.handleEmailChange} />
        <input type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange}/>
        <button type="button" onClick={this.handleLogin}>Login</button>
      </form>
    );
  }
});
