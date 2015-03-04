var React = require('react');
var Router = require('react-router');

var Route = Router.Route,
    Navigation = Router.Navigation;

module.exports = React.createClass({
  mixins: [Navigation],

  toPost: function(){
    this.transitionTo('post');
  },

  render: function(){

    return (
      <div>
        <h2> hello, world!</h2>
        <div onClick={this.toPost}>to page</div>
      </div>
    );

  }
});
