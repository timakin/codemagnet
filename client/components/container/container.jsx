var React = require('react');

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
