var React = require('react');
var Router = require('react-router');
var Button = require('react-button');
var SignupForm = require('./_signup_form.jsx');

var Link = Router.Link,
    Route = Router.Route;

class Register extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="home">
        <h1>Register</h1>
        <SignupForm />
      </div>
    );
  }
}

module.exports = Register;
