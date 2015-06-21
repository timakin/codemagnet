import React  from 'react';
import Router from 'react-router';

const routes = require('./routes')();
const initialData = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler params={{datas: initialData}} />, document.getElementById("app"));
});
