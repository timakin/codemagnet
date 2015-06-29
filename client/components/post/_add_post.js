'use strict';

import React from 'react';
import {Navigation} from 'react-router';
import request from 'superagent';
import CodeStore from '../../stores/CodeStore';

const AddPostForm = React.createClass({
  mixins: [Navigation],

  getDefaultProps() {
    return {
      action: '/post/add',
      method: 'POST'
    }
  },

  getInitialState() {
    return CodeStore.getState();
  },

  handleCodeChange(e) {
    this.setState({code: e.target.value});
  },

  handleDescChange(e) {
    this.setState({description: e.target.value});
  },

  handleSectionChange(e) {
    this.setState({section: e.target.value});
  },

  _handleSubmit(e) {
    var self = this;
    e.preventDefault();
    request
        .post(this.props.action)
        .send({
          code: this.state.code,
          description: this.state.description,
          section: this.state.section
        })
        .end(function(err, res){
          self.transitionTo('/post');
          self.setState({code: '', description: '', section: ''});
        });
  },

  render() {
    return (
      <div>
        <form action={this.props.action} method={this.props.method} onSubmit={this._handleSubmit}>
          <input type="text" value={this.state.code} name="code" placeholder="Code" onChange={this.handleCodeChange} /><br/>
          <input type="text" value={this.state.description} name="description" placeholder="Description" onChange={this.handleDescChange} /><br/>
          <input type="text" value={this.state.section} name="section" placeholder="Section" onChange={this.handleSectionChange} /><br/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
});

export default AddPostForm;
