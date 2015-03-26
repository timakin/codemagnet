'use strict';
var React = require('react');
var Router = require('react-router');
var superagent = require('superagent');

var Link = Router.Link,
    Route = Router.Route;

var HOST = 'localhost';//process.env.HOST;
var PORT = '4000';//process.env.PORT;
var BASE_URL = `http://${HOST}:${PORT}`;

module.exports = React.createClass({
  getDefaultProps: function(){
    return {
      title: "PostList",
      source: '/post/all'
    };
  },

  componentWillMount: function() {
    this.setState({yo: "yotest"});
  },

  render: function(){
    console.log('==========');
    console.log(this.props);
    console.log('==========');
    return (
      <div id="post">
        <h1>{this.props.title}</h1>
        <p>{this.state.yo}</p>
      </div>
    );
  }
});
