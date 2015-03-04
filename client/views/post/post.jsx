var React = require('react');
var Router = require('react-router');

var Link = Router.Link,
    State = Router.State,
    Navigation = Router.Navigation,
    RouteHandler = Router.RouteHandler,
    DefaultRoute = Router.DefaultRoute;

module.exports = React.createClass({
    mixins: [Navigation],

    toIndex: function() {
        this.transitionTo('/');
    },

    render: function(){
      return (
      <div>
      <div onClick={this.toIndex}>Back to Index</div>
      <h2> Post Page</h2>
      </div>
      );

    }
});
