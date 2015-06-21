'use strict';

import React         from 'react';
import {Link, Route} from 'react-router';
import request     from 'superagent';
import AddPost     from './_add_post';

const HOST     = 'localhost';//process.env.HOST;
const PORT     = '4000';//process.env.PORT;
const BASE_URL = `http://${HOST}:${PORT}`;

const Post = React.createClass({
  getInitialState: function() {
    return {
      posts: []
    }
  },

  componentDidMount: function() {
    request.get('/post/all').end((err, res) => {
      console.log("yoyo");
      this.setState({posts: res.body});
    });
  },

  render: function() {
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

export default Post;
