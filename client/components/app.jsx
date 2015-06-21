'use strict';

import React from 'react';
import {RouteHandler} from 'react-router';

import Header from './header/header';
import Footer from './footer/footer';

const App = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <h1>CodeMagnet</h1>
        <RouteHandler {...this.props} />
        <Footer />
      </div>
    );
  }
});

export default App;
