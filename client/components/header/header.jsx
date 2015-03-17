var React = require('react');
var Router = require('react-router');

var Route = Router.Route,
    Link = Router.Link,
    RouteHandler = Router.RouteHandler;

module.exports  = React.createClass({
  render: function(){
    return (
      <div id="header">
        <h1>header</h1>
      </div>
    );

  }
});
