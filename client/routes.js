var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    App  = require('./components/app.jsx'),
    Post = require('./components/views/post/post.jsx'),
    Home = require('./components/views/home/home.jsx')
;

module.exports = function() {
  return (
    <Route name="app" path="/" handler={App}>
      <Route name="post" handler={Post} />
      <DefaultRoute handler={Home} />
    </Route>
  );
};