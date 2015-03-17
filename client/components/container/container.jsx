var React = require('react');
var Router = require('react-router');

var Link = Router.Link,
    Route = Router.Route,
    RouteHandler = Router.RouteHandler;

var Header = require('../header/header.jsx');
var Footer = require('../footer/footer.jsx');

module.exports  = React.createClass({
  render: function(){

    return (
      <div id="container">
        <Header />
        <RouteHandler/>
        <Footer />
      </div>
    );

  }
});
