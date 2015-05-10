'use strict';
var React = require('react');
var Router = require('react-router');
var request = require('superagent');

var Link = Router.Link,
    Route = Router.Route;

class AddPost extends React.Component {
  constructor() {
    super();
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  handleCodeChange(e) {
    this.setState({code: e.target.value});
  }

  handleDescChange(e) {
    this.setState({description: e.target.value});
  }

  handleSectionChange(e) {
    this.setState({section: e.target.value});
  }

  _handleSubmit() {
    e.preventDefault();
    console.log(this.state);
    request
        .post(this.props.action)
        .send({
          code: this.state.code,
          description: this.state.description,
          section: this.state.section
        })
        .end(function(err, res){
          console.log("Post request was sent.");
        });
  }

  render() {
    return (
      <div>
        <form action={this.props.action} method={this.props.method} onSubmit={this._handleSubmit}>
          <input type="text" name="code" placeholder="Code" onChange={this.handleCodeChange} /><br/>
          <input type="text" name="description" placeholder="Description" onChange={this.handleDescChange} /><br/>
          <input type="text" name="section" placeholder="Section" onChange={this.handleSectionChange} /><br/>
          <button>Submit</button>
        </form>
      </div>
    )
  }

}

AddPost.defaultProps = {
  action: "/post/add",
  method: "POST"
}

module.exports = AddPost;
