import React from 'react';
import {Route, DefaultRoute} from 'react-router';

import App      from './components/app';
import Post     from './components/post/post';
import Code     from './components/code/code';
import Register from './components/auth/register';
import Home     from './components/home/home';

module.exports = function() {
  return (
    <Route name="app" path="/" handler={App}>
      <Route name="post" handler={Post} />
      <Route name="code" handler={Code} />
      <Route name="register" handler={Register} />
      <DefaultRoute handler={Home} />
    </Route>
  );
};
