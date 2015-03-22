'use strict';
var React = require('react');
var Router = require('react-router');
var superagent = require('superagent');

var Link = Router.Link,
    Route = Router.Route;

module.exports = React.createClass({
  getDefaultProps: function(){
    return {
      title: "PostList",
      source: "/post/all"
    };
  },

  componentWillMount: function() {
    console.log("Yo");
      this.setState({posts: "yo"}, function(){
        console.log("yeah");
      });
  },

  render: function(){
    return (
      <div id="post">
        <h1>{this.props.title}</h1>
        <p>{this.state.posts}</p>
      </div>
    );
  }
});
