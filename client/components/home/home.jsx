import React from 'react/addons';
import {Link, Route} from 'react-router';

const Home = React.createClass({
    render() {
        return (
          <div id="home">
            <h1>this is home</h1>
            <h1>Go to <Link to="/post">Post</Link></h1>
            <form action="/auth/login" method="POST">
              <input type="text" name="name" class='form-control' />
              <input type='password' name='password' class='form-control' />
              <button class='btn btn-lg btn-primary btn-block' type='submit' />
            </form>
            <a href="/register">Register</a>
          </div>
        );
    }
});

export default Home;
