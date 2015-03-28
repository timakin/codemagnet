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
      yo: null
    }
  },

  componentDidMount() {
    superagent.get('/post/all').end((err, res) => {
      var firstCode = res.body[0].code;
      this.setState({posts: res.body, typeofpost: typeof res.body});
    });
  },

  render() {
    console.log('==========');
    console.log(this.props.params.datas);
    console.log(this.state);
    console.log('==========');
    return (
      <div id="post">
        <h1>{this.props.params.datas}</h1>
        <p>{this.state.posts}</p>
        <p>{this.state.typeofpost}</p>
      </div>
    );
  }
});
