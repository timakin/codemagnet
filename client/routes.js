var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    App  = require('./components/app.jsx'),
    Post = require('./components/post/post.jsx'),
    Register = require('./components/auth/register.jsx'),
    Home = require('./components/home/home.es6')
;

module.exports = function() {
  return (
    <Route name="app" path="/" handler={App}>
      <Route name="post" handler={Post} />
      <Route name="register" handler={Register} />
      <DefaultRoute handler={Home} />
    </Route>
  );
};
