var React = require('react');
var Router = require('react-router');

var Route = Router.Route,
    NotFoundRoute = Router.NotFoundRoute,
    DefaultRoute = Router.DefaultRoute,
    Link = Router.Link,
    RouteHandler = Router.RouteHandler;

var Container = require('./components/container.jsx');

var Home = require('./views/home.jsx');

var routes = (
  <Route name="app" path="/" handler={Container}>
    <Route name="home" handler={Home} />
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.body);
});
