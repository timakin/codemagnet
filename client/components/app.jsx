'use strict';
var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Header = require('./header/header.jsx')
;

var App = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <h1>CodeMagnet</h1>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
