import React from 'react';
import {Route, DefaultRoute} from 'react-router';

import App      from './components/app.jsx';
import Post     from './components/post/post.jsx';
import Register from './components/auth/register.jsx';
import Home     from './components/home/home.js';

const Routes = () => {
  return (
    <Route name="app" path="/" handler={App}>
      <Route name="post" handler={Post} />
      <Route name="register" handler={Register} />
      <DefaultRoute handler={Home} />
    </Route>
  );
};

export default Routes;
