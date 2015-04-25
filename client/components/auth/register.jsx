var React = require('react');
var Router = require('react-router');

var Link = Router.Link,
    Route = Router.Route;

module.exports  = React.createClass({
    render: function(){

        return (
          <div id="home">
            <h1>Register</h1>
            <form action="/auth/signup" method="POST">
              <input type="text" name="name" class='form-control' placeholder="name" />
              <input type="text" name="email" class='form-control' placeholder="email" />
              <input type='password' name='password' class='form-control' placeholder="password" />
              <button class='btn btn-lg btn-primary btn-block' type='submit' />
            </form>
          </div>
        );

    }
});
