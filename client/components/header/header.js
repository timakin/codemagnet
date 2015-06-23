'use strict';

import React from 'react';
import {Link, Route, RouteHandler} from 'react-router';
import request from 'superagent';

const styles = {
  color: 'red',
  backgroundColor: 'white'
}

const Header = React.createClass({
  render(){
    return (
      <div id="header" style={styles}>
        <h1>header</h1>
        <Link to="/">Go Home</Link> | <Link to="/post">Go Post</Link>
      </div>
    );

  }
});

export default Header;
