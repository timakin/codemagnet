import React  from 'react';
import Router from 'react-router';

const routes = require('./routes')();

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler/>, document.getElementById("app"));
});
