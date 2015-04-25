var React = require('react');
var Router = require('react-router');
var Button = require('react-button');
var SignupForm = require('./_signup_form.jsx');

var Link = Router.Link,
    Route = Router.Route;

module.exports  = React.createClass({
    render: function(){

        return (
          <div id="home">
            <h1>Register</h1>
            <SignupForm />
          </div>
        );

    }
});
