var React = require('react');
var Router = require('react-router');

var Route = Router.Route,
    NotFoundRoute = Router.NotFoundRoute,
    DefaultRoute = Router.DefaultRoute,
    Link = Router.Link,
    Navigation = Router.Navigation,
    RouteHandler = Router.RouteHandler;

module.exports  = React.createClass({
  mixins: [Navigation],

    toIndex: function(){
      this.transitionTo('/');
    },

    toPost: function(){
      this.transitionTo('post');
    },

  render: function(){
    return (
      <div id="header">
        <h1>header</h1>
        <div onClick={this.toIndex}>Index</div>
        <div onClick={this.toPost}>Post</div>
        <p>-----------------------------------</p>
      </div>
    );

  }
});
