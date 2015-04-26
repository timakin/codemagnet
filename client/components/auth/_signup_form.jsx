'use strict';

var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    Route = Router.Route,
    request = require('superagent');

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: '', email: '', password: ''};
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    request
      .post(this.props.action)
      .send({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
      .end(function(err, res){
        this.setState = ({name: '', email: '', password: ''});
      });
  }

  render() {
    return (
      <form action={this.props.action} method={this.props.method} onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={this.handleNameChange} />
        <input type="text" name="email" placeholder="Email" onChange={this.handleEmailChange} />
        <input type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange}/>
        <button>Submit</button>
      </form>
    );
  }
}

SignupForm.propTypes = {
  action: React.PropTypes.string.isRequired,
  method: React.PropTypes.string,
}

SignupForm.defaultProps = {
  action: '/auth/signup',
  method: 'POST',
}

module.exports = SignupForm;
