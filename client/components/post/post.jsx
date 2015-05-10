'use strict';
var React = require('react');
var Router = require('react-router');
var request= require('superagent');
var AddPost = require('./_add_post.jsx');

var Link = Router.Link,
    Route = Router.Route;

var HOST = 'localhost';//process.env.HOST;
var PORT = '4000';//process.env.PORT;
var BASE_URL = `http://${HOST}:${PORT}`;

module.exports = React.createClass({
  getInitialState() {
    return {
      posts: []
    }
  },

  componentDidMount() {
    request.get('/post/all').end((err, res) => {
      this.setState({posts: res.body});
    });
  },

  render() {
    return (
      <div id="post">
        <h1>{this.props.params.datas}</h1>
        <ul>
          {
            this.state.posts.map(function(data) {
              return <li>{data.code}</li>
            })
          }
        </ul>
        <AddPost/>
      </div>
    );
  }
});
