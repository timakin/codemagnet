var React = require('react');
var Router = require('react-router');

var Link = Router.Link,
    Route = Router.Route;

module.exports  = React.createClass({
    render: function(){

        return (
          <div id="home">
            <h1>this is home</h1>
            <h1>Go to <Link to="/post">Post</Link></h1>
          </div>
        );

    }
});
