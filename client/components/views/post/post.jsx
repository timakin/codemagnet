'use strict';
var React = require('react');
var Router = require('react-router');
var superagent = require('superagent');

var Link = Router.Link,
    Route = Router.Route;

var HOST = 'localhost';//process.env.HOST;
var PORT = '4000';//process.env.PORT;
var BASE_URL = `http://${HOST}:${PORT}`;

module.exports = React.createClass({
  getInitialState() {
    return {
      posts: [],
      yo: ["a", "i"]
    }
  },

  componentDidMount() {
    superagent.get('/post/all').end((err, res) => {
      var firstCode = res.body[0].code;
      this.setState({posts: res.body});
    });
  },

  render() {
    var postList;
    console.log('==========');
    console.log(this.props.params.datas);
    console.log(this.state);
    console.log('==========');
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

      </div>
    );
  }
});
